import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class PostalIndexNumberPage extends BasePage {
  url = '/postal-code.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
}