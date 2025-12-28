import { type Component } from 'solid-js';
import {
	TextLine, Separator, PasswordField, CheckBox, Button, TextField,
} from "core/primitives";
import { Form, form_styles as fstyles } from "core/containers";
import styles from './Signin.module.css';
import { type _ } from "core";

export const Signin: Component<{ swap_call: _ }> = (props: _) => {
	const call = () => props.swap_call;

	return (
		<Form
			action="/auth/user"
			method="post"
			target="_blank"
		>
			<h4 class={fstyles.FormTitle}>Login</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<PasswordField name="user_pswd" />
			<CheckBox name="persist_session" legend="&nbsp;persist session" />
			<Button type="submit" class={fstyles.SubmitButton}>Login</Button>
			<Separator />
			<TextLine>
				<span class={fstyles.Note}>
					New to hanabi?
				</span>
				<Button class={fstyles.SwapButton} call={call()}>
					<span>Register.</span>
				</Button>
			</TextLine >
		</Form>
	);
};
