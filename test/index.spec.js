/**
 * @file Homepage accessibility and SEO test
 * @module tests/index
 */
import { expect, test } from '@playwright/test';

test.describe('Homepage 🏠', () => {
	// Shared emoji for this test file domain
	const fileEmoji = '🏠';

	test.beforeEach(async ({ page }) => {
		await page.goto('/index.html');
	});

	test.describe('SEO and Security', () => {
		test('has proper meta tags and security headers', async ({ page }) => {
			console.info(`${fileEmoji} 🔍 Checking meta tags and security headers`);

			// Title and description
			await expect(page).toHaveTitle('ALL THE NOMS! - Your Favorite Dishes, All in One Place');
			const description = await page.getAttribute('meta[name="description"]', 'content');
			expect(description).toBe('ALL THE NOMS! - Track, rate, and share your favorite dishes across restaurants');

			// Security headers
			const viewport = await page.getAttribute('meta[name="viewport"]', 'content');
			expect(viewport).toBe('width=device-width, initial-scale=1');

			const colorScheme = await page.getAttribute('meta[name="color-scheme"]', 'content');
			expect(colorScheme).toBe('dark light');

			const themeColor = await page.getAttribute('meta[name="theme-color"]', 'content');
			expect(themeColor).toBe('#ff6b35');
		});
	});

	test.describe('Accessibility Features', () => {
		test('has proper accessibility features', async ({ page }) => {
			console.info(`${fileEmoji} ♿ Checking accessibility features`);

			// Language attribute
			const html = page.locator('html');
			await expect(html).toHaveAttribute('lang', 'en');

			// Skip link
			const skipLink = page.locator('.sr-only');
			await expect(skipLink).toBeVisible({ visible: false }); // Should be visually hidden but in DOM
			await expect(skipLink).toHaveText('Skip to main content');

			// Main content landmark
			const main = page.locator('main');
			await expect(main).toHaveAttribute('id', 'main-content');
			await expect(main).toHaveAttribute('tabindex', '-1');

			// Important ARIA labels
			const carousel = page.locator('image-carousel');
			await expect(carousel).toHaveAttribute('aria-label', 'Testimonials carousel');
		});
	});

	test.describe('Cross-browser Screenshots', () => {
		test('captures responsive layout across browsers', async ({ page, browserName }, testInfo) => {
			console.info(`${fileEmoji} 📸 Taking screenshots in ${browserName}`);

			// Mobile viewport
			await page.setViewportSize({ width: 375, height: 812 });
			await page.screenshot({
				path: `test-results/screenshots/AllTheNoms_mobile_${browserName}.tmp.png`,
				fullPage: true
			});

			// Desktop viewport
			await page.setViewportSize({ width: 1280, height: 800 });
			await page.screenshot({
				path: `test-results/screenshots/AllTheNoms_desktop_${browserName}.tmp.png`,
				fullPage: true
			});
		});
	});
});