import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class ProfilePage extends BasePage {
  private readonly userNameTitle = this.page.locator('#userName-value');

  constructor(page: Page) {
    super(page, '/profile');
    // Initialize ProfilePage specific properties or methods here
  }

  public async shouldHaveUserNameTitleText(userName: string) {
    await expect(this.userNameTitle).toHaveText(userName);
  }

  // Add methods to interact with the ProfilePage here
}
