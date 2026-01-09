import { type Component, Show, createSignal } from "solid-js";
import { dbl_signal, dbl_method, _, spread_classes, parse_svg } from "core";
import { Actuator } from "core/primitives";
import { user_ctx } from "core/context";

import styles from "./Settings.module.css";
import atSVG from "../../../assets/icons/at.svg?raw";
import puzzleSVG from "../../../assets/icons/puzzle.svg?raw";
import colorsSVG from "../../../assets/icons/colors.svg?raw";

export const Settings = () => {
	const account = parse_svg(atSVG);
	const apps = parse_svg(puzzleSVG);
	const scheme = parse_svg(colorsSVG);

	const [dbl, up_dbl] = dbl_signal();
	const dbl_clk = dbl_method(up_dbl, 700);
	const [show, up_show] = createSignal(true);
	const show_up = (e: Event) => up_show((show: boolean) => {
		dbl_clk(e);

		return dbl().trigger ? !show : show
	});

	return (<div class={styles.Settings}>
		<div class={styles.Headers} on:mousedown={show_up}>
			<Header text="| account" icon={account} switch={show()} />
			<Header text="| apps" icon={apps} switch={show()} />
			<Header text="| colorschemes" icon={scheme} switch={show()} />
		</div>
		<div class={styles.Contents}>
		</div>
	</div>);
};

export const Header: Component<{ text: string, icon: SVGSVGElement, switch: boolean }> = (props: _) => {
	const text = () => props.text;
	const icon = () => props.icon;
	const switch_ = () => props.switch;

	return (<div class={`${styles.Header} ${switch_() ? styles.TextfulHeader : styles.TextlessHeader}`}>
		{icon()}
		<Show when={switch_()}>
			<span class={styles.HeaderText}>
				{text()}
			</span>
		</Show>
	</div >);
};
