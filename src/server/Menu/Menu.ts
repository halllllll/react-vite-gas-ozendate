const openDialog = (): void => {
  // const html = HtmlService.createHtmlOutputFromFile('index')
  //   .setWidth(600)
  //   .setHeight(600);
  const html = HtmlService.createHtmlOutput(`<h1>HELLO!</h1>`);
  SpreadsheetApp.getUi().showModalDialog(html, 'AWESOME TITLE');
};

export default openDialog;
