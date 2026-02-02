import { Component, createEffect, children, JSX } from "solid-js";
import { _, spread_classes } from '../misc';
import styles from './Dialog.module.css';

export const Dialog: Component<{
	children: JSX.Element,
	width: number,
	height: number,
	left: number,
	top: number,
	center?: boolean,
	class?: string | string[],
}> = (props: _) => {
	const children_ = children(() => props.children);
	const width = () => props.width;
	const height = () => props.height;
	const left = () => props.left;
	const top = () => props.top;
	const center = () => props.center ?? false;

	const cls = () => props.class;

	const style = new Object() as _;
	style.width = `${width()}em`;
	style.height = `${height()}em`;
	style.top = `${top()}%`;
	style.left = `${left()}%`;
	if (center()) {
		style["margin-left"] = `-${Math.floor(width() / 2)}em`;
		style["margin-top"] = `-${Math.floor(height() / 2)}em`;
	}

	return (<div class={`${styles.Dialog}${spread_classes(cls())}`}
		style={style}
	>
		{children_()}
	</div>);
};
