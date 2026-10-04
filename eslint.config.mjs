import js from "@eslint/js";
import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";

// eslint-config-next 16 ships native flat configs, so the FlatCompat shim
// (and the legacy "plugin:@next/next/recommended" it loaded) is gone; the
// core-web-vitals config already includes the Next.js plugin's rules.
export default [
  js.configs.recommended,
  ...nextCoreWebVitals,
  prettierRecommended,
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "prettier/prettier": ["error", { endOfLine: "auto" }],
      "react/react-in-jsx-scope": "off",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^react"], ["^antd"], ["^@?\w"], ["@/(.*)"], ["^[./]"]],
        },
      ],
    },
  },
  { ignores: [".next/**", ".vercel/**", "node_modules/**", "next-env.d.ts"] },
];
