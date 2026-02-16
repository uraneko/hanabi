/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import browserslist from 'browserslist';
import { browserslistToTargets } from 'lightningcss';

export default defineConfig({
	resolve: {
		dedupe: ['solid-js'],
	},
	plugins: [solidPlugin()],
	// test: {
	//   environment: 'jsdom',
	//   globals: false,
	//   setupFiles: ['node_modules/@testing-library/jest-dom/vitest'],
	//   // if you have few tests, try commenting this
	//   // out to improve performance:
	//   isolate: false,
	// },
	// resolve: {
	// 	conditions: ['development', 'browser'],
	// },
	css: {
		transformer: "lightningcss",
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
		}
	},
	build: {
		// target: 'esnext',
		outDir: "build",
		cssMinify: "lightningcss",
	},
});
