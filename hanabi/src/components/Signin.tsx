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
			action="http://127.10.10.1:6680/auth/user"
			method="post"
		>
			<h4 class={fstyles.FormTitle}>Login</h4>
			<TextField type="text" name="user_name" legend="User Name" />
			<PasswordField />
			<CheckBox name="user_remember" legend="&nbsp;remember me" />
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
