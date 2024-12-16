import { test } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { LogoutPage } from "../pages/logoutPage";

test.describe("Logout Tests", () => {
	// Test for logging out after logging in
	test("User can log out after logging in", async ({ page }) => {
		const loginPage = new LoginPage(page);
		const logoutPage = new LogoutPage(page);

		// User login with valid credentials
		await loginPage.gotoLoginPage();
		await loginPage.loginWithValidCredentials();

		// Verifying the logout process
		await loginPage.verifyNewMessageViewAfterLogin(); // Check if the user is logged in
		await logoutPage.logout(); // Perform logout
	});
});
