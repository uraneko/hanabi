import { type Component, Show } from 'solid-js';
import { _, parse_svg } from "../misc";
// import styles from './Logo.module.css';
import logo from "../../../assets/icons/hanabi.svg?raw";

export const SVG: Component<{
	icon: SVGSVGElement,
	width?: number,
	height?: number,
	vars?: Record<string, { var: string, val?: string }>
}> = (props: _) => {
	const icon = () => props.icon;

	return icon();
};

export const Logo: Component<{ override_colors?: boolean, width?: number, height?: number }> = (props: _) => {
	const use_css_vars = () => props.override_colors ?? true;
	const width = () => props.width ?? 140;
	const height = () => props.height ?? 60;

	const hanabi = parse_svg(logo);
	hanabi.classList.add("hanabi.svg");
	if (use_css_vars()) {
		const stroke = extract_hanabi_stroke(hanabi);
		const fill = extract_last_fill(hanabi);
		// if (!stroke.startsWith("--") ) 
		assign_props_if_not_set(hanabi, stroke);
		// if (!fill.startsWith("--")) 
		assign_last_if_not_set(hanabi, fill);
		set_all_prop_vals(hanabi);
	}
	assign_svg_dimensions(hanabi, width(), height());

	return hanabi;
};

function assign_svg_dimensions(svg: SVGSVGElement, width: number, height: number) {
	const style = svg.style;
	style.setProperty("width", width + "px");
	style.setProperty("height", height + "px");
}

const props = ['h', "a0", 'n', "a1", 'b', 'I', 'dot'];

function path_of_prop(e: SVGSVGElement, prop: string): SVGPathElement {
	const idx = props.includes(prop) ? props.indexOf(prop) + 1 : 8;

	return e.querySelector("path#path" + idx)!;
}


function set_all_prop_vals(e: SVGSVGElement) {
	for (const prop of props) {
		path_of_prop(e, prop).style.setProperty("stroke", "var(--logo-" + prop + ')');
	}
	path_of_prop(e, "ra").style.setProperty("fill", "var(--logo-ra)");
}

function extract_hanabi_stroke(svg: SVGSVGElement) {
	return svg.querySelector("path")!
		.style
		.getPropertyValue("stroke");
}

function assign_props_if_not_set(e: SVGSVGElement, def: string) {
	const style = e.style;
	props.map((p: string) => "--logo-" + p).forEach((p: string) => {
		const v = style.getPropertyValue(p);
		if (v.length > 0) return;
		style.setProperty(p, def)
	});
}

function extract_last_fill(svg: SVGSVGElement) {
	return (svg.querySelector("path:last-child") as SVGPathElement)
		.style
		.getPropertyValue("fill");
}

function assign_last_if_not_set(e: SVGSVGElement, def: string) {
	const style = e.style;
	const prop = "--logo-ra"
	const v = style.getPropertyValue(prop);
	if (v.length > 0) return;
	style.setProperty(prop, def);
}



