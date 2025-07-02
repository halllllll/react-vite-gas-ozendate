import type { SheetNameResponse, SheetUrlResponse } from '@/shared/types/sheet';

export interface ISpreadsheetInfoService {
  getSpreadSheetName(): SheetNameResponse;
  getSpreadSheetUrl(): SheetUrlResponse;
}
