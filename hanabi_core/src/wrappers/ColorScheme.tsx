import { Component, JSX } from "solid-js";
import { _ } from '../misc';
import { colors_ctx, sync_scheme } from '../context';
// import styles from './ColorScheme.module.css';

export const ColorScheme: Component<{ children: JSX.Element, scheme?: string }> = (props: _) => {
	const children = () => props.children;
	const { colors, re_colors } = colors_ctx();
	const scheme = () => props.scheme ?? read_ls() ?? Object.keys(colors())[0];

	if (scheme_exists(colors(), scheme())) {
		sync_scheme(colors()[scheme()]);
		sync_ls(scheme());
	}

	// return (<div class={styles.ColorScheme}>
	return children();
	// </div>);
};

function scheme_exists(colors: Object, scheme: string): boolean {
	return Object.keys(colors).includes(scheme);
}

function assign_prop(name: string, val: string) {
	document.documentElement.style.setProperty("--" + name, val);
}

export function sync_ls(scheme: string) {
	localStorage.setItem("colorscheme", scheme);
}

export function read_ls(): null | string {
	return localStorage.getItem("colorscheme");
}
