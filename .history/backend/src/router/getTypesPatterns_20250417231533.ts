import _ from 'lodash';
import { trpc } from '../lib/trpc';
import { PatternsTypes } from '../lib/add-types-of-patterns-to-base';

export const getTypesPatternsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  console.log('ctx.prisma', ctx.prisma);
  
  const PatternsTypes = await ctx.prisma.pattern.findMany({
    select: {
      id: true,
      name: true,
      englishName: true,
      type: true,
    },
  });

  return { PatternsTypes };
});


// export const getTypesPatternsTrpcRoute = trpc.procedure.query(() => {
  // return { PatternsTypes };
// });
