import { test, expect } from '@playwright/test';
import { SubsequentWeatherForecastPage } from '../src/pages/swf-subsequent-weather-forecast.page';

test.describe('Check weather forecast on SWF - Subsequent Weather Forecast page', () => {
  let swfPage: SubsequentWeatherForecastPage;

  test.beforeEach(async ({ page }) => {
    swfPage = new SubsequentWeatherForecastPage(page);
    await swfPage.goto();
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Arrange
    const expectedHomepageURL =
      'https://lovishprabhakar.is-a.dev/CS-Central/Code/index.html';

    // Act
    await swfPage.topMenu.homePageLogo.click();

    // Assert
    expect(page.url()).toBe(expectedHomepageURL);
  });

  test('check current weather in city', async ({ page }) => {
    // Arrange
    const expectedWeatherURL =
      'https://lovishprabhakar.is-a.dev/CS-Central/Code/currentweather.html';

    // Act
    await swfPage.searchPlacesButton.click();
    await swfPage.cityInput.fill('Warsaw, Poland');
    await swfPage.cityInput.press('Enter');
    await page.waitForLoadState();

    // Assert
    expect(page.url()).toBe(expectedWeatherURL);
    expect(swfPage.foundLocationDetails).toHaveText('Warsaw, PL');
    expect(swfPage.foundWeatherDetails).toContainText('°C');
  });
});
