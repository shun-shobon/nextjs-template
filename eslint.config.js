import base from "@shun-shobon/eslint-config-base/flat";
import next from "@shun-shobon/eslint-config-next/flat";
import react from "@shun-shobon/eslint-config-react/flat";

export default [
  ...base,
  ...react,
  ...next,
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-undef": "off",
      "unicorn/no-abusive-eslint-disable": "off",
    },
  },
  {
    ignores: [".next/", "storybook-static/", "out/"],
  },
];
