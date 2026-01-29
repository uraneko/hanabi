import { type Component, For, createSignal, createResource, createEffect, Switch, Match, Show, JSX } from 'solid-js';
import { Actuator, } from "core/primitives";
import { sync_ls, Ephemeral, new_hash, assign_hash, setup_ephem, eph_styles as estyles } from 'core/wrappers';
import { colors_ctx } from "core/context";
import { _, spread_classes } from "core";
import { user_ctx, is_logged_in, is_authless, eph_ctx } from "core/context";
import styles from './Menu.module.css';
import { styles as umstyles } from './UserMenu';
import { form_ctx } from '../routes/Auth';
import { UserMenu } from './UserMenu';
import { Settings } from './Settings';

// alt red color #A95525

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


	// const colorscheme = () => {
	// 	const style = document.body.style;
	// 	const is_on = style.getPropertyValue("filter");
	// 	if (is_on === "") {
	// 		style.setProperty("filter", "invert() contrast(.89)");
	// 	} else {
	// 		style.removeProperty("filter");
	// 	}
	// };

	const register_form = () => set_form(1);
	const login_form = () => set_form(0);

	return (
		<div class={styles.Menu} >
			<ContentItem
				class={styles.ContentItem}
				icon={colors}
				text="colors"
				content={<ColorSchemeDropDown />} />
			<ContentItem
				class={styles.ContentItem}
				content={<Settings />}
				icon={rocket}
				text="settings"
				show={false}
				events="keypress" />
			<Switch>
				<Match when={is_authless(user())}>
					<AnchorItem link="/auth" call={login_form} icon={login} text="login" />
					<AnchorItem link="/auth" call={register_form} icon={register} text="register" />
				</Match>
				<Match when={is_logged_in(user())}>
					<ContentItem
						class={styles.ContentItem}
						content={<UserMenu />}
						icon={home}
						text={user().name!}
						show={false}
						events={"click"} />
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

export const ButtonItem: Component<{
	call: _,
	text: string,
	icon?: SVGSVGElement
}> = (props: _) => {
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

export const ContentItem: Component<{
	children?: JSX.Element,
	text: string,
	icon: SVGSVGElement,
	content: JSX.Element,
	class?: string | string[],
	events?: string | string[],
	show?: boolean,
}> = (props: _) => {
	const icon = () => props.icon;
	const text = () => props.text;
	const call = () => props.call;
	const cls = () => props.class;
	const content = () => props.content;
	const show = () => props.show ?? false;
	const events = () => props.events === undefined ? [] :
		props.events.constructor.name === "String" ? [props.events] : props.events;

	const [hash, flip] = setup_ephem(events(), show());
	return (
		<div class={styles.ContentItem}>
			<div
				class={`${styles.Entry}${spread_classes(cls())}`}
				on:mousedown={flip}
				ephem-hash={hash}
			>
				<Actuator call={call()} class={styles.Path}>
					{icon()}
					<span>{text()}</span>
				</Actuator >
			</div>
			<Ephemeral events={events()} show={show()} hash={hash}>
				{content()}
			</Ephemeral>
		</div>
	);
}

export const ColorSchemeDropDown = () => {
	const { colors, re_colors } = colors_ctx();
	const schemes = Object.keys(colors())

	return (<div class={umstyles.UserMenu}>
		<For each={schemes} >
			{(scheme: string) => <ColorSchemeTitle title={scheme} />}
		</For>
	</div>);
};

export const ColorSchemeTitle: Component<{ title: string }> = (props: _) => {
	const title = () => props.title;
	const { colors, re_colors } = colors_ctx();


	const change_scheme = (e: Event) => {
		const et = e.target as Element;
		const scheme = et.textContent!;
		const clrs = colors()[scheme];
		if (clrs === undefined) return;
		sync_ls(scheme);
		Object.entries(clrs).forEach(([k, v]: _) =>
			document.documentElement.style.setProperty("--" + k, v));
	};

	return (<Actuator call={change_scheme} class={umstyles.Entry}>
		<span>{title()}</span>
	</ Actuator>);
};


