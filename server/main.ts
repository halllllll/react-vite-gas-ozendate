export const doGet = (): GoogleAppsScript.HTML.HtmlOutput => {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle(getSpreadSheetName() ?? 'Vite + React on GAS');
};

const affectCountToA1 = (count: number): void => {
  const sheet = SpreadsheetApp.getActiveSheet();
  const range = sheet.getRange('A1');
  range.setValue(count);
};

const getSpreadSheetName = (): string | null => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet();

  return sheet.getName();
};

export { affectCountToA1, getSpreadSheetName };
