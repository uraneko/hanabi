import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
	resolve: {
		dedupe: ['solid-js'],
	},
	plugins: [solidPlugin()],
	build: {
		// target: 'esnext',
		outDir: "build",
		rollupOptions: {
			output: {
				assetFileNames: (file) => {
					if (file.names[0] == "index.css") {
						return 'assets/styles.css';
					} else if (file.names[0] == "hanabi.svg") {
						return 'assets/hanabi.svg';
					} else {
						return `assets/[name]-[hash].[ext]`
					}
				},
				entryFileNames: (file) => {
					return `assets/bundle.js`
				}


			}
		}
	},
});
