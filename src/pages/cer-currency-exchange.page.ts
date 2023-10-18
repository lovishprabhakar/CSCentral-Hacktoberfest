import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class CurrencyExchangePage extends BasePage {
  url = '/CS-Central/Code/currency-change.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }

  convertFromCurrency = this.page.locator('#currencyDdl1');
  convertToCurrency = this.page.locator('#currencyDdl2');
  convertButton = this.page.getByRole('button', { name: 'Convert' });
  conversionResultMessage = this.page.locator('.alert-heading');

  moreCalculationsButton = this.page.getByRole('button', {
    name: 'More Calculations?',
  });
  moreCalculationsTitle = this.page.locator('#modalTitle');
  moreCalculationsUnitsInput = this.page.locator('#more-input-1');
  moreUnitsConvertButton = this.page.locator('#more-currency-convertor-btn');
  moreCalculationsExchangeResult = this.page.locator('#more-input-1');

  async addUnit(unit: string): Promise<void> {
    await this.moreCalculationsUnitsInput.fill(unit);
  }
}
