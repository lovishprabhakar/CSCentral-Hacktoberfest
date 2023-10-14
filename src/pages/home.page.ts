import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class HomePage extends BasePage {
  url = '/';

  constructor(page: Page) {
    super(page);
  }
}
