import { trpc } from '../../lib/trpc';
import { zPostReadPatternTrpcInput } from './input';

export const postReadPatternTrpcRoute = trpc.procedure
  .input(zPostReadPatternTrpcInput)
  .mutation(async ({ ctx, input }) => {
    const authorizedUserId = ctx.authorizedUser?.id;
    let user = null;

    if (authorizedUserId) {
      user = await ctx.prisma.user.findFirst({
        where: {
          id: authorizedUserId,
        },
      });
    } else {
      throw new Error('Пользователь не авторизован');
    }

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
      where: { id: authorizedUserId },
      data: { readPatterns: updatedReadPatterns },
    });

    return { readPatterns: updatedReadPatterns };
  });
