import { type Component, createSignal } from 'solid-js';
import { HomeLogo } from 'core/primitives';
import { SigninForm } from 'core/containers';

import styles from './Signin.module.css';
import appStl from '../App.module.css';

export const Signin: Component = () => {
	return (
		<div class={`${styles.Signin} ${appStl.AppRoute}`} >
			<HomeLogo />
			<SigninForm />
		</div >
	);
};
