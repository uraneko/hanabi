export const parse_svg = (svg: string): SVGSVGElement => {
	return new DOMParser().parseFromString(svg, "image/svg+xml").querySelector("svg")!;
}

export type _ = any;

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

export function spread_classes(cls?: string | string[]): string {
	return cls === undefined ? "" : cls!.constructor.name == "String" ? (cls as string) : (cls as string[]).join(" ")
}
