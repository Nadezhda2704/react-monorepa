import _ from 'lodash';
import { patterns } from '../lib/patterns';
import { trpc } from '../lib/trpc';

export const getPatternsTrpcRoute = trpc.procedure.query(() => {
  return { patterns: patterns.map((pattern) => _.pick(pattern, ['name', 'englishName', 'id', 'type'])) };
});
