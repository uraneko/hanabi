import { type Component, Show, createSignal, mergeProps } from 'solid-js';

import styles from './CheckBox.module.css';

type _ = any;

const defaultProps = {
	width: 0.6,
	height: 0.6,
	state: false,
	tick: "",
	accent: "#485d6c",

};

// type CheckBoxProps = {
// 	width: number,
// 	height: number,
// 	state: boolean,
// 	accent: string,
// 	tick: string,
// 	name: string,
// 	legend: string,
// };

export const CheckBox: Component = (_props: _) => {
	const props = mergeProps(defaultProps, _props);

	const state = () => props.state;
	const accent = () => props.accent;
	const tick = () => props.tick;
	const w = () => props.width;
	const h = () => props.height;
	const legend = () => props.legend;
	const name = () => props.name;

	const [s, up] = createSignal(state());
	const toggle_mark = () => up((_: boolean) => {
		return !s();
	});

	return (
		<div class={styles.CheckBox} on:click={toggle_mark}>
			<Show when={name() !== undefined}>
				<input type="hidden" class={styles.Postman} name={name()} value={s()} />
			</Show>
			<div
				class={styles.Box}
				style={{
					border: `0.11em solid ${accent()}`,
					background: "transparent",
					width: `${w() + 0.19}em`,
					height: `${h() + 0.19}em`
				}}
				box-state={s()}
			>
				<div
					class={styles.Content}
					style={{
						background: accent(),
						width: `${w()}em`,
						height: `${h()}em`
					}}
				>
					<Show when={tick() !== ""} >
						<span class={styles.TickMark}>{tick()}</span>
					</Show>
				</div>
			</div>
			<Show when={legend() !== undefined} >
				<legend>{legend()}</legend>
			</Show>
		</div >
	);
};
