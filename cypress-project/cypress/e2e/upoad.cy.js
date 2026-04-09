import UploadPage from '../support/pages/UploadPage';

describe('Scenario 2: File Upload', () => {
  
  it('Should upload a file successfully', () => {
    const fileName = 'image_01.png';

    UploadPage.visit();
    UploadPage.uploadFile(fileName);

    UploadPage.getSuccessMessage().should('have.text', 'File Uploaded!');
    UploadPage.getUploadedFileName().should('contain', fileName);
  });

});