import _ from 'lodash';
import { trpc } from '../lib/trpc';
import { PatternsTypes } from '../lib/add-types-of-patterns-to-base';

export const getPatternsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const patterns = await ctx.prisma.pattern.findMany({
    select: {
      id: true,
      name: true,
      englishName: true,
      type: true,
    },
  });

  return { patterns };
});


export const getTypesPatternsTrpcRoute = trpc.procedure.query(() => {
  return { PatternsTypes };
});
