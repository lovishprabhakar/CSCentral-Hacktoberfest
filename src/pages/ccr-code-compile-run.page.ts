import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class CodeCompileRunPage extends BasePage {
  url = process.env.local ? '/Code/compile-run.html' : '/CS-Central/Code/compile-run.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }

  placeholder = this.page
    .frameLocator('iframe[title="ide"]')
    .frameLocator('iframe')
    .locator('#code div')
    .filter();
}
