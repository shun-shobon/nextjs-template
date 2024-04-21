import "~/app/global.css";

import type { Preview } from "@storybook/react";

const preview: Preview = {
	parameters: {
		nextjs: {
			appDirectory: true,
		},
	},
};

export default preview;
