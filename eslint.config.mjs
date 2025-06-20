// eslint.config.js
import eslintPluginJest from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "script",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-undef": "off", // désactive l’erreur si on a bien défini les globals
    },
  },
  {
    files: ["**/*.test.js"],
    plugins: {
      jest: eslintPluginJest,
    },
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
        describe: "readonly",
        beforeEach: "readonly",
      },
    },
  },
  {
    files: ["tests/e2e/**/*.js"],
    languageOptions: {
      globals: {
        test: "readonly",
        expect: "readonly",
      },
    },
  },
  {
    ignores: ["node_modules", "dist"],
  },
];
