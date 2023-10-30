import { Page } from '@playwright/test';

export class FooterComponent {
  headerInFooter = this.page.locator('h6');
  firstHeader = this.headerInFooter.first();
  lastHeader = this.headerInFooter.last();

  constructor(private page: Page) {}
}
