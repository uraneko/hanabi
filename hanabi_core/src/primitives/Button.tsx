import { Component, JSX } from 'solid-js';
import styles from './Button.module.css';
import { _, spread_classes } from '../misc';

export const Button: Component<{ children: JSX.Element, class?: string | string[], call: _ }> = (props: _) => {
	const children = () => props.children;
	const call = () => props.call;
	const cls = () => props.class;

	return (<button class={`${styles.Button} ${spread_classes(cls())}`} on:click={call()} >
		{children()}
	</button >);
};

