import { Component, JSX } from "solid-js";
import { _ } from '../misc';
import styles from './ColorScheme.module.css';

export const ColorScheme: Component<{
	children: JSX.Element,
	red: string, green: string, blue: string,
	abstract: string, opaque: string,
	extra: { name: string, value: string }[],
	black: string, white: string,
}> = (props: _) => {
	const children = () => props.children;

	const red = () => props.red;
	const green = () => props.green;
	const blue = () => props.blue;
	const black = () => props.black;
	const white = () => props.white;
	const abstract = () => props.abstract;
	const opaque = () => props.opaque;
	const extra = () => props.extra;

	[red, green, blue, white, black, abstract, opaque].forEach(
		(color: () => string) => register(color.name, color())
	);

	// return (<div class={styles.ColorScheme}>
	return children();
	// </div>);
};

function register(name: string, val: string) {
	CSS.registerProperty({
		name: "--" + name,
		syntax: "<color>",
		inherits: false,
		initialValue: val,
	});
}
