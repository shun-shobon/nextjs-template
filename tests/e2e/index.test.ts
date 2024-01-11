import { AxeBuilder } from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("/", () => {
	test.describe("rendering", () => {});

	test.describe("action", () => {});

	test.describe("validation", () => {});

	test.describe("a11y", () => {
		test("should not have any automatically detectable accessibility issues", async ({
			page,
		}) => {
			await page.goto("/");

			const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

			expect(accessibilityScanResults.violations).toEqual([]);
		});
	});
});
