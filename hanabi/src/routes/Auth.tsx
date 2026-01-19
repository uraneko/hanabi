import { type Component, createSignal, createEffect, createContext, useContext, Switch, Match } from 'solid-js';
import styles from './Auth.module.css';
import { is_authless, is_logged_in, user_ctx } from "core/context";
import { Signup } from "../components/Signup";
import { Signin } from "../components/Signin";
import { WildText } from "core/primitives";
import { _ } from "core";

const [form, set_form] = createSignal(0);
const form_context = createContext({ form, set_form });

export function form_ctx() {
	return useContext(form_context);
}

export const Auth: Component = () => {
	const { user, re_user } = user_ctx();
	// 0 for login 
	// 1 for register
	const { form, set_form } = form_ctx();

	const swap_form = () => set_form((form: number) =>
		Math.abs(1 - form)
	);

	return (
		<div class={styles.Auth} >
			<Switch>
				<Match when={is_authless(user())}>
					<Switch>
						<Match when={form() == 0}>
							<Signin swap_call={swap_form} />
						</Match>
						<Match when={form() == 1}>
							<Signup swap_call={swap_form} />
						</Match>
					</Switch>
				</Match>
				<Match when={is_logged_in(user())}>
					<WildText text="You are already logged-in." />
				</Match>
			</Switch>
		</div>
	);
};

