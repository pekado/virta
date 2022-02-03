module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react-native-globals", "react-native"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:eslint-comments/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
  ],
  env: {
    "react-native-globals/all": true,
    /**
     * this setting is used by `eslint-plugin-react-native`
     * to allow all browser-like globals, which we need
     * since some of our code operates in the browser
     */
    "react-native/react-native": true,
  },
  rules: {
    /**
     * (Garrett 11/3/21) Due to the new TS Config, we currently have
     * a lot of @ts-ignore statements throughout the code base. If those
     * are resolved, we may be able to enable this rule fully
     */
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-ignore": "allow-with-description",
      },
    ],
    /**
     * this rule was causing too much noise because the Virta Context
     * props have client, analyticsClient, etc as optional properties
     * but in the components that use `withVirta` those properties are
     * no longer optional so we use the non-null assertion (ie, `client!`)
     *
     * we should resolve that type discrepancy and turn this back on
     */
    "@typescript-eslint/no-non-null-assertion": "off",
    // specifies order of imports. See example of correct order:
    // https://github.com/import-js/eslint-plugin-import/blob/HEAD/docs/rules/order.md#importorder-enforce-a-convention-in-module-import-order
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
      },
    ],
    curly: ["error", "all"],
    "max-lines": [
      "warn",
      {
        skipBlankLines: true,
        skipComments: true,
      },
    ],

    // (Richard 11/11/21) These rules cause errors when importing react-native for some reason. MP-90 was created to revisit this
    "import/named": "off",
    "import/namespace": "off",
  },
  settings: {
    react: {
      // "detect" automatically picks the React version you have installed.
      version: "detect",
    },
  },
  overrides: [
    {
      // enable some rules just for tests
      files: [
        "*.{spec,test}.{js,ts,tsx}",
        "**/__{mocks,tests}__/**/*.{js,ts,tsx}",
      ],
      env: {
        jest: true,
        "jest/globals": true,
      },
    },
  ],
};
