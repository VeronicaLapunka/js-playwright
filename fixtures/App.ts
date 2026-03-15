import { ProfilePage } from '../pages/ProfilePage';
import { MainPage } from '../pages/MainPage';
import { LoginPage } from '../pages/LoginPage';
import { Page } from '@playwright/test';
import { BrowserWindowsPage } from '../pages/BrowserWindowsPage';

export class App {
  public readonly loginPage: LoginPage;
  public readonly mainPage: MainPage;
  public readonly profilePage: ProfilePage;
  public readonly browserWindowsPage: BrowserWindowsPage;

  constructor(private page: Page) {
    this.loginPage = new LoginPage(this.page);
    this.mainPage = new MainPage(this.page);
    this.profilePage = new ProfilePage(this.page);
    this.browserWindowsPage = new BrowserWindowsPage(this.page);
  }
}
