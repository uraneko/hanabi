import { Component, Show, For, JSX } from "solid-js";
import { Catalyst } from "../primitives";
import { _, nullish_coercion, spread_classes } from "../misc";
import styles from "./Tree.module.css";

type Tree = _;
type Branch = _;
type Twig = _;

export const Tree: Component<{
	tree?: Tree,
	children?: JSX.Element,
	flat?: boolean,
	padding?: number,
	title?: string,
	class?: string | string[],
}> = (props: _) => {
	const tree = () => props.tree;
	if (tree()! !== undefined) {
		return tree().into();
	}
	const flat = () => props.flat ?? false;
	const title = () => props.title;
	const children = () => props.children;
	// handles null / undefined and 0
	const padding = () => flat() ? 0 : props.padding ? props.padding : 8;
	const cls = () => props.class ?? "";

	return <div
		class={spread_classes([...cls(), styles.Tree])}
		style={{ "--padding": padding() + "px" }}
	>
		<Show when={title() !== undefined}>
			<span class={styles.TreeTitle}>{title()}</span>
		</Show>
		<Show when={children() !== undefined}>
			{children()}
		</Show>
	</div>;
};

export const Branch: Component<{
	value?: string,
	children: JSX.Element,
	padding?: number
}> = (props: _) => {
	const children = () => props.children;
	const value = () => props.value;
	// zero padding mitigation
	const padding = () => props.padding ? props.padding : 8;

	return <div class={styles.Branch}>
		<Show when={value() !== undefined}>
			<Catalyst class={styles.BranchValue}>
				<span>{value()}</span>
			</Catalyst>
		</Show>
		<div class={styles.BranchInner} /* style={{ 'padding-left': padding() + "px" }} */>
			{children()}
		</div>
	</div>;
};

// const Branch = {
// 	map_: null | Function,
// 	value_: null | string,
// 	inner_: null | Branch[],
// 	padding_: number | null,
// 	branch(branch_: Branch) {
// 		if (this.inner_ === null) {
// 			this.inner_ = Array.from([branch_]);
// 			return this;
// 		}
// 		this.inner_.push(branch);
//
// 		return this;
// 	},
// 	map(map: Function) {
// 		this.map_ = map;
//
// 		return this;
// 	},
// 	value(val: string) {
// 		this.value_ = val;
//
// 		return this;
// 	},
// 	padding(pad: number) {
// 		this.padding_ = pad;
//
// 		return this;
// 	}
// };

export function tree() {
	return {
		title_: null as null | string,
		branches: new Array() as (Branch | Twig)[],
		map_: null as null | ((bot: Branch | Twig) => Component),
		padding_: null as null | number,
		flat_: false,
		/// pushes a new branch to this tree 
		padding(pad: number) {
			this.padding_ = pad;

			return this;
		},
		branch(branch: Branch) {
			this.branches.push(branch);

			return this;
		},
		flat(flat: boolean) {
			this.flat_ = flat;

			return this;
		},
		/// sets a title for the tree 
		title(title: string) {
			this.title_ = title;

			return this;
		},
		/// sets the mapping function to be used by all branches of this tree 
		/// any branch may opt out of this map fn by providing its own map fn
		map(map: (bot: Branch | Twig) => Component) {
			this.map_ = map;

			return this;
		},
		/// converts this tree into a Tree component 
		into() {
			if (this.branches.some((bot: _) => bot.map_ === undefined) && this.map_ === null)
				throw new Error("found twigs on the tree with no map fn");

			const default_map = this.map_!;
			const children: Component[] = this.branches.map((bot: Branch | Twig) => {
				if (bot.into === undefined) return default_map(bot);
				return bot.into(this.map_);
			});

			return <Tree title={nullish_coercion(this.title_)} padding={nullish_coercion(this.padding_)} flat={this.flat_} >
				<For each={children}>
					{(child: _) => child}
				</For>
			</Tree>;
		}
	};
}

export function branch() {
	return {
		map_: null as null | ((bot: Branch | Twig) => Component),
		// TODO T can be anything as long as this.map_ knows how to handle it
		value_: null as null | string,
		// Branch refers to the strict type of the object that is being returned here 
		inner_: new Array() as (Branch | Twig)[],
		padding_: null as number | null,
		branch(branch: Branch) {
			if (this.inner_ === null) {
				this.inner_ = Array.from([branch]);
				return this;
			}
			this.inner_.push(branch);

			return this;
		},
		/// sets this branch's map fn 
		// overwrites the tree's map fn if it exists
		map(map: (bot: Branch | Twig) => Component) {
			this.map_ = map;

			return this;
		},
		/// sets the branch's value 
		value(val: string) {
			this.value_ = val;

			return this;
		},
		/// sets the branch inner branches padding 
		padding(pad: number) {
			this.padding_ = pad;

			return this;
		},
		into(map?: Function) {
			const map_child = this.map_ ?? map!;
			if (map === undefined) throw new Error("no map function found for branch");
			const children: Component[] = this.inner_.map((bot: Branch | Twig) => {
				if (bot.into === undefined) return map_child(bot);
				return bot.into(map);
			});

			return <Branch
				padding={nullish_coercion(this.padding_)}
				value={nullish_coercion(this.value_)}
			>
				<For each={children}>
					{(child: _) => child}
				</For>
			</Branch>;
		}
	}
}

export function twig(val: string) {
	return {
		value_: val,
	};
}
