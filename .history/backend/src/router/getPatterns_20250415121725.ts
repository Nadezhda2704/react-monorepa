// import _ from 'lodash';
// import { patterns } from '../lib/patterns';
import { trpc } from '../lib/trpc';

export const getPatternsTrpcRoute = trpc.procedure.query(({ctx}) => {
  // return { patterns: patterns.map((pattern) => _.pick(pattern, ['name', 'englishName', 'id', 'type'])) };
  const patterns = ctx.prisma.pattern.findMany();
});
