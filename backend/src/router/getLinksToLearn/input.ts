import { z } from 'zod';

export const zGetLinksToLearnTrpcInput = z.object({
  patternId: z.string().min(1),
});
