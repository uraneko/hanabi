use std::collections::hash_map::Keys;
use std::collections::HashMap;
use std::path::PathBuf;

// TODO
// setup openssl certificate
// make db dirs and files
// fetch the front end project repo
// basically installation of the server app

pub use std::env::set_current_dir;
pub use std::fs::{copy, create_dir, read_dir, read_to_string, write};
pub use std::process::Command;

fn cd(path: impl AsRef<str>) {
    let path = path.as_ref();
    if !path.is_empty() {
        set_current_dir(path).unwrap();
    }
}

fn pwd() {
    panic!(
        "{}",
        String::from_utf8_lossy(&Command::new("pwd").output().unwrap().stdout)
    );
}

fn print<T>(items: T)
where
    T: std::fmt::Debug,
{
    panic!("{:?}", items);
}

// fetches the web front-end repo with the version corresponding to this repo's backend version'
mod fetch {
    use std::fs;

    use git2::Repository as Repo;

    const CORE_URI: &str = "https://github.com/uraneko/momo_web_ui";

    pub(crate) fn core() {
        if std::path::Path::new("app").is_dir() {
            fs::remove_dir_all("app").unwrap();
        }
        fs::create_dir("app").unwrap();

        Repo::clone(CORE_URI, "app/app").unwrap();
    }

    fn repo_from_uri(uri: &str) -> &str {
        uri.rsplit('/').next().unwrap()
    }

    pub(crate) fn plugins(plugins: Vec<String>) {
        if !std::path::Path::new("app/plugins").is_dir() {
            _ = fs::create_dir("app/plugins");
        }
        plugins.into_iter().for_each(|p| {
            let plg = "app/plugins/".to_string() + repo_from_uri(&p);
            if std::path::Path::new("app/plugins").is_dir() {
                _ = fs::remove_dir_all(&plg);
            }
            Repo::clone(&p, plg).unwrap();
        });
    }
}

// TODO call lightning css and rolldown from rust
// dont build anything from js side

// FIXME this implementation assumes unix/cp is installed and accessible to build script
mod build {
    use super::{cd, print, pwd};
    use std::env::set_current_dir;
    use std::fs::{copy, create_dir, read_dir, read_to_string, write};
    use std::process::Command;

    // installs pnpm dependencies and run pnpm b:css to build the plugin components css
    fn lightningcss() {
        Command::new("pnpm").arg("install").output().unwrap();
        Command::new("pnpm").arg("b:css").output().unwrap();
    }

    // copies a plugin's typescript src files into the main app src dir
    // also returns the plugin's exported component function that will be injected in app main.ts
    fn copy_ts(p: &str) -> [String; 2] {
        let dist_dir = "../../app/src/".to_owned() + p;
        Command::new("cp")
            .args(["src/components", "-r", &dist_dir])
            .output()
            .unwrap();
        copy("src/main.ts", dist_dir + "/main.ts").unwrap();

        let data = read_to_string("src/main.ts").unwrap();
        [
            p.to_owned(),
            data.lines()
                .find(|l| l.contains("export async function"))
                .unwrap()
                .split('(')
                .next()
                .unwrap()
                .trim_start_matches("export async function ")
                .to_owned(),
        ]
    }

    fn copy_icons() {
        if !std::path::Path::new("icons").is_dir() {
            return;
        }
        read_dir("icons")
            .unwrap()
            .filter(|e| e.is_ok())
            .map(|e| e.unwrap().file_name())
            .for_each(|e| {
                let icon = e.as_os_str().to_str().unwrap();
                let in_icon = "icons/".to_owned() + icon;
                let out_icon = "../../app/dist/icons/".to_owned() + icon;
                copy(in_icon, out_icon).unwrap();
            })
    }

    pub(crate) fn app_css() {
        // move to app dir
        cd("app/app");
        // substitute local momo lib with gh version
        Command::new("pnpm")
            .args(["remove", "momo_lib"])
            .output()
            .unwrap();
        Command::new("pnpm")
            .args(["add", "github/uraneko/momo_lib"])
            .output()
            .unwrap();

        // install momo_lib pnpm dev dep
        Command::new("pnpm")
            .args(["add", "https://github.com/uraneko/momo_lib", "-D"])
            .output()
            .unwrap();
        // create styles dir
        create_dir("dist/styles/").unwrap();
        // parse css
        lightningcss();
        // move back
        cd("..")
    }

    // build the app typescript after injecting the plugins typescript src code
    pub(crate) fn app_typescript(comps: Vec<[String; 2]>) {
        let mut data = read_to_string("app/src/main.ts").unwrap();
        comps
            .into_iter()
            .map(|c| {
                [
                    format!("import {{ {} }} from \"./{}/main\";\n", c[1], c[0]),
                    format!(
                        "\nconst {}_shadow_container = await {}(parcel);\n{}_shadow_container.render(app);\n",
                        c[1], c[1], c[1]
                    ),
                ]
            })
            .for_each(|s| {
                data = s[0].clone() + &data + &s[1];
            });
        write("app/src/main.ts", data).unwrap();
        // move to app
        cd("app");
        // build ts bundle
        Command::new("pnpm").arg("b:ts").output().unwrap();
        // return to project root
        cd("../..");
    }

    // NOTE cwd is crate_dir/app and not crate_dir
    pub(crate) fn plugins() -> Vec<[String; 2]> {
        read_dir("plugins")
            .unwrap()
            .filter(|e| e.is_ok())
            .map(|e| e.unwrap().file_name())
            .map(|p| {
                let p = p.as_os_str().to_str().unwrap();
                let p2 = String::from("plugins/") + p;
                plugin(p, &p2)
            })
            .collect::<Vec<[String; 2]>>()
    }

    // p is plugin name
    // p2 is plugin path
    fn plugin(p: &str, p2: &str) -> [String; 2] {
        // create plugin ts dir in app src in preparation for plugin ts injection
        create_dir("app/src/".to_string() + p).unwrap();
        // move to plugin dir
        cd(&p2);
        // copy icons if any
        copy_icons();
        // build css
        lightningcss();
        // copy the plugin ts files to main app src
        let comp = copy_ts(p);
        // move back to app dir (parent of the main app dir)
        cd("../..");

        comp
    }
}

mod services {
    use super::{cd, print, pwd};
    use std::env::set_current_dir;
    use std::fs::{copy, create_dir, read_dir, read_to_string, write};
    use std::process::Command;

    pub(crate) fn init() {
        if std::path::Path::new("install").is_dir() {
            std::fs::remove_dir_all("install").unwrap();
        }
        create_dir("install").unwrap();

        Command::new("cp")
            .args(["src", "-r", "install/src"])
            .output()
            .unwrap();

        let mut manifest = read_to_string("Cargo.toml").unwrap();
        manifest = manifest.replace("license = \"MIT\"", "license = \"MIT\"\n[workspace]");
        write("install/Cargo.toml", manifest).unwrap();

        cd("app");
    }

    // NOTE cwd is crate_dir/app and not crate_dir
    pub(crate) fn plugins() -> Vec<(String, Vec<String>)> {
        read_dir("plugins")
            .unwrap()
            .filter(|e| e.is_ok())
            .map(|e| e.unwrap().file_name())
            .map(|p| {
                let p = p.as_os_str().to_str().unwrap();
                let p2 = String::from("plugins/") + p;
                plugin(p, &p2)
            })
            .collect::<Vec<(String, Vec<String>)>>()
    }

    // p is plugin name
    // p2 is plugin path
    fn plugin(p: &str, p2: &str) -> (String, Vec<String>) {
        let services = copy_services(p, p2);

        (p.to_owned(), services)
    }

    // copy services into install dir
    fn copy_services(p: &str, p2: &str) -> Vec<String> {
        // copy plugin's lib.rs into install/src/plugin_name.rs
        let in_path = p2.to_owned() + "/src/";
        let out_path = "../install/src/".to_owned() + p;

        let lib = read_to_string(in_path.clone() + "lib.rs").unwrap();
        let lib = lib.trim_start_matches("#[path = \"services/services.rs\"]\n");

        // get services from lib exports
        let services = lib
            .lines()
            .filter(|l| l.contains("pub use"))
            .map(|l| {
                l.trim_start_matches("pub use services::")
                    .trim_end_matches(';')
                    .to_owned()
            })
            .collect::<Vec<String>>();

        // write updated lib.rs to plugin_name.rs
        write(out_path.clone() + ".rs", lib).unwrap();

        // copy plugin's services
        Command::new("cp")
            .args([&(in_path + "services/"), "-r", &out_path])
            .output()
            .unwrap();

        services
    }

    // add plugins services to server main file
    pub(crate) fn build(services: Vec<(String, Vec<String>)>) {
        let mut data = read_to_string("../install/src/main.rs").unwrap();
        services
            .iter()
            .map(|s| {
                [
                    format!("mod {};\n", s.0),
                    s.1.iter()
                        .map(|srv| format!("\n\t\t\t.service({}::{})", s.0, srv))
                        .fold(String::new(), |acc, e| acc + &e)
                        + "\n\t\t\t// <service>",
                ]
            })
            .for_each(|s| {
                data = s[0].clone() + &data;
                data = data.replace("// <service>", &s[1]);
            });
        write("../install/src/main.rs", data).unwrap();
        // cd to install dir
        cd("../install");
        // cargo build server
        Command::new("cargo")
            .args(["build", "-r"])
            .output()
            .unwrap();
        // return to project root
        cd("..");
        Command::new("cp")
            .args(["ssl_files/", "-r", "install"])
            .output()
            .unwrap();

        Command::new("cp")
            .args(["app/app/icons/", "-r", "install/dist"])
            .output()
            .unwrap();

        Command::new("cp")
            .args(["app/app/dist/", "-r", "install"])
            .output()
            .unwrap();

        Command::new("cp")
            .args(["install/target/release/momo", "install"])
            .output()
            .unwrap();
    }
}

fn main() {
    let mut it = parse::open();
    let plgs = parse::read_sections(&mut it);

    let p = plgs[0].plugins();
    fetch::core();
    fetch::plugins(p);

    build::app_css();
    let comps = build::plugins();
    build::app_typescript(comps);

    services::init();
    let services = services::plugins();
    services::build(services);

    println!("cargo::warning=build script finished running");
}

mod parse {
    use std::collections::HashMap;
    use std::fs;
    use std::io::Read;

    pub(crate) fn open() -> fs::File {
        let Ok(f) = fs::OpenOptions::new()
            .read(true)
            .write(true)
            .open("install.toml")
        else {
            unreachable!("could not find install config file install.toml in binary server crate")
        };

        f
    }

    pub(crate) fn read_sections(f: &mut fs::File) -> Vec<Section> {
        let mut s = String::new();
        _ = f.read_to_string(&mut s);

        let vec: Vec<String> = s
            .lines()
            .filter(|l| !l.trim().is_empty())
            .map(|l| l.into())
            .collect();
        vec.chunk_by(|a, b| !a.starts_with('[') && !b.starts_with('['))
            .collect::<Vec<&[String]>>()
            .chunks(2)
            .map(|c| (c[0][0].to_owned(), c[1].to_vec()).into())
            .collect::<Vec<Section>>()
    }

    #[derive(Debug, Default)]
    pub(crate) struct Section {
        name: String,
        items: HashMap<String, SectionValue>,
    }

    impl Section {
        pub(crate) fn plugins(&self) -> Vec<String> {
            let SectionValue::Arr(a) = self.items.get("plugins").unwrap() else {
                panic!("cant find plugins arr variant instance")
            };

            a.into_iter()
                .map(|p| {
                    let SectionValue::Str(s) = p else {
                        panic!("plugihn wasnt a string")
                    };
                    s.to_owned()
                })
                .collect::<Vec<String>>()
        }
    }

    impl From<(String, Vec<String>)> for Section {
        fn from(value: (String, Vec<String>)) -> Self {
            let vals = value.1;
            if vals.is_empty() {
                return Self::default();
            }

            let vals = vals
                .into_iter()
                .map(|kv| {
                    let mut kv = kv.split('=');

                    (
                        kv.next().unwrap().trim().into(),
                        kv.next().unwrap_or("_").trim().into(),
                    )
                })
                .collect::<HashMap<String, SectionValue>>();

            Self {
                name: value.0.trim_matches(['[', ']']).to_owned(),
                items: vals,
            }
        }
    }

    #[derive(Debug)]
    enum SectionValue {
        Obj(HashMap<String, SectionValue>),
        Str(String),
        UInt(u64),
        Flt(f64),
        Arr(Vec<SectionValue>),
        Bool(bool),
    }

    impl SectionValue {
        fn obj(hm: HashMap<String, SectionValue>) -> Self {
            Self::Obj(hm)
        }

        fn arr(ar: Vec<SectionValue>) -> Self {
            Self::Arr(ar)
        }

        fn parse(v: &str) -> Self {
            let v = v.trim_matches([' ', '"']);
            if v.starts_with('[') {
                Self::parse_arr(v).into()
            } else if v.starts_with('{') {
                Self::parse_obj(v).into()
            } else if v.chars().all(|c| c.is_numeric()) {
                Self::parse_uint(v).into()
            } else if v == "true" || v == "false" {
                Self::parse_bool(v).into()
            } else if {
                let len = v.len();
                let has_dot = v.contains('.');
                let nums_only = v.chars().filter(|c| c.is_numeric()).count();

                has_dot && len - nums_only == 1
            } {
                Self::parse_flt(v).into()
            } else {
                Self::Str(v.into())
            }
        }

        fn parse_obj(o: &str) -> HashMap<String, Self> {
            o.trim_matches(['{', '}'])
                .split(',')
                .map(|kv| {
                    let mut kv = kv.split(':');

                    (
                        kv.next().unwrap().trim().into(),
                        Self::parse(kv.next().unwrap().trim()),
                    )
                })
                .collect()
        }

        fn parse_arr(a: &str) -> Vec<Self> {
            a.trim_matches(['[', ']'])
                .split(',')
                .map(|v| Self::parse(v))
                .collect::<Vec<Self>>()
        }
        fn parse_bool(b: &str) -> bool {
            b.parse().unwrap()
        }
        fn parse_flt(f: &str) -> f64 {
            f.parse().unwrap()
        }
        fn parse_uint(i: &str) -> u64 {
            i.parse().unwrap()
        }
    }

    impl From<&str> for SectionValue {
        fn from(value: &str) -> Self {
            Self::parse(value)
        }
    }

    impl From<Vec<SectionValue>> for SectionValue {
        fn from(value: Vec<SectionValue>) -> Self {
            Self::Arr(value)
        }
    }

    impl From<u64> for SectionValue {
        fn from(value: u64) -> Self {
            Self::UInt(value)
        }
    }

    impl From<f64> for SectionValue {
        fn from(value: f64) -> Self {
            Self::Flt(value)
        }
    }

    impl From<bool> for SectionValue {
        fn from(value: bool) -> Self {
            Self::Bool(value)
        }
    }

    impl From<HashMap<String, SectionValue>> for SectionValue {
        fn from(value: HashMap<String, SectionValue>) -> Self {
            Self::obj(value)
        }
    }
}
