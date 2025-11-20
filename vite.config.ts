import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import ReplaceCSPMetaPlugin from "./vite-plugins/vite-plugin-replace-csp-meta";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), ReplaceCSPMetaPlugin()],
	esbuild: {
		legalComments: "none",
	},
	build: {
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (!id.includes("node_modules")) return;

					if (id.includes("@vidstack")) {
						return "vidstack-vendor";
					}

					if (id.includes("intro.js") || id.includes("introjs")) {
						return "introjs-vendor";
					}

					if (
						id.includes("react/") ||
						id.includes("react-dom") ||
						id.includes("scheduler")
					) {
						return "react-vendor";
					}

					// --- CHUNK BOOTSTRAP ---
					// Covers:
					//  - bootstrap/dist/css/bootstrap*
					//  - bootstrap/dist/js/bootstrap*
					//  - bootstrap/util/*
					if (id.includes("bootstrap")) {
						return "bootstrap-vendor";
					}

					// --- CHUNK BOOTSTRAP ICONS ---
					if (id.includes("bootstrap-icons")) {
						return "bootstrap-icons-vendor";
					}

					// --- CHUNK VENDOR PAR DÉFAUT ---
					return "vendor";
				},
			},
		},
	},
});
