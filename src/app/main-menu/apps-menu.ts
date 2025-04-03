import { make, type Maybe } from "momo_core/core";
import { Parcel } from "momo_core/parcel";
import { Vector, VectorElement } from "momo_components/collections/vector"
import { Jar } from "momo_components/wrappers/jar";

export async function apps_menu(parcel: Parcel): Promise<VectorElement> {
	parcel.header("Content-Type", "application/json");
	const apps_icons = await parcel.get("/comp-icons", "apps-menu");

	const apps_vec = new Vector("apps-menu", apps_icons as JSON);
	apps_vec.order("files", "quests", "scheduler", "discussions");

	apps_vec.nodes().forEach((n: [string, Element]) => {
		const name = n[0];
		const node = n[1];
		const jar = new Jar(node);
		jar.make_key((e: Event) => console.log("ive been clicked", e.target));
		apps_vec.update(name, jar);
	});

	const vec = apps_vec.to_element();
	vec.direction("row");
	vec.setAttribute("tabindex", "-1");
	vec.appendChild(tip1());
	vec.addEventListener("focusout", (e: Event) => {
		const focused = (<FocusEvent>e).relatedTarget! as Node;
		if (!vec.contains(focused)) {
			// console.log(focused, "lost focus");
			vec.remove();
		}
	});

	return vec;
}

const tip1 = (): HTMLDivElement => {
	return make("div", { "class": "apps-menu-tip" });
}

const tip = (): HTMLCanvasElement => {
	const canvas = document.createElement("canvas");
	canvas.className = "apps-menu-tip";

	const ctx = canvas.getContext("2d")!;
	ctx.beginPath();
	ctx.lineTo(15, 0);
	ctx.moveTo(0, 0);
	ctx.lineTo(0, 15);
	ctx.fill();

	return canvas;
}

