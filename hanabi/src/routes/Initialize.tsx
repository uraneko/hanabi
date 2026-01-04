import { type Component, createEffect, createSignal, createResource, Suspense, Switch, Match } from 'solid-js';
import styles from './Initialize.module.css';
import { Splash } from 'core/primitives';
import { user_ctx } from 'core/context';
import { _ } from 'core';
import { is_uninit_session } from '../App';

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
		if (is_uninit_session(user()) && auth() !== undefined) re_user(auth()!)
	});

	return (
		<Suspense fallback={<span class={styles.Negotiate}>negotiating an identity...</span>}>
			<span class={styles.Negotiate}>negotiating an identity... ok</span>
		</Suspense >
	);
};

// palceholder function for a post request to the server
// this function's post request doesnt send user data, unlike the login form's post request 
// if you dont have a session token in your cookies then "" is returned to indicate the start of an authless session 
// else your token is checked by the server and the server renews your token, starting a new login user session
async function negotiate(user: { name: string | undefined }) {
	await new Promise(_ => setTimeout(_, 500))
	return { name: user.name ?? "" };
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




