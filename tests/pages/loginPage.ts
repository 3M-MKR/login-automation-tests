import { Page, expect } from "@playwright/test";
import loginData from "../fixtures/loginData.json";
import userData from "../fixtures/userData.json";

export class LoginPage {
	private page: Page;

	constructor(page: Page) {
		this.page = page;
	}

	async gotoLoginPage() {
		await this.page.goto("https://gmail.com");
		await expect(
			this.page.getByText(loginData.forgotEmailLinkText)
		).toBeVisible();
	}

	async verifyNewMessageViewAfterLogin() {
		await expect(
			this.page.getByText(loginData.createNewMessageButtonText)
		).toBeVisible();
	}

	async loginWithValidCredentials() {
		await this.page
			.getByLabel(loginData.emailOrPhonePlaceholderText)
			.fill(userData.correctTestUserEmail);
		await this.page.getByRole("button", { name: "Next" }).click();
		await this.page
			.getByLabel(loginData.enterYourPasswordPlaceholderText)
			.fill(userData.correctTestUserPassword);
		await this.page.getByRole("button", { name: "Next" }).click();
		await this.verifyNewMessageViewAfterLogin();
	}

	async loginWithIncorrectEmail() {
		await this.page
			.getByLabel(loginData.emailOrPhonePlaceholderText)
			.fill(userData.incorrectTestUserEmail);
		await this.page.getByRole("button", { name: "Next" }).click();
		await expect(
			this.page.getByText(loginData.incorrectEmailMessage)
		).toBeVisible();
	}

	async loginWithIncorrectPassword() {
		await this.page
			.getByLabel(loginData.emailOrPhonePlaceholderText)
			.fill(userData.correctTestUserEmail);
		await this.page.getByRole("button", { name: "Next" }).click();
		await this.page
			.getByLabel(loginData.enterYourPasswordPlaceholderText)
			.fill(userData.incorrectTestUserPassword);
		await this.page.getByRole("button", { name: "Next" }).click();
		await expect(
			this.page.getByText(loginData.incorrectPasswordMessage)
		).toBeVisible();
	}
}
