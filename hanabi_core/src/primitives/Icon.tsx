import { Component } from "solid-js";
import { _, parse_svg } from '../misc';
import styles from "./Icon.module.css";

export const Icon: Component<{
	svg: string,
	width: number,
	height: number,
}> = (props: _) => {
	let svg: _ = () => props.svg;
	const width = () => props.width;
	const height = () => props.height;

	svg = parse_svg(svg());
	const stl = svg.style;

	stl.setProperty("width", width() + "px");
	stl.setProperty("height", height() + "px");

	return (
		<span class={styles.Icon}>
			{svg()}
		</span>
	)
};
