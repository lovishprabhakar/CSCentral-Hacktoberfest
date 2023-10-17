import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class HomePage extends BasePage {
  url = '/CS-Central/Code/index.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }
}
