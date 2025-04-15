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
    .query(({ input }) => {
      const pattern = patterns.find((pattern) => pattern.id === input.patternId);
      return { pattern: pattern || null };
    })
