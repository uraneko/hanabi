import { Component } from "solid-js";
import { _, spread_classes } from '../misc';
import styles from './WildText.module.css';

export const WildText: Component<{ text: string, class?: string | string[] }> = (props: _) => {
	const text = () => props.text;
	const cls = () => props.class;

	return (
		<div class={`${styles.WildText} ${spread_classes(cls())}`}>
			<span class={styles.WildContent} >
				{text()}
			</span>
		</div >
	);
};
