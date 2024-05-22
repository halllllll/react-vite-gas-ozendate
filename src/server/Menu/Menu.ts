const openDialog = (): void => {
  const html = HtmlService.createHtmlOutput(`<h1>HELLO!</h1>`);
  SpreadsheetApp.getUi().showModalDialog(html, 'AWESOME TITLE');
};

const customMenu1 = (): void => {
  const html = HtmlService.createHtmlOutputFromFile('menu.html').setWidth(600).setHeight(600);
  SpreadsheetApp.getUi().showModalDialog(html, 'CUSTOM MENU 1');
};
export { openDialog, customMenu1 };
