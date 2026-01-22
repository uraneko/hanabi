import { type Component, For, createSignal, mergeProps } from 'solid-js';

import { parse_svg } from '../misc';

import styles from './Item.module.css';

export const ItemList: Component<{ items: Parts[] }> = (props: { items: Parts[] }) => {
	const items = () => props.items;
	return (
		<div class={styles.List} >
			<For each={items()}>
				{(parts: Parts) => <Item parts={parts} />}
			</For >
		</div>
	);
};

type Parts = {
	icon: string,
	title: string,
};

export const Item: Component<{ parts: Parts }> = (props: { parts: Parts }) => {
	const parts = () => props.parts;
	const svg = parse_svg(parts().icon);

	return (
		<div class={styles.Item}>
			<button class={styles.Button}>
				{svg}
				<span class={styles.Title}>{parts().title}</span>
			</button>
		</div>
	);
};
