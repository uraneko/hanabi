import { type Component, Suspense, createEffect, createResource, createSignal } from 'solid-js';
import { type _ } from '../misc';
import styles from './TextField.module.css';

// TODO #567356 second cha color 
// checks field value correctness with server
async function value_is_free(value: string) {
	return value !== "???";
};

export const TextField: Component<{ legend: string, name: string, type: string, mandatory?: boolean }> = (props: _) => {
	const [state, re_state] = createSignal({ lights_up: false, blank_mandatory: false, bad_value: false });
	const [value, re_value] = createSignal(null as _);
	const [is_free] = createResource(value, value_is_free, { initialValue: true });

	const change_signal = (e: Event) => re_state((state: _) => {
		const et = e.target as HTMLInputElement;
		if (et.value === value() || et.value.length === 0) return state;

		re_value(et.value);
		const is_empty = value().length === 0;

		return { lights_up: !is_empty, blank_mandatory: mandatory() && is_empty, bad_value: !is_empty && !is_free() };
	});
	// on focus
	const focus_signal = () => re_state((state: _) => {
		return { lights_up: true, blank_mandatory: false, bad_value: false };
	});
	// on blur/unfocus
	const blur_signal = (e: Event) => re_state((state: _) => {
		let et = e.target as HTMLInputElement;
		re_value(et.value)
		const is_empty = value().length === 0;

		return { lights_up: !is_empty, blank_mandatory: mandatory() && is_empty, bad_value: !is_empty && !is_free() };
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
	const legend: () => string = (): _ => {
		if (state().blank_mandatory) return () => props.legend + required;
		else if (state().bad_value) return () => props.legend + taken;

		return () => props.legend;
	};

	return (
		<div class={styles.TextField} lights-up={state().lights_up} blank-mandatory={state().blank_mandatory} bad-value={state().bad_value}>
			<legend on:click={click_signal} class={styles.InputLegend}>
				{legend()}
			</legend>
			<input type={type()}
				on:focus={focus_signal}
				on:blur={blur_signal}
				on:change={change_signal}
				class={`${styles.InputField}${mandatory() ? " mandatory" : ""}`}
				name={name()} />
		</div>
	);
};
const required = " (this field is mandatory)";
const taken = " (this value is already taken)";

// TODO replace #87a187 with this cha like color: #87a187
