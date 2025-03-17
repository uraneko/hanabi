import { Parcel } from "momo_core/parcel";

import { main_menu as main_menu_component } from "./main-menu";
import { app_menu as app_menu_component } from "./app-menu";

class Automata extends HTMLBodyElement {
	constructor() {
		if (document.body.hasAttribute("is")) throw Error("automata is already registered. The automata is the app root, there can only be one instance of it in the dom tree at one time.");
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

const app = new Automata();

const parcel = new Parcel();
const app_menu = await app_menu_component(parcel);
app_menu.direction("row");

const main_menu = await main_menu_component(parcel, app_menu);
main_menu.render();

// setTimeout(() => {
// 	console.log("3seconds of delay have passed");
// 	main_menu.direction("column");
// }, 3000);

import "../css/styles.css";
