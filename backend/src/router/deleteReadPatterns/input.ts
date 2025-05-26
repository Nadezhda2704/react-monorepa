import { z } from 'zod';

export const zDeleteReadPatternTrpcInput = z.object({
  patternId: z.string().min(1),
});
