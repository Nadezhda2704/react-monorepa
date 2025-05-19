import crypto from 'crypto';
import { trpc } from '../../lib/trpc';
import { zSignUpTrpcInput } from './input';
import { getPasswordHash } from '../../utils/getPasswordHash';

export const signUpTrpcRoute = trpc.procedure.input(zSignUpTrpcInput).mutation(async ({ ctx, input }) => {
  const exUser = await ctx.prisma.user.findUnique({
    where: {
      nick: input.nick,
    },
  });
  if (exUser) {
    throw new Error('Такой ник уже существует ✍🏻');
  }
  await ctx.prisma.user.create({
    data: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  });
  return true;
});
