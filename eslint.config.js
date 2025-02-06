// import { Linter } from "eslint";
import reactPlugin from "eslint-plugin-react";
import typescriptPlugin from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: typescriptParser,
      sourceType: "module",
      ecmaVersion: 2021,
    },
    plugins: {
      react: reactPlugin,
      "@typescript-eslint": typescriptPlugin,
    },
    rules: {
      // Disable the prefer-default-export rule
      "import/prefer-default-export": "off",
      // Other ESLint rules can be added here
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];
