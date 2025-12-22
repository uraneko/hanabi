import { type Component, Show, Switch, Match, createResource } from 'solid-js';
import { Router, Route } from "@solidjs/router";

import styles from './App.module.css';

import { Home } from './routes/Home';
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
					<Match when={true}>
						<Router>
							<Route path="/..." component={Initializer} />
							<Route path="/signin" component={Signin} />
							<Route path="/signup" component={Signup} />
						</Router>
					</Match>
				</Switch>
			</Page>

		</div >
	);
};

export const parse_svg = (svg: string): SVGSVGElement => {
	return new DOMParser().parseFromString(svg, "image/svg+xml").querySelector("svg")!;
}

