import { trpc } from '../../lib/trpc';
import { zPostReadPatternTrpcInput } from './input';

export const postReadPatternTrpcRoute = trpc.procedure.input(zPostReadPatternTrpcInput).mutation(async ({ ctx, input }) => {
  const userId = input.userId;
  const user = await ctx.prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!user) {
    throw new Error('Пользователь не найден');
  }

  let updatedReadPatterns: string[] = [];
  const addingPatternId = input.patternId;

  if (!user.readPatterns.length) {
    updatedReadPatterns = [addingPatternId];
  } else {
    const currentTags = user.readPatterns;
    if (!currentTags.includes(addingPatternId)) {
      updatedReadPatterns = [...currentTags, addingPatternId];
    } else {
      console.log('Id уже находится в массиве');
    }
  }

  await ctx.prisma.user.update({
    where: { id: userId },
    data: { readPatterns: updatedReadPatterns },
  });

  return { readPatterns: updatedReadPatterns };
});
