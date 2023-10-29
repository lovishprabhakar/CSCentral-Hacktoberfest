import { test, expect } from '@playwright/test';
import { CurrencyExchangePage } from '../src/pages/cer-currency-exchange.page';
import { HomePage } from '../src/pages/home.page';
import { CodeCompileRunPage } from '../src/pages/ccr-code-compile-run.page';

test.describe('Verify basic features on CCR - Code Compile Run page', () => {
  let ccrPage: CodeCompileRunPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    ccrPage = new CurrencyExchangePage(page);
    await ccrPage.goto();
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Act
    await ccrPage.topMenu.homePageLogo.click();

    // Assert
    homePage = new HomePage(page);
    expect(page.url()).toBe(`${homePage.baseURL}${homePage.url}`);
  });
});
