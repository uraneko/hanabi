import { type Component, Show, Switch, Match, createResource } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Initialize } from './routes/Initialize';
import { Page } from './components/Page';
import { Splash } from 'core/primitives';
import { user_ctx } from 'core/context';
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

function dev_ssn_rtt(user: _, e: Event): { name: string | undefined } {
	const t = e.target as HTMLElement;
	const cls = t.className;
	if (cls.constructor.name !== "String") return user;
	let within_form = false;
	if (t.className.includes("Auth")) { within_form = true; }
	if (!within_form) {
		within_form = outer_class_contains(t, "Auth");
	}
	if (!within_form) return user;
	return { name: user.name == "" ? "scarecrow" : "" }
}

export const App: Component = () => {
	const { user, re_user } = user_ctx();

	const session_rotation = (e: MouseEvent) =>
		re_user((user: _) => dev_ssn_rtt(user, e));

	const show = () => () => console.log("//", user())

	return (
		<div class={styles.App} on:click={session_rotation} >
			<Switch>
				<Match when={is_uninit_session(user())}>
					<Initialize />
				</Match>
				<Match when={!is_uninit_session(user())}>
					<Page>
						<Router>
							<Route path="/" component={Home} />
							<Route path="/auth" component={Auth} />
							<Route path="*" component={Splash} />
						</Router>
					</Page>
				</Match>
			</Switch>
		</div>
	);
};

export type User = {
	name: string | undefined,
};

export function is_authless_session(user: User): boolean {
	return user.name === ""
}

export function is_uninit_session(user: User): boolean {
	return user.name === undefined
}

export function is_login_session(user: User): boolean {
	return user.name === undefined ? false : user.name.constructor.name === "String" ? user.name.length !== 0 : true;
}
