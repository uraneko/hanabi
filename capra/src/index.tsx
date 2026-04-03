/* @refresh reload */
import { render } from "solid-js/web";

import './index.css';
import { App } from "./App";

if (import.meta.env.DEV && !(document.body instanceof HTMLBodyElement)) {
	throw new Error(
		"body not found, are you sure you're running in a browser env"
	);
}

render(() => <App />, document.body);

