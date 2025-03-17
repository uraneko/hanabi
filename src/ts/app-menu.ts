import { make, type Maybe } from "momo_core/core";
import { Parcel } from "momo_core/parcel";
import { Vector, VectorElement } from "momo_components/collections/vector"
import { Jar } from "momo_components/wrappers/jar";
import { DOMAIN_ROOT } from "./root"

export async function app_menu(parcel: Parcel): Promise<VectorElement> {
	parcel.header("Content-Type", "application/json");
	const app_icons = await parcel.get("/comp-icons/app-menu");

	const app_vec = new Vector(app_icons, "app-menu");
	app_vec.order("files", "quests", "scheduler", "discussions");

	app_vec.nodes().forEach((n: [string, Element]) => {
		const name = n[0];
		const node = n[1];
		const jar = new Jar("vector-coll", name, node);
		jar.make_key((e: Event) => console.log("ive been clicked", e.target));
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

const tip1 = (): HTMLDivElement => {
	return make("div", { "class": "app-menu-tip" });
}

const tip = (): HTMLCanvasElement => {
	const canvas = document.createElement("canvas");
	canvas.className = "app-menu-tip";

	const ctx = canvas.getContext("2d")!;
	ctx.beginPath();
	ctx.lineTo(15, 0);
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 15);
	ctx.fill();

	return canvas;
}

