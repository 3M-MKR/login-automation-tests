import { Page, expect } from "@playwright/test";
import logoutData from "../fixtures/logoutData.json";

export class LogoutPage {
	readonly page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async logout() {
		await this.page.getByLabel(logoutData.googleAccount).click();
		await this.page
			.locator('iframe[name="account"]')
			.contentFrame()
			.getByRole("link", { name: logoutData.logoutText })
			.click();
		await this.page
			.getByRole("link", { name: logoutData.loginAfterLogoutLabelText })
			.click();
		await expect(
			this.page.getByText(logoutData.successfulLogoutText)
		).toBeVisible();
	}
}
