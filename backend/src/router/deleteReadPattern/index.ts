import { trpc } from '../../lib/trpc';
import { zDeleteReadPatternTrpcInput } from './input';

export const deleteReadPatternTrpcRoute = trpc.procedure
  .input(zDeleteReadPatternTrpcInput)
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
    const deletingPatternId = input.patternId;

    if (!user.readPatterns.length) {
      updatedReadPatterns = [];
    } else {
      const currentReadPatterns = user.readPatterns;
      if (currentReadPatterns.includes(deletingPatternId)) {
        updatedReadPatterns = currentReadPatterns.filter((patternId) => patternId !== deletingPatternId); 
      } else {
        console.log('Id в массиве отсутствует');
      }
    }

    await ctx.prisma.user.update({
      where: { id: authorizedUserId },
      data: { readPatterns: updatedReadPatterns },
    });

    return { readPatterns: updatedReadPatterns };
  });
