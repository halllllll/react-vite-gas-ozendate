import { ss } from '@/server/Const';
import type { ISpreadsheetInfoService } from './ISpreadsheetInfoService';

export class SpreadsheetInfoService implements ISpreadsheetInfoService {
  public getSpreadSheetName(): string {
    return ss.getActiveSheet().getName();
  }

  public getSpreadSheetUrl(): string {
    return ss.getUrl();
  }
}
