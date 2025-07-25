// eslint.config.js
export default [
  {
    ignores: [
      "node_modules/**",
      "dist/**",
      ".env"
    ],
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    plugins: {},
    rules: {
      // Your rules here. Example:
      "no-unused-vars": "warn",
      "no-console": "off"
    }
  }
];
