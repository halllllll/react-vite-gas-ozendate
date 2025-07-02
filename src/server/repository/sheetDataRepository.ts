import { ss } from '../Const';
import { ISheetDataRepository } from './ISheetDataRepository';

export class SheetDataRepository implements ISheetDataRepository {
  public affectCountToA1(count: number): void {
    const sheet = ss.getActiveSheet();
    const range = sheet.getRange('A1');
    range.setValue(count);
  }
}

