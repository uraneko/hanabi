import { type Component, createSignal, Switch, Match } from 'solid-js';
import styles from './Auth.module.css';
import { user_ctx } from "core/context";
import { Signup } from "../components/Signup";
import { Signin } from "../components/Signin";
import { is } from "core";

export const Auth: Component = () => {
	const { user, re_user } = user_ctx();
	// 0 for login 
	// 1 for register
	const [form, set_form] = createSignal(0);

	const swap_form = () => set_form((form: number) =>
		Math.abs(1 - form)
	);

	return (
		<div class={styles.Auth} >
			<Switch>
				<Match when={!is(user().name)} >
					<Switch>
						<Match when={form() == 0}>
							<Signin swap_call={swap_form} />
						</Match>
						<Match when={form() == 1}>
							<Signup swap_call={swap_form} />
						</Match>
					</Switch>
				</Match>
				<Match when={is(user().name)} >
					<span>you are already signed in.</span>
				</Match>
			</Switch>
		</div>
	);
};
