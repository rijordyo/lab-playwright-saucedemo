import DynamicLoadingPage from '../support/pages/DynamicLoadingPage';

describe('Scenario 3: Dynamic Loading', () => {
  
  it('Should wait for the element to load successfully', () => {
    DynamicLoadingPage.visit();
    
    cy.get('#finish h4').should('not.be.visible');

    DynamicLoadingPage.startLoading();

    DynamicLoadingPage.getFinishText()
      .should('be.visible')
      .and('have.text', 'Hello World!');
  });

});