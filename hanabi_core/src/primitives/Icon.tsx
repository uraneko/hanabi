import { Component } from "solid-js";
import { _, parse_svg } from '../misc';
import styles from "./Icon.module.css";

export const Icon: Component<{
	icon: string,
	width: number,
	height: number,
}> = (props: _) => {
	let icon: _ = () => props.icon;
	const width = () => props.width;
	const height = () => props.height;

	icon = parse_svg(icon());
	const stl = icon.style;

	stl.setProperty("width", width() + "px");
	stl.setProperty("height", height() + "px");

	return (
		<span class={styles.Icon}>
			{icon()}
		</span>
	)
};
