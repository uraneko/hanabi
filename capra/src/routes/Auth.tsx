import { type Component, createSignal, createEffect, createContext, useContext, Switch, Match } from 'solid-js';
import styles from './Auth.module.css';
import { user_state } from "user";
import { Signup, Signin } from "user/auth";
import { WildText } from "core/primitives";
import { _ } from "core";

const [form, set_form] = createSignal(0);
const form_context = createContext({ form, set_form });

export function form_ctx() {
	return useContext(form_context);
}

export const Auth: Component = () => {
	const user = user_state();
	// 0 for login 
	// 1 for register
	const { form, set_form } = form_ctx();

	const swap_form = () => set_form((form: number) =>
		Math.abs(1 - form)
	);

	return (
		<div class={styles.Auth} >
			<Switch>
				<Match when={user.is_logged_out()}>
					<Switch>
						<Match when={form() == 0}>
							<Signin swap_call={swap_form} />
						</Match>
						<Match when={form() == 1}>
							<Signup swap_call={swap_form} />
						</Match>
					</Switch>
				</Match>
				<Match when={user.is_logged_in()}>
					<WildText text="You are already logged-in." />
				</Match>
			</Switch>
		</div>
	);
};

