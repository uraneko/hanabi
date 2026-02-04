import { type Component, For, createSignal, createResource, createEffect, Switch, Match, Show, JSX } from 'solid-js';
import { Actuator, } from "core/primitives";
// TODO sync_scheme should also come from the wrapper comp module, instead of the context module
import { sync_ls } from 'core/wrappers';
import { colors_ctx, content_ctx, configs_ctx } from "core/context";
import { _, spread_classes } from "core";
import { user_ctx, is_logged_in, is_authless } from "core/context";
import { Dialog } from 'core/containers';
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
				dialog={<ColorSchemeDropDown />} />
			<Switch>
				<Match when={is_authless(user())}>
					<AnchorItem link="/auth" call={login_form} icon={login} text="login" />
					<AnchorItem link="/auth" call={register_form} icon={register} text="register" />
				</Match>
				<Match when={is_logged_in(user())}>
					<ContentItem
						class={styles.ContentItem}
						dialog={<Settings />}
						icon={rocket}
						text="settings"
						show={false}
						events="keypress" />
					<ContentItem
						class={styles.ContentItem}
						dialog={<UserMenu />}
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
	text: string,
	icon: SVGSVGElement,
	dialog: JSX.Element,
	class?: string | string[],
	events?: string | string[],
	show?: boolean,
}> = (props: _) => {
	const icon = () => props.icon;
	const text = () => props.text;
	const call = () => props.call;
	const cls = () => props.class;
	const dialog = () => props.dialog;
	const events = () => props.events === undefined ? [] :
		props.events.constructor.name === "String" ? [props.events] : props.events;

	const [show, re_show] = createSignal(false);
	const { content, re_content } = content_ctx();
	const flip = () => re_show((show: boolean) => !show);

	// const [hash, flip] = setup_ephem(events(), show());
	return (
		<div class={styles.ContentItem}>
			<div
				class={`${styles.Entry}${spread_classes(cls())}`}
				on:mousedown={flip}
			>
				<Actuator call={call()} class={styles.Path}>
					{icon()}
					<span>{text()}</span>
				</Actuator >
			</div>
			<Show when={show()}>
				{dialog()}
			</Show>
		</div>
	);
}

const { content, re_content } = content_ctx();
const watchguard = new MutationObserver(() => {
	if (document.querySelectorAll("[overtakes-content='true']").length === 0) {
		re_content(true);
	} else {
		re_content(false)
	}
});

watchguard.observe(document.body, {
	subtree: true,
	childList: true,
	attributeFilter: ["overtakes-content"],
	attributeOldValue: true,
});

export const ColorSchemeDropDown = () => {
	const { colors, re_colors } = colors_ctx();
	const schemes = Object.keys(colors())

	return (<Dialog class={umstyles.UserMenu}>
		<For each={schemes} >
			{(scheme: string) => <ColorSchemeTitle title={scheme} />}
		</For>
	</Dialog>);
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
		// sync_scheme(clrs);
		const { configs, re_configs } = configs_ctx();
		re_configs((configs: _) => {
			configs.colorschemes.current = scheme;

			return structuredClone(configs);
		});
	};

	return (<Actuator call={change_scheme} class={umstyles.Entry}>
		<span>{title()}</span>
	</ Actuator>);
};


