import { type Component, Show } from 'solid-js';

import { svg } from "../App";

import styles from './HomeLogo.module.css';
import loaderStyles from './Loader.module.css';

import logo from "../assets/hanabi.svg?raw";

export const HomeLogo: Component = () => {
	const hanabi = svg(logo);
	// const show = document.querySelector(`.${loaderStyles.Loader}`) == undefined;

	return (
		// <Show when={show} >
		<div class={styles.HomeLogo}>
			<a href="/" class={styles.Anchor}>
				{hanabi}
			</a>
		</div >
		// </Show >
	)
}

