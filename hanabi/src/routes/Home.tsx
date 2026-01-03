import { type Component, createResource, createEffect, For } from 'solid-js';

import styles from './Home.module.css';
import { parse_svg, _ } from "core";
import chatSVG from "../../../assets/icons/chat.svg?raw"
import driveSVG from "../../../assets/icons/drive.svg?raw"
import eventsSVG from "../../../assets/icons/events.svg?raw"
import canvasSVG from "../../../assets/icons/canvas.svg?raw"

export const Home: Component = () => {
	return (
		<div class={styles.Home}>
			<Apps />
		</div>
	);
};

async function get_apps_meta() {
	// fetch what apps the user has installed
	return [
		{
			name: "calendar", icon: parse_svg(eventsSVG), accent: "#00a86b",
			depict: "manage your schedule and happenings"
		},
		{
			// "#9aca43" 
			name: "drive", icon: parse_svg(driveSVG), accent: "#a18369",
			depict: "store, share and backup your files."
		},
		{
			name: "comms", icon: parse_svg(chatSVG), accent: "#1475dc",
			depict: "chat with others, be it in text, audio or video format"
		},
		{
			name: "vms", icon: parse_svg(canvasSVG), accent: "#ce1f57",
			depict: "manage your virtual machines"
		}];
}

export const Apps = () => {
	let [apps] = createResource(get_apps_meta);

	// mutate((apps: _) =>
	// 	apps.map((app: _) => App({ icon: app.icon, depict: app.depict, name: app.name }))
	// );

	return (
		<div class={styles.Apps}>
			<For each={apps()}>
				{(app: _) => <App icon={app.icon} depict={app.depict} name={app.name} accent={app.accent} />}
			</For>
		</div>
	);
};

export const App: Component<{ name: string, depict: string, icon: SVGSVGElement, accent: string }> =
	(props: _) => {
		const title = () => props.name;
		const depict = () => props.depict;
		const icon = () => props.icon;
		const accent = () => props.accent;

		return (<div class={styles.App} style={{
			"--accent": accent()
		}} >
			{icon()}
			<span class={styles.AppText} >
				<span class={styles.AppTitle}>
					{title()}
				</span>
				<span class={styles.AppDepict}>
					{depict()}
				</span>
			</span>
		</div >);
	};
