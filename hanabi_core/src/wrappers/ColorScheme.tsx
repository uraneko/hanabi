import { Component, JSX } from "solid-js";
import { _ } from '../misc';
import styles from './ColorScheme.module.css';

export const ColorScheme: Component<{ children: JSX.Element, colors: Object }> = (props: _) => {
	const children = () => props.children;

	const colors = () => props.colors;

	// [red, green, blue, white, black, abstract, opaque].forEach(
	// 	(color: () => string) => register(color.name, color())
	// );

	Object.entries(colors()).forEach(([k, v]: _) =>
		assign_prop(k, v));

	// return (<div class={styles.ColorScheme}>
	return children();
	// </div>);
};

function assign_prop(name: string, val: string) {
	document.documentElement.style.setProperty("--" + name, val);
}

