import { type Component, Show } from 'solid-js';
import { parse_svg } from "../misc";
import styles from './Logo.module.css';
import logo from "../../../assets/icons/hanabi.svg?raw";

export const Logo: Component = () => {
	const hanabi = parse_svg(logo);

	return (
		<div class={styles.Logo}>
			<a href="/" class={styles.Anchor}>
				{hanabi}
			</a>
		</div >
	)
}

