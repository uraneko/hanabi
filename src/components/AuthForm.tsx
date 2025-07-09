import { type Component, Show, createSignal } from 'solid-js';

import styles from './AuthForm.module.css';

import { PasswordField } from '../components/PasswordField';
import { TextField } from '../components/TextField';

type _ = any;

export const AuthForm: Component = (props: _) => {
	const task = () => props.task;
	const alter_task = () => props.alter_task;
	const alter_link = () => props.alter_link;
	const alter_note = () => props.alter_note;

	return (
		<div class={styles.AuthForm}>
			<h4 class={styles.FormTitle}>{task()}</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<PasswordField />
			<button class={styles.TaskButton}>{task()}</button>
		</div>
	);
};

