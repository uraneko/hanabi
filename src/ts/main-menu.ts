import { make, type Maybe } from "momo_core/core";
import { Parcel } from "momo_core/parcel";
import { Vector, VectorElement } from "momo_components/collections/vector"
import { Jar } from "momo_components/wrappers/jar";
import { DOMAIN_ROOT } from "./root"

export async function main_menu(parcel: Parcel, app_menu: Element): Promise<VectorElement> {
	parcel.header("Content-Type", "application/json");
	const main_menu_icons = await parcel.get("/comp-icons/main-menu");

	const main_menu_vec = new Vector(main_menu_icons, "main-menu");
	main_menu_vec.order("home", "apps", "configs", "colors",
		"messages", "notifications", "user");

	const sep = make("span", { "class": "span-icon-sep" });
	main_menu_vec.insert(["sep", sep], "messages");

	const cc = (e: Event) => {
		console.log((hlcp as HTMLInputElement).value);
		document.documentElement.style.setProperty("--hl-clr", (<HTMLInputElement>hlcp).value)
	}

	const hlcp = make("input", { "class": "hl-clr-pkr hidden", "type": "color", "e:input": cc });

	const hl_color_picker = (node: Element): (e: Event) => void => {
		return (e: Event) => {
			(hlcp as HTMLElement).click();
		}
	}

	main_menu_vec.nodes().forEach((n: [string, Element]) => {
		const name = n[0];
		const node = n[1];
		const jar = new Jar("vector-coll", name, node);
		if (name == "home") {
			jar.make_link(DOMAIN_ROOT + "/home");
		} else if (name == "colors") {
			jar.make_key(hl_color_picker(jar));
		} else if (name == "apps") {
			jar.make_key(() => {
				if (jar.contains(app_menu)) {
					app_menu.remove()
				} else {
					console.log("appended and focused")
					jar.appendChild(app_menu);
					(<VectorElement>app_menu).focus();
					console.log(document.activeElement);
				}
			});
		} else if (name != "sep") {
			jar.make_key((e: Event) => console.log("ive been clicked", e.target))
		}

		main_menu_vec.update(name, jar);
	});

	return main_menu_vec.to_element();
}
