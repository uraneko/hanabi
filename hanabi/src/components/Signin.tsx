import { type Component, DEV } from 'solid-js';
import {
	TextLine, Separator, PasswordField, CheckBox, Catalyst, TextField,
} from "core/primitives";
import { user_ctx } from "core/context";
import { Form, form_styles as fstyles, submit } from "core/containers";
import { type _, json_from_map } from "core";

async function login(e: SubmitEvent) {
	const { user, re_user } = user_ctx();
	if (DEV !== undefined) {
		e.preventDefault();
		re_user({
			name: "some name",
			email: "some@email",
			access_token: "34hereqwqjrerEWRYTQQ#$%$^&^YTGR",
		});
	}


	const err = await submit(e);
	if (err.constructor.name === "Error") return err;
	const { map, path } = err as _;

	const data = JSON.stringify(json_from_map(map));
	const res = await fetch(path, {
		method: "PATCH",
		credentials: "include",
		headers: {
			"content-type": "application/json",
			"content-length": `${data.length}`,
		},
		body: data,
	});
	if (!res.ok) return;
	const user_state = await res.json();

	re_user(user_state);

	const clear_access = () =>
		re_user((user: _) => {
			return {
				name: user.name,
				email: user.email,
				access_token: undefined,
			}
		});
	await new Promise(_ => setTimeout(clear_access, 1200 * 1000));



}

export const Signin: Component<{ swap_call: _ }> = (props: _) => {
	const call = () => props.swap_call;

	return (
		<Form
			action="/auth/remembrance"
			method="post"
			target="_blank"
			submit={login}
		>
			<h4 class={fstyles.FormTitle}>Login</h4>
			<TextField type="text" name="user_name" legend="User Name or Email" mandatory />
			<PasswordField name="user_pswd" mandatory />
			<CheckBox name="persist_session" legend="&nbsp;persist session" />
			<Catalyst type="submit" class={fstyles.SubmitButton}>Login</Catalyst>
			<Separator />
			<TextLine>
				<span class={fstyles.Note}>
					New to hanabi?
				</span>
				<Catalyst class={fstyles.SwapButton} call={call()}>
					<span>Register.</span>
				</Catalyst>
			</TextLine >
		</Form>
	);
};
