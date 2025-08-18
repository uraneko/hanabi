import { type Component } from 'solid-js';

import styles from './AuthForm.module.css';

import { PasswordField } from '../components/PasswordField';
import { TextField } from '../components/TextField';
import { AlterTaskNote } from '../components/AlterTaskNote';
import { CheckBox } from '../components/CheckBox';

export const SigninForm: Component = () => {
	const task = "Sign in";

	return (
		<form
			action="/auth?action=signin"
			method="post"
			class={styles.AuthForm}
		>
			<h4 class={styles.FormTitle}>{task}</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<PasswordField />
			<CheckBox name="user_remember" legend="&nbsp;Remember me" />
			<button type="submit" class={styles.TaskButton}>{task}</button>
			<AlterTaskNote task="Sign up" note="New to hanabi?&nbsp;" link="/signup" />
		</form>
	);
};

