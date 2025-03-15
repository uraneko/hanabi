import { make, type Opt } from "momo_core/core";
import { Parcel } from "momo_core/parcel";

import { Vector } from "momo_components/collections/vector"
import { Tree } from "momo_components/collections/tree";

class Automata extends HTMLBodyElement {
	constructor() {
		super();

		this.id = "app";
		this.setAttribute("is", "root-automata");
		document.body = this;
		console.log("started");
	}

	render() {
		document.appendChild(this);
	}

	connectedCallback() {
		console.log("connected");
	}
}
customElements.define("root-automata", Automata, { extends: "body" });

const app = new Automata();

const headers: Headers = new Headers();
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

// setTimeout(() => {
// 	console.log("3seconds of delay have passed");
// 	main_menu.direction("column");
// }, 3000);

import "./styles.css";
