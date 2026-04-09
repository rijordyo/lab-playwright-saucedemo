class TablesPage {
  visit() {
    cy.visit('/tables');
  }

  getCellValueFromTable(tableId, rowText, colIndex) {
    return cy.get(`#${tableId}`)
      .contains('tr', rowText)
      .find('td')
      .eq(colIndex);
  }
}

export default new TablesPage();