import { type Component, createSignal, createResource, createEffect, Switch, Match, Show, JSX } from 'solid-js';
import { Actuator, Ephemeral, new_hash, assign_hash, eph_styles as estyles } from "core/primitives";
import { _, spread_classes } from "core";
import { user_ctx, is_logged_in, is_authless, eph_ctx } from "core/context";
import styles from './Menu.module.css';
import { styles as umstyles } from './UserMenu';
import { form_ctx } from '../routes/Auth';
import { UserMenu } from './UserMenu';
import { Settings } from './Settings';
import { active_ctx } from '../App';

import { parse_svg } from "core";
import logoutSVG from "../../../assets/icons/logout2.svg?raw";
import loginSVG from "../../../assets/icons/login2.svg?raw";
import registerSVG from "../../../assets/icons/register2.svg?raw";
import colorsSVG from "../../../assets/icons/colors.svg?raw";
import rocketSVG from "../../../assets/icons/rocket.svg?raw";
import homeSVG from "../../../assets/icons/home.svg?raw";

export const Menu = () => {
	const { user, re_user } = user_ctx();
	const { form, set_form } = form_ctx();

	const login = parse_svg(loginSVG);
	const logout = parse_svg(logoutSVG);
	const register = parse_svg(registerSVG);
	const colors = parse_svg(colorsSVG);
	const rocket = parse_svg(rocketSVG);
	const home = parse_svg(homeSVG);


	const colorscheme = () => {
		const style = document.body.style;
		const is_on = style.getPropertyValue("filter");
		if (is_on === "") {
			style.setProperty("filter", "invert() contrast(.89)");
		} else {
			style.removeProperty("filter");
		}
	};

	const register_form = () => set_form(1);
	const login_form = () => set_form(0);

	return (
		<div class={styles.Menu} >
			<ButtonItem call={colorscheme} icon={colors} text="colors" />
			<ContentItem class={styles.ContentItem} content={<Settings />} icon={rocket} text="settings" transient={false} />
			<Switch>
				<Match when={is_authless(user())}>
					<AnchorItem link="/auth" call={login_form} icon={login} text="login" />
					<AnchorItem link="/auth" call={register_form} icon={register} text="register" />
				</Match>
				<Match when={is_logged_in(user())}>
					<ContentItem class={styles.ContentItem} content={<UserMenu />} icon={home} text={user().name!} transient={true} />
				</Match>
			</Switch>
		</div>
	);
};

export const AnchorItem: Component<{ link: string, text: string, icon: SVGSVGElement, call?: _ }> = (props: _) => {
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

export const ButtonItem: Component<{ call: _, text: string, icon?: SVGSVGElement }> = (props: _) => {
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

export const ContentItem: Component<{ children?: JSX.Element, text: string, icon: SVGSVGElement, content: JSX.Element, class?: string | string[], transient: boolean }> = (props: _) => {
	const { active, up_active } = active_ctx();
	const icon = () => props.icon;
	const text = () => props.text;
	const call = () => props.call;
	const cls = () => props.class;
	const content = () => props.content;
	const transient = () => props.transient;

	const { eph, re_eph } = eph_ctx();
	const hash = new_hash(eph());
	re_eph(assign_hash(eph(), hash));

	const update = (e: Event) => re_eph((eph: _) => {
		eph[hash] = !eph[hash];

		return structuredClone(eph);
	});

	// const activity = (e: Event) => re_show((show: boolean) => {
	// 	console.log(1);
	// 	// e.stopImmediatePropagation();
	// 	if (!show) return false;
	// 	const user_menu = document.body.querySelector(`.${umstyles.UserMenu}`);
	//
	// 	return user_menu === null ? false : user_menu.contains(active());
	// });
	// document.body.addEventListener("mousedown", activity);

	return (
		<div class={styles.ContentItem} >
			<div class={`${styles.Entry}${spread_classes(cls())} ${estyles.EphemSwitch}`} onmousedown={update}>
				<Actuator call={call()} class={styles.Path}>
					{icon()}
					<span>{text()}</span>
				</Actuator >
			</div>
			<Ephemeral hash={hash} transient={transient()}>
				{content()}
			</Ephemeral>
		</div>
	);
}
