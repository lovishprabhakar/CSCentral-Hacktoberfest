import { Page } from '@playwright/test';
import { BasePage } from './base.page';
import { TopMenuComponent } from '../components/top-menu.component';

export class PostalIndexNumberPage extends BasePage {
  url = '/CS-Central/Code/postal-code.html';
  topMenu = new TopMenuComponent(this.page);

  constructor(page: Page) {
    super(page);
  }

  searchBy = this.page.locator('#search_Postal_type');
  postalInput = this.page.locator('#postal_Input');
  searchPostOfficeButton = this.page.getByRole('button', { name: 'Search' });
  numberOfResultsFound = this.page.locator('#postal_list_heading');
  noResultsFound = this.page.locator('#postal_error');
}
