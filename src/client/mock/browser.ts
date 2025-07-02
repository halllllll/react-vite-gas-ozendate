import { setupWorker } from 'msw/browser';
import { handlers } from './handler';

const allHandlers = [...handlers];

export const worker = setupWorker(...allHandlers);
