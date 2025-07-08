import { type Component } from 'solid-js';

import styles from './SigninForm.module.css';

import { PasswordField } from '../components/PasswordField';

export const SigninForm: Component = () => {
	return (
		<form
			action="http://localhost:8883/auth?action=signin"
			method="post"
			class={styles.SigninForm}
		>
			<h4 class={styles.FormTitle}>Sign in</h4>
			<div class={styles.InputJar}>
				<legend class={styles.InputLegend}>User Name</legend>
				<input type="text"
					id="Name"
					class={styles.InputField}
					name="user_name" />
			</div>
			<PasswordField />
			<div class={styles.RememberMeCheckBox}>
				<input
					type="checkbox"
					id="Remember"
					name="user_remember" checked />
				<legend>Remember me</legend>
			</div>
			<button type="submit" class={styles.SigninButton}>Sign in</button>
			<span class={styles.SignupNote}>
				<span>New to hanabi?&nbsp;</span>
				<a class={styles.SignupLink} href="/signup">Sign up.</a>
			</span>
		</form>
	);
};

