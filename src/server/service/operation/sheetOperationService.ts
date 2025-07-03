import type { ISheetDataRepository } from '@/server/repository/ISheetDataRepository';
import type { AffectCountToA1DTO } from '@/shared/types/dto';
import type { AffectCountResponse } from '@/shared/types/sheet';
import type { ISheetOperationService } from './ISheetOperationService';

export class SheetOperationService implements ISheetOperationService {
  constructor(private sheetDataRepository: ISheetDataRepository) {}

  public affectCountToA1(count: AffectCountToA1DTO): AffectCountResponse {
    try {
      // dtoからの変換
      this.sheetDataRepository.affectCountToA1(count);
      return {
        success: true,
        data: null,
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
