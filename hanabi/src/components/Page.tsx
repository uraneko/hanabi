import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { Logo, Actuator } from "core/primitives";
import { content_ctx, MainContent, colors_ctx, register_schemes } from "core/context";
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
	"grad-rotate": "328deg",
	"svg.hanabi\\.svg:logo-h": "#000000",
	"svg.hanabi\\.svg:logo-a0": "#000000",
	"svg.hanabi\\.svg:logo-n": "#000000",
	"svg.hanabi\\.svg:logo-a1": "#000000",
	"svg.hanabi\\.svg:logo-b": "#000000",
	"svg.hanabi\\.svg:logo-I": "#000000",
	"svg.hanabi\\.svg:logo-dot": "#000000",
	"svg.hanabi\\.svg:logo-ra": "#649279",
};

export const black_star = {
	opaque: "#303553",
	abstract: "rgba(73, 126, 172, 0.21)",
	black: "#e3e2e4",
	white: "#1f212e",
	// blue: "rgb(151, 164, 194)",
	// blue: "rgb(183, 162, 147)",
	// blue: "#738897",
	// coffee-ish #a07634
	// blue: "#485d6c"
	blue: "#778c9b", green: "#87a187", red: "#A95525",
	// "grad-start": "#01012afc", 
	"grad-start": "#43001e", "grad-end": "#000000",
	"grad-rotate": "328deg",
	// selector:css-prop -> prop-val,
	"svg.hanabi\\.svg:logo-h": "rgb(151, 164, 194)",
	"svg.hanabi\\.svg:logo-a0": "rgb(151, 164, 194)",
	"svg.hanabi\\.svg:logo-n": "rgb(151, 164, 194)",
	"svg.hanabi\\.svg:logo-a1": "rgb(151, 164, 194)",
	"svg.hanabi\\.svg:logo-b": "rgb(151, 164, 194)",
	"svg.hanabi\\.svg:logo-I": "rgb(151, 164, 194)",
	"svg.hanabi\\.svg:logo-dot": "rgb(151, 164, 194)",
	// "svg.hanabi\\.svg:logo-ra": "#876756",
	"svg.hanabi\\.svg:logo-ra": "#2573c7",

};

const { colors, re_colors } = colors_ctx();
register_schemes(
	re_colors,
	{ name: "verdant", scheme: verdant },
	{ name: "black-star", scheme: black_star }
);

import { Home } from '../routes/Home';

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;

	return (
		<ColorScheme>
			<div class={styles.Page}>
				<Actuator link="/" class={styles.Logo}>
					<Logo />
				</Actuator>
				<Menu />
				<MainContent>
					{children()}
				</MainContent>
			</div>
		</ColorScheme >
	);
};
