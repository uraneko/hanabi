import { type Component, createSignal } from 'solid-js';
import { parse_svg } from '../misc';
import styles from './Splash.module.css';
import svg from "../../../assets/icons/hanabi.svg?raw";

export const Splash: Component = () => {
	const logo = parse_svg(svg);

	return (
		<div class={styles.Splash}>
			{logo}
		</div>
	)
}
