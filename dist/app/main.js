const NODISPLAY = "hidden";
/// checks if a value is not undefined
/// returns boolean 
const is = (val) => {
    return val != undefined;
};
/// returns a new element with given tag name, attributes and children
/// passing no arguments will return a new div: <div></div>
/// attributes with undefined as their value are ignored 
const make = (
// the element tag 
tag = "div", 
/// the element attributes 
/// includes 4 classes 
/// p:<attrname>: <attrvalue>
/// attributes passed in this form are set for the element directly: 
/// e[attrname] = attrvalue
/// s:<attrname>: <attrvalue>
/// attributes passed in this form are set for the element style directly: 
/// e.style[attrname] = attrvalue
/// e:<attrname> = <attrvalue>
/// these are events, they are set using:
/// addEventListener(attrname, attrvalue) <- value is a function
/// finally <attrname> = <attrvalue>
/// these are set using e.setAttribute(attrname, attrvalue)
attrs, 
/// the element children
children) => {
    const html = document.createElement(tag);
    if (children != undefined) {
        html.append(...children.filter((child) => child != undefined));
    }
    if (attrs != undefined) {
        for (const [k, v] of Object.entries(attrs)) {
            if (v == undefined) {
                continue;
            }
            const prefix = k.slice(0, 2);
            if (prefix == "p:") {
                html[k.slice(2)] = v;
            }
            else if (prefix == "s:") {
                html.style[k.slice(2)] = v;
            }
            else if (prefix == "e:") {
                html.addEventListener(k.slice(2), v);
            }
            else {
                html.setAttribute(k, v);
            }
        }
    }
    return html;
};
// the following classes are not to be inherited but they are simply here to record the 
// methods they provide 
// should a class need methods from one of them 
// that class should implement those methods on its own 
// the only exception to this is if a class:
// - does not already extend another 
// - does not seem to be going to need to extend another class for the forseeable future
// - only needs to extend one of the following classes (such as the Parcel class which extends Clone)
// ... Even then, it is better practice for the class to implement the desired methods on its own
//
// use this when you want a type to be cloneable  
// dont call the wrapped function directly
class Clone {
    // clones the value 
    clone() {
        return structuredClone(this);
    }
}

class Parcel extends Clone {
    constructor(headers) {
        super();
        this.headers = headers ?? new Headers();
        this.type_names = DEF_TYPE_NAMES;
        this._parsers = DEF_PARSERS;
    }
    headers;
    type_names;
    _parsers;
    request(uri, data) {
        return new ParcelRequest(uri, this.headers, this.content_type(), data);
    }
    // TODO maybe better undefined handling 
    content_type() {
        return this.type_names.get(this.headers.get("Content-Type"));
    }
    parsers() {
        return this._parsers;
    }
    async get(uri) {
        const req = this.request(uri);
        const res = await req.get();
        return res.parse(this.parsers());
    }
    async post(uri) {
        const req = this.request(uri);
        const res = await req.post();
        return res.parse(this.parsers());
    }
    async put(uri) {
        const req = this.request(uri);
        const res = await req.put();
        return res.parse(this.parsers());
    }
    async delete(uri) {
        const req = this.request(uri);
        const res = await req.delete();
        return res.parse(this.parsers());
    }
    async patch(uri) {
        const req = this.request(uri);
        const res = await req.patch();
        return res.parse(this.parsers());
    }
}
class ParcelRequest extends Clone {
    constructor(uri, headers, type, payload) {
        super();
        this.uri = uri;
        this.headers = headers;
        this.payload = payload;
        this.type = type;
    }
    uri;
    payload;
    headers;
    type;
    // get req
    async get() {
        return new ParcelResponse(await fetch(this.uri, {
            method: "GET",
            headers: this.headers,
        }), this.type);
    }
    // post req
    async post() {
        return new ParcelResponse(await fetch(this.uri, {
            method: "POST",
            headers: this.headers,
            body: this.payload ?? "",
        }), this.type);
    }
    // put req; updates all fields of a record
    async put() {
        return new ParcelResponse(await fetch(this.uri, {
            method: "PUT",
            headers: this.headers,
            body: this.payload ?? "",
        }), this.type);
    }
    // deletes a record
    async delete() {
        return new ParcelResponse(await fetch(this.uri, {
            method: "DELETE",
            headers: this.headers,
            body: this.payload ?? "",
        }), this.type);
    }
    // updates specific fields of a record
    async patch() {
        return new ParcelResponse(await fetch(this.uri, {
            method: "PATCH",
            headers: this.headers,
            body: this.payload ?? "",
        }), this.type);
    }
    parcel() {
        return new Parcel(this.headers);
    }
}
class ParcelResponse extends Clone {
    constructor(resp, type) {
        super();
        this.payload = resp;
        this.type = type;
    }
    payload;
    type;
    is_json() { return this.type == "JSON"; }
    is_svg() { return this.type == "SVGSVGElement"; }
    is_html() { return this.type == "HTMLElement"; }
    is_text() { return this.type == "string"; }
    is_not() { return this.type === undefined; }
    // why is string allowed here as the type of data
    async parse(parsers) {
        const data = (() => {
            if (this.is_json()) {
                return this.payload.json();
            }
            else if (this.is_svg() || this.is_html() || this.is_text()) {
                return this.payload.text();
            }
        })();
        const parsed = parsers.get(this.type)(await data);
        return parsed;
    }
}
// TODO before parsing into anything 
// first validate the security of the response data 
const parse_json = (data) => {
    // const json = data.json();
    // TODO
    for (let [k, v] of Object.entries(data)) {
        if (v.startsWith("<svg ")) {
            data[k] = new DOMParser().parseFromString(v, "image/svg+xml").childNodes[0];
        }
        else if (v.startsWith("<a ") ||
            v.startsWith("<div ") ||
            v.startsWith("<span ") ||
            v.startsWith("<button ")) {
            data[k] = new DOMParser().parseFromString(v, "text/html").body.childNodes[0];
        }
    }
    return data;
};
const parse_str = (data) => { return data; };
const parse_svg = (data) => {
    // const data = await resp.text();
    const parsed = new DOMParser().parseFromString(data, "image/svg+xml");
    const svg = parsed.querySelector("svg");
    return svg;
};
const parse_html = (data) => {
    // const data = await resp.text();
    const parsed = new DOMParser().parseFromString(data, "text/html");
    const html = parsed.body.children[0];
    return html;
};
const DEF_TYPE_NAMES = new Map([
    ["application/json", "JSON"],
    ["image/svg+xml", "SVGSVGElement"],
    ["text/html", "HTMLElement"],
    ["text/plain", "string"]
]);
const DEF_PARSERS = new Map([
    ["JSON", parse_json],
    ["SVGSVGElement", parse_svg],
    ["HTMLElement", parse_html],
    ["string", parse_str]
]);

class Vector /* extends Map<string,Element> */ {
    constructor(nodes, id, kind = "button", direction = "row") {
        // super(Object.entries(nodes));
        this._id = id;
        this._kind = kind;
        this._direction = direction;
        this._nodes = new Map(Object.entries(nodes));
        this._is_frozen = false;
        this.cocoon();
    }
    _id;
    _kind;
    _direction;
    _nodes;
    _is_frozen;
    cocoon() {
        const iter = this.nodes();
        let next = iter.next();
        while (next.done == false) {
            this._nodes.set(next.value[0], vector_child(next.value, this.kind()));
            next = iter.next();
        }
    }
    nodes() {
        return this._nodes.entries();
    }
    id() { return this._id; }
    kind() {
        return this._kind;
    }
    direction() { return this._direction; }
    // adds a new Node to the end of queue
    push(node) {
        this._nodes.set(node[0], node[1]);
    }
    remove(name) {
        this._nodes.delete(name);
    }
    /// returns wether the vector contains 
    contains(name) {
        return this._nodes.has(name);
    }
    event(name, kind, callback) {
        if (!this.contains(name))
            return undefined;
        // TODO
        const node = this._nodes.get(name);
        node.addEventListener(kind, callback);
    }
    collect() {
        return new Array(...this._nodes.values());
    }
    to_element() {
        return new VectorElement(this);
    }
    clone() {
        return structuredClone(this);
    }
    into_frozen() {
        this._is_frozen = true;
        return Object.freeze(this);
    }
    to_frozen() {
        return Object.freeze(this.clone());
    }
    is_frozen() {
        return this._is_frozen;
    }
    shallow() {
        return Object.create(this);
    }
}
class VectorElement extends HTMLElement {
    constructor(vector) {
        super();
        // NOTE every component, which this is one, must have an id 
        this.id = vector.id();
        this.className = "vector " + vector.direction();
        this.append(...vector.collect());
    }
    render(parent, r) {
        is(r) ? r ? is(parent) ? parent.appendChild(this) :
            document.body.appendChild(this)
            : this.remove() :
            is(parent) ? parent.appendChild(this) :
                document.body.appendChild(this);
    }
    is_rendered() {
        return is(document.querySelector(".vector#" + this.id));
    }
    display(d) {
        if (document.body.contains(this))
            return;
        d ? this.classList.remove(NODISPLAY) : this.classList.add(NODISPLAY);
    }
    is_displayed() {
        return this.classList.contains(NODISPLAY);
    }
    direction(dir = "row") {
        if (this.classList.contains(dir))
            return;
        const current = this.classList.contains("row") ? "row" : "column";
        this.classList.replace(current, dir);
    }
    is_row() {
        return this.classList.contains("row");
    }
    is_column() {
        return this.classList.contains("column");
    }
}
customElements.define("vector-coll", VectorElement);
// NOTE: css should be modular? (not sure thats the word) but
// should write many varying css rules for the same element based on different class lists
// and then js code only changes the class list values 
// which effectively changes the css rules 
const vector_child = (n, kind) => {
    const tag = n[1].tagName.toLowerCase();
    const node_kind = (() => {
        if (tag == "svg") {
            return "icon";
        }
        else if (tag == "span") {
            return "text";
        }
        else {
            // tag == "div"
            return "icon+text";
        }
    })();
    return make(kind, { "class": n[0] + "-node-wrapper " + node_kind + " vector-child" }, [n[1]]);
};
// TODO: click events are not set 
/*  "a:home:landing-page",
    "b:server-events:",
    "b:apps:app-menu",
    "b:configs:",
    "sep",
    "b:msg:messages",
    "b:bell:notifications" */

class Automata extends HTMLBodyElement {
    constructor() {
        super();
        this.id = "app";
        this.setAttribute("is", "root-automata");
        console.log("started");
        // document.body.remove();
        document.body = this;
    }
    render() {
        document.appendChild(this);
    }
    connectedCallback() {
        console.log("connected");
    }
}
customElements.define("root-automata", Automata, { extends: "body" });
new Automata();
const headers = new Headers();
headers.append("Content-Type", "application/json");
const parcel = new Parcel(headers);
const main_menu_icons = await parcel.get("/main-menu-icons");
// console.log("0", main_menu_icons);
// const store = new DataStore();
// store.allow_many("icons", "artefacts");
// store.add(new DataItem("main_menu_icons", main_menu_icons, "icons"));
const main_menu_vec = new Vector(main_menu_icons, "main-menu");
function run() {
    document.body.style.background = "#a21185";
}
main_menu_vec.event("apps", "click", run);
const main_menu = main_menu_vec.to_element();
main_menu.render();
