import { type Component, Show, Switch, Match, createSignal, createContext, useContext, createResource } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Initialize } from './routes/Initialize';
import { Page } from './components/Page';
import { Splash } from 'core/primitives';
import { user_ctx, is_non_init, is_authless, is_logged_in } from 'core/context';
import { _ } from "core";
import styles from './App.module.css';

// TODO - user authentication mechanism
// - user logs-in 
// - server sets an access token http only cookie
// - server also sets a refresh token in the user state of the app (js in memory)
// - said refresh token is also stored in backend db (in hashed format)
// - every 20 mins access token expires and refresh token is sent in Authorization header to generate new access token
// - when user closes their session, refresh token is stored in a cookie
// - when user opens a new session, refresh token cookie (if it exists) is sent to the server
// - server matches refresh token with db entries, if valid (exists in db and is not expired) then removes refresh token from cookies + sets access token in cookies + returns user state in body
// - client sets user state (including refresh token) in js memory

function parent_contains_class(element: HTMLElement | null, substring: string): boolean | undefined {
	if (element === null) return undefined;
	const parent = element.parentElement;
	if (parent === null) return undefined;

	return parent!.className.includes(substring);
}

function outer_class_contains(element: HTMLElement | null, substring: string): boolean {
	while (true) {
		const contains = parent_contains_class(element, substring);
		if (contains === undefined) return false;
		else if (contains) return true;

		element = element!.parentElement;
	}
}

function dev_ssn_rtt(user: _, e: Event) {
	const t = e.target as HTMLElement;
	const cls = t.className;
	if (cls.constructor.name !== "String") return user;
	let within_form = false;
	if (t.className.includes("Auth")) { within_form = true; }
	if (!within_form) {
		within_form = outer_class_contains(t, "Auth");
	}
	if (!within_form) return user;

	return {
		name: user.name == "" ? "scarecrow" : "",
		email: undefined,
		access_token: undefined,
		data: new Object({}),
	};
}

export const App: Component = () => {
	const { user, re_user } = user_ctx();
	const { active, up_active } = active_ctx();

	// log-in/out on the frontend state for development ease
	const session_rotation = (e: MouseEvent) =>
		re_user((user: _) => dev_ssn_rtt(user, e));

	return (
		<div class={styles.App} on:click={() => console.log(user())}>
			< Switch >
				<Match when={is_non_init(user())}>
					<Initialize />
				</Match>
				<Match when={is_authless(user()) || is_logged_in(user())}>
					<Page>
						<Router>
							<Route path="/" component={Home} />
							<Route path="/auth" component={Auth} />
							<Route path="*" component={Splash} />
						</Router>
					</Page>
				</Match>
			</Switch >
		</div >
	);
};

const [active, up_active] = createSignal(document.body as Element);
export const active_context = createContext({ active, up_active });
export function active_ctx() {
	return useContext(active_context)
}

async function cache_state() {
	if (!document.hidden) return;

	const { user, re_user } = user_ctx();
	if (!is_logged_in(user())) return;
	const state = JSON.stringify({
		name: user().name,
		email: user().email,
		access_token: user().access_token
	});
	// localStorage.set("state", state);

	const res = await fetch("auth/cache", {
		method: "POST",
		credentials: "include",
		headers: {
			"content-type": "application/json",
			"content-length": `${state.length}`,
		},
		keepalive: true,
		body: state,
	});
	console.log(res);
}

window.addEventListener("visibilitychange", cache_state);
