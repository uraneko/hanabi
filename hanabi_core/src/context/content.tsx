import { Component, JSX, children, createEffect, createContext, useContext, createSignal } from 'solid-js';
import { _ } from "../misc";

/// when content is true -> the main content is active/focused
/// when false a modal is focused and we blur the main content
const [content, re_content] = createSignal(true);
const content_context = createContext({ content, re_content });
export function content_ctx() {
	return useContext(content_context);
}

export const MainContent = (props: { children: JSX.Element }) => {
	const { content, re_content } = content_ctx();
	let children_ = children(() => props.children);
	// {
	// 	// console.log('c>', props.children);
	// 	const construct = props.children.constructor.name;
	// 	// console.log('t>', construct);
	// 	let children = construct === "Function" ? [props.children] : props.children;
	// 	// console.log('e>', children);
	// 	children
	// 		.map((child: _) => resolve_to_dom(child))
	// 		.forEach((child: _) => child.classList.add("MainContent"));
	//
	// 	return children;
	// });
	createEffect(() =>
		children_.toArray().forEach((child: _) => {
			if (child === null) return;
			child.setAttribute("main-content", content())
		}));

	return children_;
};

function resolve_to_dom(child: _): Element {
	if (!is_jsx(child)) return child;

	return child().constructor.name === "Array" ? child()[1] : child();
}

function is_jsx(e: _): boolean {
	return e.constructor.name === "Function";
}

