import type { AffectCountRequest, AffectCountResponse } from '@/shared/types/sheet';

export interface ISheetOperationService {
  affectCountToA1(count: AffectCountRequest): AffectCountResponse;
}
