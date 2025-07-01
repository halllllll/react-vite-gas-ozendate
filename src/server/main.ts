import { ss } from './Const';
import { customMenu1, openDialog } from './Menu/Menu';

export const doGet = (): GoogleAppsScript.HTML.HtmlOutput => {
  return HtmlService.createHtmlOutputFromFile('index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle(getSpreadSheetName() ?? 'Vite + React on GAS');
};

const onOpen = (e: GoogleAppsScript.Events.SheetsOnOpen): void => {
  console.log(e.user);
  const menu = SpreadsheetApp.getUi().createMenu('Custom menu');
  menu.addItem('ダイアログ表示', 'openDialog_');
  menu.addItem('custom menu from html', 'customMenu1_');
  menu.addToUi();
};

const affectCountToA1 = (count: number): void => {
  const sheet = ss.getActiveSheet();
  const range = sheet.getRange('A1');
  range.setValue(count);
};

const getSpreadSheetName = (): string => {
  return ss.getActiveSheet().getName();
};

const getSpreadSheetUrl = (): string => {
  return ss.getUrl();
};

/**
 * Exposed to GAS global function
 * These functions are will listed as candidatable execution at AppsScript web editor menu.
 * (besides with suffix underscore like `openDialog_`. they will be not exposed if added `_` on end of function name)
 */
global.doGet = doGet;
global.onOpen = onOpen;
global.openDialog_ = openDialog;
global.customMenu1_ = customMenu1;
global.affectCountToA1 = affectCountToA1; // フロント側から呼ばれる関数もグローバルから叩けるようにしておく
global.getSpreadSheetName = getSpreadSheetName; // 同上
global.getSpreadSheetUrl = getSpreadSheetUrl;

/**
 * Exposed to Frontend API, serverFunctions
 * @see /src/client/serverFunctions.ts
 */
export { affectCountToA1, getSpreadSheetName, getSpreadSheetUrl };
