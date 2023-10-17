import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { CodeCompileRunPage } from '../src/pages/ccr-code-compile-run.page';
import { CurrencyExchangePage } from '../src/pages/cer-currency-exchange.page';
import { PostalIndexNumberPage } from '../src/pages/pin-postal-index-number.page';

test.describe('Verify top-main menu navigates to expected pages', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('ccr navigates to code compile run page', async ({ page }) => {
    // Act
    await homePage.topMenu.ccrButton.click();
    const ccrPage = new CodeCompileRunPage(page);
    await ccrPage.wait(8_000);

    // Assert
    expect(await page.textContent('h1')).toBe('CS Central');
    expect(await page.textContent('h3')).toBe(' CCR - Code Compile Run');
  });

  test('cer navigates to currency exchange page', async ({ page }) => {
    // Act
    await homePage.topMenu.cerButton.click();
    const cerPage = new CurrencyExchangePage(page);
    await cerPage.wait(8_000);

    // Assert
    expect(await page.textContent('h1')).toBe('CS Central');
    expect(await page.textContent('h3')).toBe(' CER - Currency Exchange Rate');
  });

  test('pin navigates to postal index number page', async ({ page }) => {
    // Act
    await homePage.topMenu.pinButton.click();
    const pinPage = new PostalIndexNumberPage(page);
    await pinPage.wait(8_000);

    // Assert
    expect(await page.textContent('h1')).toBe('CS Central');
    expect(await page.textContent('h3')).toBe(' PIN - Post Index Number');
  });
});

test.describe('Verify headers in footer', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.goto();
  });

  test('footer includes About Us, Contact Me sections', async ({ page }) => {
    // Arrange
    const headerInFooter = page.locator('h6');
    const firstHeader = headerInFooter.first();
    const lastHeader = headerInFooter.last();
    // Assert
    await expect.soft(firstHeader).toHaveText('About Us');
    await expect(lastHeader).toHaveText(' Contact Me');
  });
});
