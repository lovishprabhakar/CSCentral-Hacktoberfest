import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';

test.describe('Verify top-main menu buttons work as expected, and footer looks as expected', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('ccr button navigates to code compile run page', async ({ page }) => {
    // Act
    await homePage.navigateToPage('ccrPage');

    // Assert
    expect(await page.textContent('h1')).toBe('CS Central');
    expect(await page.textContent('h3')).toBe(' CCR - Code Compile Run');
  });

  test('cer button navigates to currency exchange page', async ({ page }) => {
    // Act
    await homePage.navigateToPage('cerPage');

    // Assert
    expect(await page.textContent('h1')).toBe('CS Central');
    expect(await page.textContent('h3')).toBe(' CER - Currency Exchange Rate');
  });

  test('pin button navigates to postal index number page', async ({ page }) => {
    // Act
    await homePage.navigateToPage('pinPage');

    // Assert
    expect(await page.textContent('h1')).toBe('CS Central');
    expect(await page.textContent('h3')).toBe(' PIN - Post Index Number');
  });

  test('footer includes About Us, Contact Me sections', async () => {
    // Assert
    await expect.soft(homePage.footer.firstHeader).toHaveText('About Us');
    await expect(homePage.footer.lastHeader).toHaveText(' Contact Me');
  });
});
