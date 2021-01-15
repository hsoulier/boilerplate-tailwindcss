import postcss from "rollup-plugin-postcss"
import commonjs from "@rollup/plugin-commonjs"
import noderesolve from "@rollup/plugin-node-resolve"
import { terser } from "rollup-plugin-terser"


export default {
  input: "src/js/index.js",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "dist/bundle.js",
  },
  plugins: [
    postcss({
      minimize: process.env.NODE_ENV === "production" ? true : false,
      extract: true,
      extract: "css/app.css",
    }),
    commonjs(),
    noderesolve(),
    terser(),
  ],
}
