import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
	testDir: "tests/e2e",
	fullyParallel: true,
	forbidOnly: !!process.env.CI,
	workers: process.env.CI ? 2 : undefined,
	reporter: process.env.CI ? [["list"], ["github"]] : "html",
	timeout: 5 * 60 * 1000,
	use: {
		baseURL: "http://localhost:3000",
		trace: "on-first-retry",
	},
	projects: [
		{
			name: "Desktop Chrome",
			use: { ...devices["Desktop Chrome"] },
		},
		{
			name: "Desktop Firefox",
			use: { ...devices["Desktop Firefox"] },
		},
		{
			name: "Desktop Safari",
			use: { ...devices["Desktop Safari"] },
		},
	],
});
