import { Component, JSX } from 'solid-js';
import styles from './TextLine.module.css';
import { _, spread_classes } from '../misc';

export const TextLine: Component<{ children: JSX.Element, class: string | string[] }> = (props: _) => {
	const children = () => props.children;
	const cls = () => props.cls;

	return (<span class={` ${styles.TextLine} ${spread_classes(cls())}`}>
		{children()}
	</span >);
};


