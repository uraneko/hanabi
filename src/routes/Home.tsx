import { type Component, Show } from 'solid-js';
import { HomeLogo } from 'core/primitives';
import { SigninButton } from 'core/primitives';
// import { AppsMenu, appsMenuCtx } from '../components/AppsMenu';

import styles from './Home.module.css';
import appStl from '../App.module.css';
// import ams from '../components/AppsMenu.module.css';
import { parse_svg } from "core";
import chatSVG from "../../../assets/icons/chat.svg?raw"
import colorsSVG from "../../../assets/icons/colors.svg?raw"
import driveSVG from "../../../assets/icons/drive.svg?raw"
import eventsSVG from "../../../assets/icons/events.svg?raw"
import filmSVG from "../../../assets/icons/film.svg?raw"

export const Home: Component = () => {


	return (
		<div class={`${styles.Home} ${appStl.AppRoute}`}>
			<HomeLogo />
			<SigninButton />
			<Apps />
		</div>
	);
};

export const Apps = () => {
	const film = parse_svg(filmSVG);
	const colors = parse_svg(colorsSVG);
	const paperplane = parse_svg(chatSVG);
	const events = parse_svg(eventsSVG);

	return (
		<div class={styles.Apps}>
			<div class={`${styles.A1} ${styles.App}`} >
				<a href="#" >
					{film}
				</a>
			</div>
			<div class={`${styles.A2} ${styles.App}`} >
				<a href="#" >
					{colors}
				</a>
			</div>
			<div class={`${styles.A3} ${styles.App}`} >
				<a href="#" >
					{paperplane}
				</a>
			</div>
			<div class={`${styles.A4} ${styles.App}`} >
				<a href="#" >
					{events}
				</a>
			</div>
		</div>
	);
};
