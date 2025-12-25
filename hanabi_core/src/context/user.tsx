import { createContext, useContext, createSignal } from 'solid-js';

// 0 clearance means the client is not sure about the user clearance 
const [user, re_user] = createSignal(0);
const user_ctx = createContext({ user, re_user });

export function use_ctx() {
	return useContext(user_ctx);
}
