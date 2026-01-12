import { type Component } from 'solid-js';
import {
	TextLine, Separator, PasswordField, CheckBox, Actuator, TextField,
} from "core/primitives";
import { Form, form_styles as fstyles, submit } from "core/containers";
import { type _, json_from_map } from "core";

async function login(e: SubmitEvent) {
	const err = await submit(e);
	if (err.constructor.name === "Error") return err;
	const { map, path } = err as _;

	const data = JSON.stringify(json_from_map(map));
	const res = await fetch(path, {
		method: "POST",
		credentials: "include",
		headers: {
			"content-type": "application/json",
			"content-length": `${data.length}`,
		},
		body: data,
	});
	history.pushState("", "/");
}

export const Signin: Component<{ swap_call: _ }> = (props: _) => {
	const call = () => props.swap_call;

	return (
		<Form
			action="/auth"
			method="post"
			target="_blank"
			submit={login}
		>
			<h4 class={fstyles.FormTitle}>Login</h4>
			<TextField type="text" name="user_name" legend="User Name or Email" mandatory />
			<PasswordField name="user_pswd" mandatory />
			<CheckBox name="persist_session" legend="&nbsp;persist session" />
			<Actuator type="submit" class={fstyles.SubmitButton}>Login</Actuator>
			<Separator />
			<TextLine>
				<span class={fstyles.Note}>
					New to hanabi?
				</span>
				<Actuator class={fstyles.SwapButton} call={call()}>
					<span>Register.</span>
				</Actuator>
			</TextLine >
		</Form>
	);
};
