import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class PostalIndexNumberPage extends BasePage {
  url = '/postal-code.html';

  constructor(page: Page) {
    super(page);
  }
}
