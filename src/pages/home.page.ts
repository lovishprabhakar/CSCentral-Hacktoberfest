import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';
import { FooterComponent } from '../components/footer.component';
import { CodeCompileRunPage } from '../pages/ccr-code-compile-run.page';
import { CurrencyExchangePage } from '../pages/cer-currency-exchange.page';
import { PostalIndexNumberPage } from '../pages/pin-postal-index-number.page';
import playwrightConfig from '../../playwright.config';

export class HomePage extends BasePage {
  topMenu = new TopMenuComponent(this.page);
  footer = new FooterComponent(this.page);
  ccrPage = new CodeCompileRunPage(this.page);
  cerPage = new CurrencyExchangePage(this.page);
  pinPage = new PostalIndexNumberPage(this.page);
  url = '/CS-Central/Code/index.html';
  baseURL = playwrightConfig.use?.baseURL;

  constructor(page: Page) {
    super(page);
  }

  async navigateToPage(page: string): Promise<void> {
    switch (page) {
      case 'ccrPage':
        await this.topMenu.ccrButton.click();
        await this.ccrPage.waitForPageToLoadURL();
        break;
      case 'cerPage':
        await this.topMenu.cerButton.click();
        await this.cerPage.waitForPageToLoadURL();
        break;
      case 'pinPage':
        await this.topMenu.pinButton.click();
        await this.pinPage.waitForPageToLoadURL();
        break;
    }
  }
}
