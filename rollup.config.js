import typescript from 'rollup-plugin-typescript2';
import cssbundle from 'rollup-plugin-css-bundle';
import postcss from 'postcss';
import postcssPresetEnv from "postcss-preset-env";
import cssnano from "cssnano";
import autoprefixer from "autoprefixer";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import atImport from "postcss-import";

export default {
	input: './src/ts/main.ts',
	output: {
		file: './dist/app/main.js',
		format: 'module',
	},
	plugins: [
		typescript({
			compileroptions: {
				// Enable latest features
				"lib": [
					"ESNext",
					"DOM"
				],
				"target": "ESNext",
				"module": "ESNext",
				"moduleDetection": "force",
				// "jsx": "react-jsx",
				"allowJs": true,
				// Bundler mode
				"moduleResolution": "bundler",
				// "allowImportingTsExtensions": true,
				"verbatimModuleSyntax": true,
				// "noEmit": true,
				"outDir": "",
				"rootDir": "src",
				"declaration": true,
				"declarationMap": true,
				// Best practices
				"strict": true,
				"skipLibCheck": true,
				"noFallthroughCasesInSwitch": true,
				// Some stricter flags (disabled by default)
				"noUnusedLocals": false,
				"noUnusedParameters": false,
				"noPropertyAccessFromIndexSignature": false
			}
			/* tsconfig: "./tsconfig.json" */
		}),
		cssbundle({
			transform: code => postcss([
				atImport(),
				cssnano({ preset: "default" }),
				postcssPresetEnv({ stage: 2 }),
				autoprefixer({ grid: true }),
			]).process(code, {})
		}),
		nodeResolve()
	]
};

