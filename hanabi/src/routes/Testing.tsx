import { Component } from "solid-js";
import { Tree, Branch, tree, branch, twig } from "core/containers";

// tree logic should depend on 2 variables
// the nesting level of the component within the tree 
// the class of the component within the tree
export const Testing = () => {
	return <Tree>
		<span>span 0</span>
		<Branch>
			<span>span 1</span>
		</Branch>
		<Branch>
			<span>span 2</span>
		</Branch>
		<Branch>
			<span>span 3</span>
			<Branch>
				<span>span 3.1</span>
			</Branch>
			<Branch>
				<span>span 3.2</span>
			</Branch>
		</Branch>
	</Tree>;
};
