import { type Component, JSX } from "solid-js";
import { _ } from "../misc";
import styles from "./Transient.module.css";

export const Transient: Component<{ children: JSX.Element, timer: number }> = (props: _) => {
	const children = () => props.children;
	const timer = () => props.timer;


	return (<div class={styles.Transient} timer={timer()} style={{
		position: "fixed",
		width: "100px",
		height: "70px",
		display: "flex",
		background: "#e3827a",
		color: "beige",
		top: "17%",
		left: "17%",
	}}>
		{children()}
	</div>)
};

const watchguard = new MutationObserver(() => {
	const bombs = document.querySelectorAll("[timer]");
	console.log(bombs);
	bombs.forEach(async (bomb) => await detonate(bomb));
});

async function detonate(bomb: Element) {
	let timer = bomb.getAttribute("timer") as _;
	timer = Number(timer);
	await new Promise(_ => setTimeout(() => bomb.remove(), timer));
}

export function transient_guard() {
	watchguard.observe(document.documentElement, {
		subtree: true,
		childList: true,
		attributes: true,
		attributeFilter: ["timer"]
	});
}
