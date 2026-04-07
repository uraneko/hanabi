import { Match, Switch, Show, For, JSX, createSignal } from "solid-js";
import { parse_svg } from 'core';
import { Transient, Catalyst, TextField, ColorPicker } from 'core/primitives';
import { user_state } from "../user";
import { _ } from 'core';

import styles from './Colors.module.css';
import pinSVG from "../../../assets/icons/true-pin.svg?raw";

export const Colors = (props: { configs: _ }) => {
	const plugins = () =>
		Object.entries(props.configs).map((kv: _): Scheme => {
			return { name: kv[0], pinned: kv[1].pinned, scheme: kv[1].scheme }
		});

	return <div class={styles.Chapter}>
		<ColorsSchemes schemes={plugins()} />

	</div>;
};

type Scheme = {
	// colorscheme name 
	name: string,
	// actual colors of the colorscheme 
	scheme: _,
	// pinned in the main menu colors button or not 
	pinned: boolean,
};

const ColorsSchemes = (props: { schemes: Scheme[] }) => {
	const schemes = () => props.schemes;
	return <div class={styles.Section}>
		<span class={styles.Title}>Colorschemes</span>
		<div class={styles.SectionContents}>
			<For each={schemes()}>
				{(scheme: Scheme) => <ColorSchemeCard
					name={scheme.name}
					scheme={scheme.scheme}
					pinned={scheme.pinned}
				/>}
			</For>
		</div>
	</div>;
};

const ColorSchemeCard = (props: { name: string, scheme: _, pinned: boolean }) => {
	const name = () => props.name;
	const scheme = () => props.scheme;
	const pinned = () => props.pinned;
	const pin_svg = parse_svg(pinSVG);

	const [pin, re_pin] = createSignal(pinned());
	const toggle_pin = (e: Event) => {
		const et = e.currentTarget as HTMLButtonElement;
		re_pin((pinned: boolean) => {
			et.classList.toggle("Pinned");

			return !pinned;
		})
	};
	const pin_cls = `${styles.PinSwitch}${pin() ? " Pinned" : ""}`;

	return <div class={styles.ColorschemeCard}>
		<div class={styles.SchemeInfo}>
			<span class={styles.SchemeName}>{name()}</span>
			<div class={styles.Switches}>
				<Catalyst
					class={pin_cls}
					call={toggle_pin}
					attrs={{ title: "is pinned?" }}
				>
					{pin_svg}
				</Catalyst>
			</div>
		</div>
		<div class={styles.SchemeColors}>
			<For each={Object.entries(scheme())} >
				{(color: _) => <ColorBox prop={color[0]} val={color[1]} />}
			</For>
		</div>
	</div>;
};

const msg = <Transient timer={1500}><span>color copied!</span></Transient>;
async function copy_to_clipboard(e: Event) {
	const et = e.currentTarget as HTMLElement;
	const target = et.lastElementChild! as HTMLInputElement;
	const hex = target.style.getPropertyValue("background");
	console.log(target);
	await navigator.clipboard.writeText(hex);
	et.appendChild((msg as _)());
}

const ColorBox = (props: { prop: string, val: string }) => {
	const property = () => props.prop;
	const color = () => props.val;

	return <Catalyst class={styles.ColorBox} call={copy_to_clipboard}>
		<span class={styles.PropertyName}>
			{property()}
		</span>
		<Switch>
			<Match when={color().endsWith("deg")}>
				<span class={styles.PropertyText}>{color()}</span>
			</Match>
			<Match when={true}>
				<span class={styles.PropertyValue} style={{ background: `${color()}` }}></span>
			</Match>
		</Switch>
	</Catalyst>

};
