import { type Component, createSignal, createResource, createEffect, Switch, Match, Show, JSX } from 'solid-js';
import { Actuator } from "core/primitives";
import { _, is } from "core";
import { user_ctx } from "core/context";
import styles from './Menu.module.css';
import { form_ctx } from '../routes//Auth';
import { is_login_session, is_authless_session } from '../App';

import { parse_svg } from "core";
import logoutSVG from "../../../assets/icons/logout2.svg?raw";
import loginSVG from "../../../assets/icons/login2.svg?raw";
import registerSVG from "../../../assets/icons/register2.svg?raw";
import colorsSVG from "../../../assets/icons/colors.svg?raw";

export const Menu = () => {
	const { user, re_user } = user_ctx();
	const { form, set_form } = form_ctx();

	const login = parse_svg(loginSVG);
	const logout = parse_svg(logoutSVG);
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

	const clear_user = () => re_user((_user: _) => {
		return { name: "" };
	});

	const register_form = () => set_form(1);
	const login_form = () => set_form(0);

	return (
		<div class={styles.Menu} >
			<Switch>
				<Match when={is_authless_session(user())}>
					<EntryButton call={colorscheme} icon={colors} text="colors" />
					<EntryAnchor link="/auth" call={login_form} icon={login} text="login" />
					<EntryAnchor link="/auth" call={register_form} icon={register} text="register" />
				</Match>
				<Match when={is_login_session(user())}>
					<EntryButton call={colorscheme} icon={colors} text="colors" />
					<EntryAnchor link="/" call={clear_user} icon={logout} text="logout" />
				</Match>
			</Switch>
		</div>
	);
};

export const UserAppartus = () => {
	// 	return (
	// 		<Actuator>
	// 			<span class={styles.PFP}>{pfp_letter}</span>
	// 			<span>{user_name}</span>
	// 		</Actuator>
	// 	);
};

export const EntryAnchor: Component<{ link: string, text: string, icon: SVGSVGElement, call?: _ }> = (props: _) => {
	const icon = () => props.icon;
	const text = () => props.text;
	const link = () => props.link;
	const call = () => props.call;

	return (
		<div class={styles.Entry}>
			<Actuator link={link()} call={call()} class={styles.Path}>
				<Show when={icon() !== undefined}>
					{icon()}
				</Show>
				<span>{text()}</span>
			</Actuator>
		</div >
	);
};

export const EntryButton: Component<{ call: _, text: string, icon?: SVGSVGElement }> = (props: _) => {
	const icon = () => props.icon;
	const text = () => props.text;
	const call = () => props.call;

	return (
		<div class={styles.Entry}>
			<Actuator call={call()} class={styles.Path}>
				<Show when={icon() !== undefined}>
					{icon()}
				</Show>
				<span>{text()}</span>
			</Actuator >
		</div>
	);
};

