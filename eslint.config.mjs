import tsEslintParser from "@typescript-eslint/parser";
import tsEslintPlugin from "@typescript-eslint/eslint-plugin";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import unicornPlugin from "eslint-plugin-unicorn";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";

export default [
  {
    ignores: [".next/", "dist/", "node_modules/", "eslint.config.mjs"],
  },
  {
    files: ["**/*.ts", "**/*.tsx"],

    languageOptions: {
      parser: tsEslintParser,
      parserOptions: { project: "./tsconfig.json", sourceType: "module", ecmaFeatures: { jsx: true } },
      globals: { ...globals.browser, ...globals.es2021 },
    },

    settings: {
      react: { version: "detect" },
      "import/resolver": { typescript: { project: "./tsconfig.json", alwaysTryTypes: true } },
    },

    plugins: {
      "@typescript-eslint": tsEslintPlugin,
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
      import: importPlugin,
      unicorn: unicornPlugin,
      prettier: prettierPlugin,
    },

    rules: {
      ...tsEslintPlugin.configs.recommended.rules,

      "no-console": "warn",
      "prefer-arrow-callback": "error",
      "func-style": ["error", "expression", { allowArrowFunctions: true }],
      // "max-params": ["error", 3],
      "prefer-const": "error",
      "@typescript-eslint/no-var-requires": "error",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "interface", format: ["PascalCase"], prefix: ["I"] },
        { selector: "typeAlias", format: ["PascalCase"], prefix: ["T"] },
        { selector: "enum", format: ["PascalCase"], prefix: ["E"] },
      ],

      "unicorn/better-regex": "error",
      "unicorn/consistent-date-clone": "error",
      "unicorn/consistent-empty-array-spread": "error",
      "unicorn/consistent-existence-index-check": "error",
      "unicorn/error-message": "error",
      "unicorn/new-for-builtins": "error",
      "unicorn/no-await-expression-member": "error",
      "unicorn/no-await-in-promise-methods": "error",
      "unicorn/no-invalid-fetch-options": "error",
      "unicorn/no-negated-condition": "error",
      "unicorn/no-negation-in-equality-check": "error",
      "unicorn/no-new-buffer": "error",
      "unicorn/no-single-promise-in-promise-methods": "error",
      "unicorn/no-unnecessary-await": "error",
      "unicorn/no-unreadable-array-destructuring": "error",
      "unicorn/no-unused-properties": "error",
      "unicorn/no-useless-length-check": "error",
      "unicorn/no-useless-promise-resolve-reject": "error",
      "unicorn/prefer-date-now": "error",
      // "unicorn/prefer-logical-operator-over-ternary": "error",
      "unicorn/prefer-switch": "error",
      "unicorn/prefer-type-error": "error",
      // "unicorn/prevent-abbreviations": "error",
      "unicorn/template-indent": "error",
      "unicorn/throw-new-error": "error",

      "import/no-deprecated": "error",
      "import/enforce-node-protocol-usage": ["error", "always"],
      "import/no-empty-named-blocks": "error",
      "import/newline-after-import": "error",
      "import/no-default-export": "error",
      "import/no-named-as-default": "error",
      "import/no-mutable-exports": "error",
      "import/no-cycle": "error",
      "import/no-duplicates": "error",

      "react/react-in-jsx-scope": "off",
      "react/jsx-key": "error",
      "react/jsx-no-useless-fragment": "error",

      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../../../*"],
              message:
                "Relative parent imports are forbidden. Please use absolute imports (e.g. @/utils/...) to prevent path hell.",
            },
          ],
          paths: [
            {
              name: "formik",
              importNames: ["default", "Field", "FastField", "ErrorMessage"],
              message: "Only useFormik is allowed. Use: import { useFormik } from 'formik'.",
            },
          ],
        },
      ],

      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", ["parent", "sibling", "index"]],

          pathGroupsExcludedImportTypes: [],

          pathGroups: [
            { pattern: "react", group: "external", position: "before" },
            { pattern: "react/**", group: "external", position: "before" },
            { pattern: "next", group: "external", position: "before" },
            { pattern: "next/**", group: "external", position: "before" },

            { pattern: "@mui/material/**", group: "external", position: "after" },
            { pattern: "@mui/lab/**", group: "external", position: "after" },
            { pattern: "@mui/icons-material/**", group: "external", position: "after" },

            { pattern: "*", group: "external", position: "after" },

            { pattern: "@/core/constants/**", group: "internal", position: "before" },
            { pattern: "@/core/enums/**", group: "internal", position: "before" },
            { pattern: "@/core/types/**", group: "internal", position: "before" },
            { pattern: "@/core/interfaces/**", group: "internal", position: "before" },
            { pattern: "@/core/utils/**", group: "internal", position: "before" },
            { pattern: "@/core/**", group: "internal", position: "before" },

            { pattern: "@/store/**", group: "internal", position: "after" },
            { pattern: "@/hooks/**", group: "internal", position: "after" },

            { pattern: "@/features/**", group: "internal", position: "after" },
            { pattern: "@/components/**", group: "internal", position: "after" },

            { pattern: "@/presentations/**", group: "internal", position: "after" },
          ],
        },
      ],
    },
  },

  {
    files: ["**/*.tsx"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        { selector: "function", modifiers: ["exported"], format: ["PascalCase"] },
      ],
    },
  },

  {
    files: ["**/hooks/**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "function",
          format: ["camelCase"],
          custom: {
            regex: "^use[A-Z].*",
            match: true,
          },
        },
      ],
    },
  },
  {
    files: [
      "src/app/**/page.{ts,tsx}",
      "src/app/**/layout.{ts,tsx}",
      "src/app/**/loading.{ts,tsx}",
      "src/app/**/error.{ts,tsx}",
      "src/app/**/not-found.{ts,tsx}",
    ],
    rules: {
      "import/no-default-export": "off",
    },
  },
];
