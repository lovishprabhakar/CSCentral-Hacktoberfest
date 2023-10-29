import { test, expect } from '@playwright/test';
import { SubsequentWeatherForecastPage } from '../src/pages/swf-subsequent-weather-forecast.page';
import { HomePage } from '../src/pages/home.page';

test.describe('Check weather forecast on SWF - Subsequent Weather Forecast page', () => {
  let swfPage: SubsequentWeatherForecastPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    swfPage = new SubsequentWeatherForecastPage(page);
    homePage = new HomePage(page);
    await swfPage.goto();
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Act
    await swfPage.topMenu.homePageLogo.click();

    // Assert
    expect(page.url()).toBe(`${homePage.baseURL}${homePage.url}`);
  });

  test('check current weather in city', async ({ page }) => {
    // Act
    await swfPage.searchPlacesButton.click();
    await swfPage.cityInput.fill('Warsaw, Poland');
    await swfPage.cityInput.press('Enter');
    await page.waitForLoadState();

    // Assert
    expect(page.url()).toBe(`${homePage.baseURL}${swfPage.targetUrl}`);
    expect(swfPage.foundLocationDetails).toHaveText('Warsaw, PL');
    expect(swfPage.foundWeatherDetails).toContainText('°C');
  });
});
