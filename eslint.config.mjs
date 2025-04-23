import eslint from "@eslint/js";
import jestPlugin from "eslint-plugin-jest";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: [
      "**/build/**",
      "node_modules",
      ".vscode",
      "**/dist/**",
      "package.json",
      "pnpm-lock.yaml",
      ".env"
    ],
  },
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      jest: jestPlugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "quotes": ["warn", "double", { "avoidEscape": true }],
      "semi": ["warn", "always"],
      "indent": ["warn", 2],
      "class-methods-use-this": "warn",
      "eol-last": ["warn", "always"],
      "no-unused-vars": ["warn"],
      "no-unused-expressions": ["warn"],
      "no-multiple-empty-lines": ["error", { "max": 1 }],
      "no-trailing-spaces": ["warn"],
      "no-useless-constructor": 0,
      "no-loop-func": 0,
    },
  },
  {
    files: ["**/*.ts"],
    extends: [tseslint.configs.all],
  },
  {
    files: ["test/**"],
    extends: [jestPlugin.configs["flat/recommended"]],
  },
);
