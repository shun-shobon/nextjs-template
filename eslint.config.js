import { shun_shobon } from "@shun-shobon/eslint-config";

export default shun_shobon(
	{},
	{
		files: ["**/*.test.ts"],
		rules: {
			"typescript/no-empty-function": "off",
		},
	},
);
