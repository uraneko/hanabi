import { type Component, createSignal, Switch, Match } from 'solid-js';
import styles from './Auth.module.css';
import { use_ctx } from "core/context";
import { Signup } from "../components/Signup";
import { Signin } from "../components/Signin";

export const Auth: Component = () => {
	const { user, re_user } = use_ctx();
	const [form, set_form] = createSignal(0);

	const swap_form = () => set_form((form: number) =>
		Math.abs(1 - form)
	);

	return (
		<div class={styles.Auth} >
			<Switch>
				<Match when={user() == 1} >
					<Switch>
						<Match when={form() == 0}>
							<Signin swap_call={swap_form} />
						</Match>
						<Match when={form() == 1}>
							<Signup swap_call={swap_form} />
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
