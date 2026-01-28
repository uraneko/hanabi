import { type Component, DEV } from "solid-js";
import { _, spread_classes, parse_svg } from "core";
import { Actuator } from "core/primitives";
import { user_ctx } from "core/context";

import styles from "./UserMenu.module.css";
import icecreamSVG from "../../../assets/icons/icecream.svg?raw";
import logoutSVG from "../../../assets/icons/logout2.svg?raw";
import glassesSVG from "../../../assets/icons/glasses.svg?raw";

function clear_user_data(data: Object): Object { return data; }

export const UserMenu = () => {
	const { user, re_user } = user_ctx();
	// user configs
	const icecream = parse_svg(icecreamSVG);
	const logout = parse_svg(logoutSVG);
	// profile 
	const glasses = parse_svg(glassesSVG);

	// BUG a failed logout still changes the page since the logout button is an anchor and 
	// the redirection is independent from the logout callback
	const clear_user = async () => {
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
				data: clear_user_data(user.data)
			};
		});
	};

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

export { styles };
