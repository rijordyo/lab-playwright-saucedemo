class IframePage {
  visit() {
    cy.visit('/iframe');
  }

  getIframeBody() {
    return cy
      .get('#mce_0_ifr')
      .its('0.contentDocument.body')
      .should('not.be.empty')
      .then(cy.wrap);
  }

  verifyIframeText() {
    return this.getIframeBody()
      .find('p');
  }
}

export default new IframePage();