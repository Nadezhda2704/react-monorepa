import { trpc } from '../../lib/trpc';

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
