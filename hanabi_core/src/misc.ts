import { createSignal } from "solid-js";

export const parse_svg = (svg: string): SVGSVGElement => {
	return new DOMParser().parseFromString(svg, "image/svg+xml").querySelector("svg")!;
}

export type _ = any;

// TODO deprecate this stuff
export type Maybe<T> = T | undefined;
export function is<T>(t: T): boolean {
	return t !== undefined
}

export function map_from_json(json: Object): Map<string, _> {
	return new Map(Object.entries(json));
}

export function json_from_map(map: Map<_, _>): JSON {
	return Object.fromEntries(map);
}

export function char_is_numeric(char: string): boolean {
	if (char.length !== 1) return false;
	const cp = char.charCodeAt(0);

	return cp >= 48 && cp <= 57;
}

export function char_is_alphabetic(char: string): boolean {
	if (char.length !== 1) return false;
	const cp = char.charCodeAt(0);

	return (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
}

export function char_is_alphanumeric(char: string): boolean {
	return char_is_alphabetic(char) || char_is_numeric(char);
}

export function cp_is_numeric(cp: number): boolean {
	if (cp > 127) return false;

	return cp >= 48 && cp <= 57;
}

export function cp_is_alphabetic(cp: number): boolean {
	if (cp > 127) return false;

	return (cp >= 65 && cp <= 90) || (cp >= 97 && cp <= 122);
}

export function cp_is_alphanumeric(cp: number): boolean {
	return cp_is_alphabetic(cp) || cp_is_numeric(cp);
}

export function is_alphanumeric(str: string): boolean {
	if (str.constructor.name !== "String") return false;
	const iter = str[Symbol.iterator]();
	let next = iter.next();
	while (!next.done && cp_is_alphanumeric(next.value.charCodeAt(0))) {
		next = iter.next();
	}

	return next.done ?? false;
}

export function is_ascii(str: string): boolean {
	if (str.constructor.name !== "String") return false;
	const iter = str[Symbol.iterator]();
	let next = iter.next();
	while (!next.done && next.value.charCodeAt(0) <= 127) {
		next = iter.next();
	}

	return next.done ?? false;
}

/// takes the provided class(es) and sets them for the components
/// # Example
/// `
/// const Comp: Component<{ class: string | string[] }> = (props: _) => {
/// const cls = () => props.class;
///
/// return (<button class={spread_classes(cls())}>
///		</button>
/// )};
/// `
export function spread_classes(cls?: string | string[]): string {
	return cls === undefined ? "" : cls!.constructor.name == "String" ? " " + (cls as string) : " " + (cls as string[]).join(" ")
}

export function dbl_signal(): [_, _] {
	return createSignal({ time: 0, trigger: false });
}

export function dbl_method(up_dbl: _, millis: number): _ {
	if (millis <= 0 || millis === null ||
		millis === undefined || millis.constructor.name !== "Number") millis = 700;
	return (e: Event) => up_dbl((last: _) => {
		let time = e.timeStamp;
		if (last.time === 0) return { time: time, trigger: false };

		return time - last.time < millis ? { time: 0, trigger: true } :
			{ time: time, trigger: false };
	});
}
