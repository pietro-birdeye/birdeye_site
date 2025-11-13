Steve (Local CDN)

Purpose
- Canonical local origin for shared static/media across all Clickeen properties.
- Mirrors prod CDN paths with a versioned prefix: `/v1/`.

Run
- `pnpm --filter @clickeen/steve dev`
- Health: `http://localhost:4000/healthz`

Directory Layout
- `steve/public/v1/`
  - `registry/`         # (unused) legacy folder; do not use
  - `harmony/`          # Harmony distributables (tokens, components, fonts)
  - `icons/`            # Consolidated icon space
    - `registry.json`   # Icon registry (preferred location)
    - `svg/`            # Individual SVG glyphs
  - `photos/`           # future: images
  - `videos/`           # future: videos
  - `gifs/`             # future: gifs
  - `lottie/`           # future: lottie json

Caching
- Fingerprinted files → immutable long cache
- Registries (JSON) → short cache + ETag

Environment
- `PORT=4000` (default)
- `CORS_ORIGIN=*` (override per env)

Consumers
- `STEVE_URL=http://localhost:4000`
- Tokens (preferred alias): `${STEVE_URL}/v1/tokens/global.css`
- Tokens (canonical): `${STEVE_URL}/v1/harmony/tokens/tokens.css`
- Component CSS: `${STEVE_URL}/v1/harmony/components/{name}/{name}.css`
- Icons
  - Registry: `${STEVE_URL}/v1/icons/registry.json`
  - SVG glyph: `${STEVE_URL}/v1/icons/svg/{name}.svg`
