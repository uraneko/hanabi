import { type Component, createSignal } from 'solid-js';

import styles from './AuthForm.module.css';

import { PasswordField } from '../components/PasswordField';
import { TextField } from '../components/TextField';
import { AlterTaskNote } from '../components/AlterTaskNote';

export const SignupForm: Component = () => {
	const task = "Sign up";

	return (
		<div class={styles.AuthForm}>
			<h4 class={styles.FormTitle}>{task}</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<PasswordField />
			<button class={styles.TaskButton}>{task}</button>
			<AlterTaskNote task="Sign in" note="Already have an account?&nbsp;" link="/signin" />
		</div>
	);
};
