import { test, expect } from '@playwright/test';
import { HomePage } from '../src/pages/home.page';
import { CodeCompileRunPage } from '../src/pages/ccr-code-compile-run.page';

test.describe('Verify basic features on CCR - Code Compile Run page', () => {
  let ccrPage: CodeCompileRunPage;
  let homePage: HomePage;
  const expectedText = '//put your code here';

  test.beforeEach(async ({ page }) => {
    ccrPage = new CodeCompileRunPage(page);
    await ccrPage.goto();
    homePage = new HomePage(page);
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Act
    await ccrPage.topMenu.homePageLogo.click();

    // Assert
    process.env.local ? expect(page.url()).toBe(`${homePage.baseURL}${homePage.localUrl}`) : expect(page.url()).toBe(`${homePage.baseURL}${homePage.url}`);
  });

  test.fixme('ccr page is displayed with input field', async () => {
    // Act
    await ccrPage.waitForPageToLoadURL();

    // Assert
    expect(ccrPage.placeholder).toHaveText(expectedText);
  });
});
