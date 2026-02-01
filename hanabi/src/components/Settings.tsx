import { type Component, Show, createSignal } from "solid-js";
import { dbl_signal, dbl_method, _, spread_classes, parse_svg } from "core";
import { Actuator, ColorPicker } from "core/primitives";
import { user_ctx, content_ctx } from "core/context";
import { styles as gstyles } from "../App";

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
	const [expand, re_expand] = createSignal(true);
	const expansion = (e: Event) => re_expand((expand: boolean) => {
		dbl_clk(e);

		return dbl().trigger ? !expand : expand
	});

	return (<div class={styles.Settings}>
		<div class={styles.Headers} on:mousedown={expansion}>
			<Header text="| account" icon={account} switch={expand()} />
			<Header text="| apps" icon={apps} switch={expand()} />
			<Header text="| colorschemes" icon={scheme} switch={expand()} />
		</div>
		<div class={styles.Contents}>
			<ColorItem name="red" />
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
}

export const ColorItem: Component<{ name: string, }> = (props: _) => {
	const name = () => "--" + props.name;

	return (<div>
		<ColorPicker events="click" html={document.documentElement} prop="--blue" />
		<ColorPicker events="click" html={document.documentElement} prop="--grad-start" />
		<ColorPicker events="click" html={document.documentElement} prop="--grad-end" />
		<ColorPicker events="click" html={document.documentElement} prop="--white" />
	</div>);
};
