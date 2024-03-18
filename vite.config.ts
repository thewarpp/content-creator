import MillionLint from "@million/lint";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
const plugins = [
	react(),
	TanStackRouterVite({ generatedRouteTree: "./src/route-tree.gen.ts" }),
];
plugins.unshift(MillionLint.vite());

export default defineConfig({
	plugins,
	build: {
		commonjsOptions: {
			transformMixedEsModules: true,
		},
	},
	resolve: {
		alias: {
			"~": resolve(__dirname, "./src"),
		},
	},
});
