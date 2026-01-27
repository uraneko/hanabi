import { Component, createEffect, createSignal } from "solid-js";
import styles from './ColorPalette.module.css';
import { _ } from '../misc';

function into_hex(color: number[]) {
	let red = color[0].toString(16);
	red = red.length === 1 ? '0' + red : red;

	let green = color[1].toString(16);
	green = green.length === 1 ? '0' + green : green;

	let blue = color[2].toString(16);
	blue = blue.length === 1 ? '0' + blue : blue;

	let alpha = color[3] === 255 ? '' : color[3].toString(16);
	alpha = alpha.length === 1 ? '0' + alpha : alpha;
	console.log(color[3], alpha);

	return '#' + red + green + blue + alpha;
}

export const ColorPalette = (props: { width?: number, height?: number }) => {
	const width = () => props.width ?? 200;
	const height = () => props.height ?? 200;
	const [color, re_color] = createSignal([213, 21, 34, 25]);

	const palette =
		<canvas
			class={styles.Palette}
			width={width()}
			height={height()}
			style={{
				width: `${width()}px`,
				height: `${height()}px`,
			}}>
			color palette
		</canvas> as HTMLCanvasElement;
	draw_palette(palette, width(), height(), color());
	palette.addEventListener("click", (e: MouseEvent) => re_color((color: _) => {
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_opacity_slider(opacity_slider, width(), height(), clr);

		return clr;
	}));

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
	color_slider.addEventListener("click", (e: MouseEvent) => re_color((color: _) => {
		const rgb = update_rgb(e);

		const clr = [rgb[0], rgb[1], rgb[2], color[3]];
		draw_palette(palette, width(), height(), clr);
		draw_opacity_slider(opacity_slider, width(), height(), clr);

		return clr;
	}));

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
	opacity_slider.addEventListener("click", (e: MouseEvent) => re_color((color: _) => {
		const alpha = update_alpha(e);

		return [color[0], color[1], color[2], alpha];
	}));

	return (<div class={styles.ColorPalette}>
		{palette}
		{color_slider}
		{opacity_slider}
		<span class={styles.ColorCode} on:click={write_hex_to_cb} style={{ 'border-color': into_hex(color()) }}>
			{into_hex(color())}
		</span>
	</div >);
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
	console.log(data);

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
	const et = e.target as HTMLSpanElement;
	const hex = et.textContent!;

	await navigator.clipboard.writeText(hex);
}
