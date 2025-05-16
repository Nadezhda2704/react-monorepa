import { trpc } from '../lib/trpc';

import { getPatternTrpcRoute } from './getPattern';
import { getPatternsTrpcRoute } from './getPatterns';
import { getTypesPatternsTrpcRoute } from './getTypesPatterns';
import { signUpTrpcRoute } from './signUp';


export const trpcRouter = trpc.router({
  getPatterns: getPatternsTrpcRoute,
  getPattern: getPatternTrpcRoute,
  getTypesPatterns: getTypesPatternsTrpcRoute,
  signUp: signUpTrpcRoute,
});

export type TrpcRouter = typeof trpcRouter;
