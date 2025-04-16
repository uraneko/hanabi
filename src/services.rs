//std imports
use std::collections::HashMap;
use std::fs::read_to_string;
use std::path::PathBuf;
use std::sync::LazyLock;
// actix imports
use actix_files::NamedFile;
use actix_web::{get, web, HttpRequest, Responder, Result as ActixResult};
// serde macro
use serde::Serialize;

// use super::FILES_MENU_ICONS;

// example service
#[get("/hello/{name}")]
pub(super) async fn hello(name: web::Path<String>) -> impl Responder {
    // eprintln!("method: get, path = '/hello', params: [name] = {}", name);
    format!("hello, {}", name)
}

// async fn status(_req: HttpRequest) -> ActixResult<NamedFile> {
//     let path: PathBuf = SRC_FILES.get("status").unwrap().get("html").unwrap().into();
//
//     Ok(NamedFile::open(path).unwrap())
// }

#[get("styles/{css}")]
pub(super) async fn css(css: web::Path<String>) -> ActixResult<impl Responder> {
    let path: PathBuf = ("dist/styles/".to_string() + css.as_str()).into();
    Ok(NamedFile::open(path).unwrap())
}

pub(super) async fn html(_req: HttpRequest) -> ActixResult<NamedFile> {
    let path: PathBuf = "dist/index.html".into();

    Ok(NamedFile::open(path).unwrap())
}

pub(super) async fn js(_req: HttpRequest) -> ActixResult<NamedFile> {
    let path: PathBuf = PathBuf::from("dist/bundle.js");

    Ok(NamedFile::open(path).unwrap())
}

pub(super) async fn favicon(_req: HttpRequest) -> ActixResult<NamedFile> {
    let favicon = PathBuf::from("dist/favicon.svg");

    Ok(NamedFile::open(favicon).unwrap())
}

#[get("icon/{svg}")]
pub(super) async fn icon(svg: web::Path<String>) -> ActixResult<NamedFile> {
    let icon: PathBuf = ("dist/icons/".to_string() + svg.as_str()).into();
    Ok(NamedFile::open(icon).unwrap())
}

// #[derive(Debug, Serialize)]
// struct Icons(HashMap<String, String>);

#[get("icons/{icons}")]
pub(super) async fn icons(icons: web::Path<String>) -> ActixResult<impl Responder> {
    Ok(serde_json::to_string(
        &icons
            .split('+')
            .map(|i| {
                let mut path = PathBuf::from("dist/icons/");
                path.push(i);
                (i.to_owned(), read_to_string(path).unwrap())
            })
            .collect::<HashMap<String, String>>(),
    ))
}

// const MAIN_MENU_ICONS: LazyLock<HashMap<String, String>> = LazyLock::new(|| {
//     [
//         "home.svg",
//         "apps.svg",
//         "configs.svg",
//         "colors.svg",
//         "messages.svg",
//         "notifications.svg",
//         "user.svg",
//     ]
//     .into_iter()
//     .map(|icon| (icon, read_to_string(&format!("dist/icons/{}", icon))))
//     .inspect(|(_, d)| {
//         dbg!(&d);
//     })
//     .filter(|(_, d)| d.is_ok())
//     .map(|(i, d)| (i.trim_end_matches(".svg").to_string(), d.unwrap()))
//     .collect::<HashMap<String, String>>()
// });
//
// const APP_MENU_ICONS: LazyLock<HashMap<String, String>> = LazyLock::new(|| {
//     [
//         "files.svg",
//         "quests.svg",
//         "discussions.svg",
//         "scheduler.svg",
//     ]
//     .into_iter()
//     .map(|icon| (icon, read_to_string(&format!("dist/icons/{}", icon))))
//     .inspect(|(_, d)| {
//         dbg!(&d);
//     })
//     .filter(|(_, d)| d.is_ok())
//     .map(|(i, d)| (i.trim_end_matches(".svg").to_string(), d.unwrap()))
//     .collect::<HashMap<String, String>>()
// });
//
// // #[derive(Serialize)]
// // struct Icons(HashMap<String, String>);
//
// const EVERY_APP_ICON: LazyLock<HashMap<String, String>> = LazyLock::new(|| {
//     std::fs::read_dir("dist/icons")
//         .unwrap()
//         .filter(|de| de.is_ok())
//         .map(|de| de.unwrap().path())
//         .map(|p| {
//             (
//                 p.file_name().unwrap().to_string_lossy().to_string(),
//                 p.to_str().unwrap().to_string(),
//             )
//         })
//         .collect()
// });
//
// pub(super) const EVERY_FILE_ICON: LazyLock<HashMap<String, String>> = LazyLock::new(|| {
//     std::fs::read_dir("dist/icons")
//         .unwrap()
//         .filter(|de| de.is_ok())
//         .map(|de| de.unwrap().path())
//         .map(|p| {
//             (
//                 p.file_name().unwrap().to_string_lossy().to_string(),
//                 p.to_str().unwrap().to_string(),
//             )
//         })
//         .collect()
// });
//
// pub(super) const SRC_FILES: LazyLock<HashMap<&str, HashMap<&str, &str>>> = LazyLock::new(|| {
//     HashMap::from([
//         (
//             "app",
//             HashMap::from([
//                 ("html", "dist/index.html"),
//                 ("css", "dist/styles/app.css"),
//                 ("js", "dist/bundle.js"),
//                 ("icon", "dist/favicon.svg"),
//             ]),
//         ),
//         // (
//         // "status",
//         // HashMap::from([
//         // ("html", "dist/status/index.html"),
//         // ("css", "dist/status/styles.css"),
//         //     ("js", "dist/status/main.js"),
//         // ]),
//         // ),
//     ])
// });
