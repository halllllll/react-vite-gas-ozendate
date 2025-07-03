import { isGASEnvironment, serverFunctions } from '@/client/serverFunctions';
import type {
  AffectCountResponse,
  SheetNameResponse,
  SheetUrlResponse,
} from '@/shared/types/sheet';
import { getApiPath } from '../endpoint';

export const SheetAPI = {
  getSheetName: async (): Promise<SheetNameResponse> => {
    console.log('[Sheet API] start fetching sheet name');
    if (isGASEnvironment()) {
      const ret = await serverFunctions.getSpreadSheetName();
      return ret;
    }
    /**
     * in dev env, intercepted by MSW
     * @see src/client/mock/handler.ts
     */
    const response = await fetch(getApiPath('SHEET_NAME'));
    return await response.json();
  },

  getUrl: async (): Promise<SheetUrlResponse> => {
    console.log('[Sheet API] start fetching sheet url');
    if (isGASEnvironment()) {
      const ret = await serverFunctions.getSpreadSheetUrl();
      return ret;
    }
    /**
     * in dev env, intercepted by MSW
     * @see src/client/mock/handler.ts
     */
    const response = await fetch(getApiPath('SHEET_URL'));
    return await response.json();
  },

  postCount: async (count: number): Promise<AffectCountResponse> => {
    console.log('[Sheet API] start posting count');
    if (isGASEnvironment()) {
      const ret = await serverFunctions.affectCountToA1(count);
      return ret;
    }
    /**
     * in dev env, intercepted by MSW
     * @see src/client/mock/handler.ts
     */
    const response = await fetch(getApiPath('POST_COUNT'), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ count: 1 }),
    });
    return await response.json();
  },
};
