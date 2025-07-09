import { type Component, Show } from 'solid-js';

import styles from './AlterTaskNote.module.css';

type _ = any;

// TODO the Show wrap is potentially unneeded 
// perhaps i should throw if task is not set 
export const AlterTaskNote: Component = (props: _) => {
	const link = () => props.link;
	const task = () => props.task;
	const note = () => props.note;

	return (
		<Show when={task() !== undefined}>
			<div class={styles.AltNote}>
				<hr class={styles.GrandLine} />
				<span class={styles.Note}>
					<span>{note()}</span>
					<a class={styles.Link} href={link()}>{task()}</a>
				</span>
			</div>
		</Show >
	);
};

