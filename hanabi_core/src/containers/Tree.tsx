import { Component, Show, For, JSX } from "solid-js";
import { Catalyst } from "../primitives";
import { _, constr, nullish_coercion, spread_classes } from "../misc";
import styles from "./Tree.module.css";

export const BuildTree: Component<{ data: _, transform?: _, }> = (props: _) => {
	const data = () => props.data;
	const transform = () => props.transform ?? default_transform;

	// return <div class={styles.Tree}>
	// 	<For each={Object.keys(data())}>
	// 		{(key: string) => constr(data()[key]) === "Object" ? <Tree transform={transform()} data={data()[key]} /> : <Leaf value={data()[key]} />}
	// 	</For>
	// </div>;

	return transform()(data());
};

const Leaf: Component<{ value: _ }> = (props: _) => {
	const value = () => props.value;
	return <div class={styles.Leaf}>
		<Catalyst>{value()}</Catalyst>
	</div>
};

// data is an array of string | record 
function default_transform(data: _, tree?: Element): Element {
	tree = tree ?? <div class={styles.Tree}></div> as HTMLElement;

	for (const entry of data) {
		// record of string,  array
		if (constr(entry) === "Object") {
			const keys = Object.keys(entry);
			for (const key of keys) {
				const branch = <div class={styles.Branch}>
					<Catalyst class={styles.BranchName}>{key}</Catalyst>
				</div> as Element;
				default_transform(entry[key], branch);
				tree.appendChild(branch);
			}
		} else {
			// @ts-ignore
			tree.appendChild((<Catalyst class={styles.Leaf}>{entry}</Catalyst>)() as Element);
		}
	}

	return tree as HTMLElement;
}
