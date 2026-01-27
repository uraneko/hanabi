import { type Component, DEV, Switch, Match, createSignal, createContext, useContext } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Initialize } from './routes/Initialize';
import { Page } from './components/Page';
import { Splash } from 'core/primitives';
import { eph_styles as estyles } from 'core/wrappers';
import { user_ctx, is_non_init, is_authless, is_logged_in, eph_ctx } from 'core/context';
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

	const { eph, re_eph } = eph_ctx();
	disable_ephemerals(eph, re_eph);

	return (
		<div class={styles.App} /* on:click={() => console.log(user())} */>
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

function disable_ephemerals(eph: _, re_eph: _) {
	const click_off = (e: Event) => re_eph((ephemeral: _) => {
		const et = e.target as Element;
		let parent = super_parent_by_class(et, estyles.Ephemeral) ??
			super_uncle_by_class(et, estyles.Ephemeral);

		const neighbors = new Array(...document.body.querySelectorAll('.' + estyles.Ephemeral));
		neighbors
			.filter((nei: Element) => parent == null ? true :
				nei.parentElement! !== parent!.parentElement!)
			.map((ephem: Element) => ephem.getAttribute("ephem-hash")!)
			.filter((hash: string) => ephemeral[hash].events.includes(e.type))
			.forEach((hash: string) => {
				ephemeral[hash].show = false;
			});

		return structuredClone(ephemeral);
	});
	document.body.addEventListener("click", click_off);

	const press_off = (e: KeyboardEvent) => re_eph((ephemeral: _) => {
		if (e.key !== "z" || e.ctrlKey || e.shiftKey) { return ephemeral; }
		const ephemes = new Array(...document.body.querySelectorAll('.' + estyles.Ephemeral));
		ephemes
			.map((ephem: Element) => ephem.getAttribute("ephem-hash")!)
			.forEach((hash: string) => {
				if (ephemeral[hash].events.includes(e.type)) {
					ephemeral[hash].show = false;
				}
			});

		return structuredClone(ephemeral);
	});
	document.body.addEventListener("keypress", press_off);

	const hover_off = (e: Event) => re_eph((ephemeral: _) => {
		const et = e.target as Element;
		let parent = super_parent_by_class(et, estyles.Ephemeral) ??
			super_uncle_by_class(et, estyles.Ephemeral);

		const neighbors = new Array(...document.body.querySelectorAll('.' + estyles.Ephemeral));
		neighbors
			.filter((nei: Element) => parent == null ? true :
				nei.parentElement! !== parent!.parentElement!)
			.map((ephem: Element) => ephem.getAttribute("ephem-hash")!)
			.filter((hash: string) => ephemeral[hash].events.includes(e.type))
			.forEach((hash: string) => increment_hoverable(hash, ephemeral));

		return structuredClone(ephemeral);
	});
	document.body.addEventListener("mouseover", hover_off);

}

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

function shutdown_ephems(ephemeral: _, event_type: string) {
	document.body.querySelectorAll('.' + estyles.Ephemeral).forEach((ephem: Element) => {
		const hash = ephem.getAttribute("ephem-hash")!;
		if (ephemeral[hash].events.includes(event_type)) {
			ephemeral[hash].show = false;
		}
	});
}

function increment_hoverable(hash: string, ephemeral: _) {
	const ephem = ephemeral[hash];
	console.log(ephem.show, ephem.data);
	let data = ephem.data;
	if (data === undefined) {
		data = { hover_countdown: 0 };
	} else if (data.hover_countdown === undefined) {
		data.hover_countdown = 0;
	} else if (data.hover_countdown < 4) {
		data.hover_countdown += 1;
	} else {
		data.hover_countdown = 0;
		ephem.show = false;
	}
	ephem.data = data;
	ephemeral[hash] = ephem;
}

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
