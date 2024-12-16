import { defineConfig } from "@playwright/test";

export default defineConfig({
	testDir: "./tests",
	timeout: 30000,
	retries: 1,

	use: {
		baseURL: "https://gmail.com/",

		headless: false,
		viewport: { width: 1280, height: 720 },
		ignoreHTTPSErrors: true,
		video: "on-first-retry",
		trace: "retain-on-failure",
	},
});
