import { type Component, For, createSignal, createContext, useContext } from 'solid-js';
import styles from './AppsMenu.module.css';
import { parse_svg } from 'comps';

import puzzleSVG from "../../../assets/puzzle.svg?raw";
import eventsSVG from "../../../assets/events.svg?raw";
import driveSVG from "../../../assets/drive.svg?raw";
import chatSVG from "../../../assets/chat.svg?raw";

const [show, setShow] = createSignal(false);
const apps_menu_context = createContext({ show, setShow });

export const AppsMenu: Component = () => {
	const puzzle = parse_svg(puzzleSVG);
	const { show, setShow } = useContext(apps_menu_context);
	const flip = (e: Event) => setShow((show: boolean) => {
		e.stopPropagation();

		return !show;
	});

	return (
		<div class={styles.AppsMenu} show={show()}>
			<button type="button" class={styles.AppsButton} on:click={flip}>
				{puzzle}
			</button>
			<AppsBox />
		</div>
	);
};

type AppMeta = {
	icon: string,
	description: string,
	name: string,
};

const app_card = (icon: string, description: string, name: string): AppMeta => {
	return {
		icon, description, name
	}
}

export const AppsBox: Component = () => {
	const drive = app_card(driveSVG, "Manage and share files", "Drive");
	const events = app_card(eventsSVG, "Stay up on your schedule", "Events");
	const chat = app_card(chatSVG, "Connect and talk with others", "Chat");

	return (
		<div class={styles.AppsBox}>
			<For each={[drive, events, chat]}>
				{(app: AppMeta) => {
					return <AppCard meta={app} />
				}}
			</For>
		</div>
	);
};

export const AppCard: Component<{ meta: AppMeta }> = (props: { meta: AppMeta }) => {
	const meta = props.meta;
	const svg = parse_svg(meta.icon);

	return (
		<button type="button" class={styles.AppCard}>
			<div class={styles.AppIcon}>
				{svg}
			</div>
			<div class={styles.AppText}>
				<span class={styles.AppName}>{meta.name}</span>
				<span class={styles.AppDescription}>{meta.description}</span>
			</div>

		</button >
	);
};

export function appsMenuCtx() {
	return useContext(apps_menu_context);
}

