import { type Component, createResource, createSignal, For, Switch, Match } from 'solid-js';
import { parse_svg, _ } from "core";
import { user_state } from "user";
import { WildText, Catalyst } from 'core/primitives';
import styles from './Home.module.css';

import radioSVG from "../../../assets/icons/radio.svg?raw"
import driveSVG from "../../../assets/icons/drive.svg?raw"
import calendarSVG from "../../../assets/icons/calendar.svg?raw"
import canvasSVG from "../../../assets/icons/canvas.svg?raw"

export const Home: Component = () => {
	return (
		<div class={styles.Home}>
			<Plugins />
		</div>
	);
};

// TODO use user context's config instead 
async function get_apps_meta() {
	// fetch what apps the user has installed
	const user = user_state();
	const config = user.config();
	const plugins = config.plugins;
	if (plugins === undefined) throw new Error("no plugins in user config");
	return Object.entries(plugins).map((e: _) => { return { name: e[0], ...e[1] } });
}

export const Plugins = () => {
	const user = user_state();
	const [apps] = createResource(get_apps_meta);
	const [rtt, re_rtt] = createSignal(0);

	return (
		<Switch>
			<Match when={user.is_logged_in()}>
				<div class={styles.Plugins}>
					<For each={apps()}>
						{(app: _) => <Plugin icon={app.icon} root={app.root} depict={app.depict} name={app.name} accent={app.accent} rtt={rtt()} re_rtt={re_rtt} />}
					</For>
				</div>
			</Match>
			<Match when={true}>
				<WildText class={styles.Greetings} text="welcome" />
			</Match>
		</Switch>
	);
};

function launch_plugin_root(e: Event) {
	e.preventDefault();
	document.body = document.createElement("body");
	console.log(user_state().config());
}

const Plugin: Component<{ name: string, depict: string, root: string, icon: SVGSVGElement, accent: string, rtt: _, re_rtt: _ }> =
	(props: _) => {
		const rtt = () => props.rtt;
		const re_rtt = () => props.re_rtt;

		const title = () => props.name;
		const depict = () => props.depict;
		const icon = () => props.icon;
		const accent = () => props.accent;

		const change_rtt = () => re_rtt()((rotate: number) => Math.abs(1 - rotate));

		return (<Catalyst link={props.root ?? "/"}
			class={`${styles.Plugin} ${rtt() == 0 ? styles.RightRtt : styles.LeftRtt}`}
			style={{ "--accent": accent() }} on:mouseenter={change_rtt}
			call={launch_plugin_root} call_on_click={true}
		>
			{icon()}
			<span class={styles.PluginText} >
				<span class={styles.PluginTitle}>
					{title()}
				</span>
				<span class={styles.PluginDepict}>
					{depict()}
				</span>
			</span>
		</Catalyst>);
	};
