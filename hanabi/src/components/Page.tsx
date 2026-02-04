import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { Logo, Actuator, Icon } from "core/primitives";
import {
	content_ctx, MainContent, configs_ctx, colors_ctx, color_rules, colorschemes, colorscheme
} from "core/context";
import { ColorScheme } from 'core/wrappers';
import { Menu } from "../components/Menu";
import { _ } from "core";
import styles from './Page.module.css';
import hanabiSVG from "../../../assets/icons/hanabi.svg?raw";

function verdant(ctx?: _) {
	const root_rules = color_rules().props({
		// blue alt #450000
		red: "#A95525", green: "#87a187", blue: "#485d6c",
		black: "black", white: "#f0f8ff",
		// opaque: #C4DA9F
		abstract: "#f0f8ff35", opaque: "#a0c65578",
		"grad-start": "rgb(204, 217, 208)",
		"grad-end": "rgb(245, 244, 225)",
		"grad-rotate": "328deg",
	}).prefix(true);
	const logo_rules = color_rules().selectors("svg.hanabi_svg").props({
		":logo-h": "#000000",
		"svg.hanabi_svg:logo-a0": "#000000",
		"svg.hanabi_svg:logo-n": "#000000",
		"svg.hanabi_svg:logo-a1": "#000000",
		"svg.hanabi_svg:logo-b": "#000000",
		"svg.hanabi_svg:logo-I": "#000000",
		"svg.hanabi_svg:logo-dot": "#000000",
		"svg.hanabi_svg:logo-ra": "#649279",
	}).prefix(true);

	return colorscheme().extend(root_rules).extend(logo_rules).make();
}

function black_star(ctx?: _) {
	const root_rules = color_rules().props({
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
		// "grad-start": "#43001e"
		"grad-start": "#330017",
		"grad-end": "#000000",
		"grad-rotate": "341deg",
	}).prefix(true);
	const logo_rules = color_rules().props({
		// selector:css-prop -> prop-val,
		"svg.hanabi_svg:logo-h": "rgb(151, 164, 194)",
		"svg.hanabi_svg:logo-a0": "rgb(151, 164, 194)",
		"svg.hanabi_svg:logo-n": "rgb(151, 164, 194)",
		"svg.hanabi_svg:logo-a1": "rgb(151, 164, 194)",
		"svg.hanabi_svg:logo-b": "rgb(151, 164, 194)",
		"svg.hanabi_svg:logo-I": "rgb(151, 164, 194)",
		"svg.hanabi_svg:logo-dot": "rgb(151, 164, 194)",
		// "svg.hanabi_svg:logo-ra": "#876756",
		"svg.hanabi_svg:logo-ra": "#2573c7",
	}).prefix(true);

	return colorscheme().extend(root_rules).extend(logo_rules).make();
}

export const verdant_ = {
	// blue alt #450000
	red: "#A95525", green: "#87a187", blue: "#485d6c",
	black: "black", white: "#f0f8ff",
	// opaque: #C4DA9F
	abstract: "#f0f8ff35", opaque: "#a0c65578",
	"grad-start": "rgb(204, 217, 208)",
	"grad-end": "rgb(245, 244, 225)",
	"grad-rotate": "328deg",
	"svg.hanabi_svg:logo-h": "#000000",
	"svg.hanabi_svg:logo-a0": "#000000",
	"svg.hanabi_svg:logo-n": "#000000",
	"svg.hanabi_svg:logo-a1": "#000000",
	"svg.hanabi_svg:logo-b": "#000000",
	"svg.hanabi_svg:logo-I": "#000000",
	"svg.hanabi_svg:logo-dot": "#000000",
	"svg.hanabi_svg:logo-ra": "#649279",
};

export const black_star_ = {
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
	// "grad-start": "#43001e"
	"grad-start": "#330017",
	"grad-end": "#000000",
	"grad-rotate": "341deg",
	// selector:css-prop -> prop-val,
	"svg.hanabi_svg:logo-h": "rgb(151, 164, 194)",
	"svg.hanabi_svg:logo-a0": "rgb(151, 164, 194)",
	"svg.hanabi_svg:logo-n": "rgb(151, 164, 194)",
	"svg.hanabi_svg:logo-a1": "rgb(151, 164, 194)",
	"svg.hanabi_svg:logo-b": "rgb(151, 164, 194)",
	"svg.hanabi_svg:logo-I": "rgb(151, 164, 194)",
	"svg.hanabi_svg:logo-dot": "rgb(151, 164, 194)",
	// "svg.hanabi_svg:logo-ra": "#876756",
	"svg.hanabi_svg:logo-ra": "#2573c7",
};
// TODO rename primitives to particles

const { colors, re_colors } = colors_ctx();
colorschemes({ colors, re_colors }).name("verdant").register(verdant());
colorschemes({ colors, re_colors }).name("black-star").register(black_star());
console.log(colors());

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;

	return (
		<ColorScheme>
			<div class={styles.Page}>
				<Actuator link="/" class={styles.Logo}>
					<Icon
						width={140}
						height={60}
						icon={hanabiSVG}
						styles={{
							"logo-dot": "rgb(151, 164, 194)",
							"logo-ra": "#2573c7",
						}}
						overrides={{
							"#path1/#path2/#path3/#path4/#path5/#path6/#path7":
								[{ prop: "stroke", custom: "logo-dot" }],
							"#path8": [{ prop: "fill", custom: "logo-ra" }]
						}}
					/>
				</Actuator>
				<Menu />
				<MainContent>
					{children()}
				</MainContent>
			</div>
		</ColorScheme >
	);
};
