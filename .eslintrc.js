module.exports = {
  plugins: ["@typescript-eslint", "simple-import-sort"],
  extends: ["plugin:@typescript-eslint/recommended", "next/core-web-vitals", "prettier"],
  rules: {
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-unused-vars": ["war"],
    "@typescript-eslint/no-explicit-any": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/no-duplicates": "error",
  },
};
