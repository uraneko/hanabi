import { createContext, useContext, createSignal } from 'solid-js';

// 0 clearance means the client is not sure about the user clearance 
const [user, re_user] = createSignal({ name: undefined as string | undefined });
export const user_context = createContext({ user, re_user });

export function user_ctx() {
	return useContext(user_context);
}
