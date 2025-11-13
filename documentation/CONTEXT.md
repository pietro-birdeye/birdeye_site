# We're Building CLICKEEN (A SaaS Platform)

**Team:**
- CEO (Human)
- Principal Full Stack Engineer (Codex AI)
- Principal Full Stack Engineer (Claude AI)
- Principal Full Stack Engineer (ChatGPT AI)
- Principal Full Stack Engineer (Gemini AI)

**General tone:**
- Treat the CEO as your partner: concise, precise, fact-based.
- Preserve every artifact that works; do not break the system or any built output.
- Plan small diffs, surface questions early, execute surgical changes.

**PRINCIPAL FULL STACK ENGINEER MODE:**
- ***CRITICAL*** All AIs operate as experienced full-stack engineers whose first priority is protecting the build and keeping production-ready artifacts safe.  
- ***CRITICAL*** No over-engineering: reuse patterns, make the smallest working change, and avoid speculative refactors.  
- ***CRITICAL*** When uncertain, ask a yes/no question; otherwise make the best change you can with the available facts.

**Doc discipline:**
1. Always read `documentation/CONTEXT.md` and any referenced PRDs before making a change.  
2. If something is unclear, stop and ask rather than guessing.  
3. Keep all documentation in sync with behavior changes; update docs whenever behavior or surface area shifts.

---

## Systems Overview (Phase-1)

We now ship a focused builder surface plus the CDN that powers every Harmony consumer. Keep these in mind whenever you work in the repo:

- **DevStudio (`admin/`)** — The AI-native builder experience. Vite serves DevStudio on `localhost:5173`; it imports Harmony tokens and Steve assets directly, renders the nav/preview panels, and includes the widget workspace previews that showcase Harmony content. This is the primary surface for editing/design work.
- **Steve (`steve/`)** — Local CDN that mirrors the production blob/CDN paths. Steve serves Harmony tokens, components, fonts, icons, and other shared assets via `http://localhost:4000/v1/*`. All client-side surfaces (DevStudio, marketing pages, embed previews) should load Harmony assets from Steve to keep totals tiny and caching predictable.
- **Harmony (`harmony/`)** — Token-first CSS system. Harmony publishes tokens, components, icons, and its Harmony Admin preview. The build pipeline copies Harmony output into Steve so every consumer has deterministic access to the same files.
- **Prague (`prague/`)** — Marketing site (static pages, gallery, documentation) that consumes Harmony/Steve assets. It now runs independently of any API surface.
- **Joni (`joni/`)** — The new sandbox website surface that runs on Vite (port 4173). It imports Harmony tokens from Steve and hosts the pages we’re refactoring so they can be previewed in the same environment as DevStudio.

Any other systems or services are deliberately out of scope. Only the DevStudio surface plus the Steve CDN remain active in this repo.

---

## Working Flow

1. **Install & build** — run `pnpm install` once, then `pnpm build` to run `turbo build`. The `build` script compiles DevStudio and regenerates Harmony/Steve assets.
2. **Development** — `scripts/dev-up.sh` now kills ports 5173/4000, starts Steve (`pnpm --filter @clickeen/steve dev`) and DevStudio (`pnpm --filter @clickeen/devstudio dev`), and logs output under `CURRENTLY_EXECUTING/steve.dev.log` and `CURRENTLY_EXECUTING/devstudio.dev.log`. Use these logs for troubleshooting.
3. **Manual dev commands** (when you need granular control):
   - `pnpm --filter @clickeen/steve dev` (Steve CDN)
   - `cd admin && pnpm dev` (DevStudio UI)
4. **Preview workflow** — DevStudio fetches Harmony tokens from Steve and renders previews entirely client-side. No API surface exists anymore; all widget editing is local to DevStudio, and published configuration stays inside user workflows or marketing pages.

---

## Documentation & References (Single Source of Truth)

- `documentation/CODEX` (this file) explains team rules, priorities, and the high-level architecture.  
- `documentation/systems/harmony.md` — authoritative Harmony tokens/components/copy pipeline.  
- `documentation/systems/steve.md` — CDN contract and caching rules (public vs private assets).  
- `documentation/widgets/*.md` — widget PRDs, sample configs, and UX requirements.  
- `documentation/WhyClickeen.md` — strategy/vision context.  
- `documentation/ADRdecisions.md` — captures major decisions that have already landed.  
- `documentation/verceldeployments.md` — operational keys, environment variables, and URLs for the remaining Vercel projects (Prague, Steve, DevStudio).

Anything outside these docs (especially `CURRENTLY_EXECUTING/` notes) is transient; treat it as reference material only.

---

## Glossary of Active Terms

- **DevStudio** — The only builder app we maintain. It runs in `admin/`, boots up via Vite, and communicates with Steve for icons/tokens. All widget previews live inside this surface (no legacy APIs remain).  
- **Steve** — CDN server (`steve/server.mjs`) that responds to `/v1/harmony/...`, `/v1/icons/...`, and `/v1/tokens/global.css`. It runs on port 4000 by default and is the canonical origin for Harmony assets.  
- **Harmony** — CSS-only design system; its `/dist` is copied into Steve so every surface loads identical assets.  
- **Turbo + pnpm** — `pnpm build` (Turbo) compiles DevStudio and Harmony; `pnpm workspace` commands target DevStudio or Steve when you need to run only one package.

---

## Safety Nets

- Always run `pnpm build` before making deploy-oriented changes; the build touches both Harmony and DevStudio.  
- When you modify Harmony assets, ensure `scripts/build-harmony.js` + `scripts/copy-harmony-assets.js` still run (Turbo invokes them automatically).  
- No APIs exist in this repo anymore: any data work must be handled outside the monorepo or via documentation. Changes that require APIs should be flagged for manual implementation elsewhere with explicit approval.
