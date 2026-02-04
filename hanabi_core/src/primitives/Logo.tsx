import { type Component, Show } from 'solid-js';
import { _, parse_svg } from "../misc";
import styles from './Logo.module.css';
import logo from "../../../assets/icons/hanabi.svg?raw";

export const Logo: Component<{ width?: number, height?: number }> = (props: _) => {
	const width = () => props.width ?? 140;
	const height = () => props.height ?? 60;

	const hanabi = parse_svg(logo);
	hanabi.classList.add("hanabi_svg");
	assign_svg_dimensions(hanabi, width(), height());

	return <span class={styles.Logo}>{hanabi}</span>;
};

function assign_svg_dimensions(svg: SVGSVGElement, width: number, height: number) {
	const style = svg.style;
	style.setProperty("width", width + "px");
	style.setProperty("height", height + "px");
}

