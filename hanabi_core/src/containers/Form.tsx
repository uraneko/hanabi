import { Component, JSX } from "solid-js";
import styles from "./Form.module.css";
import { _ } from "../misc";

export const Form: Component<{ children: JSX.Element, method: "get" | "post", action: string, target?: string }> = (props: _) => {
	const action = () => props.action;
	const method = () => props.method;
	const children = () => props.children;

	return (<form class={styles.Form} action={action()} method={method()} >
		{children()}
	</form>);
};

export { styles }
