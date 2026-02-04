import { Component, JSX } from "solid-js";
import { _, constr } from '../misc';
import { colors_ctx, configs_ctx } from '../context';
// import styles from './ColorScheme.module.css';

/// if no children are passed then the styles would be set on the document :root (i.e., accessible to all dom)
/// 
export const ColorScheme: Component<{ children?: JSX.Element, scheme?: string }> = (props: _) => {
	const { configs, re_configs } = configs_ctx();
	const children = () => props.children;
	const { colors, re_colors } = colors_ctx();
	const scheme = () => props.scheme ?? configs().colorschemes.current;

	// BUG this applies the colorscheme before the dom tree is fully loaded
	// non root color variables wont take effect since they use querySelector
	// TODO just make colorscheme a function then call it once App is loaded 
	if (scheme_exists(colors(), scheme())) {
		// sync_scheme(colors()[scheme()]);
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

