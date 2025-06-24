import js from "@eslint/js";
import globals from "globals";
import prettier from "eslint-plugin-prettier";
import configPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.node,
    },
    plugins: { js, prettier },
    rules: {
      camelcase: ["error", { properties: "always" }],
      "prettier/prettier": "error",
    },
    extends: [js.configs.recommended, configPrettier],
  },
]);
