import { type Component, Show, Switch, Match, createResource } from 'solid-js';
import { Router, Route } from "@solidjs/router";
import { Home } from './routes/Home';
import { Auth } from './routes/Auth';
import { Initializer } from './routes/Initializer';
import { Page } from './components/Page';
import { user_ctx } from 'core/context';
import { is } from "core";
import styles from './App.module.css';

export const App: Component = () => {
	const { user, re_user } = user_ctx();
	console.log(user());

	return (
		<div class={styles.App} on:click={() => console.log(user())}>
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

