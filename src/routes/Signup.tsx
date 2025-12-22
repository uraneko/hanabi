import { type Component, createSignal } from 'solid-js';
import { SignupForm } from 'core/containers';

import styles from './Signup.module.css';
import appStl from '../App.module.css';

export const Signup: Component = () => {
	return (
		<div class={`${styles.Signup} ${appStl.AppRoute}`} >
			<SignupForm />
		</div >
	);
};
