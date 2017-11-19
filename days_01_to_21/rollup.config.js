import babel from "rollup-plugin-babel";
import json from "rollup-plugin-json";

export default {
  entry: "src/main.js",
  format: "iife",
  plugins: [
    babel(
      {
        exclude: ["**/*.json"],
        presets: ["es2015-rollup"],
        plugins: ["transform-object-rest-spread"],
        babelrc: false
      }
    ),
    json()
  ],
  dest: "public/bundle.js"
};
