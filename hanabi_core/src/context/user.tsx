import { createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";

const [user, re_user] = createSignal({
	name: undefined as string | undefined,
	email: undefined as string | undefined,
	data: new Object({}),
	access_token: undefined as string | undefined,
});

const user_context = createContext({ user, re_user });
export function user_ctx() {
	return useContext(user_context);
}

export function is_authless(user: _): boolean {
	return user.name === ""
}

export function is_non_init(user: _): boolean {
	return user.name === undefined
}

export function is_logged_in(user: _): boolean {
	return user.name === undefined ? false :
		user.name.constructor.name === "String" ? user.name.length !== 0 : true;
}
