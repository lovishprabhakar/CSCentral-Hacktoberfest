import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class CodeCompileRunPage extends BasePage {
  url = '/compile-run.html';

  constructor(page: Page) {
    super(page);
  }
}
