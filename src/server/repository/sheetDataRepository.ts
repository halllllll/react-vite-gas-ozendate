import type { AffectCountToA1DTO } from '@/shared/types/dto';
import { ss } from '../Const';
import type { ISheetDataRepository } from './ISheetDataRepository';

export class SheetDataRepository implements ISheetDataRepository {
  public affectCountToA1({ count }: AffectCountToA1DTO): void {
    const sheet = ss.getActiveSheet();
    const range = sheet.getRange('A1');
    range.setValue(count);
  }
}
