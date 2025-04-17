import _ from 'lodash';
import { trpc } from '../lib/trpc';
import { PatternsTypes } from '../lib/add-types-of-patterns-to-base';

export const getTypesPatternsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const patterns = await ctx.prisma.typeOfPattern.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      description: true
    },
  });

  return { patterns };
});
