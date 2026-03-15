import { Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
  constructor(page: Page) {
    super(page, '/login');
  }

  get userNameInput() {
    return this.page.locator('#userName');
  }

  get passwordInput() {
    return this.page.locator('#password');
  }

  get loginButton() {
    return this.page.locator('#login');
  }

  public async loginWithCredentials(userName: string, password: string) {
    await this.fillUserInput(userName);
    await this.fillPasswordInput(password);
    await this.clickLoginButton();
  }

  public async fillUserInput(userName: string) {
    await this.userNameInput.fill(userName);
  }

  public async fillPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  public async clickLoginButton() {
    await this.loginButton.click();
  }

  //assertions
  public async shouldHaveErrorMessage(errorText: string) {
    const errorMessage = this.page.getByText(errorText, { exact: true });
    await expect(errorMessage).toBeVisible();
  }
}
