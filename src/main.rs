use actix_web::{get, web, App, HttpServer, Responder};
use openssl::ssl::{SslAcceptor, SslAcceptorBuilder, SslFiletype, SslMethod};

fn upgrade_to_https() -> SslAcceptorBuilder {
    let mut axptr_bldr = SslAcceptor::mozilla_intermediate_v5(SslMethod::tls()).unwrap();
    eprintln!(
        "{:?}",
        axptr_bldr.set_private_key_file("ssl_files/key.pem", SslFiletype::PEM)
    );
    eprintln!(
        "{:?}",
        axptr_bldr.set_certificate_file("ssl_files/cert.pem", SslFiletype::PEM)
    );

    axptr_bldr
}

#[get("/hello/{name}")]
async fn hello(name: web::Path<String>) -> impl Responder {
    eprintln!("method: get, path = '/hello', params: [name] = {}", name);
    format!("hello, {}", name)
}

#[get("/")]
async fn init() -> impl Responder {
    eprintln!("init() called, launching the app on web front");

    HTML_SRC
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let listener = HttpServer::new(|| App::new().service(hello).service(init))
        .bind_openssl(("0.0.0.0", 6877), upgrade_to_https());
    let listener = listener.unwrap();
    eprintln!("serving greetings on localhost port 6877 secure ssl connection");

    listener.workers(4).run().await
}

const HTML_SRC: &str = include_str!("../dist/index.html");
const CSS_SRC: &str = include_str!("../dist/styles.css");
const JS_SRC: &str = include_str!("../dist/main.js");
