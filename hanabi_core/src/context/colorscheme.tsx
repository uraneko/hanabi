import { createContext, useContext, createSignal } from 'solid-js';
import { _, constr } from "../misc";
import { configs_ctx } from "../context";

type Scheme = Record<string, string>;
const [colors, re_colors] = createSignal(new Object() as Record<string, Scheme>);
const colors_context = createContext({ colors, re_colors });
export function colors_ctx() {
	return useContext(colors_context)
}

export function register_scheme(name: string, scheme: Object, re_colors: _) {
	re_colors((colors: _) => {
		colors[name] = scheme;

		return structuredClone(colors);
	});
}

export function register_schemes(re_colors: _, ...schemes: { name: string, scheme: Object }[]) {
	re_colors((colors: _) => {
		schemes.forEach((scheme: _) =>
			colors[scheme.name] = scheme.scheme
		);

		return structuredClone(colors);
	});
}

export function sync_scheme(colors: Object) {
	// console.log(colors);
	const root_colors = Object.entries(colors)
		.filter(([k, v]: _) => !k.includes(':'));
	// console.log(root_colors);

	const styles = document.documentElement.style;
	root_colors
		.forEach(([k, v]: _) =>
			styles.setProperty("--" + k, v));
	if (root_colors.length === Object.keys(colors).length) return;

	const targets = new Object() as Record<string, { prop: string, val: string }[]>;
	Object.entries(colors)
		.filter(([k, v]: _) => k.includes(':'))
		.map(([k, v]) => {
			const split = k.split(':');

			return { selector: split[0], prop: split[1], value: v };
		}).forEach((target: _) => {
			if (targets[target.selector] === undefined) {
				targets[target.selector] = [{ prop: target.prop, val: target.value }];
			} else {
				targets[target.selector].push({ prop: target.prop, val: target.value });
			}
		});
	// console.log(targets);
	Object.entries(targets).forEach(([selector, properties]: _) => {
		const els = document.querySelectorAll(selector);
		// console.log(els,
		// 	document.querySelectorAll("svg.hanabi\\.svg")
		// );
		if (els.length === 0) return;

		properties.forEach((prop: _) =>
			els.forEach((el: _) =>
				el.style.setProperty("--" + prop.prop, prop.val))
		);
	});
}

export function extend_scheme() { }

export function reduce_scheme() { }

type ColorScheme = { selectors: Record<string, number | number[]>, props: Record<string, { value: string, idx: number }> };

// Selectors(s0, s1, s2): { p1: v1, p2: v2, ...}
export function selectors_rule() { }

// Props(p0: v0): [ s0, s1, ...]
export function props_rules() { }

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
		register: function (scheme: {
			selectors: Record<string, number | number[]>,
			props: Record<string, { value: string, idx: number }>
		}) {
			const { colors, re_colors } = this.ctx;
			const name = this.name_!;
			const overwrite = this.overwrite_ ?? false;
			if (name === null) throw new Error("cannot register new colorscheme without a name")
			if (!overwrite && colors()[name] !== undefined) throw new Error("a colorscheme with the same name already exists. enable the overwrite flag if you want to, well, overwrite it")
			re_colors((colors: _) => {
				colors[name] = scheme;

				return structuredClone(colors);
			});
		},
		/// applies a colorscheme's rules
		/// if no scheme name is passed, this uses colorschemes.current from the configs context
		refresh(name?: string) {
			const { colors, re_colors } = this.ctx;
			const { configs, re_configs } = configs_ctx();
			name = name ?? configs().colorschemes.current;
			const scheme = colors()[name!];
			if (scheme === undefined) throw new Error("no such colorscheme is registered");
			apply_scheme(scheme);
			re_configs((configs: _) => {
				configs.colorschemes.current = name;

				return structuredClone(configs);
			});
		},
		/// checks if schemes contains a scheme by the passed name
		contains: function (name: string): boolean {
			return this.ctx.colors()[name] !== undefined;
		},
		/// gets a colorscheme from the schemes table 
		load: function (name: string) {
			if (!this.contains(name)) return null;

			const scheme = this.ctx.colors()[name];

			return colorscheme(scheme.selectors, scheme.props);
		},
		/// takes a scheme name and value, updates the colorschemes scheme entry to the value 
		/// iff it already exists
		update: function (name: string, scheme: _) {
			if (!this.contains(name)) throw new Error("no such colorscheme");
			this.ctx.re_colors((colors: _) => {
				colors[name] = scheme;

				return structuredClone(colors);
			});
		}
	};
}

function apply_scheme(scheme: {
	selectors: Record<string, number | number[]>,
	props: Record<string, { value: string, idx: number }>
}) {
	const props_arr = Object.entries(scheme.props);
	Object.entries(scheme.selectors).map(([selec, indexes]: _) => {
		const props = props_arr
			.filter(([prop, val_idx]: _) =>
				constr(indexes) === "Number" ? indexes === val_idx.idx :
					indexes.includes(val_idx.idx))
			.map(([prop, val_idx]: _) => [prop, val_idx.value] as [string, string]);
		apply_selector_rules(selec, props);
	})
}

function apply_selector_rules(
	selector: string,
	props: [string, string][],
) {
	const selectors = document.querySelectorAll(selector);
	selectors.forEach((selec: _) => {
		const styles = selec.style;
		props.forEach(([prop, value]: _) => styles.setProperty(prop, value));
	});
}

export function colorscheme(selectors?: _, props?: _) {
	return {
		selectors: selectors ?? new Object() as Record<string, number | number[]>,
		props: props ?? new Object() as Record<string, { value: string, idx: number }>,
		/// returns a colorscheme object, with/o the methods
		make: function () {
			return { selectors: this.selectors, props: this.props };
		},
		/// adds color rule(s) to the scheme
		extend: function (rules: _) {
			const len = Object.keys(this.props).length;
			const props = Object.entries(rules.props_).map(([prop, val]: _) =>
				property_rule(this.props, prop, val, rules.prefix_, len));
			let indexes = props.map(([prop, val_idx]: _) => val_idx.idx);
			indexes = indexes.length === 1 ? indexes[0] : indexes;
			let selecs = rules.selectors_.length === 0 ? [":root"] : rules.selectors_;
			selecs = selecs.map((selec: _) => [selec, indexes]);
			for (const [selec, indexes] of selecs) {
				if (this.selectors[selec] === undefined) {
					this.selectors[selec] = indexes;
				} else {
					this.selectors[selec].push(indexes);
				}
			}
			props.forEach(([prop, val_idx]: _) => {
				if (this.props[prop] === val_idx) {
					this.props[prop] = val_idx;
				}
			});

			return this;
		},
		/// changes existing color rule(s) in the scheme
		mutate: function () { },
		/// removes (a) color rule(s) from the scheme
		reduce: function () {
			Reflect.deleteProperty(this, "prop");
		},
	}
}

function property_rule(
	props: Record<string, { value: string, idx: number }>,
	prop: string,
	value: string,
	prefix: boolean,
	len: number,
) {
	prop = prefix ? "--" + prop : prop;
	const old_prop = props[prop];
	if (old_prop !== undefined && old_prop.value === value) {
		return old_prop;
	}

	const rule = [prop, { value: value, idx: len }];
	len += 1;

	return rule;
}

export function color_rules() {
	return {
		selectors_: new Array() as string[],
		props_: new Object() as Record<string, string>,
		/// i belive setting the default to true is unexpected and non-intuitive
		prefix_: false,
		selectors: function (...selectors: string[]) {
			this.selectors_ = selectors;

			return this;
		},
		selectors_mut: function () { return this.selectors_; },
		props: function (props: Record<string, string>) {
			this.props_ = props;

			return this;
		},
		props_mut: function () { return this.props_; },
		prefix: function (prefix: boolean) {
			this.prefix_ = prefix;

			return this;
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

