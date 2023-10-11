import { test, expect } from '@playwright/test';

test.describe('main page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
  });

  test('has correct title', async ({ page }) => {
    // Assert
    await expect(page).toHaveTitle(/Lovish Prabhakar/);
  });
});
