import { expect, test } from '../fixtures/custom-fixtures';
import { GET_BOOKS_LIST, ONE_BOOK_MOCK } from '../mocks/book-mocks';

test.describe('example', () => {
  test('login title', async ({ app }) => {
    // const title = page.locator('//h1');

    //const titleText = await title.textContent()
    //expect(titleText).toEqual('Login')
    // await expect(title).toHaveText('Login');
    console.log({ env: process.env.USER_NAME });
    // console.log(process.env.USER_NAME, process.env.PASSWORD);

    const userName = process.env.USER_NAME!;
    const password = process.env.PASSWORD!;
    const expectedUrl = 'https://demoqa.com/profile';

    // const loginPage = new LoginPage(page);
    // const mainPage = new MainPage(page);

    await app.loginPage.visit();
    await app.loginPage.loginWithCredentials(userName, password);

    await app.profilePage.shouldBeOpened();
    await app.profilePage.shouldHaveUserNameTitleText(userName);
  });

  test('failed login', async ({ app }) => {
    const userName = process.env.USER_NAME!;
    const password = 'qwe@123';

    // const loginPage = new LoginPage(page);
    // const mainPage = new MainPage(page);

    await app.loginPage.visit();
    await app.loginPage.loginWithCredentials(userName, password);

    await app.loginPage.shouldHaveErrorMessage('Invalid username or password!');
    //or better way:
    // в example.spec.ts
    // const errorMessage = loginPage.getErrorMessage('Invalid credentials');
    // await expect(errorMessage).toBeVisible();
  });

  test('login button exists', async ({ app }) => {
    // const mainPage = new MainPage(page);
    await app.mainPage.visit();
    await app.mainPage.shouldHaveLoginButton();
  });

  test('mocked one book', async ({ app, mock, page }) => {
    await mock.routeGET(GET_BOOKS_LIST, ONE_BOOK_MOCK);
    // await page.pause();
    await app.mainPage.visit();
    await app.mainPage.shouldHaveCountOfBookTitles(1);
    await app.mainPage.shouldHaveBookTitleName(
      'The Darkness That Comes Before'
    );
  });

  test('second tab example', async ({ app, page }) => {
    await app.browserWindowsPage.visit();
    // const pagePromise = page.context().waitForEvent('page');
    // await app.browserWindowsPage.newPageButton.click();
    // const newPage = await pagePromise;
    const newPage = await app.browserWindowsPage.openNewTab();

    await expect(newPage).toHaveURL('/sample');
  });

  test('failing test example', async () => {
    expect(true).toBe(false);
  });
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' })
  ).toBeVisible();
});
