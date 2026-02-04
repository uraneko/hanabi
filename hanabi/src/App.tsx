import { type Component, DEV, Switch, Match, createSignal, createContext, useContext } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Initialize } from './routes/Initialize';
import { Page } from './components/Page';
import { Splash } from 'core/primitives';
import { user_ctx, is_non_init, is_authless, is_logged_in } from 'core/context';
import { _ } from "core";
import styles from './App.module.css';

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
	};
}

export const App: Component = () => {
	const { user, re_user } = user_ctx();

	// log-in/out on the frontend state for development ease
	const session_rotation = (e: MouseEvent) =>
		re_user((user: _) => dev_ssn_rtt(user, e));

	return (
		<div class={styles.App}>
			<Switch>
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

// rgb(61, 65, 66): black-star box shadow

async function cache_state() {
	if (DEV !== undefined) return;
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

	if (!res.ok) return;
}
window.addEventListener("visibilitychange", cache_state);



function super_parent_by_class(elem: Element, cls: string): Element | null {
	const parents = new Array(...document.querySelectorAll('.' + cls));
	for (const parent of parents) {
		if (parent.contains(elem)) return parent;
	}

	return null;
}

function super_uncle_by_class(elem: Element, cls: string): Element | null {
	const parents = new Array(...document.querySelectorAll('.' + cls));
	for (const parent of parents) {
		const uncle = parent.nextElementSibling!;
		if (uncle === null) continue;
		if (uncle.contains(elem)) return uncle;
	}

	return null;
}

function is_child_of(elem: Element, cls: string): boolean {
	return new Array(...document.querySelectorAll('.' + cls))
		.some((parent: Element) => parent.contains(elem));
}

function is_parent_of(elem: Element, key: string, val: string): boolean {
	return elem.querySelector(`[${key}=${val}]`) !== null
}

function is_sibling_of(elem: Element, key: string, val: string): boolean {
	let next = elem.nextElementSibling;
	while (next !== null) {
		if (next.getAttribute(key) === val) {
			return true;
		}
	}

	return false;
}

function sibling_by_attr(elem: Element, key: string, val: string): null | Element {
	let next = elem.nextElementSibling;
	while (next !== null) {
		if (next.getAttribute(key) === val) {
			return next;
		}
	}

	return null;
}

export { styles };
