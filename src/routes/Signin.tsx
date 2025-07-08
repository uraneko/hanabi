import { type Component, createSignal } from 'solid-js';

import styles from './Signin.module.css';
import appStl from '../App.module.css';

import { HomeLogo } from '../components/HomeLogo';
import { SigninForm } from '../components/SigninForm';

export const Signin: Component = () => {
	return (
		<div class={`${styles.Signin} ${appStl.AppRoute}`} >
			<HomeLogo />
			<SigninForm />
		</div >
	);
};
