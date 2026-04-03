import { createContext, useContext, createSignal, DEV } from 'solid-js';

import { Account, Security } from 'configs';
import { user_ctx } from "./user";
import { _ } from "../misc";
import { colors_ctx } from './colorscheme';


const HEADERS = [
	"colors",
	"plugins",
	{
		account: ["security"],
	}
];

const CONTENTS = {
	account: Account,
	"account/security": Security,
	colors: undefined,
	plugins: undefined,
};

const [configs, re_configs] = createSignal(await load_configs());
const configs_context = createContext({ configs, re_configs });

export function configs_ctx() {
	return useContext(configs_context);
}

const root = document.documentElement;
const root_style = root.style;
export async function load_configs(): Promise<Record<_, _>> {
	if (DEV !== undefined)
		return {
			headers: HEADERS,
			...CONTENTS
		};

	const { user, re_user } = user_ctx();
	const resp = await fetch("/configs/read", {
		method: "GET",
		credentials: "include",
		headers: {
			"authorization": `Bearer<${user().access_token!}>`,
		}
	});

	return resp.json();
}

/// extends an existing colorscheme with new :root properties
export function extend(
	colorscheme: string,
	re_colors: _,
	...props: { prop: string, value: string }[]
) {
	re_colors((colors: _) => {
		const scheme = colors[colorscheme];
		if (scheme === undefined) return colors;
		props.forEach((prop: _) => {
			// if (scheme[prop.prop] === prop.value) return;
			scheme[prop.prop] = prop.value;
		});
	});
}

/// extends an existing colorscheme with new element props 
export function extend_selector(
	selector: string,
	colorscheme: string,
	re_colors: _,
	...props: { prop: string, value: string }[]
) {

}

export function extend_rule(
	selector: string,
	colorscheme: string,
	re_colors: _,
	...props: { prop: string, value: string }[]
) {
	const stylesheet = document.styleSheets[0];
	const rule = selector + "";
	stylesheet.insertRule(rule, stylesheet.cssRules.length);
}
