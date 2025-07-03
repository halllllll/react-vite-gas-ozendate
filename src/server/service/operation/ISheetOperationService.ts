import type { AffectCountToA1DTO } from '@/shared/types/dto';
import type { AffectCountResponse } from '@/shared/types/sheet';

export interface ISheetOperationService {
  affectCountToA1(count: AffectCountToA1DTO): AffectCountResponse;
}
