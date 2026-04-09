import IframePage from '../support/pages/IframePage';

describe('Scenario 5: Manipulation of Iframes', () => {
  
  it('Should verify content within an iframe', () => {
    IframePage.visit();
    
    IframePage.verifyIframeText()
      .should('be.visible')
      .and('have.text', 'Your content goes here.');
  });

});