mod fs;
mod services;
// TODO: add whisper client app
// TODO: add different scripting languages repls
// TODO: add video streaming capabilities from one user to another

// actix imports
use actix_web::{web, App, HttpServer};
// openssl imports
use openssl::ssl::{SslAcceptor, SslAcceptorBuilder, SslFiletype, SslMethod};
// crate local imports

// pub(self) use files::FILES_MENU_ICONS;

fn upgrade_to_https() -> SslAcceptorBuilder {
    let mut builder = SslAcceptor::mozilla_intermediate_v5(SslMethod::tls()).unwrap();

    _ = builder.set_private_key_file("tls/key.pem", SslFiletype::PEM);

    _ = builder.set_certificate_file("tls/cert.pem", SslFiletype::PEM);

    builder
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let server = HttpServer::new(|| {
        App::new()
            // .service(actix_files::Files::new("/", "./dist"))
            .service(
                web::resource(vec!["/", "index.html", "home"]).route(web::get().to(services::html)),
            )
            .route("/bundle.js", web::get().to(services::js))
            .route("favicon.svg", web::get().to(services::favicon))
            .service(services::css)
            .service(services::icon)
            .service(services::icons)
            .service(fs::files_meta)
            .service(fs::files_tree)
        // <service>
    })
    .bind_openssl(("127.0.0.1", 6877), upgrade_to_https());
    let server = server.unwrap();

    eprintln!("\x1b[1;38;2;213;123;169mhanabi serving on https://127.0.0.1:6877\x1b[0m");

    server.workers(4).run().await
}
