import { type Component, createEffect, createSignal } from 'solid-js';
import { type _ } from '../misc';
import styles from './TextField.module.css';

// checks field value correctness with server
const server_validate = (value: string) => value === "???";

export const TextField: Component<{ legend: string, name: string, type: string, mandatory?: boolean }> = (props: _) => {
	const [state, re_state] = createSignal({ lights_up: false, blank_mandatory: false, bad_value: false });
	// on focus
	const focus_signal = () => re_state((state: _) => {
		return { lights_up: true, blank_mandatory: false, bad_value: false };
	});
	// on blur/unfocus
	const blur_signal = (e: Event) => re_state((state: _) => {
		let et = e.target as HTMLInputElement;
		const is_empty = et.value === "";

		return { lights_up: !is_empty, blank_mandatory: mandatory() && is_empty, bad_value: !is_empty && server_validate(et.value) };
	});
	// on click
	const click_signal = (e: Event) => re_state((state: _) => {
		if (state.light_up) return { lights_up: true, blank_mandatory: false, bad_value: false };
		let et = e.target as HTMLInputElement;
		(et.nextElementSibling! as HTMLElement).focus();

		return { lights_up: true, blank_mandatory: false, bad_value: false };
	});

	const name = () => props.name;
	const type = () => props.type;
	const mandatory = () => props.mandatory ?? false;
	const legend = () => {
		if (state().blank_mandatory) return () => props.legend + required;
		else if (state().bad_value) return () => props.legend + taken;

		return () => props.legend;
	};

	return (
		<div class={styles.TextField} lights_up={state().lights_up} blank_mandatory={state().blank_mandatory} bad_value={state().bad_value}>
			<legend on:click={click_signal} class={styles.InputLegend}>
				{legend()}
			</legend>
			<input type={type()}
				on:focus={focus_signal}
				on:blur={blur_signal}
				class={styles.InputField}
				name={name()} />
		</div>
	);
};
const required = " (this field is mandatory)";
const taken = " (this value is already taken)";

// TODO replace forestgreen with this cha like color: #87a187
