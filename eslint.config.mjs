import globals from "globals";
import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin-js';
import html from "@html-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-unused-vars': 'error',
      'camelcase': 'warn',
      'arrow-body-style': 'warn',
      'curly': 'warn',
      '@stylistic/semi': 'warn',
    }
  },
  {
    ...html.configs["flat/recommended"],
    files: ["**/*.html"],
    rules: {
      ...html.configs["flat/recommended"].rules, // Must be defined. If not, all recommended rules will be lost
      "@html-eslint/indent": "error",
    },
  },
];