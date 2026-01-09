import { Component, JSX } from "solid-js";
import { Dynamic } from "solid-js/web";
import styles from "./Form.module.css";
import { _ } from "../misc";

export const Form: Component<{ children: JSX.Element, method: "get" | "post", action: string, target?: string, submit: _ }> = (props: _) => {
	const action = () => props.action;
	const method = () => props.method;
	const children = () => props.children;
	const target = () => props.target;
	const submit = () => props.submit;

	return (<form class={styles.Form} action={action()} method={method()} target={target() ?? "_self"} on:submit={(e: Event) => { e.preventDefault(); console.log("01") }} >
		{children()}
	</form>);

};

export { styles }
