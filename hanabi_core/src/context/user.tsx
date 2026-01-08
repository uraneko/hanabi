import { createContext, useContext, createSignal } from 'solid-js';

// 0 clearance means the client is not sure about the user clearance 
const [user, re_user] = createSignal({ name: undefined as string | undefined });
export const user_context = createContext({ user, re_user });

export function user_ctx() {
	return useContext(user_context);
}

export type User = {
	name?: string,
	// email?: string,
	// data: Object,
};

export function is_authless_session(user: User): boolean {
	return user.name === ""
}

export function is_uninit_session(user: User): boolean {
	return user.name === undefined
}

export function is_login_session(user: User): boolean {
	return user.name === undefined ? false : user.name.constructor.name === "String" ? user.name.length !== 0 : true;
}
