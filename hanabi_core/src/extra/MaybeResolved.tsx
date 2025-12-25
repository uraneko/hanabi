import { JSX } from 'solid-js';
import { type _, type Maybe, is } from '../misc';
import styles from './MaybeResolved.module.css';

// these functions only work in a reactive environment 
// such as a component's return element
export function maybe_resolved(resolver: () => Maybe<_>, inner: () => JSX.Element): JSX.Element {
	const resolved = () => is(resolver());

	console.log("---> ", resolver());

	// NOTE perhaps inner() should take resolver like this inner({ props: { data: resolver()! } })
	// inner: Component would need to know what to do with the props
	return resolved() ? inner() : <PendingInner />
};

export function resolve_promise<T>(resolver: () => Maybe<_>, inner: () => T, placeholder: () => T) {
	const resolved = () => is(resolver());

	console.log("--->", resolved());
	return resolved() ? inner() : placeholder()
}

const PendingInner = () => {
	return (<div class={styles.PendingInner}><span class={styles.PendingText}>Loading...</span></div>);
};
