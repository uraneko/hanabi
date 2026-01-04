import { type Component, createResource, createSignal, For } from 'solid-js';

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
			depict: "manage your schedule and affairs [not yet avalable]"
		},
		{
			// "#9aca43" 
			name: "drive", icon: parse_svg(driveSVG), accent: "#a18369",
			depict: "store, share and backup your files [pre-alpha release]"
		},
		{
			name: "comms", icon: parse_svg(chatSVG), accent: "#1475dc",
			depict: "talk with people in text, audio or video format [not yet avalable]"
		},
		{
			name: "vms", icon: parse_svg(canvasSVG), accent: "#ce1f57",
			depict: "manage your virtual machines [not yet avalable]"
		}];
}

export const Apps = () => {
	const [apps] = createResource(get_apps_meta);
	const [rtt, re_rtt] = createSignal(0);

	return (
		<div class={styles.Apps}>
			<For each={apps()}>
				{(app: _) => <App icon={app.icon} depict={app.depict} name={app.name} accent={app.accent} rtt={rtt()} re_rtt={re_rtt} />}
			</For>
		</div>
	);
};

export const App: Component<{ name: string, depict: string, icon: SVGSVGElement, accent: string, rtt: _, re_rtt: _ }> =
	(props: _) => {
		const rtt = () => props.rtt;
		const re_rtt = () => props.re_rtt;

		const title = () => props.name;
		const depict = () => props.depict;
		const icon = () => props.icon;
		const accent = () => props.accent;

		const change_rtt = () => re_rtt()((rotate: number) => Math.abs(1 - rotate));

		return (<div class={`${styles.App} ${rtt() == 0 ? styles.RightRtt : styles.LeftRtt}`} style={{
			"--accent": accent()
		}} on:mouseenter={change_rtt}>
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
