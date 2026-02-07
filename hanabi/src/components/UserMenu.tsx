import { type Component, DEV } from "solid-js";
import { _, spread_classes, parse_svg } from "core";
import { Catalyst } from "core/primitives";
import { user_ctx } from "core/context";
import { Dialog } from 'core/containers';

import styles from "./UserMenu.module.css";
import logoutSVG from "../../../assets/icons/logout2.svg?raw";
import glassesSVG from "../../../assets/icons/glasses.svg?raw";
import peopleSVG from "../../../assets/icons/people.svg?raw";
import rocketSVG from "../../../assets/icons/rocket.svg?raw";

export const UserMenu = () => {
	const { user, re_user } = user_ctx();
	// user configs
	const apps = parse_svg(rocketSVG);
	const logout_ = parse_svg(logoutSVG);
	// profile 
	const glasses = parse_svg(glassesSVG);
	const people = parse_svg(peopleSVG);

	// BUG a failed logout still changes the page since the logout button is an anchor and 
	// the redirection is independent from the logout callback
	const logout = async () => {
		if (DEV === undefined) {
			const res = await fetch("/auth/remembrance", {
				method: "DELETE",
				credentials: "include",
				headers: {
					"authorization": `Bearer<${user().access_token!}>`,
				}
			});
			if (!res.ok) return;
		}

		re_user((user: _) => {
			return {
				name: "",
				email: undefined,
				access_token: undefined,
			};
		});
	};

	return (
		<Dialog class={styles.UserMenu} >
			<Catalyst class={styles.Entry} >
				{glasses}
				<span>| profile</span>
			</Catalyst>
			<Catalyst class={styles.Entry} >
				{people}
				<span>| people</span>
			</Catalyst>
			<Catalyst class={styles.Entry}>
				{apps}
				<span>| apps</span>
			</Catalyst>
			<Catalyst link="/" class={styles.Entry} call={logout}>
				{logout_}
				<span>| logout</span>
			</Catalyst>
		</Dialog>
	);
};

export { styles };
