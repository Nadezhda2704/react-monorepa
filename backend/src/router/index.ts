import { trpc } from '../lib/trpc';
import { getPatternTrpcRoute } from './getPattern';
import { getPatternsTrpcRoute } from './getPatterns';
import { getTypesPatternsTrpcRoute } from './getTypesPatterns';

export const trpcRouter = trpc.router({
  getPatterns: getPatternsTrpcRoute,
  getPattern: getPatternTrpcRoute,
  getTypesPatterns: getTypesPatternsTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
