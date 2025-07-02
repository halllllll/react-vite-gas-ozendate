import type { SheetNameResponse, SheetUrlResponse } from '@/shared/types/sheet';
import { delay, http, HttpResponse } from 'msw';
import { getApiPath } from '../api/endpoint';
import { MOCK_SHEET_NAME, MOCK_SHEET_URL } from './data';

export const handlers = [
  http.get<never, never, SheetNameResponse>(getApiPath('SHEET_NAME'), async () => {
    console.info('--- mock api: sheet name ---');
    await delay(400);
    return HttpResponse.json({
      success: true,
      data: MOCK_SHEET_NAME,
    });
  }),

  http.get<never, never, SheetUrlResponse>(getApiPath('SHEET_URL'), async () => {
    console.info('--- mock api: sheet url ---');
    await delay(100 * Math.random() * 300);
    return HttpResponse.json({
      success: true,
      data: MOCK_SHEET_URL,
    });
  }),
];
