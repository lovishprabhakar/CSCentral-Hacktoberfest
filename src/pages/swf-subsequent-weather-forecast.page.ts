import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class SubsequentWeatherForecastPage extends BasePage {
  url = '/CS-Central/Code/location.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }

  searchPlacesButton = this.page.getByRole('link', { name: 'Search Places' });
  cityInput = this.page.getByPlaceholder('Enter city name...');
  weatherElement = this.page.locator('#weather-body');
  foundLocationDetails = this.page.locator('.city');
  foundWeatherDetails = this.page.locator('.temp');
}
