import { type Component, Show } from 'solid-js';

import styles from './AlterTaskNote.module.css';

type _ = any;

export const AlterTaskNote: Component = (props: _) => {
	const link = () => props.link;
	const task = () => props.task;
	const note = () => props.note;

	return (
		<Show when={task() !== undefined}>
			<span class={styles.Note}>
				<span>{note()}</span>
				<a class={styles.Link} href={link()}>{task()}</a>
			</span>
		</Show >
	);
};

