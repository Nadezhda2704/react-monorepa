import { trpc } from '../../lib/trpc';

export const getReadPatternsTrpcRoute = trpc.procedure.query(async ({ ctx }) => {
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

  const readPatterns = user.readPatterns;

  return { readPatterns };
});
