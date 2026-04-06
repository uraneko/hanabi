import { DEV, Switch, Match, Show, createSignal } from 'solid-js';
import { CheckBox, PasswordField, Catalyst } from 'core/primitives';
import { Form, submit } from 'core/containers';
import { _, is_alphanumeric, is_ascii, json_from_map } from 'core';

import styles from './Security.module.css';

// export const Security = (props: { email_comms: boolean, unsecure_address: boolean }) => {
export const Security = (props: { configs: _ }) => {
	const unsecure_address = () => props.configs.unsecure_address;
	const email_comms = () => props.configs.email_comms;
	return <div class={styles.Chapter}>
		<div class={styles.Section}>
			<span class={styles.Title}>Email-Address</span>
			<CheckBox
				name="email_comms"
				legend="use email communication"
				state={email_comms()}
			/>
			<CheckBox
				name="unsecure_addr"
				legend="leave address unsecure"
				state={unsecure_address()}
			/>
		</div>

		<div class={styles.Section}>
			<span class={styles.Title}>Password</span>
			<ResetPassword />
		</div>
	</div>;
};

const ResetPassword = () => {
	const [reset, re_reset] = createSignal(false);
	const toggle_reset = (e: Event) => re_reset((rst: boolean) => !rst);
	const toggle_text = () => reset() ? "Cancel" : "Reset Password";

	return <div class={styles.ResetPassword}>
		<Catalyst call={toggle_reset}>
			{toggle_text()}
		</Catalyst>
		<Show when={reset()}>
			<Form
				action="/configs/reset-password"
				method="post"
				target="_blank"
				submit={pswd_rst}
			>
				<PasswordField legend="Current pswd" name="old_pswd" mandatory />
				<PasswordField legend="New pswd" name="new_pswd" mandatory />
				<PasswordField legend="Confirm pswd" name="confirm_pswd" mandatory />
				<Catalyst type="submit">Reset</Catalyst>
			</Form>
		</Show>
	</div>;
};

async function pswd_rst(e: SubmitEvent) {
	if (DEV !== undefined) return;

	const err = await submit(e);
	if (err.constructor.name === "Error") return err;
	const { map, path } = err as _;

	const new_pswd = map.get("new_pswd");
	let err1 = match_password(new_pswd, map.get("confirm_pswd"));
	if (err1 !== null) return err;
	err1 = check_password(new_pswd);
	if (err1 !== null) return err;

	const data = JSON.stringify(json_from_map(map));
	console.log(data);

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
}

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
		err.cause = "NonAsciiDetected";
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

function match_password(pswd: string, verify: string): Error | null {
	if (pswd !== verify) {
		const err = new Error("password verification mismatch");
		console.error(err);

		return err;
	}

	return null;
}
