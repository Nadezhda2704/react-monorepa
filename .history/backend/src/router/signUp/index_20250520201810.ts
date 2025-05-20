import crypto from 'crypto';
import { trpc } from '../../lib/trpc';
import { zSignUpTrpcInput } from './input';
import { getPasswordHash } from '../../utils/getPasswordHash';
import { signJWT } from '../../utils/signJWT';

export const signUpTrpcRoute = trpc.procedure.input(zSignUpTrpcInput).mutation(async ({ ctx, input }) => {
  const exUser = await ctx.prisma.user.findUnique({
    where: {
      nick: input.nick,
    },
  });
  if (exUser) {
    throw new Error('Такой логин уже существует ✍🏻');
  }
  const user = await ctx.prisma.user.create({
    data: {
      nick: input.nick,
      password: getPasswordHash(input.password),
    },
  });
  const token = signJWT(user.id);
  return { token };
});
