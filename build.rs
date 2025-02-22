use std::collections::hash_map::Keys;
use std::collections::HashMap;
use std::path::PathBuf;

// TODO
// setup openssl certificate
// make db dirs and files
// fetch the front end project repo
// basically installation of the server app

mod openssl {
    use openssl::x509::{
        X509Extension, X509Name, X509NameBuilder, X509NameRef, X509Req, X509ReqBuilder,
    };

    fn prepare_subject_name(nb: &mut X509NameBuilder, cn: &str, dn: &str) {
        _ = nb.append_entry_by_text("CN", cn);
        _ = nb.append_entry_by_text("distinguished_name", dn);
    }

    fn prepare_exts(san: &str, ku: &str, eku: &str) -> X509Extension {
        todo!()
        // let ext = X509Extension::new(None, Some(), "subjectAltName", san);
    }

    pub(super) fn mk_cert() -> X509Req {
        let mut nb = X509NameBuilder::new().unwrap();
        _ = &prepare_subject_name(&mut nb, "momo-build.rs-cn", "momo-build.rs-dn");
        let nref = nb.build();

        let exts = prepare_exts("DNS:localhost", "digitalSignature", "serverAuth");

        let mut builder = X509ReqBuilder::new().unwrap();
        _ = builder.set_subject_name(nref.as_ref());
        // _ = builder.set_pubkey();
        todo!();

        builder.build()
    }

    const REQ: &str = "
    openssl
        req -x509
        -out localhost.crt
        -keyout localhost.key
        -newkey rsa:2048 -nodes -sha256
        -subj '/CN=localhost' -extensions EXT
        -config (printf
            \"[dn]\n
                CN=localhost\n
            [req]\n
                distinguished_name = dn\n
            [EXT]\n
                subjectAltName=DNS:localhost\n
                keyUsage=digitalSignature\n
                extendedKeyUsage=serverAuth\"
        | psub)
    ";
}

// makes the necessary dirs/files for the server persistent databases
mod data {
    use super::{config::InstallConfigs, HashMap, Keys, PathBuf};
    use rusqlite::{params, Connection, Error, Params, Result};
    use std::fs::{self, create_dir, create_dir_all};

    #[derive(Debug)]
    pub(super) struct DataConfigs<'a> {
        dir: PathBuf,
        plugins: Option<Keys<'a, &'a str, HashMap<&'a str, &'a str>>>,
        // ...
    }

    impl<'a> DataConfigs<'a> {
        pub(super) fn from_install_configs(ic: &'a InstallConfigs) -> Self {
            Self {
                dir: ic.data_dir(),
                plugins: ic.plugins_data(),
            }
        }

        fn dir_str(&self) -> String {
            self.dir.as_path().display().to_string()
        }

        pub(super) fn mk_dbs(self) {
            let dir = self.dir_str();
            let res = create_dir_all(dir.clone() + "/main");
            if let Err(e) = res {
                panic!(
                    "Failed to create data directories. Aborting install...\n[ERR] {:?}",
                    e
                );
            }

            self.plugins.unwrap().for_each(|p| {
                _ = create_dir(dir.clone() + "/" + &p.replace(['[', ']'], ""));
            });
        }

        fn mk_dbs_main(&self) {
            let res = fs::File::create_new(self.dir_str() + "/main.db");
            if let Err(e) = res {
                // TODO proper logging
                eprintln!("error creating new 'main.db' database file\n{:?}", e);
            }

            let conn = Connection::open(self.dir_str() + "/main.db").unwrap();

            let res = conn.execute(USERS_TABLE_INIT, []);
            if let Err(e) = res {
                eprintln!("error creating users table in main.db");
            }

            // users table

            if self.plugins.is_none() {
                return;
            }

            let res = conn.execute(PLUGINS_TABLE_INIT, []);
            if let Err(e) = res {
                eprintln!("error creating plugins table in main.db");
            }

            // plugins table

            // since this is created only if user installs the server with some plugins
            // TODO dont forget to add this when user without plugins adds a plugin at some point
        }

        // parses the plugin configs into a string ref that can be inputted in
        // a plugins table entry
        fn parse_plugin(&self) -> &str {
            ""
        }
    }

    const PLUGINS_TABLE_INIT: &str = "create table plugins ()";
    const USERS_TABLE_INIT: &str = "create table users ()";
}

mod config {
    use super::{HashMap, Keys, PathBuf};

    fn is_header(line: &str) -> bool {
        line.starts_with('[') && line.ends_with(']') && !line.contains('=')
    }

    const CONFIGS: &str = include_str!("install.cfg");

    #[derive(Debug)]
    pub(super) struct InstallConfigs {
        main: Option<HashMap<&'static str, &'static str>>,
        plugins: Option<HashMap<&'static str, HashMap<&'static str, &'static str>>>,
    }

    impl InstallConfigs {
        // splits up the config sections into a vec of Lines items
        fn parse_config_file() -> HashMap<&'static str, HashMap<&'static str, &'static str>> {
            // sections headers:
            // start with [
            // end with ]
            // don't contain an '='
            let lines = CONFIGS.lines().filter(|l| !l.is_empty());
            let mut configs: HashMap<&str, HashMap<&str, &str>> = HashMap::with_capacity(7);
            let mut section: (&'static str, HashMap<&'static str, &'static str>) =
                ("", HashMap::new());
            lines.for_each(|line| match is_header(line) {
                true => {
                    if !section.0.is_empty() {
                        eprintln!("configs is not empty");
                        configs.insert(section.0, section.1.drain().collect());
                    }
                    section.0 = line.trim();
                }
                false => {
                    let [k, v] = if let Some((k, v)) = line.split_once('=') {
                        [k.trim(), v.trim()]
                    } else {
                        [line.trim(), "@@@"]
                    };

                    section.1.insert(k, v);
                }
            });
            configs.insert(section.0, section.1);

            configs
        }

        // reads the install.cfg file into hash map of static &str k/v
        // returns self
        pub(super) fn from_config_file() -> Self {
            let mut configs = Self::parse_config_file();
            eprintln!("{:?}", configs);
            Self {
                main: configs.remove("[main]"),
                plugins: if configs.is_empty() {
                    None
                } else {
                    Some(configs)
                },
            }
        }

        pub(super) fn data_dir(&self) -> PathBuf {
            PathBuf::from(
                self.main
                    .as_ref()
                    .unwrap()
                    .get("data_dir")
                    .unwrap_or(&"./data"),
            )
        }

        pub(super) fn plugins_data(&self) -> Option<Keys<&str, HashMap<&str, &str>>> {
            if self.plugins.is_none() {
                return None;
            }
            Some(self.plugins.as_ref().unwrap().keys())
        }

        fn skip_tests(&self) -> bool {
            self.main
                .as_ref()
                .unwrap()
                .get("ignore_test")
                .unwrap_or(&"false")
                .parse()
                .unwrap_or(false)
        }

        fn ignore_non_fatal_build_errors(&self) -> bool {
            self.main
                .as_ref()
                .unwrap()
                .get("ignore_non_fatal_build_errors")
                .unwrap_or(&"false")
                .parse()
                .unwrap_or(false)
        }

        fn no_plugins(&self) -> bool {
            self.main
                .as_ref()
                .unwrap()
                .get("no_plugins")
                .unwrap_or(&"false")
                .parse()
                .unwrap_or(false)
        }

        fn has_plugins(&self) -> bool {
            self.plugins.is_some()
        }
    }
}

// fetches the web front-end repo with the version corresponding to this repo's backend version'
mod fetch {
    use curl::easy::Easy;
    use std::fs::{self, File};
    use std::io::Write;

    const WEB_UI_VERSION: &str = "0.1.0";
    const WEB_UI_URL: &str = concat!("github.com/uraneko/momo-web-ui/tag/", "0.1.0");

    pub(super) fn web_ui() {
        _ = fs::create_dir("web-ui").unwrap();
        let mut repo = Easy::new();
        repo.url(WEB_UI_URL).unwrap();
        repo.write_function(|data| {
            let mut f = File::open("web-ui/frontend.zip").unwrap();
            _ = f.write_all(data);
            Ok(data.len())
        })
        .unwrap();
        repo.perform().unwrap();
    }

    pub(super) fn plugins() {}
}

fn main() {
    return;
    println!("cargo::rerun-if-changed=data/main.db");
    println!("cargo::warning=build script finished running");

    // parse install.cfg config file
    let configs = config::InstallConfigs::from_config_file();
    eprintln!("{:#?}", configs);

    // fetch the front end source code
    fetch::web_ui();
    fetch::plugins();

    // initialize databases
    let dc = data::DataConfigs::from_install_configs(&configs);
    eprintln!("{:#?}", dc);
    dc.mk_dbs();

    // make ssl self signed certificate
    openssl::mk_cert();
}
