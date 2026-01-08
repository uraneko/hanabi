import { type Component } from "solid-js";
import { _, spread_classes, parse_svg } from "core";
import { Actuator } from "core/primitives";
import { user_ctx } from "core/context";

import styles from "./UserMenu.module.css";
import icecreamSVG from "../../../assets/icons/icecream.svg?raw";
import logoutSVG from "../../../assets/icons/logout2.svg?raw";
import glassesSVG from "../../../assets/icons/glasses.svg?raw";

export const UserMenu = () => {
	const { user, re_user } = user_ctx();
	// user configs
	const icecream = parse_svg(icecreamSVG);
	const logout = parse_svg(logoutSVG);
	// profile 
	const glasses = parse_svg(glassesSVG);

	const clear_user = () => re_user((_user: _) => {
		return { name: "" };
	});


	return (
		<div class={styles.UserMenu}>
			<Actuator class={styles.Entry} >
				{glasses}
				<span>| profile</span>
			</Actuator>
			<Actuator class={styles.Entry}>
				{icecream}
				<span>| configs</span>
			</Actuator>
			<Actuator link="/" class={styles.Entry} call={clear_user}>
				{logout}
				<span>| logout</span>
			</Actuator>
		</div>
	);
};

export const Sep = () => {
	return (<span class={styles.Sep}></span>);
}

export { styles };
