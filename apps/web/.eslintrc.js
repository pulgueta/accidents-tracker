/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  rules: {
    "no-console": "warn",
    "no-unused-vars": "error",
    "no-undef": "warn",
    "no-unreachable": "warn",
  },
  parserOptions: {
    project: true,
  },
};
