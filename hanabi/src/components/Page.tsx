import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { Logo } from "core/primitives";
import { ColorScheme } from 'core/wrappers';
import { Menu } from "../components/Menu";
import { _ } from "core";
import styles from './Page.module.css';

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;

	return (
		<ColorScheme red="#A95525" green="#87a187" blue="#485d6c" black="black" white="aliceblue" abstract="#f0f8ff35" opaque="#a0c65578" extra={[]}>
			<div class={styles.Page}>
				<Logo />
				<Menu />
				{children()}
			</div>
		</ColorScheme>
	);
};
