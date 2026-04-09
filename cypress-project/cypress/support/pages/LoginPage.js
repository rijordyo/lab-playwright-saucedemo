class LoginPage {
  visit() {
    cy.visit('/login');
  }

  submitLogin(user, pass) {
    cy.get('#username').type(user);
    cy.get('#password').type(pass);
    cy.get('button[type="submit"]').click();
  }

  getMessage() {
    return cy.get('#flash');
  }
}

export default new LoginPage();