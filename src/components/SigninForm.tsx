import { type Component } from 'solid-js';

import styles from './SigninForm.module.css';

import { PasswordField } from '../components/PasswordField';
import { TextField } from '../components/TextField';

export const SigninForm: Component = () => {
	return (
		<form
			action="http://localhost:8883/auth?action=signin"
			method="post"
			class={styles.SigninForm}
		>
			<h4 class={styles.FormTitle}>Sign in</h4>
			<TextField type="text" name="user_name" legend="User Name" />
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

