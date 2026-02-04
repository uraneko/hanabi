import { Component, JSX } from "solid-js";
import { _, constr } from '../misc';
import { colors_ctx, configs_ctx, sync_scheme } from '../context';
// import styles from './ColorScheme.module.css';

/// if no children are passed then the styles would be set on the document :root (i.e., accessible to all dom)
/// 
export const ColorScheme: Component<{ children?: JSX.Element, scheme?: string }> = (props: _) => {
	const { configs, re_configs } = configs_ctx();
	const children = () => props.children;
	const { colors, re_colors } = colors_ctx();
	const scheme = () => props.scheme ?? configs().colorschemes.current;

	// BUG this applies the colorscheme before the dom tree is fully loaded
	// non root color variables wont take effect since they use querySelector
	// TODO just make colorscheme a function then call it once App is loaded 
	if (scheme_exists(colors(), scheme())) {
		sync_scheme(colors()[scheme()]);
		sync_ls(scheme());
	}

	// return (<div class={styles.ColorScheme}>
	return children();
	// </div>);
};

function scheme_exists(colors: Object, scheme: string): boolean {
	return Object.keys(colors).includes(scheme);
}

function assign_prop(name: string, val: string) {
	document.documentElement.style.setProperty("--" + name, val);
}

export function sync_ls(scheme: string) {
	localStorage.setItem("colorscheme", scheme);
}

export function read_ls(): null | string {
	return localStorage.getItem("colorscheme");
}

export function colorschemes(ctx?: { colors: _, re_colors: _ }) {
	return {
		ctx: ctx ?? colors_ctx(),
		overwrite_: false,
		name_: null as string | null,
		name:
			function (name: string) {
				this.name_ = name;

				return this;
			},
		overwrite: function (overwrite: boolean) {
			this.overwrite_ = overwrite;

			return this;
		},
		register: function (fun: Function) {
			console.log("0");
			const { colors, re_colors } = this.ctx;
			console.log("1");
			const scheme = this.name_!;
			console.log("2");
			const overwrite = this.overwrite_ ?? false;
			console.log("3");
			if (scheme === null) throw new Error("cannot register new colorscheme without a name")
			console.log("4");
			if (!overwrite && colors()[scheme] !== undefined) throw new Error("a colorscheme with the same name already exists. enable the overwrite flag if you want to, well, overwrite it")
			console.log("5");
			re_colors((colors: _) => {
				colors[scheme] = fun;

				return structuredClone(colors);
			});
		},
		refresh(name?: string) {
			const { colors, re_colors } = this.ctx;
			const { configs, re_configs } = configs_ctx();
			name = name ?? configs().colorschemes.current;
			const scheme = colors()[name!];
			if (scheme === undefined) throw new Error("no such colorscheme is registered");
			scheme();
			re_configs((configs: _) => {
				configs.colorschemes.current = name;

				return structuredClone(configs);
			});
		},
		contains: function (name: string): boolean {
			return this.ctx.colors()[name] !== undefined;
		}
	};
}

export function color_rules() {
	return {
		external_: false,
		inline_: true,
		selects_: null as string[] | null,
		props_: null as Record<string, string> | string[] | null,
		decls_: null as Record<string, string> | string[] | null,
		wipeout_: false,
		external: function (ext: boolean) {
			this.external_ = ext;

			return this;
		},
		inline: function (inline: boolean) {
			this.inline_ = inline;

			return this;
		},
		selectors: function (...selectors: string[]) {
			this.selects_ = selectors;

			return this;
		},
		props: function (props: Record<string, string> | string[]) {
			this.props_ = props;

			return this;
		},
		declarations: function (decls: Record<string, string> | string[]) {
			this.decls_ = decls;

			return this;
		},
		wipeout: function (wo: boolean) {
			this.wipeout_ = wo;

			return this;
		},
		apply: function () {
			apply_rules(this);
		},
	};
}

function query_selectors(selectors: null | string[]): Element | Element[] {
	if (selectors === null) {
		return document.documentElement;
	}

	return selectors
		.map((selector: string) =>
			new Array(...document.querySelectorAll(selector)))
		.flat();
}

function apply_rules(self: _) {
	let selectors = query_selectors(self.selects_) as _;
	const ty = constr(selectors);
	const external = self.external_;
	const inline = self.inline_;
	if (!external && !inline) return;
	const enforcer = self.wipeout_ ? clear_selector_rules : extend_selector_rules

	const decls = self.decls_;
	if (decls !== null) {
		ty === "Array" ? selectors.forEach((selector: _) =>
			enforcer(selector, external, inline, decls)
		) : enforcer(selectors, external, inline, decls);
	}

	const props = self.props_;
	if (props !== null) {
		ty === "Array" ? selectors.forEach((selector: _) =>
			enforcer(selector, external, inline, props)
		) : enforcer(selectors, external, inline, props);
	}
}

function extend_selector_rules(
	selector: HTMLElement,
	external: boolean,
	inline: boolean,
	decls: Record<string, string>
) {
	if (external) extend_selector_external_rules(selector, decls);
	if (inline) extend_selector_inline_rules(selector, decls);
}

function extend_selector_external_rules(
	selector: HTMLElement,
	declarations: Record<string, string>
) {
	const stylesheet = document.styleSheets[0];
	const rule = selector + " {"
		+ Object.entries(declarations).map(([prop, value]: _) => prop + ':' + value + '; ')
		+ '}';
	stylesheet.insertRule(rule, stylesheet.cssRules.length);
}

function extend_selector_inline_rules(
	selector: HTMLElement,
	declarations: Record<string, string>
) {
	const styles = selector.style;
	Object.entries(declarations).forEach(([prop, value]: _) => {
		styles.setProperty(prop, value);
	});
}

function clear_selector_rules(
	selector: HTMLElement,
	external: boolean,
	inline: boolean,
	...decls: string[]
) {
	if (external) clear_selector_external_rules(selector, ...decls);
	if (inline) clear_selector_inline_rules(selector, ...decls);
}

function clear_selector_external_rules(
	selector: HTMLElement,
	...decls: string[]
) {
	const stylesheet = document.styleSheets[0];
	const rule = selector + " {"
		+ decls.map((prop: _) => prop + ':' + "none; ")
		+ '}';
	stylesheet.insertRule(rule, stylesheet.cssRules.length);
}

function clear_selector_inline_rules(
	selector: HTMLElement,
	...decls: string[]
) {
	const styles = selector.style;
	decls.forEach((decl: string) => styles.removeProperty(decl));
}

