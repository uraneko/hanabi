import { children, JSX, For, Switch, Match, createSignal, createResource, createEffect, DEV } from "solid-js";
import { dbl_signal, dbl_method, _, spread_classes, fallback, parse_svg, constr } from "core";
import { Catalyst, ColorPicker, svg } from "core/primitives";
import { user_state } from "../user";
import { BuildTree } from "core/containers";
import { WildText } from "core/primitives";
import { Account, Address } from "./Account";
import { Security } from "./Security";

import styles from "./Configs.module.css";

import atSVG from "../../../assets/icons/at.svg?raw";
import puzzleSVG from "../../../assets/icons/puzzle.svg?raw";
import colorsSVG from "../../../assets/icons/colors.svg?raw";
import sharedSVG from "../../../assets/icons/shared.svg?raw";
import diceSVG from "../../../assets/icons/dice.svg?raw";
import glassesSVG from "../../../assets/icons/glasses.svg?raw";
import peopleSVG from "../../../assets/icons/people.svg?raw";
import rocketSVG from "../../../assets/icons/rocket.svg?raw";
import keySVG from "../../../assets/icons/key.svg?raw";
import newSVG from "../../../assets/icons/new.svg?raw";
import manageSVG from "../../../assets/icons/manage.svg?raw";
import upSVG from "../../../assets/icons/up.svg?raw";
import downSVG from "../../../assets/icons/down.svg?raw";

const ICONS = {
	account: parse_svg(atSVG),
	plugins: parse_svg(puzzleSVG),
	colors: parse_svg(colorsSVG),
	shared: parse_svg(sharedSVG),
	main: parse_svg(diceSVG),
	glasses: parse_svg(glassesSVG),
	relations: parse_svg(peopleSVG),
	installed: parse_svg(rocketSVG),
	security: parse_svg(keySVG),
	available: parse_svg(newSVG),
	manage: parse_svg(manageSVG),
}

export const Panic = (props: { text: string }) => {
	const text = () => props.text;
	return <WildText class={styles.Panic} text={text()} />;
};

export const Configs = () => {
	const user = user_state();
	if (user.config() === undefined || !Object.hasOwn(user.config(), "headers")) {
		return <Panic text="no user configuration found. Are you surely logged-in?" />;
		throw new Error("user configuration data has not been loaded on signin");
		// const [config_update] = createResource(user, load_configs);
		// console.log(config_update());
		// re_config(config_update()!);
	}
	// @ts-ignore
	const headers = () => user.config()["headers"];
	const data = () => Object.fromEntries(
		Object.entries(user.config()).filter((kv: _) => kv[0] !== "headers"));
	const init = constr(headers()[0]) === "String" ? headers()[0] : Object.keys(headers()[0])[0];
	const [content, re_content] = createSignal(init);
	return <div class={styles.Configs} auth-status={user.is_logged_in()}>
		<Switch>
			<Match when={user.is_logged_in()}>
				<Headers headers={headers()} updater={re_content} />
				<Contents data={data()} header={content()} />
			</Match>
			<Match when={user.is_logged_out()} >
				<WildText text="You are not logged-in." />
			</Match>
		</Switch>
	</div >;
};

const Headers = (props: { headers: _, updater: _ }) => {
	const headers = () => props.headers;
	const re_content = () => props.updater;
	const onclick = (e: Event) => re_content()((_path: string) => {
		const et = resolve_target_to_leaf(e.target as Element) as HTMLButtonElement;
		if (et.className.includes("Tree")) return _path;


		return collect_header_path(et);
	});
	const tree = <BuildTree data={headers()} ident="35px" />;
	iter_map(tree, add_icons_to_headers);
	iter_map(tree, setup_tree_nested);

	return (<div class={styles.Headers} on:click={onclick}>
		{tree}
	</div >);
};

const Contents = (props: { header: string, data: _ }) => {
	const header = () => /* props.header.includes('/') ? props.header.split('/') : */ props.header;
	const configs = () => get_header_configs(props.data, props.header);

	return <div class={styles.Contents}>
		<ParseConfigs configs={configs()} header={header()} />
	</div>;
};

// configs is a json object
const ParseConfigs = (props: { header: string, configs: _ }) => {
	// const configs = () => new DOMParser().parseFromString(props.configs, "text/html").body.firstElementChild;
	const configs = () => props.configs;
	const header = () => props.header;

	return <Switch>
		<Match when={header() === "account"}>
			<Account />
		</Match>
		<Match when={header() === "account/security"}>
			<Security configs={configs()} />
		</Match>
		<Match when={configs() === undefined}>
			<div>
				<span>This section is a work-in-progress</span>
				<span style='font-weight: bold;'>(˶ᵔ ᵕ ᵔ˶)</span>
			</div>
		</Match>
	</Switch >;
};

function get_header_configs(configs: _, header: string) {
	return configs[header];

	// console.log(contents, "<" + header + ">");
	// if (constr(header) === "String") ;
	// let value = contents[header[0]];
	// for (const h of header.slice(1)) {
	// 	console.log("val ->", value);
	// 	value = value[h];
	// }
	//
	// return value;
}

// NOTE this works only on 2 levels, which is enough here 
function collect_header_path(current: HTMLElement): string {
	let path = "";
	let parent = current.parentElement!;
	if (parent.className.includes("LeafWrapper")) {
		parent = parent.parentElement!;
	}
	if (parent.tagName === "BODY") throw new Error("reached dom root");
	else if (parent.className.includes("Tree")) return path.length === 0 ? current.textContent! : path + '/' + current.textContent;
	else if (current.className.includes("Leaf")) {
		// assumes user didnt provide a custom tree transform 
		if (!current.className.includes("BranchName")) {
			path += (path.length === 0 ? '' : '/') + parent.firstElementChild!.children[1].textContent;
		}
		path += (path.length === 0 ? '' : '/') + current.textContent;
	}

	return path;
}

export function iter_map(xel: JSX.Element, predicate: _) {
	const iter = children(() => xel);

	createEffect(() => {
		iter.toArray().forEach((el: _) => {
			predicate(el);
		});
	});

	return iter;
}

function add_icons_to_headers(headers: Element) {
	new Array(...headers.querySelectorAll("[class*=Leaf]"))
		.forEach((leaf: _) => {
			// @ts-ignore
			const icon = ICONS[leaf.textContent] ?? fallback();
			const wrapper = <div class={styles.LeafWrapper}>
				{icon}
				{leaf.cloneNode(true)}
			</div>;
			leaf.replaceWith(wrapper);
		})
}

const DOWN = svg()
	.style({
		fill: "none",
		color: "var(--blue)",
		height: "20px"
	})
	.override({ "stroke-width": "200px" }, "#path1")
	.parse(downSVG);

const UP = svg()
	.style({
		fill: "none",
		color: "var(--blue)",
		height: "20px"
	})
	.override({ "stroke-width": "200px" }, "#path1")
	.parse(upSVG);

function setup_tree_nested(headers: Element) {
	new Array(...headers.querySelectorAll("[class*=BranchName]"))
		.forEach((bn: _) => {
			const down = DOWN.cloneNode(true) as SVGSVGElement;
			down.classList.add("down");
			const wrapper = bn.parentElement;
			wrapper.appendChild(down);
			wrapper.addEventListener("auxclick", toggle_nested_leaves);

			const leaves = new Array(...wrapper.parentElement!.children).slice(1);
			leaves.forEach((leafw: _) => leafw.classList.toggle("off"));
		})
}

// function rotate_toggler(toggler: SVGSVGElement) {
// 	const rotate = toggler.style.getPropertyValue("--rotate");
// 	console.log(rotate);
// 	let rtt = rotate;
// 	if (rotate === "0deg") {
// 		toggler.classList.remove("reset");
// 		rtt = "180deg";
// 	} else if (rotate === "180deg") {
// 		rtt = "360deg";
// 	} else if (rotate === "360deg") {
// 		toggler.classList.add("reset");
// 		rtt = "0deg";
// 	}
// 	toggler.style.setProperty("--rotate", rtt);
// }

function toggle_nested_leaves(e: Event) {
	const et = e.currentTarget! as Element;
	const branch = et.parentElement!;
	// leaf wrappers
	const leaves = new Array(...branch.children).slice(1);
	leaves.forEach((leafw: _) => leafw.classList.toggle("off"));
	const toggler = et.lastElementChild!;
	toggler.classList.toggle("down");
	toggler.classList.toggle("up");

	// toggler.hasAttribute("class") ? toggler.removeAttribute("class") :
	// 	toggler.setAttribute("class", "up");

}

function resolve_target_to_leaf(target: Element): Element {
	if (constr(target.className) !== "String") {
		while (constr(target.className) !== "String" || !target.className.includes("LeafWrapper")) {
			target = target.parentElement!;
		}
		return target.children[1];
	} else if (target.className.includes("LeafWrapper")) {
		return target.children[1];
	}

	return target;
}
