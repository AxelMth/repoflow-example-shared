import { z } from 'zod'

export const StatsResponseSchema = z.object({
  uptime: z.number().nonnegative(),
  version: z.string(),
  nodeVersion: z.string(),
})

export type StatsResponse = z.infer<typeof StatsResponseSchema>
