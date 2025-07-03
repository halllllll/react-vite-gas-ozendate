import type {
  AffectCountRequest,
  AffectCountResponse,
  SheetNameResponse,
  SheetUrlResponse,
} from '@/shared/types/sheet';
import { delay, http, HttpResponse } from 'msw';
import { type ApiEndpoint, getApiPath } from '../api/endpoint';
import { MOCK_SHEET_NAME, MOCK_SHEET_URL } from './data';

const handlersRecord: Record<ApiEndpoint, any> = {
  SHEET_NAME: http.get<never, never, SheetNameResponse>(getApiPath('SHEET_NAME'), async () => {
    console.info('--- mock api: sheet name ---');
    await delay(400);
    return HttpResponse.json({
      success: true,
      data: MOCK_SHEET_NAME,
    });
  }),
  SHEET_URL: http.get<never, never, SheetUrlResponse>(getApiPath('SHEET_URL'), async () => {
    console.info('--- mock api: sheet url ---');
    await delay(100 + Math.random() * 300);
    return HttpResponse.json({
      success: true,
      data: MOCK_SHEET_URL,
    });
  }),
  POST_COUNT: http.post<never, AffectCountRequest, AffectCountResponse>(
    getApiPath('POST_COUNT'),
    async (req) => {
      console.info('--- mock api: post count ---');
      await delay(100 + Math.random() * 500);
      return HttpResponse.json({
        success: true,
        data: null,
      });
    },
  ),
};

export const handlers = Object.values(handlersRecord);
