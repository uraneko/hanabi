import { type Component, createSignal } from 'solid-js';

import { parse_svg } from "../misc";

import styles from './PasswordField.module.css';

import { TextField } from './TextField';

import seeSVG from "../assets/see.svg?raw";
import noseeSVG from "../assets/nosee.svg?raw";

type _ = any;
type PswMeta = { type: string, svg: SVGSVGElement };

export const PasswordField: Component<{ type: "password" | "text" | "checkbox" | "hidden", name: string, legend: string }> = (props: _) => {
	const name = () => props.name;

	const see = parse_svg(seeSVG);
	const nosee = parse_svg(noseeSVG);

	const [psw, psw_up] = createSignal({ type: "password", svg: nosee });
	const psw_signal = () => psw_up((psw: PswMeta) => {
		return psw.type == "password" ?
			{ type: "text", svg: see } : { type: "password", svg: nosee };
	});

	const legend = () => props.legend;

	return (
		<div class={styles.PasswordField}>
			<TextField type={psw().type} name={name()} legend={legend() ?? "Password"} />
			<button type="button" class={styles.PswSwitch} on:click={psw_signal}>
				{psw().svg}
			</button>
		</div>
	);
};
