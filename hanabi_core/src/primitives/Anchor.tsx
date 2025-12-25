import { Component, JSX } from 'solid-js';
import styles from './Anchor.module.css';
import { _, spread_classes } from '../misc';

export const Anchor: Component<{ children: JSX.Element, class: string | string[], link: _ }> = (props: _) => {
	const children = () => props.children;
	const link = () => props.link;
	const cls = () => props.class;

	return (<a class={`${styles.Anchor} ${spread_classes(cls())}`} href={link()} >
		{children()}
	</a >);
};

