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
	const psw_signal = () => psw_up((psw: PswMeta) => {
		console.log(0);

		return psw.ty == "password" ? { ty: "text", svg: nosee } : { ty: "password", svg: see };
	});

	const [focused, focus_up] = createSignal(false);
	const focus_signal = () => focus_up((on: boolean) => {
		const parent = document.querySelector(`.${formStl.InputField}`)!;
		on ? parent.removeAttribute("input-focus")
			: parent.setAttribute("input-focus", String(on));

		return !on;
	});

	return (
		<div class={styles.PswWrapper}>
			<div class={formStl.InputJar} input-focus={focused()}>
				<legend class={formStl.InputLegend}>Password</legend>
				<input type={psw().ty}
					onfocus={focus_signal}
					onblur={focus_signal}
					id="Password"
					class={formStl.InputField}
					name="user_psw" />
			</div>
			<button type="button" class={styles.PswSwitch} onclick={psw_signal}>
				{psw().svg}
			</button>
		</div>
	);
};
