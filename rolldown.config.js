import { defineConfig } from 'rolldown'

export default defineConfig({
	input: {
		file: 'src/ts/main.ts',
	},
	platform: "browser",
	output: {
		file: 'dist/bundle.js',
		format: "esm",
		target: "esnext",
		esModule: true
	},
	// NOTE may also use define 
	inject: {
		// // core injects
		// Parcel: ["momo_lib/core/parcel", "Parcel"],
		// make: ["momo_lib/core/core", "make"],
		// // component injects
		// Vector: ["momo_lib/components/collections/vector", "Vector"],
		// VectorElement: ["momo_lib/components/collections/vector", "VectorElement"],
		// Jar: ["momo_lib/components/wrappers/jar", "Jar"],
		// ShadowContainer: ["momo_lib/components/wrappers/container", "ShadowContainer"],
		// MatrixElement: ["momo_lib/components/collections/matrix", "MatrixElement"],
		// TreeElement: ["momo_lib/components/collections/tree", "TreeElement"],
	},
})
