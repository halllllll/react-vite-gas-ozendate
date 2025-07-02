import type { ISheetDataRepository } from '@/server/repository/ISheetDataRepository';
import type { ISheetOperationService } from './ISheetOperationService';

export class SheetOperationService implements ISheetOperationService {
  constructor(private sheetDataRepository: ISheetDataRepository) {}

  public affectCountToA1(count: number): void {
    this.sheetDataRepository.affectCountToA1(count);
  }
}
