import { createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";

const [eph, re_eph] = createSignal(new Object() as Record<string, boolean>);

const ephemeral_context = createContext({ eph, re_eph });
export function eph_ctx() {
	return useContext(ephemeral_context);
}


