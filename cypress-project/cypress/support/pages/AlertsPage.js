class AlertsPage {
  visit() {
    cy.visit('/javascript_alerts');
  }

  clickForJsAlert() {
    cy.get('button').contains('Click for JS Alert').click();
  }

  clickForJsConfirm() {
    cy.get('button').contains('Click for JS Confirm').click();
  }

  clickForJsPrompt() {
    cy.get('button').contains('Click for JS Prompt').click();
  }

  getResultText() {
    return cy.get('#result');
  }
}

export default new AlertsPage();