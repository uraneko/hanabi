import { type Component, Show, Switch, Match, createResource } from 'solid-js';
import { Router, Route } from "@solidjs/router";

import styles from './App.module.css';

import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Signup } from './routes/Signup';
import { Signin } from './routes/Signin';
import { Initializer } from './routes/Initializer';
import { Page } from './components/Page';
import { use_ctx } from 'core/context';


export const App: Component = () => {
	const { user, re_user } = use_ctx();
	console.log(user());


	return (
		<div class={styles.App} on:click={() => console.log(user())}>
			<Page>
				<Switch>
					<Match when={user() == 0}>
						<Initializer />
					</Match>
					<Match when={[1, 2, 4].includes(user())}>
						<Router>
							<Route path="/" component={Home} />
							<Route path="/auth" component={Auth} />
						</Router>
					</Match>
					<Match when={user() > 4 || user() < 0}>
						<span>Error: User authentication error. Try clearing all page caches then refreshing.</span>
					</Match>
				</Switch>
			</Page>

		</div >
	);
};

export const parse_svg = (svg: string): SVGSVGElement => {
	return new DOMParser().parseFromString(svg, "image/svg+xml").querySelector("svg")!;
}

