import { test, expect } from '@playwright/test';
import { PostalIndexNumberPage } from '../src/pages/pin-postal-index-number.page';

test.describe('Verify basic features on PIN - Postal Index Number page', () => {
  let pinPage: PostalIndexNumberPage;
  let noOfMatchesFound = '';
  let searchType = '';
  const expectedPinCodeErrorMessage = 'The requested resource is not found.';
  const expectedPostOfficeBranchErrorMessage = 'No records found.';

  test.beforeEach(async ({ page }) => {
    pinPage = new PostalIndexNumberPage(page);
    await pinPage.goto();
  });

  test('main-logo navigates to homepage', async ({ page }) => {
    // Arrange
    const expectedHomepageURL =
      'https://lovishprabhakar.is-a.dev/CS-Central/Code/index.html';

    // Act
    await pinPage.topMenu.homePageLogo.click();

    // Assert
    expect(page.url()).toBe(expectedHomepageURL);
  });

  /* since we're testing API service: http://www.postalpincode.in/Api-Details, 
  more checks - API tests will be additionally added in next issue is raised */
  test('2 post offices get displayed when searching by New Delhi as post office branch name', async () => {
    // Arrange
    searchType = 'Post office';
    noOfMatchesFound = '2';
    // Act
    await pinPage.postalInput.fill('New Delhi');
    await pinPage.searchBy.selectOption('branch');
    await pinPage.searchPostOfficeButton.click();
    // Assert
    await expect(pinPage.numberOfResultsFound).toHaveText(
      `Number of ${searchType}(s) found:${noOfMatchesFound}`,
    );
  });

  test('1 post office get displayed when searching by New Delhi South as post office branch name', async () => {
    // Arrange
    searchType = 'Post office';
    noOfMatchesFound = '1';
    // Act
    await pinPage.searchBy.selectOption('branch');
    await pinPage.postalInput.fill('New Delhi South');
    await pinPage.searchPostOfficeButton.click();
    // Assert
    await expect(pinPage.numberOfResultsFound).toHaveText(
      `Number of ${searchType}(s) found:${noOfMatchesFound}`,
    );
  });

  test('6 post offices get displayed when searching by 110049 as post office PIN Code', async () => {
    // Arrange
    searchType = 'pincode';
    noOfMatchesFound = '6';
    // Act
    await pinPage.searchBy.selectOption('pin');
    await pinPage.postalInput.fill('110049');
    await pinPage.searchPostOfficeButton.click();
    // Assert
    await expect(pinPage.numberOfResultsFound).toHaveText(
      `Number of ${searchType}(s) found:${noOfMatchesFound}`,
    );
  });

  test('no records displayed when searching by incorrect string as post office PIN Code', async () => {
    // Act
    await pinPage.searchBy.selectOption('pin');
    await pinPage.postalInput.fill('New Delhi');
    await pinPage.searchPostOfficeButton.click();
    // Assert
    await expect(pinPage.noResultsFound).toHaveText(
      expectedPinCodeErrorMessage,
    );
  });

  test('no records displayed when searching by incorrect string as post office branch name', async () => {
    // Act
    await pinPage.searchBy.selectOption('branch');
    await pinPage.postalInput.fill('110049');
    await pinPage.searchPostOfficeButton.click();
    // Assert
    await expect(pinPage.noResultsFound).toHaveText(
      expectedPostOfficeBranchErrorMessage,
    );
  });
});
