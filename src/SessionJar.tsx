import { type Component, createSignal } from 'solid-js';

import styles from './SessionJar.module.css';

const SessionJar: Component = () => {
	return (
		<div class={styles.SessionJar}>
			<SessionActions>
			</SessionActions>
			<SessionAuth>
			</SessionAuth>
		</div>
	);
};

const SessionActions: Component = () => {
	const [c, sC] = createSignal(0);
	const increment = () => sC((p: number) => p + 1);
	const decrement = () => sC((p: number) => p - 1);

	return (
		<span class={styles.SessionActions}>
			<button class={styles.Action} onClick={increment}>
				Login
			</button>
			<button class={styles.Action} onClick={decrement}>
				Signup
			</button>
			<span>count ={'>'} {c()} </span>
		</span>
	);
};

const SessionAuth: Component = () => {
	return (
		<div class={styles.SessionAuth}>
			<LoginForm>
			</LoginForm>
		</div>
	);
}

const LoginForm: Component = () => {
	return (
		<div class={styles.LoginForm}>
			<fieldset class={styles.InputLabel}>
				<legend>User Name</legend>
				<input type="text"
					id="UserName"
					class={styles.InputField}
					name="name" />
			</fieldset>
			<fieldset class={styles.InputLabel}>
				<legend>Passowrd</legend>
				<input type="password"
					id="Password"
					class={styles.InputField}
					name="psw" />
			</fieldset>
			<button class={styles.LoginAction}>LOGIN</button>
		</div>
	);
};

const SignupForm: Component = () => {
	return (
		<div class={styles.SignupForm}>

		</div>
	);
};

export default SessionJar;
