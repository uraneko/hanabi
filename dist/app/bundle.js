
//#region ../momo/momo_core/src/core.ts
const NODISPLAY = "hidden";
const is = (val) => {
	return val != void 0;
};
const make = (tag = "div", attrs, children) => {
	const html = document.createElement(tag);
	if (children != void 0) html.append(...children.filter((child) => child != void 0));
	if (attrs != void 0) for (const [k, v] of Object.entries(attrs)) {
		if (v == void 0) continue;
		const prefix = k.slice(0, 2);
		if (prefix == "p:") html[k.slice(2)] = v;
		else if (prefix == "s:") html.style[k.slice(2)] = v;
		else if (prefix == "e:") html.addEventListener(k.slice(2), v);
		else html.setAttribute(k, v);
	}
	return html;
};
var Clone = class {
	clone() {
		return structuredClone(this);
	}
};

//#endregion
//#region ../momo/momo_core/src/parcel.ts
var Parcel = class extends Clone {
	constructor(headers) {
		super();
		this.headers = headers ?? new Headers();
		this.type_names = INIT_TYPE_NAMES;
		this._parsers = INIT_PARSERS;
	}
	headers;
	type_names;
	_parsers;
	header(key, val) {
		this.headers.has(key) ? this.headers.set(key, val) : this.headers.append(key, val);
	}
	remove(key) {
		if (!this.headers.has(key)) return void 0;
		const val = this.headers.get(key);
		this.headers.delete(key);
		return val;
	}
	clear() {
		this.headers = new Headers();
	}
	request(path, param, data) {
		param = param.replaceAll("/", "%2f");
		return new ParcelRequest(path + "/" + param, this.headers, this.content_type(), data);
	}
	parser() {
		return this._parsers.get(this.content_type());
	}
	content_type() {
		return this.type_names.get(this.headers.get("Content-Type"));
	}
	parsers() {
		return this._parsers;
	}
	async get(path, param) {
		const req = this.request(path, param);
		const res = await req.get();
		const payload = await res.data();
		if (res.is_json() && !is_simple_json(payload) || res.is_text()) return payload;
		const parser = this.parser();
		return res.parse(payload, parser);
	}
	async post(path, param, data) {
		const req = this.request(path, param, data);
		const res = await req.post();
		const payload = await res.data();
		let parser = void 0;
		if (!(res.is_json() && is_simple_json(payload))) parser = this.parser();
		return res.parse(payload, parser);
	}
	async put(path, param, data) {
		const req = this.request(path, param, data);
		const res = await req.put();
		const payload = await res.data();
		let parser = void 0;
		if (!(res.is_json() && is_simple_json(payload))) parser = this.parser();
		return res.parse(payload, parser);
	}
	async delete(path, param) {
		const req = this.request(path, param);
		const res = await req.delete();
		const payload = await res.data();
		let parser = void 0;
		if (!(res.is_json() && is_simple_json(payload))) parser = this.parser();
		return res.parse(payload, parser);
	}
	async patch(path, param, data) {
		const req = this.request(path, param, data);
		const res = await req.patch();
		const payload = await res.data();
		let parser = void 0;
		if (!(res.is_json() && is_simple_json(payload))) parser = this.parser();
		return res.parse(payload, parser);
	}
};
var ParcelRequest = class extends Clone {
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
	async get() {
		return new ParcelResponse(await fetch(this.uri, {
			method: "GET",
			headers: this.headers
		}), this.type);
	}
	async post() {
		return new ParcelResponse(await fetch(this.uri, {
			method: "POST",
			headers: this.headers,
			body: this.payload ?? ""
		}), this.type);
	}
	async put() {
		return new ParcelResponse(await fetch(this.uri, {
			method: "PUT",
			headers: this.headers,
			body: this.payload ?? ""
		}), this.type);
	}
	async delete() {
		return new ParcelResponse(await fetch(this.uri, {
			method: "DELETE",
			headers: this.headers,
			body: this.payload ?? ""
		}), this.type);
	}
	async patch() {
		return new ParcelResponse(await fetch(this.uri, {
			method: "PATCH",
			headers: this.headers,
			body: this.payload ?? ""
		}), this.type);
	}
	parcel() {
		return new Parcel(this.headers);
	}
};
var ParcelResponse = class extends Clone {
	constructor(resp, type) {
		super();
		this.payload = resp;
		this.type = type;
	}
	payload;
	type;
	is_json() {
		return this.type == "JSON";
	}
	is_svg() {
		return this.type == "SVGSVGElement";
	}
	is_html() {
		return this.type == "HTMLElement";
	}
	is_text() {
		return this.type == "string";
	}
	is_not() {
		return this.type === void 0;
	}
	async data() {
		if (this.is_json()) return this.payload.json();
		else if (this.is_svg() || this.is_html() || this.is_text()) return this.payload.text();
		else throw new Error("unexpected response data type");
	}
	async parse(data, parser) {
		const output = is(parser) ? parser(data) : data;
		return output;
	}
};
const parse_json = (data) => {
	data = data;
	for (let [k, v] of Object.entries(data)) if (is_svg(v)) data[k] = parse_svg(v);
	else if (is_html(v)) data[k] = parse_html(v);
	return data;
};
const parse_svg = (data) => {
	data = data;
	const parsed = new DOMParser().parseFromString(data, "image/svg+xml");
	const svg = parsed.querySelector("svg");
	return svg;
};
const parse_html = (data) => {
	data = data;
	const parsed = new DOMParser().parseFromString(data, "text/html");
	const html = parsed.body.children[0];
	return html;
};
const INIT_TYPE_NAMES = new Map([
	["application/json", "JSON"],
	["image/svg+xml", "SVGSVGElement"],
	["text/html", "HTMLElement"],
	["text/plain", "string"]
]);
const INIT_PARSERS = new Map([
	["JSON", parse_json],
	["SVGSVGElement", parse_svg],
	["HTMLElement", parse_html]
]);
const is_simple_json = (data) => {
	return Object.values(data).every((val) => val.constructor.name == "String");
};
const is_svg = (data) => {
	return data.startsWith("<svg ") || data.startsWith("<svg\n") || data.startsWith("<?xml ") || data.startsWith("<?xml\n");
};
const is_html = (data) => {
	return data.startsWith("<a ") || data.startsWith("<a\n") || data.startsWith("<button ") || data.startsWith("<button\n") || data.startsWith("<span ") || data.startsWith("<span\n") || data.startsWith("<div ") || data.startsWith("<div\n");
};

//#endregion
//#region ../momo/momo_components/src/collections/vector.ts
var Vector = class Vector {
	constructor(id, nodes) {
		this._id = id;
		this._direction = "row";
		this._nodes = nodes.constructor.name == "Map" ? nodes : new Map(Object.entries(nodes));
		this._is_frozen = false;
	}
	static from_arr(id, ...nodes) {
		let idx = 0;
		const json = new Map(nodes.map((node) => {
			const kv = [idx, make("span", {
				"class": "vector-child " + idx,
				"p:textContent": node
			})];
			idx += 1;
			return kv;
		}));
		return new Vector(id, json);
	}
	_id;
	_direction;
	_nodes;
	_is_frozen;
	update(name, e) {
		if (!this.contains(name)) return void 0;
		this._nodes.set(name, e);
	}
	nodes() {
		return this._nodes.entries();
	}
	id() {
		return this._id;
	}
	direction() {
		return this._direction;
	}
	insert(node, name) {
		const map = new Map();
		const iter = this.nodes();
		let next = iter.next();
		while (!next.done) {
			if (next.value[0] == name) map.set(node[0], node[1]);
			map.set(next.value[0], next.value[1]);
			next = iter.next();
		}
		this._nodes = map;
	}
	order(...order) {
		if (order.length == 0 || this._nodes.size == 0) return false;
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
	push(node) {
		this._nodes.set(node[0], node[1]);
	}
	remove(name) {
		this._nodes.delete(name);
	}
	contains(name) {
		return this._nodes.has(name);
	}
	read(name) {
		if (!this.contains(name)) return void 0;
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
};
var VectorElement = class extends HTMLElement {
	constructor(vector) {
		super();
		this.id = vector.id();
		this.className = "vector " + vector.direction();
		this.append(...vector.collect());
	}
	cls(...cls) {
		this.classList.add(...cls);
	}
	render(parent) {
		parent.appendChild(this);
	}
	is_rendered() {
		return is(document.querySelector(".vector#" + this.id));
	}
	display(d) {
		if (document.body.contains(this)) return;
		d ? this.classList.remove(NODISPLAY) : this.classList.add(NODISPLAY);
	}
	is_displayed() {
		return this.classList.contains(NODISPLAY);
	}
	direction(dir = "row") {
		if (this.classList.contains(dir)) return;
		const current = this.classList.contains("row") ? "row" : "column";
		this.classList.replace(current, dir);
	}
	is_row() {
		return this.classList.contains("row");
	}
	is_column() {
		return this.classList.contains("column");
	}
};
customElements.define("vector-coll", VectorElement);

//#endregion
//#region ../momo/momo_components/src/wrappers/jar.ts
var Jar = class extends HTMLElement {
	constructor(...children) {
		super();
		this._event = "none";
		this.append(...children);
	}
	_event;
	static observedAttributes = [];
	connectedCallback() {}
	event(event, callback) {
		this.addEventListener(event, callback);
	}
	has_no_events() {
		return this._event == "none";
	}
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
	is_key() {
		return this._event == "key";
	}
	is_link() {
		return this._event == "link";
	}
	contains_icon() {
		return this.childNodes[0].tagName.toLowerCase() == "svg";
	}
	contains_text() {
		return this.childNodes[0].tagName.toLowerCase() == "span";
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
};
customElements.define("jar-vessel", Jar);
const link_event = (uri) => {
	return (e) => {
		const ke = e;
		if (ke.ctrlKey) open(uri, "_blank");
		else location.href = uri;
	};
};

//#endregion
//#region ../momo/momo_components/src/wrappers/container.ts
var ShadowContainer = class extends HTMLElement {
	constructor(id, ...nodes) {
		super();
		this.id = id;
		this.className = "shadow-host";
		this._shadow = this.attachShadow({ mode: "open" });
		this._shadow.append(...nodes);
		this._state = new Map();
	}
	_shadow;
	_state;
	push(key, value) {
		const updating = this._state.has(key);
		this._state.set(key, value);
		return updating;
	}
	read(key) {
		this._state.has(key) && this._state.get(key);
	}
	cls(cls) {
		this.classList.toggle(cls);
	}
	static observedAttributes = [];
	connectedCallback() {}
	css(href) {
		const stl = make("link", {
			"rel": "stylesheet",
			"type": "text/css",
			"href": href
		});
		this._shadow.prepend(stl);
	}
	batch_css(...css) {
		css.forEach((css$1) => this.css(css$1));
	}
	shadow() {
		return this._shadow;
	}
	render(parent) {
		parent.appendChild(this);
	}
};
customElements.define("shadow-container", ShadowContainer);

//#endregion
//#region src/ts/root.ts
const DOMAIN_ROOT = "https://localhost:6877";

//#endregion
//#region src/ts/apps-menu.ts
async function apps_menu(parcel$1) {
	parcel$1.header("Content-Type", "application/json");
	const apps_icons = await parcel$1.get("/comp-icons", "apps-menu");
	const apps_vec = new Vector("apps-menu", apps_icons);
	apps_vec.order("files", "quests", "scheduler", "discussions");
	apps_vec.nodes().forEach((n) => {
		const name = n[0];
		const node = n[1];
		const jar = new Jar(node);
		jar.make_key((e) => console.log("ive been clicked", e.target));
		apps_vec.update(name, jar);
	});
	const vec = apps_vec.to_element();
	vec.direction("row");
	vec.setAttribute("tabindex", "-1");
	vec.appendChild(tip1());
	vec.addEventListener("focusout", (e) => {
		const focused = e.relatedTarget;
		if (!vec.contains(focused)) vec.remove();
	});
	return vec;
}
const tip1 = () => {
	return make("div", { "class": "apps-menu-tip" });
};

//#endregion
//#region src/ts/main-menu.ts
async function main_menu$1(parcel$1, apps_menu$1) {
	parcel$1.header("Content-Type", "application/json");
	const main_menu_icons = await parcel$1.get("/comp-icons", "main-menu");
	const main_menu_vec = new Vector("main-menu", main_menu_icons);
	main_menu_vec.order("home", "apps", "configs", "colors", "messages", "notifications", "user");
	const sep = make("span", { "class": "span-icon-sep" });
	main_menu_vec.insert(["sep", sep], "messages");
	const cc = (e) => {
		document.documentElement.style.setProperty("--hl-clr", hlcp.value);
	};
	const hlcp = make("input", {
		"class": "hl-clr-pkr hidden",
		"type": "color",
		"e:input": cc
	});
	const hl_color_picker = (node) => {
		return (e) => {
			hlcp.click();
		};
	};
	main_menu_vec.nodes().forEach((n) => {
		const name = n[0];
		const node = n[1];
		const jar = new Jar(node);
		if (name == "home") jar.make_link(DOMAIN_ROOT + "/home");
		else if (name == "colors") jar.make_key(hl_color_picker(jar));
		else if (name == "apps") jar.make_key(() => {
			if (jar.contains(apps_menu$1)) apps_menu$1.remove();
			else {
				jar.appendChild(apps_menu$1);
				apps_menu$1.focus();
			}
		});
		else if (name != "sep") jar.make_key((e) => console.log("ive been clicked", e.target));
		main_menu_vec.update(name, jar);
	});
	return main_menu_vec.to_element();
}
async function main_menu_shadow(parcel$1) {
	const apps = await apps_menu(parcel$1);
	const main = await main_menu$1(parcel$1, apps);
	const cont = new ShadowContainer("main-menu", main);
	cont.push("main-menu", main);
	cont.push("apps-menu", apps);
	cont.css("styles/main-menu.css");
	return cont;
}

//#endregion
//#region ../momo/momo_components/src/collections/tree.ts
var TreeElement = class extends HTMLElement {
	constructor(id, tree) {
		super();
		window.fs = tree;
		this.id = id;
		const name = Object.keys(tree)[0];
		const nodes = Object.values(tree)[0];
		this.appendChild(parse_dir("tree-coll", name, nodes));
	}
	cls(...cls) {
		this.classList.add(...cls);
	}
	render(parent) {
		parent.appendChild(this);
	}
};
customElements.define("tree-coll", TreeElement);
const parse_dir = (parent, name, nodes) => {
	const name_jar = new Jar(make("span", {
		"class": "node-name",
		"p:textContent": name
	}));
	const nodes_jar = new Jar();
	nodes.forEach((node) => {
		if (is_str(node)) nodes_jar.appendChild(dir_node(node));
		else {
			const node_name = Object.keys(node)[0];
			const node_children = Object.values(node)[0];
			nodes_jar.appendChild(parse_dir("jar-vessel", node_name, node_children));
		}
	});
	return new Jar(name_jar, nodes_jar);
};
const dir_node = (node) => {
	return make("span", {
		"class": "node-content",
		"p:textContent": node
	});
};
const is_str = (node) => {
	return node.constructor.name == "String";
};

//#endregion
//#region src/ts/files/files-tree.ts
async function files_tree(parcel$1) {
	parcel$1.header("Content-Type", "application/json");
	const fs_root = await parcel$1.get("/files-tree", "dist");
	return new TreeElement("files-tree", fs_root);
}

//#endregion
//#region ../momo/momo_components/src/collections/matrix.ts
var MatrixElement = class extends HTMLElement {
	constructor(id, ...cols) {
		super();
		this.id = id;
		this._cols = cols.length;
		this._size = 0;
		const cols_vec = Vector.from_arr("", ...cols);
		const vec = cols_vec.to_element();
		vec.cls("matrix-cols");
		this.appendChild(vec);
		const jar = new Jar();
		this.appendChild(jar);
		this.style.setProperty("--meta-cols", String(this.len()));
		this.style.setProperty("--meta-rows", "0");
	}
	_cols;
	_size;
	cls(...cls) {
		this.classList.add(...cls);
	}
	len() {
		return this._cols;
	}
	size() {
		return this._size;
	}
	de_row(row) {
		if (this.size() < row) return;
		this.rows().querySelectorAll(".r" + row).forEach((cell) => cell.remove());
	}
	de_col(col) {
		if (this.len() < col) return;
		this.rows().querySelectorAll(".c" + col).forEach((cell) => cell.remove());
		this.cols().querySelector("." + col).remove();
	}
	rows() {
		return this.childNodes[1];
	}
	cols() {
		return this.childNodes[0];
	}
	push(...nodes) {
		nodes = nodes.reverse();
		const rows = this.rows();
		const count = this.len();
		let offset = this.len();
		const size = this.size();
		let node = nodes.pop();
		while (offset > 0) {
			const cell = make("span", {
				"class": "matrix-cell  r" + size + " c" + (count - offset),
				"p:textContent": node
			});
			rows.appendChild(cell);
			offset -= 1;
			node = nodes.pop() ?? "";
		}
		this._size += 1;
		this.style.setProperty("--meta-rows", String(this.size()));
	}
	extend(...nodes) {
		nodes.forEach((node_arr) => this.push(...node_arr));
	}
	render(parent) {
		parent.appendChild(this);
	}
};
customElements.define("matrix-coll", MatrixElement);

//#endregion
//#region src/ts/files/files-meta.ts
async function files_meta(parcel$1) {
	parcel$1.header("Content-Type", "application/json");
	const fs_root = await parcel$1.get("/files-meta", "dist");
	const vals = Object.values(fs_root).map((entry) => Object.values(entry));
	const meta = new MatrixElement("files-meta", ...COLUMNS);
	meta.extend(...vals);
	return meta;
}
const COLUMNS = [
	"name",
	"extension",
	"created",
	"modified",
	"accessed",
	"read-only",
	"size"
];

//#endregion
//#region src/ts/files/files-menu.ts
async function files_menu(parcel$1) {
	parcel$1.header("Content-Type", "application/json");
	const icons = await parcel$1.get("/comp-icons", "files-menu");
	const menu = new Vector("files-menu", icons);
	menu.order("bin-add", "bin-up", "bin-down", "bin-del");
	menu.nodes().forEach((n) => {
		const name = n[0];
		const node = n[1];
		const jar = new Jar(node);
		jar.make_key((e) => console.log("ive been clicked", e.target));
		menu.update(name, jar);
	});
	const vec = menu.to_element();
	vec.direction("row");
	return vec;
}

//#endregion
//#region src/ts/files.ts
async function files$1(parcel$1) {
	const menu = await files_menu(parcel$1);
	const tree = await files_tree(parcel$1);
	const meta = await files_meta(parcel$1);
	const cont = new ShadowContainer("files", menu, tree, meta);
	cont.push("menu", menu);
	cont.push("tree", tree);
	cont.push("meta", meta);
	cont.css("styles/files.css");
	return cont;
}

//#endregion
//#region src/ts/main.ts
var Automata = class extends HTMLBodyElement {
	constructor() {
		if (document.body.hasAttribute("is")) throw Error("automata is already registered. The automata is the app root, there can only be one instance of it in the dom tree at one time.");
		super();
		this.id = "app";
		this.setAttribute("is", "an-automata");
		document.body = this;
	}
	static observedAttributes = [];
	connectedCallback() {}
};
customElements.define("an-automata", Automata, { extends: "body" });
const app = new Automata();
const parcel = new Parcel();
const main_menu = await main_menu_shadow(parcel);
main_menu.render(app);
const files = await files$1(parcel);
files.render(app);

//#endregion