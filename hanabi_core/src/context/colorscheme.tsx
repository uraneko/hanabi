import { createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";

const [colors, re_colors] = createSignal(new Object() as Record<string, string>);
const colors_context = createContext({ colors, re_colors });
export function colors_ctx() {
	return useContext(colors_context)
}

export function register_scheme(name: string, scheme: Object, re_colors: _) {
	re_colors((colors: _) => {
		colors[name] = scheme;

		return structuredClone(colors);
	});
}

export function register_schemes(re_colors: _, ...schemes: { name: string, scheme: Object }[]) {
	re_colors((colors: _) => {
		schemes.forEach((scheme: _) =>
			colors[scheme.name] = scheme.scheme
		);

		return structuredClone(colors);
	});
}

export function sync_scheme(colors: Object) {
	// console.log(colors);
	const root_colors = Object.entries(colors)
		.filter(([k, v]: _) => !k.includes(':'));
	// console.log(root_colors);

	const styles = document.documentElement.style;
	root_colors
		.forEach(([k, v]: _) =>
			styles.setProperty("--" + k, v));
	if (root_colors.length === Object.keys(colors).length) return;

	const targets = new Object() as Record<string, { prop: string, val: string }[]>;
	Object.entries(colors)
		.filter(([k, v]: _) => k.includes(':'))
		.map(([k, v]) => {
			const split = k.split(':');

			return { selector: split[0], prop: split[1], value: v };
		}).forEach((target: _) => {
			if (targets[target.selector] === undefined) {
				targets[target.selector] = [{ prop: target.prop, val: target.value }];
			} else {
				targets[target.selector].push({ prop: target.prop, val: target.value });
			}
		});
	// console.log(targets);
	Object.entries(targets).forEach(([selector, properties]: _) => {
		const els = document.querySelectorAll(selector);
		// console.log(els,
		// 	document.querySelectorAll("svg.hanabi\\.svg")
		// );
		if (els.length === 0) return;

		properties.forEach((prop: _) =>
			els.forEach((el: _) =>
				el.style.setProperty("--" + prop.prop, prop.val))
		);
	});
}
