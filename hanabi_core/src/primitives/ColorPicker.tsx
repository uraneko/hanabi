import { Component, createEffect, createSignal, Show } from "solid-js";
import { Ephemeral, new_hash, assign_hash, eph_styles as estyles, setup_ephem } from '../wrappers';
import { _, parse_svg, spread_classes } from "../misc";
import { eph_ctx } from "../context";
import { Actuator } from './Actuator';
import styles from './ColorPicker.module.css';
import cpSVG from '../../../assets/icons/clr-pkr.svg?raw';

export const ColorPicker = (props: {
	width?: number,
	height?: number,
	events?: string | string[],
	show?: boolean,
	html: HTMLElement,
	prop: string,
}) => {
	const icon = parse_svg(cpSVG);
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;

	const show = () => props.show ?? false;
	const events = () => props.events === undefined ? [] :
		props.events.constructor.name === "String" ? [props.events] : props.events as _;
	const [hash, flip] = setup_ephem(events(), show());

	const html = () => props.html;
	const prop = () => props.prop;
	return (
		<div class={styles.Picker} >
			<Actuator class={styles.PickerButton} call={flip} extra={{ "ephem-hash": hash }}>
				{icon}
			</Actuator>
			<Ephemeral events={events()} show={show()} hash={hash}>
				<Picker width={width()} height={height()} html={html()} prop={prop()} />
			</Ephemeral>
		</div >
	);
};

// #e2e4ef
export const Picker = (props: {
	width?: number,
	height?: number
	html: HTMLElement,
	prop: string,
}) => {
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;
	const html = () => props.html;
	const prop = () => props.prop;
	const val = () => prop_val(html(), props.prop);
	const clr = new Color(val()).to_rgba();
	console.log(';;', clr);
	const [color, re_color] = createSignal(
		clr
	);

	const palette =
		<canvas
			class={styles.Picker}
			width={width()}
			height={height()}
			style={{
				width: `${width()}px`,
				height: `${height()}px`,
			}}>
			color palette
		</canvas> as HTMLCanvasElement;
	draw_palette(palette, width(), height(), color());
	const picker_event = (e: MouseEvent) => re_color((color: _) => {
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_opacity_slider(opacity_slider, width(), height(), clr);
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	palette.addEventListener("click", picker_event);

	const color_slider = <canvas
		class={styles.ColorSlider}
		width={width()}
		height={height() / 20}
		style={{
			width: `${width()}px`,
			height: `${height() / 20}px`,
		}}>
		color slider
	</canvas> as HTMLCanvasElement;
	draw_color_slider(color_slider, width(), height());
	const color_event = (e: MouseEvent) => re_color((color: _) => {
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_palette(palette, width(), height(), clr);
		draw_opacity_slider(opacity_slider, width(), height(), clr);
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	color_slider.addEventListener("click", color_event);

	const opacity_slider = <canvas
		class={styles.OpacitySlider}
		width={width()}
		height={height() / 20}
		style={{
			width: `${width()}px`,
			height: `${height() / 20}px`,
		}}>
		opacity slider
	</canvas> as HTMLCanvasElement;
	draw_opacity_slider(opacity_slider, width(), height(), color());
	const alpha_event = (e: MouseEvent) => re_color((color: _) => {
		const alpha = update_alpha(e);
		const clr = [color[0], color[1], color[2], alpha];
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	opacity_slider.addEventListener("click", alpha_event);

	const [grab, re_grab] = createSignal(false);
	const flip_grab = (e: MouseEvent) => re_grab((grab: boolean) => {
		return e.type.includes("down") ? true : false;
	});
	const disable_grab = (e: MouseEvent) => re_grab((grab: boolean) => {
		return false;
	});
	[palette, color_slider, opacity_slider].forEach((canvas: _) => {
		canvas.addEventListener("mousedown", flip_grab);
		canvas.addEventListener("mouseup", flip_grab);
		canvas.addEventListener("mouseleave", disable_grab);
	});

	const mouse_picker = (e: MouseEvent) => re_color((color: _) => {
		if (!grab()) return color;
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_opacity_slider(opacity_slider, width(), height(), clr);
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	palette.addEventListener("mousemove", mouse_picker);

	const mouse_color = (e: MouseEvent) => re_color((color: _) => {
		if (!grab()) return color;
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_palette(palette, width(), height(), clr);
		draw_opacity_slider(opacity_slider, width(), height(), clr);
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;

	});
	color_slider.addEventListener("mousemove", mouse_color);

	const mouse_alpha = (e: MouseEvent) => re_color((color: _) => {
		if (!grab()) return color;
		const alpha = update_alpha(e);
		const clr = [color[0], color[1], color[2], alpha];
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	opacity_slider.addEventListener("mousemove", mouse_alpha);

	const change = (e: Event) => re_color((color: _) => {
		const et = e.target as HTMLInputElement;
		const val = et.value;
		if (Number.isNaN(Number(prefix + val.slice(1)))) return color;


		const clr = to_rgba(prop_val(html(), val));
		draw_palette(palette, width(), height(), clr);
		draw_opacity_slider(opacity_slider, width(), height(), clr);
		update_property(html() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});

	return (
		<div class={styles.ColorPicker} color-value={to_hex(color())}>
			{palette}
			{color_slider}
			{opacity_slider}
			<input type="text"
				class={styles.ColorCode}
				on:click={write_hex_to_cb}
				on:change={change}
				value={to_hex(color())}
				style={{
					'background': to_hex(invert(color())),
					'color': to_hex(color())
				}} />
		</div>

	);
};

function update_rgb(e: MouseEvent) {
	const et = e.target as HTMLCanvasElement;
	const ctx = et.getContext("2d")!;
	const x = e.offsetX;
	const y = e.offsetY;

	const data = ctx.getImageData(x, y, 1, 1).data;
	// console.log(x, y);
	// console.log(data);

	return data.slice(0, 3);
}

function update_alpha(e: MouseEvent) {
	const et = e.target as HTMLCanvasElement;
	const ctx = et.getContext("2d")!;
	const x = e.offsetX;
	const y = e.offsetY;

	const data = ctx.getImageData(x, y, 1, 1).data;
	// console.log(x, y);

	return data[3];
}

function draw_palette(canvas: HTMLCanvasElement, width: number, height: number, rgb: number[]) {
	const ctx = canvas.getContext("2d")!;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// const dpi = window.devicePixelRatio;
	// ctx.scale(dpi, dpi);

	const cx = 255 / width;
	const cy = 255 / height;

	for (let y = 0; y <= height; y++) {
		for (let x = 0; x <= width; x++) {
			ctx.fillStyle = dcp(x * cx, y * cy, rgb);
			ctx.fillRect(x, y, 1, 1);
		}
	}
}

function pixel_color(color: number, x: number, y: number) {
	let c = 255;
	c += color;
	c -= x;
	c -= y;

	return c;
}

function dcp(x: number, y: number, rgb: number[]) {
	const red = pixel_color(rgb[0], x, y);
	const green = pixel_color(rgb[1], x, y);
	const blue = pixel_color(rgb[2], x, y);
	return `rgb(${red} ${green} ${blue})`;
}

function draw_color_slider(canvas: HTMLCanvasElement, width: number, height: number) {
	const ctx = canvas.getContext("2d")!;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// const dpi = window.devicePixelRatio;
	// ctx.scale(dpi, dpi);

	// red - yellow - green - blue - purple - pink - red
	const part = width / 5;
	const cp = 255 / part;
	const c = 255 / width;

	for (let y = 0; y <= height / 20; y++) {
		for (let coef = 0; coef <= 4; coef++) {
			let wi = part + part * coef;
			for (let x = 0; x <= wi; x++) {
				ctx.fillStyle = dcs(coef, x * cp * c);
				ctx.fillRect(part * coef + x, y, 1, 1);
			}
		}
	}
}

function dcs(coef: number, x: number): string {
	if (coef < 0 || coef > 4) return "128 128 128";

	else if (coef === 0) {
		return `rgb(255 ${x} 0)`
	} else if (coef === 1) {
		return `rgb(${255 - x} 255 0)`
	} else if (coef === 2) {
		return `rgb(0 255 ${x})`
	} else if (coef === 3) {
		return `rgb(0 ${255 - x} 255)`
	} else if (coef === 4) {
		return `rgb(${x} 0 ${255 - x})`
	}

	return "unreachable";
}

function draw_opacity_slider(
	canvas: HTMLCanvasElement,
	width: number,
	height: number,
	rgba: number[]
) {
	const ctx = canvas.getContext("2d")!;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// const dpi = window.devicePixelRatio;
	// ctx.scale(dpi, dpi);

	const c = 255 / width;

	for (let y = 0; y <= height / 20; y++) {
		for (let x = 0; x <= width; x++) {
			ctx.fillStyle = dos(x * c, rgba);
			ctx.fillRect(x, y, 1, 1);
		}
	}
}

function dos(x: number, rgba: number[]): string {
	return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${x / 255})`;
}

async function write_hex_to_cb(e: Event) {
	const et = e.target as HTMLInputElement;
	const hex = et.value!;

	await navigator.clipboard.writeText(hex);
}

function update_property(html?: HTMLElement, prop?: string, color?: string) {
	console.log('(>_<)', html, prop);
	if (html === undefined || prop === undefined || color === undefined) return;
	html.style.setProperty(prop, color);
}

function to_hex(color: number[]) {
	let red = color[0].toString(16);
	red = red.length === 1 ? '0' + red : red;

	let green = color[1].toString(16);
	green = green.length === 1 ? '0' + green : green;

	let blue = color[2].toString(16);
	blue = blue.length === 1 ? '0' + blue : blue;

	let alpha = color[3] === 255 ? '' : color[3].toString(16);
	alpha = alpha.length === 1 ? '0' + alpha : alpha;

	return '#' + red + green + blue + alpha;
}

const prefix = "0x";
function to_rgba(hex: string): number[] {
	console.log(hex);
	const padding = hex[0] === '#' ? 1 : 0;
	const red = hex.slice(padding, padding + 2);
	const green = hex.slice(padding + 2, padding + 4);
	const blue = hex.slice(padding + 4, padding + 6);
	const alpha = hex.length > 7 ? hex.slice(padding + 6, padding + 8) : "";

	return [
		Number(prefix + red),
		Number(prefix + green),
		Number(prefix + blue),
		alpha.length === 0 ? 255 : Number(prefix + alpha)
	];
}

function invert(rgba: number[]): number[] {
	return [255 - rgba[0], 255 - rgba[1], 255 - rgba[2], rgba[3]];
}

function prop_val(html: HTMLElement, prop: string): string {
	return prop.startsWith("--") ? html.style.getPropertyValue(prop) : prop;
}

function is_u8(num: number): boolean {
	return num >= 0 && num <= 255;
}

export class Color {
	constructor(color?: string | number[]) {
		if (color === undefined) return this;
		const ty = color.constructor.name;
		if (ty !== "String" && ty !== "Array") {
			throw new Error("expected string or array of number");
		}

		if (color.constructor.name === "String") {
			return Color.from_str(color as string);
		} else if (color.length === 3) {
			return Color.from_rgb(color as number[])
		} else {
			return Color.from_rgba(color as number[])
		}
	}

	/// default color is white 
	private red: number = 255;
	private green: number = 255;
	private blue: number = 255;
	private alpha: number = 255;

	static from_rgb(rgb: number[]): Color {
		if (rgb.length !== 3) throw new Error("you must provide exactly 3 rgb values");
		if (rgb.some((num: number) => num > 255 || num < 0)) {
			throw new Error("rgb values must be valid u8 values");
		}

		const color = new Color();
		color.red = rgb[0];
		color.green = rgb[1];
		color.blue = rgb[2];
		color.alpha = 255;

		return color;
	}

	static from_rgba(rgba: number[]): Color {
		if (rgba.length !== 4) throw new Error("you must provide exactly 4 rgba values");
		if (rgba.some((num: number) => num > 255 || num < 0)) {
			throw new Error("rgba values must be valid u8 values");
		}

		const color = new Color();
		color.red = rgba[0];
		color.green = rgba[1];
		color.blue = rgba[2];
		color.alpha = rgba[3];

		return color;
	}

	static from_str(str: string): Color {
		if (str.startsWith("rgb(")) {
			return Color.from_rgb_str(str);
		} else if (str.startsWith("rgba(")) {
			return Color.from_rgba_str(str);
		} else {
			return Color.from_hex_str(str);
		}
	}

	static from_hex_str(hex: string): Color {
		const padding = hex[0] === '#' ? 1 : 0;
		const red = hex.slice(padding, padding + 2);
		const green = hex.slice(padding + 2, padding + 4);
		const blue = hex.slice(padding + 4, padding + 6);
		const alpha = hex.length > 7 ? hex.slice(padding + 6, padding + 8) : "";

		const color = new Color();
		color.red = Number(prefix + red);
		color.green = Number(prefix + green);
		color.blue = Number(prefix + blue);
		color.alpha = alpha.length === 0 ? 255 : Number(prefix + alpha);

		return color;
	}

	static from_rgb_str(rgb: string): Color {
		if (!rgb.startsWith("rgb(") || !rgb.endsWith(')')) throw new Error("invalid str rgb value");
		rgb = rgb.slice(4, rgb.length - 1);
		const sep = rgb.includes(',') ? ',' : ' ';
		const split = rgb.split(sep);
		if (split.length !== 3) throw new Error("invalid str rgb value");
		const red = Number(split[0]);
		const green = Number(split[1]);
		const blue = Number(split[2]);
		if ([red, green, blue].some((num: number) => Number.isNaN(num) || !is_u8(num)))
			throw new Error("invalid rgb number value")

		const color = new Color();
		color.red = red;
		color.green = green;
		color.blue = blue;
		color.alpha = 255;

		return color;
	}

	static from_rgba_str(rgba: string): Color {
		if (!rgba.startsWith("rgba(") || !rgba.endsWith(')'))
			throw new Error("invalid str rgba value");
		rgba = rgba.slice(5, rgba.length - 1);
		const split = rgba.split(',');
		if (split.length !== 4) throw new Error("invalid str rgba value");
		const red = Number(split[0]);
		const green = Number(split[1]);
		const blue = Number(split[2]);
		const alpha = Number(split[3]) * 255;
		if ([red, green, blue, alpha].some((num: number) => Number.isNaN(num) || !is_u8(num)))
			throw new Error("invalid rgba number value")

		const color = new Color();
		color.red = red;
		color.green = green;
		color.blue = blue;
		color.alpha = alpha;

		return color;
	}

	invert() {
		this.red = 255 - this.red;
		this.green = 255 - this.green;
		this.blue = 255 - this.blue;
	}

	invert_alpha() {
		this.alpha = 255 - this.alpha;
	}

	to_hex_str(): string {
		let red = this.red.toString(16);
		red = red.length === 1 ? '0' + red : red;

		let green = this.green.toString(16);
		green = green.length === 1 ? '0' + green : green;

		let blue = this.blue.toString(16);
		blue = blue.length === 1 ? '0' + blue : blue;

		let alpha = this.alpha === 255 ? '' : this.alpha.toString(16);
		alpha = alpha.length === 1 ? '0' + alpha : alpha;

		return '#' + red + green + blue + alpha;
	}

	alpha_scaled(): number {
		return this.alpha / 255;
	}

	/// ignores alpha and returns rgb(...) when alpha is full
	to_rgba_str(): string {
		const rgb = this.red + ", " + this.green + ", " + this.blue;
		return this.alpha === 255 ?
			"rgb(" + rgb + ')' :
			"rgba(" + rgb + ", " + this.alpha_scaled() + ')';
	}

	to_rgba(): number[] {
		return [this.red, this.green, this.blue, this.alpha];
	}

	clone(): Color {
		return structuredClone(this);
	}

	static inverted(color: Color): Color {
		color.invert();

		return color;
	}

}
