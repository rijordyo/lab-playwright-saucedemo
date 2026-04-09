import AlertsPage from '../support/pages/AlertsPage';

describe('Scenario 6: JavaScript Alerts Handling', () => {
  
  beforeEach(() => {
    AlertsPage.visit();
  });

  it('Should validate the text of a simple JS Alert', () => {
    //cy.on('window:alert', (text) => {
    //  expect(text).to.equal('I am a JS Alert');
    //});

    AlertsPage.clickForJsAlert();
    AlertsPage.getResultText().should('have.text', 'You successfully clicked an alert');
  });

  it('Should confirm a JS Confirm pop-up', () => {
    cy.on('window:confirm', (text) => {
      expect(text).to.equal('I am a JS Confirm');
    });

    AlertsPage.clickForJsConfirm();
    AlertsPage.getResultText().should('have.text', 'You clicked: Ok');
  });

  it('Should handle a JS Prompt by sending text', () => {
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Cypress is great!').as('promptStub');
    });

    AlertsPage.clickForJsPrompt();

    AlertsPage.getResultText().should('have.text', 'You entered: Cypress is great!');
  });

});