import { terser } from "rollup-plugin-terser";

module.exports = {
  build: {
    rollupOptions: {
      plugins: [
        terser()
      ]
    }
  }
}
