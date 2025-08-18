import { type Component, createSignal } from 'solid-js';
import { HomeLogo } from 'comps/primitives';
import { SignupForm } from 'comps/containers';

import styles from './Signup.module.css';
import appStl from '../App.module.css';

export const Signup: Component = () => {
	return (
		<div class={`${styles.Signup} ${appStl.AppRoute}`} >
			<HomeLogo />
			<SignupForm />
		</div >
	);
};
