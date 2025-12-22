import { type Component, createSignal, JSX, Switch, Match } from 'solid-js';
import styles from './Auth.module.css';
import route_styles from '../App.module.css';
import { use_ctx } from "core/context";
import { SigninForm, SignupForm } from "core/containers";

export const Auth: Component = () => {
	const { user, re_user } = use_ctx();
	const [form, set_form] = createSignal(0);

	const swap_form = () => set_form((form: number) =>
		Math.abs(1 - form)
	);

	return (
		<div class={` ${styles.Auth} ${route_styles.AppRoute}`} >
			<Switch>
				<Match when={user() == 1} >
					<Switch>
						<Match when={form() == 0}>
							<SigninForm swap_call={swap_form} />
						</Match>
						<Match when={form() == 1}>
							<SignupForm swap_call={swap_form} />
						</Match>
					</Switch>
				</Match>
				<Match when={[2, 4].includes(user())} >
					<span>you are already signed in.</span>
				</Match>
			</Switch>
		</div>
	);
};
