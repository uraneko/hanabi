import { createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";

const [store, re_store] = createSignal(new Object() as Record<_, _>);
const store_context = createContext({ store, re_store });

export function store_ctx() {
	return useContext(store_context);
}
