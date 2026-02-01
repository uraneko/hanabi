import { Component, JSX, Show } from 'solid-js';
import { _, spread_classes } from '../misc';
import { eph_ctx, content_ctx } from '../context';
import styles from './Ephemeral.module.css';

export const Ephemeral: Component<{
	children: JSX.Element,
	events?: string | string[],
	show: boolean,
	hash: string,
}> = (props: _): JSX.Element => {
	const { eph, re_eph } = eph_ctx();
	const children = () => props.children;
	const show = () => props.show;
	const events = () => props.events === undefined ? [] :
		props.events.constructor.name === "String" ? [props.events] : props.events;
	const hash = () => props.hash;

	re_eph((eph: _) => {
		eph[hash()] = { events: events(), show: show() };

		return structuredClone(eph);
	});


	return (
		<Show when={eph()[hash()].show}>
			{children()}
		</Show >
	);
};

export function new_hash(eph: Record<string, { events: string[], show: boolean }>): string {
	let hash = `${crypto.randomUUID()}`;

	while (Object.hasOwn(eph, hash)) {
		hash = `${crypto.randomUUID()}`;
	}

	return hash;
}

export function assign_hash(
	eph: Record<string, { events: string[], show: boolean }>,
	hash: string,
	events: string[],
	show: boolean
): Record<string, { events: string[], show: boolean }> {
	eph[hash] = { show: show, events: events };

	return eph;
}

export function setup(events: string[], show: boolean): [string, _] {
	const { content, re_content } = content_ctx();
	const { eph, re_eph } = eph_ctx();
	const hash = new_hash(eph());
	re_eph(assign_hash(eph(), hash, events, show));

	const flip = () => re_eph((eph: _) => {
		eph[hash].show = !eph[hash].show;
		re_content(!content());

		return structuredClone(eph);
	});

	return [hash, flip];
}

export { styles };
