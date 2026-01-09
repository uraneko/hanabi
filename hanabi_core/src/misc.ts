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
	const map = new Map();
	for (const [k, v] of Object.entries(json)) {
		map.set(k, v)
	}

	return map;
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
	return cls === undefined ? "" : cls!.constructor.name == "String" ? (cls as string) : (cls as string[]).join(" ")
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
