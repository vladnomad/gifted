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
			external: ["vue-demi"],
		  	output: {
				manualChunks(id) {
					if (id.includes("node_modules")) {
						return id
							.toString()
							.split("node_modules/")[1]
							.split("/")[0]
							.toString()
					}
				},
		  	},
		},
	},
})
