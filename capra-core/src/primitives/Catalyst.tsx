import { Component, Switch, Match, JSX } from 'solid-js';
import styles from './Catalyst.module.css';
import { _, spread_classes } from '../misc';

export const Catalyst: Component<{
	children: JSX.Element,
	type?: string,
	class?: string | string[],
	link?: _,
	call?: _,
	style?: Object,
	attrs?: Object,
}> = (props: _) => {
	const children = () => props.children;
	const link = () => props.link;
	const cls = () => props.class;
	const call = () => props.call;
	const attrs = () => props.attrs;
	const styles = () => props.style;

	const actuator = new_actuator(children(), cls(), call(), link());
	assign_attrs(actuator as _, attrs());
	assign_styles(actuator as _, styles());

	return actuator;
};

function new_actuator(
	children: JSX.Element,
	cls?: string | string[],
	call?: _,
	link?: string,
): JSX.Element {
	return link === undefined ?
		<button class={`${styles.Button} ${spread_classes(cls)}`}
			on:mousedown={call}>{children}</button> :
		<a class={`${styles.Catalyst} ${spread_classes(cls)}`}
			href={link} on:mousedown={call}>{children}</a>
}

function assign_attrs(comp: Element, attrs?: Object) {
	if (attrs === undefined) return;

	for (const [key, val] of Object.entries(attrs)) {
		comp.setAttribute(key, val);
	}
}

function assign_styles(comp: HTMLElement, styles?: Object) {
	if (styles === undefined) return;

	const stl = comp.style;
	for (const [key, val] of Object.entries(styles)) {
		stl.setProperty(key, val);
	}
}
