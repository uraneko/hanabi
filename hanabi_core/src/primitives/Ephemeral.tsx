import { Component, JSX, Show } from 'solid-js';
import { _, spread_classes } from '../misc';
import { eph_ctx } from '../context';
import styles from './Ephemeral.module.css';

export const Ephemeral: Component<{ children: JSX.Element, class?: string | string[], hash: string }>
	= (props: _) => {
		const { eph, re_eph } = eph_ctx();
		const children = () => props.children;
		const cls = () => props.class;
		const hash = () => props.hash;

		return (
			<Show when={eph()[hash()]}>
				<div
					class={`${styles.Ephemeral}${spread_classes(cls())}`} ephemeral-hash={hash()}>
					{children()}
				</div>
			</Show >
		);
	};

export function new_hash(eph: Record<string, boolean>) {
	let hash = `${crypto.randomUUID()}`;

	while (Object.hasOwn(eph, hash)) {
		hash = `${crypto.randomUUID()}`;
	}

	return hash;
}

export function assign_hash(eph: Record<string, boolean>, hash: string): Record<string, boolean> {
	eph[hash] = false;

	return eph;
}

export { styles };
