import { ss } from './Const';
import openDialog from './Menu/Menu';

export const doGet = (): GoogleAppsScript.HTML.HtmlOutput => {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle(getSpreadSheetName() ?? 'Vite + React on GAS');
};

const onOpen = (): void => {
  const menu = SpreadsheetApp.getUi().createMenu('Custom menu');
  menu.addItem('ダイアログ表示', 'openDialog_');
  menu.addToUi();
};

const affectCountToA1 = (count: number): void => {
  const sheet = ss.getActiveSheet();
  const range = sheet.getRange('A1');
  range.setValue(count);
};

const getSpreadSheetName = (): string | null => {
  return ss.getActiveSheet().getName();
};

// Exposed to GAS global function
global.doGet = doGet;
global.onOpen = onOpen;
global.openDialog_ = openDialog;
global.affectCountToA1 = affectCountToA1; // フロント側から呼ばれる関数もグローバルから叩けるようにしておく
global.getSpreadSheetName = getSpreadSheetName; // 同上

// Exposed to Frontend API
export { affectCountToA1, getSpreadSheetName };
