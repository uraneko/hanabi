import { type Component, createSignal } from 'solid-js';

import { svg } from "../App";

import styles from './PasswordField.module.css';

import { TextField } from './TextField';

import seeSVG from "../assets/see.svg?raw";
import noseeSVG from "../assets/nosee.svg?raw";

type PswMeta = { type: string, svg: SVGSVGElement };

export const PasswordField: Component = () => {
	const see = svg(seeSVG);
	const nosee = svg(noseeSVG);

	const [psw, psw_up] = createSignal({ type: "password", svg: see });
	const psw_signal = () => psw_up((psw: PswMeta) => {
		return psw.type == "password" ?
			{ type: "text", svg: nosee } : { type: "password", svg: see };
	});

	return (
		<div class={styles.PasswordField}>
			<TextField type={psw().type} name="user_psw" legend="Password" />
			<button type="button" class={styles.PswSwitch} on:click={psw_signal}>
				{psw().svg}
			</button>
		</div>
	);
};
