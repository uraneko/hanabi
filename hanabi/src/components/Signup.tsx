import { type Component } from 'solid-js';
import {
	TextLine, Separator, PasswordField, CheckBox, Actuator, TextField,
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
			<h4 class={fstyles.FormTitle}>Register</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<TextField type="email" name="user_email" legend="Email" />
			<PasswordField name="user_pswd" />
			<PasswordField legend="Verify Password" />
			<CheckBox name="auto_login" legend="&nbsp;auto login" />
			<Actuator class={fstyles.SubmitButton}>Register</Actuator>
			<Separator />
			<TextLine>
				<span class={fstyles.Note} >
					Already have an account?
				</span>
				<Actuator class={fstyles.SwapButton} call={call()}>
					<span>Login.</span>
				</Actuator>
			</TextLine>
		</Form >
	);
};
