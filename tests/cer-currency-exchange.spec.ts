import { test, expect } from '@playwright/test';
import { CurrencyExchangePage } from '../src/pages/cer-currency-exchange.page';

test.describe('Verify basic features on CER - Currency Exchange Rate page', () => {
  let cerPage: CurrencyExchangePage;

  test.beforeEach(async ({ page }) => {
    cerPage = new CurrencyExchangePage(page);
    await cerPage.goto();
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Arrange
    const expectedHomepageURL =
      'https://lovishprabhakar.is-a.dev/CS-Central/Code/index.html';

    // Act
    await cerPage.topMenu.homePageLogo.click();

    // Assert
    expect(page.url()).toBe(expectedHomepageURL);
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
    // the below 3 steps will be done by API request in upcoming PR
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
