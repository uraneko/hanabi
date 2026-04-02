import { children, JSX, For, Switch, Match, createSignal, createEffect, DEV } from "solid-js";
import { dbl_signal, dbl_method, _, spread_classes, fallback, parse_svg, constr } from "core";
import { Catalyst, ColorPicker, svg } from "core/primitives";
import { user_ctx, is_logged_in, is_authless, content_ctx, configs_ctx } from "core/context";
import { Dialog, BuildTree } from 'core/containers';
import { WildText } from 'core/primitives';

import styles from "./Configs.module.css";
import atSVG from "../../assets/icons/at.svg?raw";
import puzzleSVG from "../../assets/icons/puzzle.svg?raw";
import colorsSVG from "../../assets/icons/colors.svg?raw";
import sharedSVG from "../../assets/icons/shared.svg?raw";
import diceSVG from "../../assets/icons/dice.svg?raw";
import glassesSVG from "../../assets/icons/glasses.svg?raw";
import peopleSVG from "../../assets/icons/people.svg?raw";
import rocketSVG from "../../assets/icons/rocket.svg?raw";
import keySVG from "../../assets/icons/key.svg?raw";
import newSVG from "../../assets/icons/new.svg?raw";
import manageSVG from "../../assets/icons/manage.svg?raw";
import upSVG from "../../assets/icons/up.svg?raw";
import downSVG from "../../assets/icons/down.svg?raw";

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

export const Configs = () => {
	const { user, re_user } = user_ctx();
	const { configs, re_configs } = configs_ctx();
	const headers = () => configs()["headers"];
	const contents = () => Object.fromEntries(
		Object.entries(configs()).filter((kv: _) => kv[0] !== "headers"));
	const init = constr(headers()[0]) === "String" ? headers()[0] : Object.keys(headers()[0])[0];
	const [content, re_content] = createSignal(init);
	return (<div class={styles.Configs} auth-status={is_logged_in(user())}>
		<Switch>
			<Match when={is_logged_in(user())}>
				<Headers headers={headers()} updater={re_content} />
				<Contents contents={contents()} header={content()} />
			</Match>
			<Match when={is_authless(user())} >
				<WildText text="You are not logged-in." />
			</Match>
		</Switch>
	</div >);
};

const Headers = (props: { headers: _, updater: _ }) => {
	const headers = () => props.headers;
	const re_content = () => props.updater;
	const onclick = (e: Event) => re_content()((_path: string) => {
		const et = resolve_target_to_leaf(e.target as Element) as HTMLButtonElement;

		return collect_header_path(et);
	});
	const tree = <BuildTree data={headers()} ident="35px" />;
	iter_map(tree, add_icons_to_headers);
	iter_map(tree, toggle_tree_nested);

	return (<div class={styles.Headers} on:click={onclick}>
		{tree}
	</div >);
};

const Contents = (props: { header: string, contents: _ }) => {
	const header = () => /* props.header.includes('/') ? props.header.split('/') : */ props.header;
	const configs = () => get_header_contents(props.contents, header());

	return <div class={styles.Contents}>
		<ParseConfigs configs={configs()} />
	</div>;
};

// configs is a json object
const ParseConfigs = (props: { configs: string }) => {
	const configs = () => new DOMParser().parseFromString(props.configs, "text/html").body.firstElementChild;

	return <div class={styles.ConfigContents}>
		{configs()}
	</div>;
};

function get_header_contents(contents: _, header: string) {
	return contents[header] ??
		`<div>
			<span>This section is a work-in-progress</span>
			<span style='font-weight: bold;'>(˶ᵔ ᵕ ᵔ˶)</span>
	</div>`;
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
		path += (path.length === 0 ? '' : '/') + parent.firstElementChild!.children[1].textContent;
		path += '/' + current.textContent;
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

function toggle_tree_nested(headers: Element) {
	new Array(...headers.querySelectorAll("[class*=BranchName]"))
		.forEach((bn: _) => {
			const down = DOWN.cloneNode(true);
			const wrapper = bn.parentElement;
			wrapper.appendChild(down);
			wrapper.addEventListener("dblclick", toggle_nested_leaves);
		})
}

function toggle_nested_leaves(e: Event) {
	const et = e.currentTarget! as Element;
	const branch = et.parentElement!;
	// leaf wrappers
	const leaves = new Array(...branch.children).slice(1);
	leaves.forEach((leafw: _) => leafw.classList.toggle("off"));
	const toggler = et.lastElementChild!;
	toggler.hasAttribute("class") ? toggler.removeAttribute("class") :
		toggler.setAttribute("class", "up");

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
