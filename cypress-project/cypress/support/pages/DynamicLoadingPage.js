class DynamicLoadingPage {
  visit() {
    cy.visit('/dynamic_loading/1');
  }

  startLoading() {
    cy.get('#start button').click();
  }

  getFinishText() {
    return cy.get('#finish h4', { timeout: 10000 });
  }
}

export default new DynamicLoadingPage();