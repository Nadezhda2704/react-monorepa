import _ from 'lodash';
import { trpc } from '../../lib/trpc';

export const getAuthorizedUserTrpcRoute = trpc.procedure.query(({ ctx }) => {
  return { me: ctx.authorizatedUser && _.pick(ctx.authorizatedUser, ['id', 'nick']) };
});
