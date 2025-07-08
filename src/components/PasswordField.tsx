import { type Component, createSignal } from 'solid-js';

import { svg } from "../App";

import styles from './PasswordField.module.css';
import formStl from './SigninForm.module.css';

import seeSVG from "../assets/see.svg?raw";
import noseeSVG from "../assets/nosee.svg?raw";

type PswMeta = { ty: string, svg: SVGSVGElement };

export const PasswordField: Component = () => {
	const see = svg(seeSVG);
	const nosee = svg(noseeSVG);

	const [psw, psw_up] = createSignal({ ty: "password", svg: see });
	const update = () => psw_up((psw: PswMeta) => {
		console.log(0);

		return psw.ty == "password" ? { ty: "text", svg: nosee } : { ty: "password", svg: see };
	});

	return (
		<div class={styles.PswWrapper}>
			<div class={formStl.InputJar}>
				<legend class={formStl.InputLegend}>Password</legend>
				<input type={psw().ty}
					id="Password"
					class={formStl.InputField}
					name="psw" />
			</div>
			<button class={styles.PswSwitch} onclick={update}>
				{psw().svg}
			</button>
		</div>
	);
};
