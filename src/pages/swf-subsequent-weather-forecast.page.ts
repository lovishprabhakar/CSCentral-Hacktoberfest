import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class SubsequentWeatherForecastPage extends BasePage {
  url = '/location.html';

  constructor(page: Page) {
    super(page);
  }
}
