import { type Component } from 'solid-js';
import {
	TextLine, Separator, PasswordField, CheckBox, Button, TextField,
} from "core/primitives";
import { Form, form_styles as fstyles } from "core/containers";
import styles from './Signin.module.css';
import { type _ } from "core";

export const Signup: Component<{ swap_call: _ }> = (props: _) => {
	const call = () => props.swap_call;
	return (
		<Form
			action="/auth/user"
			method="post"
			target="_blank"
		>
			<input type="hidden" name="method_override" value="put" />
			<h4 class={styles.FormTitle}>Register</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<PasswordField name="user_pswd" />
			<PasswordField legend="Verify Password" />
			<CheckBox name="auto_login" legend="&nbsp;auto login" />
			<Button class={fstyles.SubmitButton}>Register</Button>
			<Separator />
			<TextLine>
				<span class={fstyles.Note} >
					Already have an account?
				</span>
				<Button class={fstyles.SwapButton} call={call()}>
					<span>Login.</span>
				</Button>
			</TextLine>
		</Form >
	);
};
