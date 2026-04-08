// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    // Aqui mapeamos os elementos da tela (Locators)
    this.usernameInput = 'id=user-name';
    this.passwordInput = 'id=password';
    this.loginButton = 'id=login-button';
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  async login(username, password) {
    await this.page.fill(this.usernameInput, username);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
}

module.exports = { LoginPage };