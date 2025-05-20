import _ from 'lodash';
import { trpc } from '../../lib/trpc';

export const getAuthorizedUserTrpcRoute = trpc.procedure.query(({ ctx }) => {
  return { me: ctx.authorizedUser && _.pick(ctx.authorizedUser, ['id', 'nick']) };
});
