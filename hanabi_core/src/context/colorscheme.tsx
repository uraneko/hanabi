import { createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";

const [colors, re_colors] = createSignal(new Object());

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
	const styles = document.documentElement.style;
	Object.entries(colors).forEach(([k, v]: _) =>
		styles.setProperty("--" + k, v));

}
