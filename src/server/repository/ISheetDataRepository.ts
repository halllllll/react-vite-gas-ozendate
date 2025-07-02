import type { AffectCountToA1DTO } from '@/shared/types/dto';

export interface ISheetDataRepository {
  affectCountToA1(count: AffectCountToA1DTO): void;
}
