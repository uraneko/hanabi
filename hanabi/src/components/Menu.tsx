import { type Component, createSignal, createResource, Show, JSX } from 'solid-js';
import { Button, Anchor } from "core/primitives";
import { _ } from "core";
import styles from './Menu.module.css';
import { parse_svg } from "core";
import loginSVG from "../../../assets/icons/login2.svg?raw";
import registerSVG from "../../../assets/icons/register2.svg?raw";
import colorsSVG from "../../../assets/icons/colors.svg?raw";



export const Menu = () => {
	const login = parse_svg(loginSVG);
	const register = parse_svg(registerSVG);
	const colors = parse_svg(colorsSVG);
	const colorscheme = () => {
		const style = document.body.style;
		const is_on = style.getPropertyValue("filter");
		if (is_on === "") {
			style.setProperty("filter", "invert() contrast(.89)");
		} else {
			style.removeProperty("filter");
		}
	};

	return (
		<div class={styles.Menu}>
			<EntryButton call={colorscheme} icon={colors} text="colors" />
			<EntryAnchor link="/auth" icon={login} text="login" />
			<EntryAnchor link="/auth" icon={register} text="register" />
		</div>
	);
};

export const EntryAnchor: Component<{ link: string, text: string, icon: SVGSVGElement }> = (props: _) => {
	const icon = () => props.icon;
	const text = () => props.text;
	const link = () => props.link;

	return (
		<div class={styles.Entry}>
			<Anchor link={link()} class={styles.Path}>
				<Show when={icon() !== undefined}>
					{icon()}
				</Show>
				<span>{text()}</span>
			</Anchor>
		</div >
	);
};

export const EntryButton: Component<{ call: _, text: string, icon?: SVGSVGElement }> = (props: _) => {
	const icon = () => props.icon;
	const text = () => props.text;
	const call = () => props.call;

	return (
		<div class={styles.Entry}>
			<Button call={call()} class={styles.Path}>
				<Show when={icon() !== undefined}>
					{icon()}
				</Show>
				<span>{text()}</span>
			</Button >
		</div>
	);
};

