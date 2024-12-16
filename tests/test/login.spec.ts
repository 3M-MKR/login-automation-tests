import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";

test.describe("Login Tests", () => {
	// Test for successful login with valid credentials
	test("User can log in with valid credentials", async ({ page }) => {
		const loginPage = new LoginPage(page);

		// Navigate to the login page
		await loginPage.gotoLoginPage();

		// Perform login with valid credentials
		await loginPage.loginWithValidCredentials();
	});

	// Test for error message when using an incorrect email
	test("Error message appears when logging in with an incorrect email", async ({
		page,
	}) => {
		const loginPage = new LoginPage(page);

		// Navigate to the login page
		await loginPage.gotoLoginPage();

		// Attempt to log in with an incorrect email
		await loginPage.loginWithIncorrectEmail();
	});

	// Test for error message when using an incorrect password
	test("Error message appears when logging in with an incorrect password", async ({
		page,
	}) => {
		const loginPage = new LoginPage(page);

		// Navigate to the login page
		await loginPage.gotoLoginPage();

		// Attempt to log in with an incorrect password
		await loginPage.loginWithIncorrectPassword();
	});
});
