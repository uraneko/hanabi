import { type Component, createSignal, createResource, JSX } from 'solid-js';
import { HomeLogo } from "core/primitives";
import { _ } from "core";
import styles from './Page.module.css';


// async function get_file() {
// 	const host = "http://127.10.10.1:6687";
// 	const resp = await fetch(host + "/file/forge/js/hanabi/hanabi/src/components/Page.tsx", {
// 		method: "GET",
// 		headers: {
// 			"range": "bytes=13-54,48-56"
// 		}
// 	});
//
// 	return await resp.text();
// }

export const Page: Component<{ children: JSX.Element }> = (props: _) => {
	const children = () => props.children;
	return (
		<div class={styles.Page}>
			<HomeLogo />
			{children()}
		</div>
	);
};
