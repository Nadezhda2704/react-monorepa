import _ from 'lodash';
import { patterns } from '../lib/patterns';
import { trpc } from '../lib/trpc';
import { z } from 'zod';

export const getPatternTrpcRoute = trpc.procedure
  .input(
      z.object({
        patternId: z.string(),
      })
    )
    .query(({ ctx, input }) => {
      const pattern = ctx.prisma.pattern.findUnique({
        where: {
          id: input.id
        }
      })
      // const pattern = patterns.find((pattern) => pattern.id === input.patternId);
      // return { pattern: pattern || null };
    })
