import TablesPage from '../support/pages/TablesPage';

describe('Scenario 4: Complex Tables', () => {
  
  beforeEach(() => {
    TablesPage.visit();
  });

  it('Should validate the debt value in Table 1', () => {
    TablesPage.getCellValueFromTable('table1', 'Doe', 3)
      .should('have.text', '$100.00');
  });

  it('Should validate the website in Table 2', () => {
    TablesPage.getCellValueFromTable('table2', 'Bach', 4)
      .should('have.text', 'http://www.frank.com');
  });
});