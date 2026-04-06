import { DEV, Switch, Match, Show, createEffect, createSignal } from 'solid-js';
import { CheckBox, PasswordField, Catalyst } from 'core/primitives';
import { Form, submit } from 'core/containers';
import { _, is_alphanumeric, is_ascii, json_from_map } from 'core';

import styles from './Security.module.css';

// export const Security = (props: { send_me_emails: boolean, unsecure_address: boolean }) => {
export const Security = (props: { configs: _ }) => {
	const expose_my_address = () => props.configs.expose_my_address;
	const send_me_emails = () => props.configs.send_me_emails;
	return <div class={styles.Chapter}>
		<div class={styles.Section}>
			<span class={styles.Title}>Email-Address</span>
			<AddressOptions
				send_me_emails={send_me_emails()}
				expose_my_address={expose_my_address()}
			/>
		</div>
		<div class={styles.Section}>
			<span class={styles.Title}>Password</span>
			<ResetPassword />
		</div>
	</div>;
};

const AddressOptions = (props: {
	send_me_emails: boolean,
	expose_my_address: boolean
}) => {
	const send = () => props.send_me_emails;
	const expose = () => props.expose_my_address;
	return <div class={`${styles.SectionContents} ${styles.Address}`}>
		<CheckBox
			name="send_me_emails"
			legend="send me emails"
			state={send()}
		/>
		<CheckBox
			name="unsecure_addr"
			legend="expose my address"
			state={expose()}
		/>
	</div>
};

const ResetPassword = () => {
	const [reset, re_reset] = createSignal(false);
	const toggle_reset = (e: Event) => re_reset((rst: boolean) => !rst);

	return <div class={`${styles.SectionContents} ${styles.Password}`}>
		<Switch>
			<Match when={!reset()}>
				<Catalyst class={styles.Trigger} call={toggle_reset}>
					Reset Password
				</Catalyst>
			</Match>
			<Match when={reset()} >
				<Form
					action="/configs/reset-password"
					method="post"
					target="_blank"
					submit={pswd_rst}
				>
					<h4 class={styles.FormTitle}>Password-Reset</h4>
					<PasswordField legend="Current pswd" name="old_pswd" mandatory />
					<PasswordField legend="New pswd" name="new_pswd" mandatory />
					<PasswordField legend="Confirm pswd" name="confirm_pswd" mandatory />
					<div class={styles.ButtonGroup}>
						<Catalyst type="button"
							class={`${styles.Trigger} ${styles.FormOff}`}
							call={toggle_reset}
						>
							Cancel
						</Catalyst>
						<Catalyst class={styles.Trigger} type="submit">Reset</Catalyst>
					</div>
				</Form>
			</Match>
		</Switch>
	</div >;
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
