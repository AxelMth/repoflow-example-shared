import { describe, it, expect } from 'vitest'
import { StatsResponseSchema } from './stats.js'

describe('StatsResponseSchema', () => {
  it('accepts a valid stats response', () => {
    const result = StatsResponseSchema.safeParse({
      uptime: 42.5,
      version: '0.1.0',
      nodeVersion: 'v20.11.0',
    })
    expect(result.success).toBe(true)
  })

  it('rejects negative uptime', () => {
    const result = StatsResponseSchema.safeParse({
      uptime: -1,
      version: '0.1.0',
      nodeVersion: 'v20.11.0',
    })
    expect(result.success).toBe(false)
  })

  it('rejects missing version', () => {
    const result = StatsResponseSchema.safeParse({
      uptime: 0,
      nodeVersion: 'v20.11.0',
    })
    expect(result.success).toBe(false)
  })
})
