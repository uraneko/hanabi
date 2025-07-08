import { type Component, createSignal } from 'solid-js';

import styles from './SignupForm.module.css';

import { PasswordField } from '../components/PasswordField';

export const SignupForm: Component = () => {
	const action = "Sign up";

	return (
		<div class={styles.SignupForm}>
			<h4 class={styles.FormTitle}>{action}</h4>
			<div class={styles.InputJar}>
				<legend class={styles.InputLegend}>User Name</legend>
				<input type="text"
					id="UserName"
					class={styles.InputField}
					name="name" />
			</div>
			<PasswordField />
			<button class={styles.SignupButton}>{action}</button>
			<span class={styles.SignupNote}>
				<span>Already have a profile?&nbsp;</span>
				<a class={styles.SignupLink} href="/signin">Sign in.</a>
			</span>
		</div>
	);
};

// need to implement a [Routing] solution // globally visible app routes

// need to implement a [Subscriptions] solution // globally available components states 

// need to implement a [DataFetching] solution // easy fetch from server api + global data caching

// how to write a single component
// need to implement a [ComponentsDesign] solution  

// need to implement a [BasicComponents] solution

// need to implement a [BuildBundling] solution

