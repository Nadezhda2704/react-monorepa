import _ from 'lodash';
import { trpc } from '../../lib/trpc';

export const getAuthorizedUserTrpcRoute = trpc.procedure.query(({ ctx }) => {
  return { authorizedUser: ctx.authorizedUser && _.pick(ctx.authorizedUser, ['id', 'nick']) };
});
