import { type Component } from 'solid-js';
import {
	TextLine, Separator, PasswordField, CheckBox, Actuator, TextField,
} from "core/primitives";
import { Form, form_styles as fstyles, submit } from "core/containers";
import { type _, json_from_map, is_alphanumeric, is_ascii } from "core";

function check_password(pswd: string): Error | null {
	const err = new Error();
	if (pswd.length > 24) {
		err.message = "password too long";
		err.cause = "LengthFailure";
		console.error(err);

		return err;
	} else if (pswd.length < 8) {
		err.message = "password too short";
		err.cause = "LengthFailure";
		console.error(err);

		return err;
	} else if (!is_ascii(pswd)) {
		err.message = "password contains non ascii chars";
		err.cause = "NonAsciiChars";
		console.error(err);

		return err;
	} else if (is_alphanumeric(pswd)) {
		err.message = "password needs to have at least 1 symbol (non-alphanumeric char)";
		err.cause = "TooLittleVariation";
		console.error(err);

		return err;
	}

	return null;
}

function verify_password(pswd: string, verify: string): Error | null {
	if (pswd !== verify) {
		const err = new Error("password verification mismatch");
		console.error(err);

		return err;
	}

	return null;
}

async function register(e: SubmitEvent) {
	const err = await submit(e);
	if (err.constructor.name === "Error") return err;
	const { map, path } = err as _;

	const pswd = map.get("user_pswd");
	let err1 = verify_password(pswd, map.get("verify_pswd"));
	if (err1 !== null) return err;
	err1 = check_password(pswd);
	if (err1 !== null) return err;

	const data = JSON.stringify(json_from_map(map));
	const res = await fetch(path, {
		method: "PUT",
		credentials: "include",
		headers: {
			"content-type": "application/json",
			"content-length": `${data.length}`,
		},
		body: data,
	});
	history.pushState("", "/");
}

// <input type="hidden" name="method_override" value="put" />
export const Signup: Component<{ swap_call: _ }> = (props: _) => {
	const call = () => props.swap_call;
	return (
		<Form
			action="/auth"
			method="post"
			target="_blank"
			submit={register}
		>
			<h4 class={fstyles.FormTitle}>Register</h4>
			<TextField type="text" name="user_name" legend="User Name" mandatory />
			<TextField type="email" name="user_email" legend="Email" />
			<PasswordField name="user_pswd" mandatory />
			<PasswordField name="verify_pswd" legend="Verify Password" mandatory />
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
