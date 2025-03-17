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
    /// adds new header or updates header value if already there
    header(key, val) {
        this.headers.has(key) ? this.headers.set(key, val) : this.headers.append(key, val);
    }
    remove(key) {
        if (!this.headers.has(key))
            return undefined;
        const val = this.headers.get(key);
        this.headers.delete(key);
        return val;
    }
    clear() {
        this.headers = new Headers();
    }
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
        if (v.startsWith("<svg")) {
            data[k] = parse_svg(v);
        }
        else if (v.startsWith("<a") ||
            v.startsWith("<div") ||
            v.startsWith("<span") ||
            v.startsWith("<button")) {
            data[k] = parse_html(v);
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
    constructor(nodes, id) {
        // super(Object.entries(nodes));
        this._id = id;
        this._direction = "row";
        this._nodes = new Map(Object.entries(nodes));
        this._is_frozen = false;
        // this.cocoon();
    }
    _id;
    _direction;
    _nodes;
    _is_frozen;
    // cocoon() {
    // 	const iter = this.nodes();
    // 	let next = iter.next();
    // 	while (next.done == false) {
    // 		this._nodes.set(next.value[0], vector_child(next.value, this._kind));
    // 		next = iter.next();
    // 	}
    // }
    update(name, e) {
        if (!this.contains(name))
            return undefined;
        this._nodes.set(name, e);
    }
    nodes() {
        return this._nodes.entries();
    }
    id() { return this._id; }
    direction() { return this._direction; }
    /// inserts a new node right before the node with the given name 
    /// costly  
    insert(node, name) {
        const map = new Map();
        const iter = this.nodes();
        let next = iter.next();
        while (!next.done) {
            if (next.value[0] == name) {
                map.set(node[0], node[1]);
            }
            map.set(next.value[0], next.value[1]);
            next = iter.next();
        }
        this._nodes = map;
    }
    // reorders the nodes according to the key array given 
    // TODO better send a vec from the server rather than reorder the data at the front end side
    order(...order) {
        if (order.length == 0 ||
            this._nodes.size == 0)
            return false;
        order.filter((k) => this.contains(k));
        const map = new Map();
        const iter = order.values();
        let next = iter.next();
        while (!next.done) {
            map.set(next.value, this._nodes.get(next.value));
            next = iter.next();
        }
        this._nodes = map;
        return true;
    }
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
    read(name) {
        if (!this.contains(name))
            return undefined;
        return this._nodes.get(name);
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
// TODO: click events are not set 
/*  "a:home:landing-page",
    "b:server-events:",
    "b:apps:app-menu",
    "b:configs:",
    "sep",
    "b:msg:messages",
    "b:bell:notifications" */

const parent_kind = (parent) => {
    return parent == "vector-coll" ? "vector" : parent == "tree-coll" ? "tree" : "matrix";
};
class Jar extends HTMLElement {
    constructor(parent, name, child) {
        super();
        this._event = "none";
        const child_tag = child.tagName.toLowerCase();
        const kind = child_tag == "svg" ? "-icon" : child_tag == "span" ? "-text" : "-mixed";
        this.classList.add(name + kind + "-jar");
        this.classList.add(parent_kind(parent.toLowerCase()) + "-child");
        this.appendChild(child);
    }
    _event;
    static observedAttributes = [];
    connectedCallback() { }
    event(event, callback) {
        this.addEventListener(event, callback);
    }
    has_no_events() { return this._event == "none"; }
    make_key(callback) {
        this._event = "key";
        this.setAttribute("tabIndex", String(0));
        this.classList.add("pointer");
        this.event("click", callback);
    }
    make_link(uri) {
        this._event = "link";
        this.setAttribute("tabIndex", String(0));
        this.setAttribute("href", uri);
        this.classList.add("pointer");
        this.event("click", link_event(uri));
    }
    is_key() { return this._event == "key"; }
    is_link() { return this._event == "link"; }
    contains_icon() {
        // @ts-ignore
        return this.childNodes[0].tagName.toLowerCase() == "svg";
        // return this.childNodes
        // 	.values()
        // 	// @ts-ignore
        // 	.some((node: Element) =>
        // 		node.tagName.toLowerCase() == "svg");
    }
    contains_text() {
        // @ts-ignore
        return this.childNodes[0].tagName.toLowerCase() == "span";
        // return this.childNodes
        // 	.values()
        // 	// @ts-ignore
        // 	.some((node: Element) =>
        // 		node.tagName.toLowerCase() == "span");
    }
    clone() {
        return structuredClone(this);
    }
    into_frozen() {
        return Object.freeze(this);
    }
    to_frozen() {
        return Object.freeze(this.clone());
    }
}
customElements.define("jar-vessel", Jar);
const link_event = (uri) => {
    return (e) => {
        const ke = e;
        if (ke.ctrlKey) {
            open(uri, "_blank");
        }
        else
            location.href = uri;
    };
};

const DOMAIN_ROOT = "https://localhost:6877";

async function main_menu$1(parcel, app_menu) {
    parcel.header("Content-Type", "application/json");
    const main_menu_icons = await parcel.get("/comp-icons/main-menu");
    const main_menu_vec = new Vector(main_menu_icons, "main-menu");
    main_menu_vec.order("home", "apps", "configs", "colors", "messages", "notifications", "user");
    const sep = make("span", { "class": "span-icon-sep" });
    main_menu_vec.insert(["sep", sep], "messages");
    const cc = (e) => {
        console.log(hlcp.value);
        document.documentElement.style.setProperty("--hl-clr", hlcp.value);
    };
    const hlcp = make("input", { "class": "hl-clr-pkr hidden", "type": "color", "e:input": cc });
    const hl_color_picker = (node) => {
        return (e) => {
            hlcp.click();
        };
    };
    main_menu_vec.nodes().forEach((n) => {
        const name = n[0];
        const node = n[1];
        const jar = new Jar("vector-coll", name, node);
        if (name == "home") {
            jar.make_link(DOMAIN_ROOT + "/home");
        }
        else if (name == "colors") {
            jar.make_key(hl_color_picker());
        }
        else if (name == "apps") {
            jar.make_key(() => {
                if (jar.contains(app_menu)) {
                    app_menu.remove();
                }
                else {
                    console.log("appended and focused");
                    jar.appendChild(app_menu);
                    app_menu.focus();
                    console.log(document.activeElement);
                }
            });
        }
        else if (name != "sep") {
            jar.make_key((e) => console.log("ive been clicked", e.target));
        }
        main_menu_vec.update(name, jar);
    });
    return main_menu_vec.to_element();
}

async function app_menu$1(parcel) {
    parcel.header("Content-Type", "application/json");
    const app_icons = await parcel.get("/comp-icons/app-menu");
    const app_vec = new Vector(app_icons, "app-menu");
    app_vec.order("files", "quests", "scheduler", "discussions");
    app_vec.nodes().forEach((n) => {
        const name = n[0];
        const node = n[1];
        const jar = new Jar("vector-coll", name, node);
        jar.make_key((e) => console.log("ive been clicked", e.target));
        app_vec.update(name, jar);
    });
    const vec = app_vec.to_element();
    vec.direction("row");
    vec.setAttribute("tabindex", "-1");
    vec.appendChild(tip1());
    vec.addEventListener("focusout", () => {
        const focused = document.activeElement;
        if (!vec.contains(focused)) {
            setTimeout(() => {
                console.log(focused, "lost focus");
                vec.remove();
            }, 500);
        }
    });
    return vec;
}
const tip1 = () => {
    return make("div", { "class": "app-menu-tip" });
};

class Automata extends HTMLBodyElement {
    constructor() {
        if (document.body.hasAttribute("is"))
            throw Error("automata is already registered. The automata is the app root, there can only be one instance of it in the dom tree at one time.");
        super();
        this.id = "app";
        this.setAttribute("is", "an-automata");
        document.body = this;
    }
    static observedAttributes = [];
    connectedCallback() {
        console.log("connected");
    }
}
customElements.define("an-automata", Automata, { extends: "body" });
new Automata();
const parcel = new Parcel();
const app_menu = await app_menu$1(parcel);
app_menu.direction("row");
const main_menu = await main_menu$1(parcel, app_menu);
main_menu.render();
