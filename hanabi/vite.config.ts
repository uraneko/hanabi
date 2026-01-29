import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import browserslist from 'browserslist';
import { Features, browserslistToTargets } from 'lightningcss';

export default defineConfig({
	resolve: {
		dedupe: ['solid-js'],
	},
	plugins: [solidPlugin()],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			targets: browserslistToTargets(browserslist('>= 0.25%')),
			// include: /* Features.VendorPrefixes |  */Features.FontFamilySystemUi,
			// sourceMap: true,
		}
	},
	build: {
		// target: 'esnext',
		outDir: "build",
		cssMinify: 'lightningcss',
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
