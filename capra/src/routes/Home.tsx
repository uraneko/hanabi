import { type Component, createResource, createSignal, For, Switch, Match } from 'solid-js';
import { parse_svg, _ } from "core";
import { user_state } from "user";
import { WildText } from 'core/primitives';
import styles from './Home.module.css';

import radioSVG from "../../../assets/icons/radio.svg?raw"
import driveSVG from "../../../assets/icons/drive.svg?raw"
import calendarSVG from "../../../assets/icons/calendar.svg?raw"
import canvasSVG from "../../../assets/icons/canvas.svg?raw"

export const Home: Component = () => {
	return (
		<div class={styles.Home}>
			<Apps />
		</div>
	);
};

// TODO use user context's config instead 
async function get_apps_meta() {
	// fetch what apps the user has installed
	return [
		{
			name: "calendar", icon: parse_svg(calendarSVG), accent: "#c29884",
			depict: "manage your schedule and affairs [not yet available]"
		},
		{
			// "#a18369",
			// "#9aca43" 
			name: "drive", icon: parse_svg(driveSVG), accent: "#859f60",
			depict: "store, share and backup your files [not yet available]"
		},
		{
			name: "comms", icon: parse_svg(radioSVG), accent: "#1475dc",
			depict: "talk with people in text, audio or video format [not yet available]"
		},
		{
			name: "machines", icon: parse_svg(canvasSVG), accent: "#bd0841",
			depict: "manage your virtual machines [not yet available]"
		}];
}

export const Apps = () => {
	const user = user_state();
	const [apps] = createResource(get_apps_meta);
	const [rtt, re_rtt] = createSignal(0);

	return (
		<Switch>
			<Match when={user.is_logged_in()}>
				<div class={styles.Apps}>
					<For each={apps()}>
						{(app: _) => <App icon={app.icon} depict={app.depict} name={app.name} accent={app.accent} rtt={rtt()} re_rtt={re_rtt} />}
					</For>
				</div>
			</Match>
			<Match when={true}>
				<WildText class={styles.Greetings} text="welcome" />
			</Match>
		</Switch>
	);
};

const App: Component<{ name: string, depict: string, icon: SVGSVGElement, accent: string, rtt: _, re_rtt: _ }> =
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
