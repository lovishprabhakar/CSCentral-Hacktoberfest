import { Page } from '@playwright/test';

export class BasePage {
  url = '/CS-Central/Code/';

  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto(this.url);
  }

  async wait(time: number): Promise<void> {
    await this.page.waitForTimeout(time);
  }
}
