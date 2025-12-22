import { type Component, createSignal } from 'solid-js';
import { SigninForm } from 'core/containers';

import styles from './Signin.module.css';
import appStl from '../App.module.css';

export const Signin: Component = () => {
	return (
		<div class={`${styles.Signin} ${appStl.AppRoute}`} >
			<SigninForm />
		</div >
	);
};
