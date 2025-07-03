import { SheetDataRepository } from '@/server/repository/sheetDataRepository';
import { SpreadsheetInfoService } from '@/server/service/meta/spreadsheetInfoService';
import { SheetOperationService } from '@/server/service/operation/sheetOperationService';

const sheetDataRepository = new SheetDataRepository();
const spreadsheetInfoService = new SpreadsheetInfoService();
const sheetOperationService = new SheetOperationService(sheetDataRepository);

export const container = {
  spreadsheetInfoService,
  sheetOperationService,
};
