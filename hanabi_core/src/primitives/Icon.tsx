import { Component } from "solid-js";
import { _, parse_svg } from '../misc';

export const Icon: Component<{
	icon: string,
	width: number,
	height: number,
	// e.g., make and set a new css prop on the svg --custom-prop
	styles: Record<string, string>,
	// eg, change path#path6 fill value to var(--fill-6)
	// ----------- key ----- prop ------------ custom --
	overrides: Record<string, { prop: string, custom: string }[]>,
}> = (props: _) => {
	let icon: _ = () => props.icon;
	const width = () => props.width;
	const height = () => props.height;

	const styles = () => props.styles;
	const overrides = () => props.overrides;
	icon = parse_svg(icon());
	const stl = icon.style;

	stl.setProperty("width", width() + "px");
	stl.setProperty("height", height() + "px");

	Object.entries(styles()).forEach(([prop, val]: _) => {
		stl.setProperty("--" + prop, val);
	});

	Object.entries(overrides())
		.forEach(([selector, overrides]: _) => {
			const selectors = selector.split("/");
			selectors.forEach((select: string) => {
				const child = icon.querySelector(select);
				if (child === null) return;
				const ch_stl = child.style;
				overrides.forEach((override: _) => {
					ch_stl.setProperty(override.prop, "var(--" + override.custom + ')');
				});
			});
		});

	return (
		<span>
			{icon()}
		</span>
	)
};
