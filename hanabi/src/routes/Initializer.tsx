import { type Component, createEffect, createSignal, createResource, Switch, Match } from 'solid-js';
import styles from './Initializer.module.css';
import { Splash } from 'core/primitives';
import { user_ctx } from 'core/context';
import { _, is } from 'core';

export const Initializer: Component = () => {
	createEffect(() => {
		const initializer = document.querySelector(`.${styles.Initializer}`);
		if (initializer !== undefined) {
			const parent = initializer!.parentElement!;
			if (parent.childNodes.length > 1) {
				parent.parentElement!.appendChild(initializer!);
				parent.remove();
			}
		}
	});

	return (
		<div class={`${styles.Initializer}`}>
			<Splash />
			<Negotiator />
		</div>
	);
};

// const host = "http://127.10.10.1:6680";
async function negotiate_deprecated(name?: string) {
	let resp = await fetch(`/auth/user?name=${name === undefined ? "" : name}`, {
		method: "GET",
		credentials: "include",
	});

	return await resp.text();
}

async function negotiate(name?: string) {
	let resp = { text: async () => name ?? "scarecrow" };

	return await resp.text();
}

export const Negotiate = (props: _) => {
	const re_user = () => props.re_user;
	const user = () => props.user;
	let [auth] = createResource(user().name, negotiate);

	createEffect(() => {
		(() => re_user()((user: _) => {
			if (is(auth())) { re_user()(auth()); }
			return user;
		}))();
	});

	return (<span class={styles.Negotiate}>
		<span>negotiating user authentication...</span>
		<Switch>
			<Match when={is(user().name)}>
				<span>&nbsp;ok</span>
			</Match>
			<Match when={!is(user().name)}>
				<span>&nbsp;err!</span>
			</Match>
		</Switch>
	</span>);

};

// await new Promise(_ => setTimeout(_, 4000))
export const Negotiator: Component = () => {
	const { user, re_user } = user_ctx();
	console.log("loading app");

	return (<div class={styles.Negotiator}>
		<Negotiate user={user} re_user={re_user} />
	</div>);
}

