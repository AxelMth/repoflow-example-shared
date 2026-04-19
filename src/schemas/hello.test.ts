import { describe, it, expect } from 'vitest'
import { HelloResponseSchema } from './hello.js'

describe('HelloResponseSchema', () => {
  it('accepts valid hello response', () => {
    const result = HelloResponseSchema.safeParse({
      message: 'Hello from Fastify',
      timestamp: '2026-04-18T16:00:00.000Z',
    })
    expect(result.success).toBe(true)
  })

  it('rejects missing message', () => {
    const result = HelloResponseSchema.safeParse({
      timestamp: '2026-04-18T16:00:00.000Z',
    })
    expect(result.success).toBe(false)
  })

  it('rejects invalid timestamp format', () => {
    const result = HelloResponseSchema.safeParse({
      message: 'Hello',
      timestamp: 'not-a-date',
    })
    expect(result.success).toBe(false)
  })
})
