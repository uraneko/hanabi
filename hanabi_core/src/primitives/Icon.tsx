import { Component } from "solid-js";
import { constr, _, parse_svg } from '../misc';
import styles from "./Icon.module.css";

export const Icon: Component<{
	svg: string,
	width: number,
	height: number,
}> = (props: _) => {
	let svg: _ = () => props.svg;
	const width = () => props.width;
	const height = () => props.height;

	svg = parse_svg(svg());
	const stl = svg.style;

	stl.setProperty("width", width() + "px");
	stl.setProperty("height", height() + "px");

	return (
		<span class={styles.Icon}>
			{svg()}
		</span>
	)
};

export function svg() {
	return {
		paths_: null as null | Record<string, number | number[]>,
		props_: null as null | Record<string, { val: string, idx: number }>,
		styles_: null as null | Record<string, string>,
		init_props() {
			if (this.props_ === null || this.paths_ === null) {
				this.props_ = new Object() as _;
				this.paths_ = new Object() as _;
			}

			return this;
		},
		init_styles() {
			if (this.styles_ === null) {
				this.styles_ = new Object() as _;
			}

			return this;
		},
		/// overrides some path(s) styles for the given props
		override(props: Record<string, string>, ...paths: string[]) {
			if (paths.length === 0 || Object.keys(props).length === 0)
				return this;

			this.init_props();
			let last = Object.keys(this.props_!).length;
			Object.entries(props).forEach(([prop, val]: _) => {
				const idx = insert_prop_if_new(this.props_, prop, val, last);
				if (idx > last) {
					paths.forEach((path: string) =>
						update_path_indexes(this.paths_!, path, last)
					);
					last = idx;

					return;
				}

				paths.forEach((path: string) =>
					update_path_indexes(this.paths_!, path, idx)
				);
			});

			// console.log("plog");
			// console.log(this.paths_);
			// console.log(this.props_);
			return this;
		},
		/// adds the passed css declarations to the svg's inline styles
		style(props: Object) {
			if (Object.keys(props).length === 0) return this;

			this.init_styles();
			Object.entries(props).forEach(([prop, val]: _) => { this.styles_![prop] = val; });

			// console.log("slog");
			// console.log(this.styles_);
			return this;
		},
		/// parses the svg and applies all the declarations and overrides 
		/// returns a parsed processed svg
		parse(raw: string) {
			const svg = parse_svg(raw);
			const styles = svg.style;
			if (this.styles_ !== null) {
				Object.entries(this.styles_)
					.forEach(([prop, val]: _) => styles.setProperty(prop, val));
			}

			if (this.props_ !== null && this.paths_ !== null) {
				Object.entries(this.paths_)
					.forEach(([path, indexes]: _) => {
						const props = filter_path_props(this.props_!, indexes);
						const nodes = new Array(...svg.querySelectorAll(path));
						console.log(nodes);
						nodes.forEach((node: HTMLElement) => {
							const styles = node.style;
							props.forEach(([prop, val]: _) => {
								console.log('-', prop, val);
								styles.setProperty(prop, val);
							});
						})
					})
			}


			return svg;
		},
		clear() {
			[this.paths_, this.props_, this.styles_].forEach((field: _) => {
				if (field !== null) {
					for (const key of Object.keys(field)) {
						Reflect.deleteProperty(field, key);
						// delete field[key]
					}
				}
			});

			return this;
		}
	};
}

function insert_prop_if_new(props: _, prop: string, val: string, last: number) {
	const val_idx = props[prop];
	if (val_idx === undefined) {
		props[prop] = { val: val, idx: last };

		return last + 1;
	}
	// BUG when prop is the same but val differs 
	// you either write the new entry, overwriting the old prop entry in the record
	// or you keep the old entry, ignoring the valid new entry
	// TODO for apis that use this pattern/paradigm
	// alllow adding the same prop with different values for different selectors
	// FIX make props an array like so { prop, val: idx }[] 

	if (val_idx.val !== val) { }

	return val_idx.idx;
}

function update_path_indexes(
	paths: Record<string, number | number[]>,
	path: string,
	idx: number
) {
	let indexes = paths[path];
	if (indexes === undefined) {
		paths[path] = idx;

		return;
	}

	constr(indexes) === "Number" ?
		indexes = [indexes as number, idx] : (indexes as number[]).push(idx);
}

function filter_path_props(
	props: Record<string, {
		val: string,
		idx: number
	}>,
	indexes: number | number[]) {
	console.log(props, indexes);
	const ty = constr(indexes);
	return Object.entries(props).filter(([prop, val_idx]: _) => {
		const idx = val_idx.idx;
		console.log(indexes, idx, ty === "Number", indexes === idx);

		return ty === "Number" ?
			idx === indexes : (indexes as number[]).includes(idx);
	}).map(([prop, val_idx]: _) => [prop, val_idx.val]);
}
