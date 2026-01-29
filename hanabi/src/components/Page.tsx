import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { Logo } from "core/primitives";
import { colors_ctx, register_schemes } from "core/context";
import { ColorScheme } from 'core/wrappers';
import { Menu } from "../components/Menu";
import { _ } from "core";
import styles from './Page.module.css';

export const verdant = {
	// blue alt #450000
	red: "#A95525", green: "#87a187", blue: "#485d6c",
	black: "black", white: "#f0f8ff",
	// opaque: #C4DA9F
	abstract: "#f0f8ff35", opaque: "#a0c65578",
	"grad-start": "rgb(204, 217, 208)",
	"grad-end": "rgb(245, 244, 225)",
	"grad-rotate": "328deg"
};

export const black_star = {
	abstract: "#f0f8ff35", opaque: "#828E83",
	black: "#e3e2e4", white: "#1f212e",
	// blue="rgb(183, 162, 147)"
	// blue alt #738897
	// coffee-ish #a07634
	blue: "#485d6c", green: "#87a187", red: "#A95525",
	"grad-start": "#01012afc", "grad-end": "#000000",
	"grad-rotate": "328deg"
};

const { colors, re_colors } = colors_ctx();
register_schemes(
	re_colors,
	{ name: "verdant", scheme: verdant },
	{ name: "black-star", scheme: black_star }
);

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;

	// return (
	// 	<ColorScheme
	// 		red="#A95525" green="#87a187" blue="#485d6c"
	// 		black="black" white="aliceblue"
	// 		abstract="#f0f8ff35" opaque="#a0c65578"
	// 		extra={{
	// 			"grad-start": "rgb(204, 217, 208)",
	// 			"grad-end": "rgb(245, 244, 225)",
	// 			"grad-rotate": "328deg"
	// 		}}>
	// 		<div class={styles.Page}>
	// 			<Logo />
	// 			<Menu />
	// 			{children()}
	// 		</div>
	// 	</ColorScheme>
	// );
	//
	return (
		<ColorScheme >
			<div class={styles.Page}>
				<Logo />
				<Menu />
				{children()}
			</div>
		</ColorScheme>
	);
};
