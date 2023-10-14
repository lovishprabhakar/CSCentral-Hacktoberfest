import { Page } from '@playwright/test';

export class BasePage {
  url = '';
  constructor(private page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async title(): Promise<void> {
    await this.page.title();
  }
}
