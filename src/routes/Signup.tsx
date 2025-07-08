import { type Component, createSignal } from 'solid-js';

import styles from './Signup.module.css';
import appStl from '../App.module.css';

import { HomeLogo } from '../components/HomeLogo';
import { SignupForm } from '../components/SignupForm';

export const Signup: Component = () => {
	return (
		<div class={`${styles.Signup} ${appStl.AppRoute}`} >
			<HomeLogo />
			<SignupForm />
		</div >
	);
};
