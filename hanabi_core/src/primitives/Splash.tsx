import { DEV, type Component, createSignal } from 'solid-js';
import { Logo } from './Logo';
import styles from './Splash.module.css';

export const Splash: Component = () => {
	return (
		<div class={styles.Splash}>
			<Logo width={340} height={160} />
		</div>
	)
}
