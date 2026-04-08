const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test.describe('Fluxo de Login - SauceDemo', () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Deve realizar login com sucesso', async ({ page }) => {
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL(/.*inventory/);
    
    const title = await page.locator('.title');
    await expect(title).toHaveText('Products');
  });

  test('Deve exibir erro ao tentar login com usuário bloqueado', async () => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    const errorMessage = loginPage.page.locator('[data-test="error"]');
    await expect(errorMessage).toContainText('Sorry, this user has been locked out.');
  });
});