import { trpc } from '../../lib/trpc';

export const getTypesPatternsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
  const PatternsTypes = await ctx.prisma.typeOfPattern.findMany({
    select: {
      id: true,
      name: true,
      type: true,
      description: true,
    },
  });

  return { PatternsTypes };
});
