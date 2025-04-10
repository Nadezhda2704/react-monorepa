import _ from 'lodash';
import { trpc } from '../lib/trpc';
import { PatternsTypes } from '../lib/patternsTypes';

export const getTypesPatternsTrpcRoute = trpc.procedure.query(() => {
  return { PatternsTypes };
});
