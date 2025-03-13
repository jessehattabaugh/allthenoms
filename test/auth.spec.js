import { expect, test } from '@playwright/test';

/**
 * @file User authentication system test
 * @module tests/auth
 */

test.describe('User Authentication 🔐', () => {
	// Shared emoji for this test file domain
	const fileEmoji = '🔐';

	test.beforeEach(async ({ page }) => {
		await page.goto('/index.html');
	});

	test.describe('Email/Password Registration and Login', () => {
		test('should register a new user', async ({ page }) => {
			console.info(`${fileEmoji} 📝 Registering a new user`);

			await page.click('text=Start Your Collection');
			await page.fill('input[name="email"]', 'testuser@example.com');
			await page.fill('input[name="password"]', 'Password123!');
			await page.click('button:has-text("Sign Up")');

			await expect(page).toHaveURL('/welcome.html');
			await expect(page.locator('text=Welcome, testuser@example.com')).toBeVisible();
		});

		test('should login an existing user', async ({ page }) => {
			console.info(`${fileEmoji} 🔑 Logging in an existing user`);

			await page.click('text=Login');
			await page.fill('input[name="email"]', 'testuser@example.com');
			await page.fill('input[name="password"]', 'Password123!');
			await page.click('button:has-text("Login")');

			await expect(page).toHaveURL('/dashboard.html');
			await expect(page.locator('text=Welcome back, testuser@example.com')).toBeVisible();
		});
	});
});
