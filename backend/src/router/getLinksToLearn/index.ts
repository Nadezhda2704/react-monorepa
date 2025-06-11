import { trpc } from '../../lib/trpc';
import { zGetLinksToLearnTrpcInput } from './input';

export const getLinksToLearnTrpcRoute = trpc.procedure.input(zGetLinksToLearnTrpcInput).query(async ({ ctx, input }) => {
  const linksToLearn = await ctx.prisma.links.findMany({
    where: {
        patternId: input.patternId
    },
    select: {
      id: true,
      name: true,
      link: true,
      type: true,
    },
  });

  return { linksToLearn };
});
