# Steve - Static CDN Server

**Location:** `/steve/`
**Package:** `@clickeen/steve`
**Type:** Local development CDN / Static file server
**Port:** 4000 (configurable via `PORT` env var)

## Purpose

Steve is a canonical local origin for shared static assets and distributables. It serves Harmony design system files, icons, images, and other static resources to all Birdeye applications during development and production.

## Architecture

- **Simple Node.js HTTP server** serving static files
- **Runs on:** `http://localhost:4000` (configurable)
- **Serves from:** `steve/public/v1/`
- **URL versioning:** All assets under `/v1/*` prefix for future migration path

## URL Structure

```
http://localhost:4000/v1/
├── harmony/              # Harmony distributables
│   ├── tokens/
│   │   └── tokens.css
│   ├── components/
│   │   ├── button/
│   │   ├── textfield/
│   │   └── ...
│   ├── fonts/
│   └── icons.svg
├── icons/                # Consolidated icon registry + SVG glyphs
│   ├── registry.json
│   └── svg/
│       ├── icon-name.svg
│       └── ...
├── imgs/                 # Product images
│   ├── g2_2025/
│   ├── AI_Stack_Block/
│   └── abstract/
├── brand-carousel/       # Brand assets
│   ├── Imgs/
│   └── Logos/
├── industries/           # Industry-specific assets
│   ├── industries_photos/
│   └── lottie/
├── split-block/          # Layout component assets
├── logos/                # Logo assets
└── widgets/              # Widget components
```

## Public API (URL Aliases)

### Tokens
```
http://localhost:4000/v1/tokens/global.css
→ Alias to: /v1/harmony/tokens/tokens.css
```

### Component CSS
```
http://localhost:4000/v1/harmony/components/{component-name}/{component-name}.css
```

### Icons Registry
```
http://localhost:4000/v1/icons/registry.json
```

### Individual SVG Icons
```
http://localhost:4000/v1/icons/svg/{icon-name}.svg
```

## Caching Strategy

Steve implements intelligent caching:

| Asset Type | Cache Duration | Strategy |
|------------|----------------|----------|
| Fingerprinted files | 1 year | Immutable, long-term cache |
| Registries (JSON) | 5 minutes | Short cache with ETag support |
| Other files | 1 hour | Standard cache |

**Why:** Fingerprinted files have content hashes in their names, so they're safe to cache forever. When content changes, the filename changes.

## Features

### CORS Support
- Enabled on all `/v1/*` paths
- Allows cross-origin requests from development servers

### Health Check
Steve provides a health endpoint:
```
GET http://localhost:4000/healthz
```

Returns status of the server with CORS headers.

### Environment Configuration
Configure Steve's URL via environment variables:

| Variable | Usage | Default |
|----------|-------|---------|
| `PORT` | Server port | `4000` |
| `STEVE_URL` | CDN origin for consumers | `http://localhost:4000` |
| `VITE_STEVE_URL` | Vite-specific override | (uses STEVE_URL) |

**Example:**
```bash
# Development (default)
STEVE_URL=http://localhost:4000 pnpm dev

# Custom port
PORT=3000 STEVE_URL=http://localhost:3000 pnpm dev

# Production
STEVE_URL=https://cdn.example.com pnpm build
```

## Distribution Pipeline

### How Harmony Gets to Steve

1. **Build Harmony** - `pnpm build` compiles Harmony source
2. **Output to** `/harmony/dist/` - Build artifacts created
3. **Copy Step** - Assets copied from `harmony/dist/` to `steve/public/v1/harmony/`
4. **Serve** - Steve serves files from `public/v1/`

### Integration Pattern

**Development:**
- Apps load Harmony via Steve during `pnpm dev`
- Live updates as Harmony rebuilds

**Production:**
- Steve static files deployed to Vercel or CDN
- Apps use production CDN URL

## Development Workflow

### Start Steve Alone
```bash
pnpm --filter @clickeen/steve dev
```

### Start Steve with All Apps
```bash
pnpm dev-up
```

This launches Steve (4000), Admin (5173), and Joni (4173) together:
- Exports `STEVE_URL=http://localhost:4000`
- Kills any processes on those ports
- Starts all three services
- Writes logs to `CurrentlyExecuting/{steve,admin,joni}.dev.log`
- Stop all with `Ctrl+C`

### Access Points
- Steve: `http://localhost:4000/v1/`
- Test health: `http://localhost:4000/healthz`
- Browse assets: Navigate to any `/v1/*` path

## Deployment

### Build for Production
```bash
pnpm build
```

### Output
```
steve/public/
└── v1/
    ├── harmony/
    ├── icons/
    ├── imgs/
    └── ...
```

### Deploy to Vercel
Steve builds to `steve/public/` and deploys as a static site:
- All `/v1/*` paths are served
- Long cache headers on fingerprinted assets
- CORS enabled for cross-origin access

## Key Server File

| File | Purpose |
|------|---------|
| `/steve/server.mjs` | HTTP server with caching/CORS logic |
| `/steve/public/v1/` | All served static files |
| `/steve/public/v1/harmony/` | Distributed Harmony artifacts |

## Related Systems

- **Harmony** - Source of truth for design; Steve distributes its output
- **Admin** - Fetches Harmony components from Steve for preview
- **Joni** - Loads tokens, icons, and images from Steve
- All consuming apps use Steve as the CDN origin

## Troubleshooting

### Port Already in Use
If port 4000 is taken:
```bash
PORT=3001 pnpm --filter @clickeen/steve dev
```
Then update `STEVE_URL` in consumer apps.

### Assets Not Loading
1. Check Steve is running: `curl http://localhost:4000/healthz`
2. Verify file exists: `ls steve/public/v1/path/to/file`
3. Check console for CORS errors
4. Verify `STEVE_URL` environment variable

### Harmony Changes Not Appearing
1. Rebuild Harmony: `pnpm --filter @ck/harmony build`
2. Copy assets to Steve public folder
3. Restart Steve if needed
4. Hard refresh browser (`Cmd+Shift+R`)
