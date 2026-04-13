import { Match, Switch, For } from "solid-js";
import { parse_svg } from 'core';
import { Catalyst, TextField } from 'core/primitives';
import { user_state } from "../user";
import { _ } from 'core';

import styles from './Plugins.module.css';
import rmSVG from "../../../assets/icons/remove.svg?raw";

export const Plugins = (props: { configs: _ }) => {
	const plugins = () =>
		Object.entries(props.configs).map((kv: _): Plugin => {
			return { icon: kv[1].icon, name: kv[0], accent: kv[1].accent }
		});

	return <div class={styles.Chapter}>
		<Installed plugins={plugins()} />

	</div>;
};

type Plugin = {
	// url of icon svg
	icon: string,
	// plugin name 
	name: string,
	// accent color of the plugin
	accent: string,
};

const Installed = (props: { plugins: Plugin[] }) => {
	const plugins = () => props.plugins;
	return <div class={styles.Section}>
		<span class={styles.Title}>Installed</span>
		<div class={styles.SectionContents}>
			<For each={plugins()}>
				{(plugin: Plugin) => <PluginCard name={plugin.name} icon={plugin.icon} accent={plugin.accent} />}
			</For>
		</div>
	</div>;
};

const PluginCard = (props: { name: string, icon: string, accent: string }) => {
	const name = () => props.name;
	const icon = () => props.icon;
	const accent = () => props.accent;
	const rm = parse_svg(rmSVG);

	// const svg = <svg >
	// 	<image xlink:href={icon()} />
	// </svg>;

	return <div class={styles.PluginCard} style={{ "--accent": `${accent()}` }}>
		<div class={styles.PluginInfo}>
			{icon()}
			<span class={styles.PluginName}>{name()}</span>
		</div>
		<Catalyst class={styles.DisablePlugin} attrs={{ title: "remove" }}>
			{rm}
		</Catalyst>
	</div>;
};

