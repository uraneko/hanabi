import { Component, JSX } from 'solid-js';
import styles from './Actuator.module.css';
import { _, spread_classes } from '../misc';

export const Actuator: Component<{ children: JSX.Element, class?: string | string[], link?: _, call?: _ }> = (props: _) => {
	const children = () => props.children;
	const link = () => props.link;
	const cls = () => props.class;
	const call = () => props.call;

	if (link() === undefined) {
		return (
			<button class={`${styles.Button} ${spread_classes(cls())}`} on:click={call()} >
				{children()}
			</button >
		);
	} else {
		return (
			<a class={`${styles.Actuator} ${spread_classes(cls())}`}
				href={link()} on:click={call()}>
				{children()}
			</a >
		);
	}
};

