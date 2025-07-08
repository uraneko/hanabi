import { type Component, Show } from 'solid-js';

import styles from './Home.module.css';
import appStl from '../App.module.css';

import { HomeLogo } from '../components/HomeLogo';
import { SigninButton } from '../components/SigninButton';

export const Home: Component = () => {
	return (
		<div class={`${styles.Home} ${appStl.AppRoute}`}>
			<HomeLogo />
			<SigninButton />
		</div>
	);
};
