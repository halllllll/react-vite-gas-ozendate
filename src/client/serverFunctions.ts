import { GASClient } from 'gas-client';
import { isGASEnvironment } from 'gas-client/src/utils/is-gas-environment';
import type * as server from '@/server/main';
export const { serverFunctions } = new GASClient<typeof server>();
export { isGASEnvironment };
