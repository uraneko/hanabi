import { type Component, createEffect, createSignal, createResource, Switch, Match } from 'solid-js';

import styles from './Initializer.module.css';

import { Splash } from 'core/primitives';
import { use_ctx } from 'core/context';
import { _ } from 'core';

export const Initializer: Component = () => {
	return (
		<div class={`${styles.Initializer}`}>
			<Splash />

			<Negotiator />
		</div>
	);
};

function validate_params(user: _): boolean {
	return [0, 1, 2, 4].includes(user())
}

export const Validate = (props: _) => {
	let user = () => props.user;
	let auth_is_valid = validate_params(user());

	return (
		<span class={styles.Validate}>
			<span>validating local params...</span>
			<Switch>
				<Match when={!auth_is_valid}>
					<span>&nbsp;err!</span>
				</Match>
				<Match when={auth_is_valid} >
					<span>&nbsp;ok</span>
				</Match>
			</Switch>
		</span>
	);
};

const host = "http://127.10.10.1:6668";
async function negotiate() {
	let resp = await fetch(host + "/auth/user", {
		method: "GET",
		credentials: "include",
	});
	const tkn = await resp.text();

	return Number(tkn);
}

function validate_negotiation(auth: number | undefined): boolean {
	return auth !== undefined && auth!.constructor.name === "Number" && !Number.isNaN(auth!);
}
export const Negotiate = (props: _) => {
	const re_user = () => props.re_user;
	let [auth] = createResource(negotiate);

	createEffect(() => {
		console.log('--', validate_negotiation(auth()));

		(() => re_user()((level: number) =>
			auth() === undefined ? level : Number(auth())
		))();
	});

	return (<span class={styles.Negotiate}>
		<span>negotiating user authentication...</span>
		<Switch>
			<Match when={validate_negotiation(auth())}>
				<span>&nbsp;ok</span>
			</Match>
			<Match when={!validate_negotiation(auth())}>
				<span>&nbsp;err!</span>
			</Match>
		</Switch>
	</span>);

};

// await new Promise(_ => setTimeout(_, 4000))
export const Negotiator: Component = () => {
	const { user, re_user } = use_ctx();
	console.log("loading app");

	return (<div class={styles.Negotiator}>
		<Validate user={user} />
		<Negotiate re_user={re_user} />
	</div>);
}

