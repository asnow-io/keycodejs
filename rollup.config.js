import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import babel from "@rollup/plugin-babel";
import eslint from "@rollup/plugin-eslint";
import bundleSize from "rollup-plugin-bundle-size";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const isDev = process.env.NODE_ENV === "development";

const config = {
  input: "src/index.ts",
  output: [
    {
      file: pkg.browser,
      name: "Datacasting",
      format: "umd",
    },
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    eslint({
      exclude: ["node_modules"],
    }),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      extensions: [".ts"],
    }),
    commonjs(),
    bundleSize(),
  ],
  external: ["date-fns"],
};

if (!isDev) {
  config.plugins.push(terser());
}

export default config
