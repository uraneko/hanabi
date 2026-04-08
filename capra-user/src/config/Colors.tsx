import { Match, Switch, Show, For, JSX, createSignal } from "solid-js";
import { parse_svg } from 'core';
import { Transient, Catalyst } from 'core/primitives';
import { _ } from 'core';
import { colors_ctx } from "core/context";

import styles from './Colors.module.css';
import pinSVG from "../../../assets/icons/true-pin.svg?raw";

function treat_props(props: _) {
	const treated_arr = Object.entries(props).map((kv: _) => [kv[0].startsWith("--") ? kv[0].slice(2) : kv[0], kv[1].value]);

	return Object.fromEntries(treated_arr);
}


export const Colors = (props: { configs: _ }) => {
	const { colors, re_colors } = colors_ctx();

	const plugins = () =>
		Object.entries(colors()).map((kv: _): Scheme => {
			return { name: kv[0], pinned: kv[1].pinned, scheme: treat_props(kv[1].props) }
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
	const { colors, re_colors } = colors_ctx();
	const name = () => props.name;
	const scheme = () => props.scheme;
	const pinned = () => props.pinned;
	const pin_svg = parse_svg(pinSVG);

	const [pin, re_pin] = createSignal(pinned());
	const toggle_pin = (e: Event) => {
		const et = e.currentTarget as HTMLButtonElement;
		re_pin((pinned: boolean) => {
			et.classList.toggle("Pinned");
			re_colors((colors: _) => {
				console.log(colors[name()]);
				if (colors[name()] === undefined) return colors;
				colors[name()].pinned = !pinned;

				return structuredClone(colors);
			});
			console.log(colors());

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
