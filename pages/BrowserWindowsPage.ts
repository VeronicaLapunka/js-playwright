import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class BrowserWindowsPage extends BasePage {
  public readonly newPageButton = this.page.locator('#tabButton');
  constructor(page: Page) {
    super(page, '/browser-windows');
  }

  public async openNewTab() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.newPageButton.click(),
    ]);
    return newPage;
  }
}
