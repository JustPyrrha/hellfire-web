import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react({
  //   babel: {
  //     plugins: [
  //       ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
  //     ]
  //   },
  // })],
  mode: "development",
  build: {
    minify: false,
    sourcemap: true
  }
})
