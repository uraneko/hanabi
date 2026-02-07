import { createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";
import { colors_ctx } from './colorscheme';

async function load_configs() {
	return default_configs() as Record<_, _>;
}

const [configs, re_configs] = createSignal(await load_configs());
const configs_context = createContext({ configs, re_configs });

export function configs_ctx() {
	return useContext(configs_context);
}

export function default_configs() {
	return {
		account: {},
		relations: {},
		applications: {},
		colorschemes: {
			current: "black-star",
		}
	};
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
