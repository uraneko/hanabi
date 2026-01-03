import { type Component, Show, Switch, Match, createResource } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Initializer } from './routes/Initializer';
import { Page } from './components/Page';
import { user_ctx } from 'core/context';
import { is, _ } from "core";
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

export const App: Component = () => {
	const { user, re_user } = user_ctx();

	const session_rotation = (e: MouseEvent) =>
		re_user((user: _) => {
			const t = e.target as HTMLElement;
			const cls = t.className;
			if (cls.constructor.name !== "String") return user;
			let within_form = false;
			if (t.className.includes("Auth")) { within_form = true; }
			if (!within_form) {
				within_form = outer_class_contains(t, "Auth");
			}
			if (!within_form) return user;

			return { name: user.name == undefined ? "scarecrow" : undefined }
		});

	return (
		<div class={styles.App} on:click={session_rotation}>
			<Switch>
				<Match when={!is(user())}>
					<Initializer />
				</Match>
				<Match when={is(user())}>
					<Page>
						<Router>
							<Route path="/" component={Home} />
							<Route path="/auth" component={Auth} />
							<Route path="*" component={Initializer} />
						</Router>
					</Page>
				</Match>
			</Switch>
		</div >
	);
};

