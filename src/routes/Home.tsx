import { type Component, Show } from 'solid-js';
import { HomeLogo } from 'core/primitives';
import { SigninButton } from 'core/primitives';
import { AppsMenu, appsMenuCtx } from '../components/AppsMenu';

import styles from './Home.module.css';
import appStl from '../App.module.css';
import ams from '../components/AppsMenu.module.css';

export const Home: Component = () => {
	const { show, setShow } = appsMenuCtx();
	const hide = (_e: Event) => setShow((show: boolean) => {
		if (!show) return show;
		const menu = document.querySelector(`${ams.AppsMenu}`);
		if (menu == undefined) return false;
		else return (menu.contains(document.activeElement));
	});

	return (
		<div class={`${styles.Home} ${appStl.AppRoute}`} on:click={hide}>
			<HomeLogo />
			<SigninButton />
			<AppsMenu />
		</div>
	);
};
