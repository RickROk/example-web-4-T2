module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript"],
  plugins: [],
  rules: {
    "vue/multi-word-component-names": "off",
    "vue/no-multiple-template-root": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "func-call-spacing": "off",
    camelcase: "off",
    "@typescript-eslint/camelcase": ["off"],
  },
};
