import type { AffectCountRequest } from '@/shared/types/sheet';
import { container } from './di/container';
import { customMenu1, openDialog } from './Menu/Menu';

const { sheetOperationService, spreadsheetInfoService } = container;

const doGet = (): GoogleAppsScript.HTML.HtmlOutput => {
  const name = spreadsheetInfoService.getSpreadSheetName();
  if (!name.success) {
    throw new Error(name.name);
  }
  return HtmlService.createHtmlOutputFromFile('index.html')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setTitle(name.data ?? 'Vite + React on GAS');
};

const onOpen = (e: GoogleAppsScript.Events.SheetsOnOpen): void => {
  console.log(e.user);
  const menu = SpreadsheetApp.getUi().createMenu('Custom menu');
  menu.addItem('ダイアログ表示', 'openDialog_');
  menu.addItem('custom menu from html', 'customMenu1_');
  menu.addToUi();
};

const affectCountToA1 = (count: AffectCountRequest) => {
  // convert request obj to DTO
  return sheetOperationService.affectCountToA1(count);
};
const getSpreadSheetName = () => spreadsheetInfoService.getSpreadSheetName();
const getSpreadSheetUrl = () => spreadsheetInfoService.getSpreadSheetUrl();

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
