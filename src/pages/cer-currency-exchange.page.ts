import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class CurrencyExchangePage extends BasePage {
  url = '/currency-change.html';

  constructor(page: Page) {
    super(page);
  }
}
