import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class CurrencyExchangePage extends BasePage {
  url = '/currency-change.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
}
