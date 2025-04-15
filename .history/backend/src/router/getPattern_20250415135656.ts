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
    .query(async ({ ctx, input }) => {
      const pattern = await ctx.prisma.pattern.findUnique({
        where: {
          id: input.patternId
        }
      })

      return pattern
    })
