import { Page } from '@playwright/test';

export class TopMenuComponent {
  ccrButton = this.page.getByRole('link', { name: 'CCR', exact: true });
  cerButton = this.page.getByRole('link', { name: 'CER', exact: true });
  pinButton = this.page.getByRole('link', { name: 'PIN', exact: true });
  moreButton = this.page.getByRole('link', { name: 'More' });

  homePage = this.page.getByRole('link', { name: ' CS Central' });
  homePageLogo = this.page.getByRole('link', { name: 'Logo CS Central' });

  constructor(private page: Page) {}
}
