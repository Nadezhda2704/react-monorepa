import { z } from 'zod';

export const zPostReadPatternTrpcInput = z.object({
  patternId: z.string().min(1),
});
