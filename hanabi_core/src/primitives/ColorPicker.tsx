import { Component, createEffect, createSignal, Show } from "solid-js";
import { Dialog } from "../containers";
import { _, parse_svg, spread_classes } from "../misc";
import { Catalyst } from './Catalyst';
import styles from './ColorPicker.module.css';
import cpSVG from '../../../assets/icons/palette.svg?raw';
import spiral from '../../../assets/spiral.svg?raw';
import copySVG from '../../../assets/icons/copy.svg?raw';
import reverseSVG from '../../../assets/icons/reverse.svg?raw';
import wandSVG from '../../../assets/icons/wand.svg?raw';
import { svg } from './Icon';


export const ColorPicker = (props: {
	width?: number,
	height?: number,
	node?: HTMLElement,
	prop: string,
}) => {
	const icon = parse_svg(cpSVG);
	const width = () => props.width ?? 300;
	const height = () => props.height ?? 200;

	const val = () => prop_val(props.node ?? document.documentElement, props.prop);
	const clr = new Color(val()).to_rgba();
	const [color, re_color] = createSignal(
		clr
	);

	// const events = () => props.events === undefined ? [] :
	// 	props.events.constructor.name === "String" ? [props.events] : props.events as _;

	const node = () => props.node ?? document.documentElement;
	const prop = () => props.prop;
	const [show, re_show] = createSignal(false);
	const flip = () => re_show((show: boolean) => !show);

	return (
		<div class={styles.Picker} >
			<Catalyst class={styles.PickerButton} call={flip}>
				<span class={styles.PickerValue} style={{ background: `${to_hex(color())}` }}></span>
			</Catalyst>

			<Show when={show()}>
				<Dialog>
					<Picker
						width={width()}
						height={height()}
						node={node()}
						prop={prop()}
						val={val()}
						color={color()}
						re_color={re_color}
					/>
				</Dialog>
			</Show>
		</div >
	);
};

export const ColorBoard: Component<{
	color: number[],
	width?: number,
	height?: number,
}> = (props: _) => {
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;
	const color = () => props.color;

	const board = <canvas
		class={styles.Picker}
		width={width()}
		height={height()}
		style={{
			width: `${width()}px`,
			height: `${height()}px`,
		}}>
		color board
	</canvas> as HTMLCanvasElement;
	draw_board(board, width(), height(), color());

	return board;
};

export const ColorSlider: Component<{ width?: number, height?: number }> = (props: _) => {
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;

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

	return color_slider;
};

export const AlphaSlider: Component<{
	color: number[],
	width?: number,
	height?: number
}> = (props: _) => {
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;
	const color = () => props.color;

	const alpha_slider = <canvas
		class={styles.AlphaSlider}
		width={width()}
		height={height() / 20}
		style={{
			width: `${width()}px`,
			height: `${height() / 20}px`,
		}}>
		opacity slider
	</canvas> as HTMLCanvasElement;
	draw_alpha_slider(alpha_slider, width(), height(), color());

	return alpha_slider;
};

// #e2e4ef
export const Picker = (props: {
	width?: number,
	height?: number
	node: HTMLElement,
	prop: string,
	val: string,
	color: _,
	re_color: _,
}) => {
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;
	const node = () => props.node;
	const prop = () => props.prop;
	const val = () => props.val;
	const color = () => props.color;
	const re_color = props.re_color;
	// const clr = new Color(val()).to_rgba();
	// const [color, re_color] = createSignal(
	// 	clr
	// );

	// @ts-ignore
	const board = (<ColorBoard
		color={color()}
		width={width()}
		height={height()}
	/>)() as HTMLCanvasElement;
	const picker_event = (e: MouseEvent) => re_color((color: _) => {
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_alpha_slider(alpha_slider, width(), height(), clr);
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	board.addEventListener("click", picker_event);

	// @ts-ignore
	const color_slider = (<ColorSlider width={width()} height={height()} />)() as HTMLCanvasElement;
	const color_event = (e: MouseEvent) => re_color((color: _) => {
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_board(board, width(), height(), clr);
		draw_alpha_slider(alpha_slider, width(), height(), clr);
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	color_slider.addEventListener("click", color_event);

	// @ts-ignore
	const alpha_slider = (<AlphaSlider
		color={color()}
		width={width()}
		height={height()}
	/>)() as HTMLCanvasElement;
	const alpha_event = (e: MouseEvent) => re_color((color: _) => {
		const alpha = update_alpha(e);
		const clr = [color[0], color[1], color[2], alpha];
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	alpha_slider.addEventListener("click", alpha_event);

	const [grab, re_grab] = createSignal(false);
	const flip_grab = (e: MouseEvent) => re_grab((grab: boolean) => {
		return e.type.includes("down") ? true : false;
	});
	const disable_grab = (e: MouseEvent) => re_grab((grab: boolean) => {
		return false;
	});
	[board, color_slider, alpha_slider].forEach((canvas: _) => {
		canvas.addEventListener("mousedown", flip_grab);
		canvas.addEventListener("mouseup", flip_grab);
		canvas.addEventListener("mouseleave", disable_grab);
	});

	const mouse_picker = (e: MouseEvent) => re_color((color: _) => {
		if (!grab()) return color;
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_alpha_slider(alpha_slider, width(), height(), clr);
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	board.addEventListener("mousemove", mouse_picker);

	const mouse_color = (e: MouseEvent) => re_color((color: _) => {
		if (!grab()) return color;
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_board(board, width(), height(), clr);
		draw_alpha_slider(alpha_slider, width(), height(), clr);
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;

	});
	color_slider.addEventListener("mousemove", mouse_color);

	const mouse_alpha = (e: MouseEvent) => re_color((color: _) => {
		if (!grab()) return color;
		const alpha = update_alpha(e);
		const clr = [color[0], color[1], color[2], alpha];
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});
	alpha_slider.addEventListener("mousemove", mouse_alpha);
	// const s = parse_svg(spiral);
	// s.id = "spiral";
	// s.style.width = "0";
	// alpha_slider.append(s);

	return (
		<div class={styles.ColorPicker} color-value={to_hex(color())}>
			{board}
			{color_slider}
			{alpha_slider}
			<ColorTools
				width={width()}
				height={height()}
				node={node()}
				prop={prop()}
				color={color()}
				re_color={re_color}
				board={board}
				alpha_slider={alpha_slider}
			/>
		</div>

	);
};

const ColorTools: Component<{
	width: number,
	height: number,
	node: HTMLElement,
	prop: string,
	color: string,
	re_color: _,
	board: _,
	alpha_slider: _,
}> = (props: _) => {
	const width = () => props.width;
	const height = () => props.height;
	const node = () => props.node;
	const prop = () => props.prop;

	const color = () => props.color;
	const re_color = () => props.re_color;
	const board = () => props.board;
	const alpha_slider = () => props.alpha_slider;

	const parser = svg();
	const copy = parser.style({ fill: "var(--white)" }).parse(copySVG);
	const wand = parser.style({ color: "var(--white)" }).parse(wandSVG);
	const invert = parser.clear()
		.override({ stroke: "var(--white)" }, "path#path4", "path#path5")
		.style({ scale: "1.7" })
		.parse(reverseSVG);

	const change = (e: Event) => re_color()((color: _) => {
		const et = e.target as HTMLInputElement;
		const val = et.value;
		if (Number.isNaN(Number(prefix + val.slice(1)))) return color;

		const clr = to_rgba(prop_val(node(), val));
		draw_board(board(), width(), height(), clr);
		draw_alpha_slider(alpha_slider(), width(), height(), clr);
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});

	const filter_invert = (e: Event) => re_color()((color: _) => {
		const clr = [255 - color[0], 255 - color[1], 255 - color[2], color[3]];
		draw_board(board(), width(), height(), clr);
		draw_alpha_slider(alpha_slider(), width(), height(), clr);
		update_property(node() as HTMLElement, prop(), to_hex(clr));

		return clr;
	});

	// style={{ 'background': to_hex(invert(color())), color: to_hex(color()) }}
	return (<div class={styles.ColorTools}>
		<input type="text"
			class={styles.ColorCode}
			on:change={change}
			value={to_hex(color())} />
		<Catalyst class={styles.ColorTool} call={filter_invert}>{invert}</Catalyst>
		<Catalyst class={styles.ColorTool}>{wand}</Catalyst>
		<Catalyst class={styles.ColorTool} call={write_hex_to_clipboard}>{copy}</Catalyst>
	</div>);
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

function draw_board(canvas: HTMLCanvasElement, width: number, height: number, rgb: number[]) {
	const ctx = canvas.getContext("2d")!;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// const dpi = window.devicePixelRatio;
	// ctx.scale(dpi, dpi);

	const cx = 255 / width;
	const cy = 255 / height;

	for (let y = 0; y <= height; y++) {
		for (let x = 0; x <= width; x++) {
			ctx.fillStyle = dcb(x * cx, y * cy, rgb);
			ctx.fillRect(x, y, 1, 1);
		}
	}
}

const w = 255;
function pixel_color(color: number, x: number, y: number) {
	const xw = x;
	const yw = y;
	const ci = w - color;
	const cci = ci / w;
	const xci = cci * xw;
	const pi_chan = w - xci - yw

	return pi_chan;
}

function dcb(x: number, y: number, rgb: number[]) {
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
	const cx = 255 / width;
	// const cp = 6 / 255;

	for (let y = 0; y <= height / 20; y++) {
		for (let x = 0; x <= width; x++) {
			ctx.fillStyle = dcs(x * cx);
			ctx.fillRect(x, y, 1, 1);
		}
	}
}

// part width 
const partw = 255 / 6;
function align_x_to_part(x: number, part: number) {
	// coef of part number
	const cp = part - 1;
	// coef of width alignment by part position
	const cwa = partw * cp;
	// x aligned by both part position and part width
	const xapw = x - cwa;
	// x compressed from original full width rgb alignment
	// to part width alignment
	const xpc = xapw * 6;

	return xpc;
}

function dcs(x: number): string {
	if (x <= 255 / 6) {
		return `rgb(255 ${align_x_to_part(x, 1)} 0)`
	} else if (x <= 255 * (2 / 6)) {
		return `rgb(${255 - align_x_to_part(x, 2)} 255 0)`;
	} else if (x <= 255 * (3 / 6)) {
		return `rgb(0 255 ${align_x_to_part(x, 3)})`;
	} else if (x <= 255 * (4 / 6)) {
		return `rgb(0 ${255 - align_x_to_part(x, 4)} 255)`;
	} else if (x <= 255 * 5 / 6) {
		return `rgb(${align_x_to_part(x, 5)} 0 255)`;
	} else if (x <= 255) {
		return `rgb(255 0 ${255 - align_x_to_part(x, 6)}`
	}

	return "unreachable";
}

function draw_alpha_slider(
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
			ctx.fillStyle = das(x * c, rgba);
			ctx.fillRect(x, y, 1, 1);
		}
	}
}

function das(x: number, rgba: number[]): string {
	return `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, ${x / 255})`;
}

async function write_hex_to_clipboard(e: Event) {
	const et = e.currentTarget as HTMLElement;
	const target = et.parentElement!.firstElementChild! as HTMLInputElement;
	const hex = target.value!;
	console.log("copied color to clipboard");

	await navigator.clipboard.writeText(hex);
}

function update_property(node?: HTMLElement, prop?: string, color?: string) {
	if (node === undefined || prop === undefined || color === undefined) return;
	node.style.setProperty(prop, color);
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

function prop_val(node: HTMLElement, prop: string): string {
	return prop.startsWith("--") ? node.style.getPropertyValue(prop) : prop;
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
