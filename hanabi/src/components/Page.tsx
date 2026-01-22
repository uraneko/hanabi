import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { Logo } from "core/primitives";
import { Menu } from "../components/Menu";
import { _ } from "core";
import styles from './Page.module.css';

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;

	return (
		<div class={styles.Page}>
			<Logo />
			<Menu />
			{children()}
		</div>
	);
};
