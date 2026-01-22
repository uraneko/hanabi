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

	return (<form class={styles.Form} action={action()} method={method()} target={target() ?? "_self"} on:submit={submit()} >
		{children()}
	</form>);

};

export { styles }


export function extract_fields(form: HTMLFormElement): HTMLInputElement[] {
	return new Array(...form.querySelectorAll("input"))
		.filter((child: Element) => child.hasAttribute("name"));
}

export function validate_form(fields: Element[]): Error | null {
	const inputs = fields.map((field: Element) => (field as HTMLInputElement).name);

	return inputs.length === new Set(...inputs).size ?
		new Error("duplicate input field names are not allowed") : null;
}

export function validate_mandatory(fields: HTMLInputElement[]): Error | null {
	if (fields.some((field: HTMLInputElement) => field.classList.contains("mandatory") && field.value.length === 0)) return new Error("mandatory field is empty");

	return null;
}

export function convert(ty: string, value: string) {
	if (ty === "bool") {
		return ["true", "yes", "1", "on"].includes(value);
	} else if (["int", "uint", "float"].includes(ty)) {
		return Number(value)
	}

	return value
}

export function prepare_data(fields: HTMLInputElement[]): Map<_, _> {
	const map = new Map();
	fields.forEach((field: HTMLInputElement) => {
		if (field.value.length > 0) {
			const ty = field.getAttribute("data-type") ?? "str";
			map.set(field.name, convert(ty, field.value));
		}
	});

	return map;
}

export async function submit(e: SubmitEvent): Promise<Error | { map: Map<_, _>, path: string }> {
	e.preventDefault();
	const form = e.target as HTMLFormElement;
	if (form.tagName !== "FORM") {
		const err = new Error("submit event target is not a form");
		window.alert(err);

		return err
	}

	const path = form.action;
	const fields = extract_fields(form);
	let err = validate_form(fields);
	if (err !== null) {
		console.error(err);

		return err as Error;
	}
	err = validate_mandatory(fields);
	if (err !== null) {
		fields
			.filter((field: _) => field.classList.contains("mandatory") && field.value.length === 0)
			.reverse()
			.forEach((field: _) => field.focus());

		return err as Error;
	}

	const data = prepare_data(fields);

	return { map: data, path: path };
}
