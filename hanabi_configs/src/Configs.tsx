import { type Component, Show, For, createSignal, DEV } from "solid-js";
import { dbl_signal, dbl_method, _, spread_classes, parse_svg } from "core";
import { Catalyst, ColorPicker } from "core/primitives";
import { user_ctx, content_ctx, configs_ctx } from "core/context";
import { Dialog, Tree, Branch } from 'core/containers';

import styles from "./Configs.module.css";
import atSVG from "../../assets/icons/at.svg?raw";
import puzzleSVG from "../../assets/icons/puzzle.svg?raw";
import colorsSVG from "../../assets/icons/colors.svg?raw";
import sharedSVG from "../../assets/icons/shared.svg?raw";
import diceSVG from "../../assets/icons/dice.svg?raw";
import glassesSVG from "../../assets/icons/glasses.svg?raw";
import peopleSVG from "../../assets/icons/people.svg?raw";
import rocketSVG from "../../assets/icons/rocket.svg?raw";
import keySVG from "../../assets/icons/key.svg?raw";
import newSVG from "../../assets/icons/new.svg?raw";
import manageSVG from "../../assets/icons/manage.svg?raw";
import prevSVG from "../../assets/icons/prev.svg?raw";

const icons = {
	main: diceSVG,
	account: atSVG,
	relations: sharedSVG,
	applications: puzzleSVG,
	colorschemes: colorsSVG,
	profile: glassesSVG,
	security: keySVG,
	people: peopleSVG,
	install: rocketSVG,
	new: newSVG,
	manage: manageSVG,
} as Record<string, string>;

const headers = {
	account: ["profile", "security"],
	relations: ["manage", "people"],
	applications: ["manage", "install"],
	colorschemes: ["manage", "new"],
} as Record<string, string[]>;

export const Configs = () => {
	const { configs, re_configs } = configs_ctx();
	const [keys, re_keys] = createSignal(Object.keys(configs()));

	const account = parse_svg(atSVG);
	const apps = parse_svg(puzzleSVG);
	const scheme = parse_svg(colorsSVG);
	const relations = parse_svg(sharedSVG);
	const main = parse_svg(diceSVG);

	const [dbl, up_dbl] = dbl_signal();
	const dbl_clk = dbl_method(up_dbl, 700);
	const [expand, re_expand] = createSignal(true);
	const expansion = (e: Event) => re_expand((expand: boolean) => {
		dbl_clk(e);

		return dbl().trigger ? !expand : expand
	});

	const prev = parse_svg(prevSVG);
	const turn_back = (e: Event) => re_keys((keys: _) => Object.keys(configs()));
	return (
		<Dialog class={styles.Configs} width={54} height={56} top={50} left={50} center overtakes>
			<div class={styles.Headers} on:mousedown={expansion}>
				<div >
					<For each={keys()}>
						{(key: string) =>
							<Header
								text={"| " + key}
								icon={parse_svg(icons[key])}
								switch={expand()}
								keys={headers[key]}
								re_keys={re_keys}
							/>}
					</For>
				</div>
				<Catalyst class={styles.TurnBack} call={turn_back}>{prev}</Catalyst>
			</div>
			<div class={styles.Contents}>
				<ColorItem name="red" />
			</div>
		</Dialog>
	);
};

export const Header: Component<{
	text: string,
	icon: SVGSVGElement,
	switch: boolean,
	keys?: string[],
	re_keys?: _,
}> = (props: _) => {
	const text = () => props.text;
	const icon = () => props.icon;
	const switch_ = () => props.switch;
	const keys = () => props.keys;
	const re_keys = () => props.re_keys;

	let headers_update = null;
	if (keys !== undefined && re_keys !== undefined) {
		headers_update = (e: Event) => re_keys()((_keys: _) => keys()!);
	}

	return (<div
		class={`${styles.Header} ${switch_() ? styles.TextfulHeader : styles.TextlessHeader}`}
		on:mousedown={headers_update!}
	>
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
		<ColorPicker prop="--blue" />
		<ColorPicker prop="--grad-start" />
		<ColorPicker prop="--grad-end" />
		<ColorPicker prop="--white" />
	</div>);
};
