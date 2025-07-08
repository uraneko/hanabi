import { type Component, Show } from 'solid-js';
import { Router, Route } from "@solidjs/router";

import styles from './App.module.css';

import { Home } from './routes/Home';
import { Signup } from "./routes/Signup";
import { Signin } from './routes/Signin';
import { Splash } from './routes/Splash';

export const App: Component = () => {
	return (
		<div class={styles.App}>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/..." component={Splash} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
			</Router>
		</div >
	);
}

export const svg = (svg: string): SVGSVGElement => {
	return new DOMParser().parseFromString(svg, "image/svg+xml").querySelector("svg")!;
}

