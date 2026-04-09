import LoginPage from '../support/pages/LoginPage';

describe('Scenario 1: User Authentication', () => {
  
  beforeEach(() => {
    cy.fixture('users').as('userData');
  });

  it('Should log in successfully using valid credentials', function() {
    LoginPage.visit();
    LoginPage.submitLogin(this.userData.validUser.username, this.userData.validUser.password);
    
    LoginPage.getMessage().should('contain', 'You logged into a secure area!');
  });

  it('Should display error message with invalid credentials', function() {
    LoginPage.visit();
    LoginPage.submitLogin(this.userData.invalidUser.username, this.userData.invalidUser.password);
    
    LoginPage.getMessage().should('contain', 'Your username is invalid!');
  });
});