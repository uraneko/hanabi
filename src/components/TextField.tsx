import { type Component, createSignal } from 'solid-js';

import styles from './TextField.module.css';
type _ = any;

export const TextField: Component = (props: _) => {
	const [focused, focus_up] = createSignal(false);
	const focus_signal = () => focus_up((on: boolean) => {
		return true;
	});
	const blur_signal = (e: Event) => focus_up((_on: boolean) => {
		let et = e.target as HTMLInputElement;

		return et.value !== "";
	});
	const click_signal = (e: Event) => focus_up((on: boolean) => {
		if (on) return on;
		let et = e.target as HTMLInputElement;
		(et.nextElementSibling! as HTMLElement).focus();

		return true;
	});

	const legend = () => props.legend;
	const name = () => props.name;
	const type = () => props.type;

	return (
		<div class={styles.TextField} input-focus={focused()}>
			<legend on:click={click_signal} class={styles.InputLegend}>{legend()}</legend>
			<input type={type()}
				on:focus={focus_signal}
				on:blur={blur_signal}
				class={styles.InputField}
				name={name()} />
		</div>
	);
};
