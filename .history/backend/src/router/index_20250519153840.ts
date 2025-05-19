import { trpc } from '../lib/trpc';

// @index('./**/index.ts', f => `import { ${f.path.split('/').slice(0, -1).pop()}TrpcRoute } from '${f.path.split('/').slice(0, -1).join('/')}'`)
import { getPatternTrpcRoute } from './getPattern'
import { getPatternsTrpcRoute } from './getPatterns'
import { getTypesPatternsTrpcRoute } from './getTypesPatterns'
import { signInTrpcRoute } from './signIn'
import { signUpTrpcRoute } from './signUp'
// @endindex


export const trpcRouter = trpc.router({
  // @index('./**/index.ts', f => `${f.path.split('/').slice(0, -1).pop()}: ${f.path.split('/').slice(0, -1).pop()}TrpcRoute,`)
  getPattern: getPatternTrpcRoute,
  getPatterns: getPatternsTrpcRoute,
  getTypesPatterns: getTypesPatternsTrpcRoute,
  signIn: signInTrpcRoute,
  signUp: signUpTrpcRoute,
  // @endindex
});

export type TrpcRouter = typeof trpcRouter;
