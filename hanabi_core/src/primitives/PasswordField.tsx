import { type Component, Match, Switch, createSignal } from 'solid-js';
import { parse_svg } from "../misc";
import { TextField } from './TextField';
import { _ } from '../misc';
import { colorschemes, colorscheme, color_rules, colors_ctx } from '../context';

import styles from './PasswordField.module.css';
// import seeSVG from "../../../assets/icons/see.svg?raw";
import monocleSVG from "../../../assets/icons/nosee.svg?raw";


export const PasswordField: Component<{ type?: "password" | "text", name?: string, legend?: string, mandatory?: boolean }> = (props: _) => {
	const name = () => props.name;
	const mandatory = () => props.mandatory;

	const monocle = parse_svg(monocleSVG);

	const [show, re_show] = createSignal(false);
	const flip = (e: Event) => re_show((show: boolean) => {
		const t = e.currentTarget as Element;
		console.log(t.firstElementChild!.querySelector("path#path8")
		);
		const stroke = (t.firstElementChild!.querySelector("path#path8") as HTMLElement).style;
		show ? stroke.removeProperty("stroke") : stroke.setProperty("stroke", "none");

		return !show;
	});

	const legend = () => props.legend;

	return (
		<div class={styles.PasswordField}>
			<TextField type={show() ? "text" : "password"} name={name()} legend={legend() ?? "Password"} mandatory={mandatory()} />
			<button type="button" class={styles.PswSwitch} on:click={flip}>
				{monocle}
			</button>
		</div>
	);
};

// maybe use these and ditch svgs altogether (-.-) / (o,o)

// new Promise(_ => setTimeout(() => {
// 	const rule =
// 		color_rules().selectors('.' + styles.PswSwitch + " svg ").props({ "stroke": "var(--blue)" })
//
// 	const schemes = colorschemes();
// 	console.log(schemes.load_all());
// 	schemes.load_all().forEach(([name, scheme]: _) => {
// 		scheme = colorscheme(scheme.selectors, scheme.props);
// 		scheme.extend(rule);
// 		console.log(scheme);
// 		schemes.update(name, scheme.make());
// 	});
// 	const { colors, re_colors } = colors_ctx();
// 	console.log(colors());
// }, 500))
//
//
