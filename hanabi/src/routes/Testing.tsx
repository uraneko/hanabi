import { Component } from "solid-js";
import { BuildTree, Dialog } from "core/containers";

// tree logic should depend on 2 variables
// the nesting level of the component within the tree 
// the class of the component within the tree

const data = {
	branch0: null,
	branch1: {
		leaf0: null,
		leaf1: {
			fallen0: null,
			fallen1: null,
			fallen2: {
				soil0: null,
				soil1: null
			}
		}
	}
};
const test = [
	"branch0",
	{
		branch1: [
			"leaf0",
			{
				leaf1: [
					"fallen0",
					"fallen1",
					{
						fallen2: [
							"soil0",
							"soil1"
						],
						fallen3: [
							"soil2",
							{ soil3: ["roots0", "roots1"] },
						],
					}
				]
			}
		]
	}
];
export const Testing = () => {
	return <div style={{
		width: "23rem", height: "23rem", top: "70%", left: "105%", position: "relative"
		, background: "var(--white)",
	}} >
		<BuildTree data={test} />
	</div >;

};
