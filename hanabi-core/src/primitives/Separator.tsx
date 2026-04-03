import { createSignal } from 'solid-js';
import styles from './Separator.module.css';
import { _ } from '../misc';

export const Separator = () => {
	const [lights, check_light] = createSignal(false);

	const check = (e: MouseEvent) => check_light((lights: boolean) => {
		// TODO this cant handle 2 separators in the dom 
		const sep = document.querySelector(`.${styles.Separator}`);
		if (sep === undefined || sep === null) return lights;
		const parent = sep!.parentElement!;
		const rect = parent.getBoundingClientRect();
		const x = e.clientX;
		const y = e.clientY;

		return (x >= rect.left && x <= rect.right) && (y <= rect.bottom && y >= rect.top);
	});

	document.body.addEventListener("mousemove", check);

	return (<span class={styles.Separator} active={lights()} ></span>);
};



