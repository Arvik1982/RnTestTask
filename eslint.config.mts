// @ts-ignore
import pluginReactNative from "eslint-plugin-react-native";
// @ts-ignore
import eslintConfigExpo from "eslint-config-expo/flat";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";

import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    ignores: ["node_modules/**", "android/**", "ios/**", "build/**", "dist/**"],
  },
  eslintConfigExpo,
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReactNative.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "prettier/prettier": "error",
    },
  },
]);
