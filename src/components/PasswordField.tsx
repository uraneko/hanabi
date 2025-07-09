import { type Component, createSignal } from 'solid-js';

import { svg } from "../App";

import styles from './PasswordField.module.css';
import formStl from './SigninForm.module.css';

import { TextField } from './TextField';

import seeSVG from "../assets/see.svg?raw";
import noseeSVG from "../assets/nosee.svg?raw";

type PswMeta = { type: string, svg: SVGSVGElement };

export const PasswordField: Component = () => {
	const see = svg(seeSVG);
	const nosee = svg(noseeSVG);

	const [psw, psw_up] = createSignal({ ty: "password", svg: see });
	const psw_signal = () => psw_up((psw: PswMeta) => {
		console.log(0);

		return psw.type == "password" ?
			{ type: "text", svg: nosee } : { type: "password", svg: see };
	});

	return (
		<div class={styles.PswWrapper}>
			<TextField type={psw().type} name="user_psw" legend="Password" />
			<button type="button" class={styles.PswSwitch} onclick={psw_signal}>
				{psw().svg}
			</button>
		</div>
	);
};
