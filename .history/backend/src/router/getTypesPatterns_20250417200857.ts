import _ from 'lodash';
import { trpc } from '../lib/trpc';
import { PatternsTypes } from '../lib/add-types-of-patterns-to-base';

export const getTypesPatternsTrpcRoute = trpc.procedure.query(() => {
  return { PatternsTypes };
});
