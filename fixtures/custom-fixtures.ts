import { test as base } from '@playwright/test';
import { App } from './App';
import { Mock } from './Mock';

type MyFixtures = {
  app: App;
  mock: Mock;
};

export const test = base.extend<MyFixtures>({
  app: async ({ page }, use, testInfo) => {
    console.log(`${testInfo.title} has started`);
    await use(new App(page));
    console.log(`${testInfo.title} has ended`);
  },
  mock: async ({ page }, use) => {
    await use(new Mock(page));
  },
  /*
  mainPage: async ({ page }, use) => {
    console.log('creating main page fixture');
    await use(new MainPage(page));
    console.log('test ended main page fixture closes');
  },
  loginPage: async ({ page }, use) => {
    console.log('creating login page fixture');
    await use(new LoginPage(page));
    console.log('test ended login page fixture closes');
  },
  profilePage: async ({ page }, use) => {
    await use(new ProfilePage(page));
  },*/
});
export { expect } from '@playwright/test';
