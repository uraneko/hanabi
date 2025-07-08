import { type Component, createSignal } from 'solid-js';
import styles from './LoadingLogo.module.css';

import svg from "../assets/hanabi.svg?raw";

export const LoadingLogo: Component = () => {
	const logoSVG = new DOMParser().parseFromString(svg, "image/svg+xml").querySelector("svg")!;

	return (
		<div class={styles.Loader}>
			{logoSVG}
		</div>
	)
}
