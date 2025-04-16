import { make } from "momo_lib/core/core";
import { Parcel } from "momo_lib/core/parcel";
import { Vector, VectorElement } from "momo_lib/components/collections/vector"
import { Jar } from "momo_lib/components/wrappers/jar";
import { ShadowContainer } from "momo_lib/components/wrappers/container";
import { apps_menu } from "./apps-menu";

async function main_menu(parcel: Parcel, apps_menu: Element): Promise<VectorElement> {
	parcel.header("Content-Type", "application/json");
	const main_menu_icons = await parcel.get("/icons",
		"home.svg+apps.svg+configs.svg+colors.svg+messages.svg+notifications.svg+user.svg"
	);

	const main_menu_vec = new Vector("main-menu", main_menu_icons as JSON);
	main_menu_vec.order("home", "apps", "configs", "colors",
		"messages", "notifications", "user");

	const sep = make("span", { "class": "span-icon-sep" });
	main_menu_vec.insert(["sep", sep], "messages");

	const cc = (e: Event) => {
		// console.log((hlcp as HTMLInputElement).value);
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
		const jar = new Jar(node);
		if (name == "home") {
			jar.make_link("/home");
		} else if (name == "colors") {
			jar.make_key(hl_color_picker(jar));
		} else if (name == "apps") {
			jar.make_key(() => {
				if (jar.contains(apps_menu)) {
					apps_menu.remove()
				} else {
					// console.log("appended and focused")
					jar.appendChild(apps_menu);
					(<VectorElement>apps_menu).focus();
					// console.log(document.activeElement);
				}
			});
		} else if (name != "sep") {
			jar.make_key((e: Event) => console.log("ive been clicked", e.target))
		}

		main_menu_vec.update(name, jar);
	});

	return main_menu_vec.to_element();
}

export async function main_menu_shadow(parcel: Parcel) {
	const apps = await apps_menu(parcel);
	const main = await main_menu(parcel, apps);

	const cont = new ShadowContainer("main-menu", main);
	cont.push("main-menu", main);
	cont.push("apps-menu", apps);
	cont.css("styles/main-menu.css");

	return cont;
}
