import { type Component, JSX, Show, For, createSignal, DEV } from "solid-js";
import { dbl_signal, dbl_method, _, spread_classes, parse_svg, constr } from "core";
import { Catalyst, ColorPicker } from "core/primitives";
import { user_ctx, content_ctx, configs_ctx } from "core/context";
import { Dialog, BuildTree } from 'core/containers';

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
import prevSVG from "../../assets/icons/prev.svg?raw";

const HEADERS = [
	"main",
	"account",
	"colors",
	{
		plugins: ["installed", "available", "banned"],
		relations: ["friends", "acquaintances", "blocked"],
	}
];

export const Configs = (props: { headers: _, contents: _ }) => {
	const headers = () => props.headers;
	const contents = () => props.contents;
	const init = constr(headers()[0]) === "String" ? headers()[0] : Object.keys(headers()[0])[0];
	const [content, re_content] = createSignal(init);
	return (<Dialog class={styles.Configs} width={54} height={56} top={50} left={50} center overtakes >
		<Headers headers={headers()} updater={re_content} />
		<Contents contents={contents()} header={content()} />
	</Dialog>);
};

const Headers = (props: { headers: _, updater: _ }) => {
	const headers = () => props.headers;
	const re_content = () => props.updater;
	const onclick = (e: Event) => re_content()((path: string) => {
		const et = e.target as HTMLButtonElement;

		return collect_header_path(et);
	});

	return (<div class={styles.Headers} on:click={onclick}>
		<BuildTree data={headers()} ident="15px" />
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
		`<div styles='display: flex; flex-direction: row;'>
			<span>This section is a work-in-progress</span>
			<span styles='font-weight: bold;'>(˶ᵔ ᵕ ᵔ˶)</span>
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
	const parent = current.parentElement!;
	if (parent.tagName === "BODY") throw new Error("reached dom root");
	else if (parent.className.includes("Tree")) return path.length === 0 ? current.textContent! : path + '/' + current.textContent;
	else if (current.className.includes("Leaf")) {
		// assumes user didnt provide a custom tree transform 
		path += (path.length === 0 ? '' : '/') + parent.firstElementChild!.textContent;
		path += '/' + current.textContent;
	}

	return path;
}


