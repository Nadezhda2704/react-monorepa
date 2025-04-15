// import _ from 'lodash';
// import { patterns } from '../lib/patterns';
import { trpc } from '../lib/trpc';

export const getPatternsTrpcRoute = trpc.procedure.query( async ({ctx}) => {
  // return { patterns: patterns.map((pattern) => _.pick(pattern, ['name', 'englishName', 'id', 'type'])) };
  const patterns = await ctx.prisma.pattern.findMany({
    select: {
      id: true,
      name: true,
      englishName: true,
      type: true,
    },
  });
});
