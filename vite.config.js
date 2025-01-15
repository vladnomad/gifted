import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"

export default defineConfig({
	plugins: [vue()],
	base: "/gifted/",
	optimizeDeps: {
		exclude: ["vue"]
	},
	build: {
		outDir: "dist",
		rollupOptions: {
			output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						if (id.includes("vue") || id.includes("vue-router")) {
							return "vendor_vue"
						}
						if (id.includes("firebase")) {
							return "vendor_firebase"
						}
						return "vendor"
					}
				},
			},
		},
	},
})
