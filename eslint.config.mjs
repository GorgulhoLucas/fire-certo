export default {
  files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
  parser: "@typescript-eslint/parser",
  languageOptions: {
    globals: {
      browser: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended"
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/no-unused-vars": ["warn"]
  },
  settings: {
    react: {
      version: "detect"
    }
  }
};
