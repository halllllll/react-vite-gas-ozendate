import { ss } from '@/server/Const';
import type { SheetNameResponse, SheetUrlResponse } from '@/shared/types/sheet';
import type { ISpreadsheetInfoService } from './ISpreadsheetInfoService';

export class SpreadsheetInfoService implements ISpreadsheetInfoService {
  public getSpreadSheetName(): SheetNameResponse {
    try {
      const name = ss.getActiveSheet().getName();
      return {
        success: true,
        data: name,
      };
    } catch (err) {
      const error = err as unknown as Error;
      console.error(`error occured: ${error.name} - ${error.message}`);
      return {
        success: false,
        ...error,
      };
    }
  }

  public getSpreadSheetUrl(): SheetUrlResponse {
    try {
      const url = ss.getUrl();
      return {
        success: true,
        data: url,
      };
    } catch (err) {
      const error = err as unknown as Error;
      console.error(`error occured: ${error.name} - ${error.message}`);
      return {
        success: false,
        ...error,
      };
    }
  }
}
