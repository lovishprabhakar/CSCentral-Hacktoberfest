import { test, expect } from '@playwright/test';
import { CurrencyExchangePage } from '../src/pages/cer-currency-exchange.page';
import { HomePage } from '../src/pages/home.page';

test.describe('Verify basic features on CER - Currency Exchange Rate page', () => {
  let cerPage: CurrencyExchangePage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    cerPage = new CurrencyExchangePage(page);
    await cerPage.goto();
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Act
    await cerPage.topMenu.homePageLogo.click();

    // Assert
    homePage = new HomePage(page);
    expect(page.url()).toBe(homePage.url);
  });

  test('successful currency conversion of 1 unit to 1 unit', async () => {
    // Arrange
    const expectedSuccessMessage = 'Converted Successfully!';

    // Act
    await cerPage.convertFromCurrency.selectOption('usd');
    await cerPage.convertToCurrency.selectOption('pln');
    await cerPage.convertButton.click();

    // Assert
    await expect(cerPage.conversionResultMessage).toHaveText(
      expectedSuccessMessage,
    );
  });

  test('successful currency conversion of defined number of units', async () => {
    // Arrange
    const expectedTitle = 'Convert with your quantities';

    /* since we're testing API service: https://github.com/fawazahmed0/currency-api, more checks - API tests will be additionally added in next issue is raised
    and the below 3 steps will be replaced by API requests to speed up the test execution */
    await cerPage.convertFromCurrency.selectOption('usd');
    await cerPage.convertToCurrency.selectOption('pln');
    await cerPage.convertButton.click();

    // Act
    await cerPage.moreCalculationsButton.click();
    await cerPage.addUnit('2');
    await cerPage.moreUnitsConvertButton.click();

    // Assert
    await expect(cerPage.moreCalculationsExchangeResult).not.toBeEmpty();
    await expect.soft(cerPage.moreCalculationsTitle).toHaveText(expectedTitle);
  });
});
