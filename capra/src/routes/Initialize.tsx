import { type Component, createEffect, createSignal, createResource, Suspense, DEV } from 'solid-js';
import styles from './Initialize.module.css';
import { Splash } from 'core/primitives';
import { user_ctx, is_non_init } from 'core/context';
import { _ } from 'core';

// assets layouts 
// helps decouple icon fetching from data fetching 
const layouts_resources = ["configs", "main-menu", "user-menu"];

async function layouts(re_user: _) {
	re_user((user: _) => {
		layouts_resources.map(async (layout: string) => {
			const resp = await fetch("/layouts/" + layout);

			return [layout, await resp.json()];
		}).forEach(([r, l]: _) => user.layouts[r] = l);

		return structuredClone(user);
	});
}

async function icons(re_user: _) {
	const resp = await fetch("/icons");
	const icons = await resp.json();

	re_user((user: _) => {
		user.data.icons = icons;

		return structuredClone(user);
	});
}

export const Initialize: Component = () => {
	return (<div class={styles.Initialize} >
		<Splash />
		<Negotiate />
	</div>);
};

export const Negotiate = () => {
	const { user, re_user } = user_ctx();
	const [auth] = createResource(user(), negotiate);

	createEffect(() => {
		if (is_non_init(user()) && auth() !== undefined) re_user(auth()! as _)
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
	if (DEV !== undefined) return {
		name: user.name ?? "",
		email: user.email,
		access_token: user.access_token,
	};

	const res = await fetch("/auth/remembrance", {
		method: "POST",
		credentials: "include",
	});
	if (!res.ok) return user;

	if (res.headers.get("content-length") === "0") return {
		name: user.name ?? "",
		email: user.email,
		access_token: user.access_token,
	};

	const user_state = await res.json();

	return {
		name: user_state.name,
		email: user_state.email,
		access_token: user_state.access_token,
	}
}

function clear_page() {
	const initialize = document.querySelector(`.${styles.Initialize}`);
	if (initialize !== undefined) {
		const parent = initialize!.parentElement!;
		if (parent.childNodes.length > 1) {
			parent.parentElement!.appendChild(initialize!);
			parent.remove();
		}
	}
}




