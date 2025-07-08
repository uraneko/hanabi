import { type Component } from 'solid-js';

import styles from './SigninForm.module.css';

import { PasswordField } from '../components/PasswordField';

export const SigninForm: Component = () => {
	return (
		<div class={styles.SigninForm}>
			<h4 class={styles.FormTitle}>Sign in</h4>
			<div class={styles.InputJar}>
				<legend class={styles.InputLegend}>User Name</legend>
				<input type="text"
					id="UserName"
					class={styles.InputField}
					name="name" />
			</div>
			<PasswordField />
			<div class={styles.KeepMeCheckBox}>
				<input type="checkbox" checked />
				<legend>Remember me</legend>
			</div>
			<button class={styles.SigninButton}>Sign in</button>
			<span class={styles.SignupNote}>
				<span>New to hanabi?&nbsp;</span>
				<a class={styles.SignupLink} href="/signup">Sign up.</a>
			</span>
		</div>
	);
};

