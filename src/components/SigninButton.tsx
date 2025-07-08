import { type Component, createSignal } from 'solid-js';
import styles from './SigninButton.module.css';

export const SigninButton: Component = () => {
	return (
		<div class={styles.SigninButton}>
			<a class={styles.Button} href="/signin">
				Sign in
			</a>
		</div>
	)
};
