import { type Component, createSignal } from 'solid-js';

import styles from './Splash.module.css';
import appStl from '../App.module.css';

import { LoadingLogo } from "../components/LoadingLogo";

export const Splash: Component = () => {
	return (
		<div class={`${styles.Splash} ${appStl.AppRoute}`}>
			<LoadingLogo />
		</div>
	);
};

