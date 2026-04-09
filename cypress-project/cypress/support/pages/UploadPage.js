class UploadPage {
  visit() {
    cy.visit('/upload');
  }

  uploadFile(filePath) {
    cy.get('#file-upload').selectFile(`cypress/fixtures/${filePath}`);
    cy.get('#file-submit').click();
  }

  getSuccessMessage() {
    return cy.get('h3');
  }

  getUploadedFileName() {
    return cy.get('#uploaded-files');
  }
}

export default new UploadPage();