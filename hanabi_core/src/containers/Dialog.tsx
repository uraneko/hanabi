import { Component, createEffect, children, JSX, Show } from "solid-js";
import { _, spread_classes } from '../misc';
import styles from './Dialog.module.css';

export const Dialog: Component<{
	children: JSX.Element,
	width?: number,
	height?: number,
	left?: number,
	top?: number,
	center?: boolean,
	class?: string | string[],
	overtakes?: boolean,
}> = (props: _) => {
	const children_ = children(() => props.children);
	const width = () => props.width;
	const height = () => props.height;
	const left = () => props.left;
	const top = () => props.top;
	const center = () => props.center ?? false;

	const cls = () => props.class;
	const overtakes = () => props.overtakes ?? false;

	const style = new Object() as _;
	if (width() !== undefined)
		style.width = `${width()}em`;
	if (height() !== undefined)
		style.height = `${height()}em`;
	if (top() !== undefined)
		style.top = `${top()}%`;
	if (left() !== undefined)
		style.left = `${left()}%`;
	if (center() && width() !== undefined && height() !== undefined) {
		style["margin-left"] = `-${Math.floor(width() / 2)}em`;
		style["margin-top"] = `-${Math.floor(height() / 2)}em`;
	}
	const show = () => props.show;

	return (
		<div class={`${styles.Dialog}${spread_classes(cls())}`} style={style} overtakes-content={overtakes()}>
			{children_()}
		</div>);
};
