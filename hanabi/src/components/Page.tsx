import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { Logo, Catalyst, Icon } from "core/primitives";
import {
	content_ctx, MainContent, configs_ctx, colors_ctx, color_rules, colorschemes, colorscheme
} from "core/context";
import { ColorScheme } from 'core/wrappers';
import { Menu } from "../components/Menu";
import { _ } from "core";
import styles from './Page.module.css';
import hanabiSVG from "../../../assets/icons/hanabi.svg?raw";

function verdant() {
	const root_rules = color_rules().props({
		// blue alt #450000
		// blue alt #5f8099
		// blue alt #005c43
		// blue alt #6c2d47f7
		// blue alt #9D957E
		// blue alt #585F74
		// blue alt #67a5b4
		// blue alt #6c9081
		// #c5b88e
		red: "#A95525", green: "#87a187", blue: "#485d6c",
		black: "black", white: "#f0f8ff",
		// opaque: #C4DA9F
		abstract: "#f0f8ff35", opaque: "#a0c65578",
		"grad-start": "rgb(204, 217, 208)",
		"grad-end": "rgb(245, 244, 225)",
		"grad-rotate": "328deg",
	}).prefix(true);
	const logo_rules = color_rules().selectors("svg.hanabi_svg").props({
		"h": "#000000",
		"a0": "#000000",
		"n": "#000000",
		"a1": "#000000",
		"b": "#000000",
		"i": "#000000",
		"dot": "#000000",
		"ra": "#649279",
	}).prefix(true);

	return colorscheme()
		.extend(root_rules)
		.extend(logo_rules)
		.make();
}

function black_star() {
	const root_rules = color_rules().props({
		opaque: "#303553",
		abstract: "rgba(73, 126, 172, 0.21)",
		black: "#e3e2e4",
		// #131c5c
		white: "#1f212e",
		// blue: "rgb(151, 164, 194)",
		// blue: "rgb(183, 162, 147)",
		// blue: "#738897",
		// blue #bbbbb3
		// whiteish #E5E5E5
		// blue #9390bf
		// blue #a68cb5
		// coffee-ish #a07634
		// blue: "#485d6c"
		blue: "#778c9b", green: "#87a187", red: "#A95525",
		// "grad-start": "#01012afc", 
		"grad-start": "#43001e",
		"grad-end": "#000000",
		"grad-rotate": "341deg",
	}).prefix(true);
	const logo_rules = color_rules()
		.props({
			// selector:css-prop -> prop-val,
			"h": "rgb(151, 164, 194)",
			"a0": "rgb(151, 164, 194)",
			"n": "rgb(151, 164, 194)",
			"a1": "rgb(151, 164, 194)",
			"b": "rgb(151, 164, 194)",
			"i": "rgb(151, 164, 194)",
			"dot": "rgb(151, 164, 194)",
			// "ra": "#876756",
			"ra": "#2573c7",
		}).selectors("svg.hanabi_svg")
		.prefix(true);

	return colorscheme().extend(root_rules).extend(logo_rules).make();
}

// export const verdant_ = {
// 	// blue alt #450000
// 	red: "#A95525", green: "#87a187", blue: "#485d6c",
// 	black: "black", white: "#f0f8ff",
// 	// opaque: #C4DA9F
// 	abstract: "#f0f8ff35", opaque: "#a0c65578",
// 	"grad-start": "rgb(204, 217, 208)",
// 	"grad-end": "rgb(245, 244, 225)",
// 	"grad-rotate": "328deg",
// 	"svg.hanabi_svg:h": "#000000",
// 	"svg.hanabi_svg:a0": "#000000",
// 	"svg.hanabi_svg:n": "#000000",
// 	"svg.hanabi_svg:a1": "#000000",
// 	"svg.hanabi_svg:b": "#000000",
// 	"svg.hanabi_svg:I": "#000000",
// 	"svg.hanabi_svg:dot": "#000000",
// 	"svg.hanabi_svg:ra": "#649279",
// };
//
// export const black_star_ = {
// 	opaque: "#303553",
// 	abstract: "rgba(73, 126, 172, 0.21)",
// 	black: "#e3e2e4",
// 	white: "#1f212e",
// 	// blue: "rgb(151, 164, 194)",
// 	// blue: "rgb(183, 162, 147)",
// 	// blue: "#738897",
// 	// coffee-ish #a07634
// 	// blue: "#485d6c"
// 	blue: "#778c9b", green: "#87a187", red: "#A95525",
// 	// "grad-start": "#01012afc", 
// 	// "grad-start": "#43001e"
// 	"grad-start": "#330017",
// 	"grad-end": "#000000",
// 	"grad-rotate": "341deg",
// 	// selector:css-prop -> prop-val,
// 	"svg.hanabi_svg:h": "rgb(151, 164, 194)",
// 	"svg.hanabi_svg:a0": "rgb(151, 164, 194)",
// 	"svg.hanabi_svg:n": "rgb(151, 164, 194)",
// 	"svg.hanabi_svg:a1": "rgb(151, 164, 194)",
// 	"svg.hanabi_svg:b": "rgb(151, 164, 194)",
// 	"svg.hanabi_svg:I": "rgb(151, 164, 194)",
// 	"svg.hanabi_svg:dot": "rgb(151, 164, 194)",
// 	// "svg.hanabi_svg:ra": "#876756",
// 	ra: #46394E
// 	"svg.hanabi_svg:ra": "#2573c7",
// };

const { colors, re_colors } = colors_ctx();
colorschemes({ colors, re_colors }).name("verdant").register(verdant());
colorschemes({ colors, re_colors }).name("black-star").register(black_star());

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;

	return (
		<div class={styles.Page}>
			<Catalyst link="/" class={styles.Logo}>
				<Logo
					width={140}
					height={60}
				/>
			</Catalyst>
			<Menu />
			<MainContent>
				{children()}
			</MainContent>
		</div>
	);
};

let nodes = 0;
const watchguard = new MutationObserver(() => {
	// new Promise(_ => setTimeout(_, 100));
	if (nodes === 1) {
		// console.log(colors()["verdant"]);
		colorschemes().refresh("black-star");
		watchguard.disconnect();

		return;
	}
	nodes += 1;
});

watchguard.observe(document.body, { childList: true, subtree: true });
