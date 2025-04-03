import { defineConfig } from 'rolldown'

export default defineConfig({
	input: {
		file: 'src/ts/main.ts',
	},
	platform: "browser",
	output: {
		file: 'dist/app/bundle.js',
		format: "esm",
		target: "esnext",
		esModule: true
	},
	// NOTE may also use define 
	inject: {},
})
