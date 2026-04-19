# @repoflow-example/shared

Shared Zod schemas and TypeScript types for [`repoflow-example-web`](https://github.com/axelmth/repoflow-example-web) and [`repoflow-example-api`](https://github.com/axelmth/repoflow-example-api).

See [`repoflow-metarepo-example`](https://github.com/axelmth/repoflow-metarepo-example) for the full picture of how these repos fit together.

## Usage

This package is installed via GitHub URL (no npm publish needed):

```json
"@repoflow-example/shared": "github:axelmth/repoflow-example-shared#main"
```

## API

```ts
import { HelloResponseSchema, type HelloResponse } from '@repoflow-example/shared'
```

### `HelloResponseSchema`

Zod schema validating the `GET /api/hello` response:

```ts
{
  message: string      // e.g. "Hello from Fastify at 2026-04-18T16:00:00.000Z"
  timestamp: string    // ISO 8601 datetime
}
```

## Development

```bash
pnpm install
pnpm build
pnpm test
```

---

Part of the **repoflow-examples** collection:
- [`repoflow-monorepo-example`](https://github.com/axelmth/repoflow-monorepo-example) — same app as a Turborepo monorepo
- [`repoflow-metarepo-example`](https://github.com/axelmth/repoflow-metarepo-example) — meta-repo orchestrator
- [`repoflow-example-web`](https://github.com/axelmth/repoflow-example-web) — React frontend
- [`repoflow-example-api`](https://github.com/axelmth/repoflow-example-api) — Fastify backend
