import { type Component, createEffect, createSignal, createResource, Suspense, DEV } from 'solid-js';
import styles from './Initialize.module.css';
import { Splash } from 'core/primitives';
import { user_state, user_ctx } from "user";
import { _ } from 'core';
import { colors_ctx } from "core/context";
import { INIT_CONTENTS } from "user";

export const Initialize: Component = () => {
	return (<div class={styles.Initialize} >
		<Splash />
		<Negotiate />
	</div>);
};

export const Negotiate = () => {
	const { user, re_user } = user_ctx();
	const { colors, re_colors } = colors_ctx();
	const [auth] = createResource(user(), negotiate);

	createEffect(() => {
		if (user_state(user).is_non_init() && auth() !== undefined) {
			re_user(auth()! as _);
			sync_schemes_to_ctx(user().config!.colors, re_colors);
		}
	});

	return (
		<Suspense fallback={<span class={styles.Negotiate}>negotiating an identity...</span>}>
			<span class={styles.Negotiate}>negotiating an identity... ok</span>
		</Suspense >
	);
};
// await new Promise(_ => setTimeout(_, 500))

// palceholder function for a post request to the server
// this function's post request doesnt send user data, unlike the login form's post request 
// if you dont have a session token in your cookies then "" is returned to indicate the start of an authless session 
// else your token is checked by the server and the server renews your token, starting a new login user session
async function negotiate(user: _) {
	if (user.name !== undefined) return user;
	if (DEV !== undefined) {

		return {
			name: user.name ?? "",
			address: user.address,
			access_token: user.access_token,
			config: {
				...INIT_CONTENTS,
			},
			pfp: undefined,
		};
	}

	const res = await fetch("/auth/remembrance", {
		method: "POST",
		credentials: "include",
	});
	if (!res.ok) throw user;

	// request succeeded but server internally failed it 
	// this is a weird state 
	if (res.headers.get("content-length") === "0") return {
		name: user.name ?? "",
		address: user.address,
		access_token: user.access_token,
		pfp: user.pfp,
		config: undefined,
	};
	const user_state = await res.json();

	return {
		name: user_state.name,
		address: user_state.address,
		access_token: user_state.access_token,
		config: user_state.config,
		pfp: undefined,
	}
}

function sync_schemes_to_ctx(schemes: _, re_colors: _) {
	re_colors((colors: _) => {
		Object.entries(schemes).forEach((e: _) => {
			colors[e[0]] = e[1];
		});

		return structuredClone(colors);
	});
}
