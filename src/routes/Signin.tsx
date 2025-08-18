import { type Component, createSignal } from 'solid-js';
import { HomeLogo } from 'comps/primitives';
import { SigninForm } from 'comps/containers';

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
