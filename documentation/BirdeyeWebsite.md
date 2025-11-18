# Birdeye Website System

The Birdeye website system is a monorepo housing four interconnected systems: **Harmony** (design system), **Steve** (CDN), **Admin** (component preview), and **Joni** (the Birdeye website). This document explains how they work together.

## System Overview

| System | Purpose | Tech Stack | Output |
|--------|---------|-----------|--------|
| **Harmony** | Token-first CSS design system | CSS, TypeScript | `@ck/harmony` package |
| **Steve** | Local development CDN | Vite, TypeScript | Static files at `/v1/*` |
| **Admin** | Component preview harness | Vite, TypeScript | Component browser UI |
| **Joni** | Birdeye website (multiple pages & variations) | Vite, TypeScript | Static website |

## Harmony (Design System)

**Location:** `/harmony/`
**Package:** `@ck/harmony`

The foundation of the entire system. Harmony is a CSS-only, token-first design system with no JavaScript components.

### What's included:
- **Tokens:** CSS custom properties for colors, spacing, typography, borders
- **Components:** Primitive CSS-only components (button, textfield, etc.)
- **Icons:** SVG icon registry
- **Fonts:** Font definitions and weights

### Key characteristics:
- Theme-aware via `data-theme` attribute or `prefers-color-scheme`
- No JavaScript components—applications own all interaction logic
- CSS custom properties for maximum flexibility
- Fingerprinted build output for cache busting

### Build output:
```
/harmony/dist/
├── harmony.css (all components)
├── tokens.css (CSS variables)
├── icons.svg (icon registry)
└── fonts/ (font files)
```

## Steve (Static CDN)

**Location:** `/steve/`
**Package:** `@clickeen/steve`

A local development CDN that serves Harmony assets and other static resources.

### URL structure:
```
http://localhost:4000/v1/
├── harmony/          # Harmony distributables
│   ├── harmony.css
│   ├── tokens.css
│   ├── icons.svg
│   └── fonts/
├── icons/            # Individual icon SVGs
└── widgets/          # Widget JavaScript
```

### Features:
- CORS enabled on all `/v1/*` paths
- Health check endpoint at `/healthz`
- Configurable via `STEVE_URL` or `VITE_STEVE_URL` environment variables
- Defaults to `http://localhost:4000`
- Deployed to Vercel as static site with output in `steve/public/`

### Configuration:
```bash
# Development
STEVE_URL=http://localhost:4000 pnpm dev

# Custom environment
STEVE_URL=https://cdn.example.com pnpm build
```

## Admin (Component Preview Studio)

**Location:** `/admin/`
**Package:** `@clickeen/devstudio`

An internal development tool for previewing and testing Harmony components.

### Features:
- Visual component browser with navigation
- Live component previews
- Auto-generated pages for typography, icons, and components
- Pulls tokens dynamically from Steve CDN
- Hash-based routing for easy sharing

### Build pipeline:
1. `generate-typography-page` - Creates typography showcase
2. `generate-icons-showcase` - Creates icon registry preview
3. `generate-component-pages` - Creates individual component pages
4. Vite builds the complete static site

### Workflow:
```bash
# Start Steve CDN
pnpm --filter @clickeen/steve dev

# Start Admin (pulls tokens from Steve)
pnpm --filter @clickeen/devstudio dev

# Visit http://localhost:5173
```

## Joni (Birdeye Website)

**Location:** `/joni/`
**Package:** `@clickeen/joni`

The Birdeye website built with Harmony tokens. Joni contains multiple page templates with different layout versions and variations, all sharing common classes and assets.

### Pages & Structure:
- **Homepage** - Multiple versions and layout variations
- **Product Pages** - Multiple versions and layout variations
- **Shared Assets** - Common CSS classes, utilities, components
- **Layout System** - Stage/grid structures using Harmony tokens

### Layout + Grid

Joni relies on the simple `.stage` / `.grid` combination defined in `joni/src/style.css` to keep every homepage and product layout consistent:

- `.stage` stretches across the full width, stacks sections (header, hero, body), and provides the rhythm/gutter for each area.
- `.grid` centers content, constrains it to 1600px max width, applies responsive horizontal padding, and activates a CSS Grid via `repeat(auto-fit, minmax(320px, 1fr))` so cards/columns wrap automatically on smaller screens.

Every variant you prototype in Joni should slot inside those helpers so spacing, responsiveness, and token alignment stay predictable—matching how Steve/Harmony will serve it on Vercel as well.

### Split blocks (A / B)

When you build any split block, always refer to the two halves as block **A** and block **B** (e.g., `.split-block__a`, `.split-block__b`, `birdeye-block-a`, etc.). Keeping a consistent \"A/B\" naming pattern makes it easy to align content ordering, responsive stacking, and documentation for every variant you create.

### Key Concept:
Joni demonstrates how to build a complete website using Harmony by:
- Creating reusable page templates
- Building multiple layout variations of each page
- Sharing styles and classes across pages
- Using Harmony tokens consistently throughout
- Testing responsive patterns in production context

### Tech:
- Vite build system
- TypeScript
- Vanilla JavaScript (no framework)
- Global navigation component
- Icon hydration from Steve
- CSS classes and utilities shared across pages

### Development:
```bash
pnpm --filter @clickeen/joni dev
# Runs on http://localhost:4173
```

## System Interactions

### Data Flow Diagram

```
┌─────────────────────────────────────────────────────────┐
│                 Birdeye Website System                  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│    Source                Build                Serve    │
│    ───────                ─────                ─────    │
│                                                         │
│  Harmony ────(build)────> Steve CDN ────┐             │
│  (tokens,               (serves         │              │
│   components,           /v1/harmony/*)  │              │
│   icons)                                 │              │
│                                          │              │
│                                          ├──> Admin    │
│                                          │   (preview) │
│                                          │             │
│                                          └──> Joni    │
│                                         (Birdeye site) │
│                                    (homepage + pages)  │
│                                                        │
└─────────────────────────────────────────────────────────┘
```

### Build Pipeline

1. **Author** - Harmony tokens and components in `/harmony/`
2. **Build Harmony** - TypeScript/CSS compilation to `/harmony/dist/`
3. **Serve** - Steve CDN hosts Harmony at `/v1/harmony/*`
4. **Consume** - Admin and Joni fetch tokens and components from Steve
5. **Preview** - Admin generates component showcases
6. **Experiment** - Joni uses tokens to build layouts
7. **Deploy** - Steve static files deployed to Vercel

### Development Workflow

```bash
# Terminal 1: Start Steve (serves Harmony)
pnpm --filter @clickeen/steve dev

# Terminal 2: Start Admin (previews components)
pnpm --filter @clickeen/devstudio dev

# Terminal 3: Start Joni (experiments with layouts)
pnpm --filter @clickeen/joni dev
```

Alternatively, run `pnpm dev-up` to launch Steve (4000), Admin (5173), and Joni (4173) together; the script exports `STEVE_URL=http://localhost:4000`, kills whatever was previously listening on those ports, and then starts all three processes together so they share the same CDN assets. Stop everything with `Ctrl+C`.
The script also writes logs under `CurrentlyExecuting/{steve,admin,joni}.dev.log` so you can inspect stdout/stderr for each server after the fact.

**Access points:**
- Steve: `http://localhost:4000/v1/`
- Admin: `http://localhost:5173` (component browser)
- Joni: `http://localhost:4173` (layout sandbox)

## Deployment

### Build
```bash
pnpm build  # Turbo orchestrates all packages
```

### Structure
- **Steve** builds to `steve/public/` → deployed as Vercel static site
- **Admin** builds to `admin/dist/` → deployed as Vercel static site
- **Joni** builds to `joni/dist/` → can be deployed independently

### Environment Variables
| Variable | Usage | Default |
|----------|-------|---------|
| `STEVE_URL` | CDN origin | `http://localhost:4000` |
| `VITE_STEVE_URL` | Vite-specific override | `` |

### Health Check
Steve provides a health endpoint with CORS headers:
```
GET http://localhost:4000/healthz
```

## Key Architectural Principles

### 1. **CSS-First Design System**
- Harmony contains only CSS and assets
- No JavaScript components (applications own interactions)
- Token-driven theming via CSS custom properties

### 2. **Immutable Assets**
- All Steve assets are fingerprinted with content hashes
- Long cache TTL safe because assets are immutable
- `/v1/` versioning prefix for future migration path

### 3. **Separation of Concerns**
| System | Responsibility | Does NOT |
|--------|---|---|
| **Harmony** | Define tokens & styles | Create interactions, ship JS |
| **Steve** | Host & serve assets | Define design, manage routing |
| **Admin** | Preview components | Create new components, manage tokens |
| **Joni** | Experiment with layouts | Define design system, host assets |

### 4. **Dynamic Token Loading**
- Admin and Joni fetch tokens from Steve at runtime
- Allows live token updates during development
- No rebuild required for token changes

### 5. **Zero-JavaScript Principle for Harmony**
- Harmony ships only CSS and static assets
- Applications are responsible for:
  - Component behaviors (click handlers, form logic)
  - Interaction patterns
  - State management
- Keeps Harmony lightweight and portable

## Common Tasks

### Updating a design token
1. Edit `/harmony/tokens/` source files
2. Run `pnpm build` to regenerate `/harmony/dist/tokens.css`
3. Steve automatically serves updated tokens
4. Admin/Joni automatically consume new tokens (no rebuild needed)

### Adding a new component
1. Create new CSS file in `/harmony/components/`
2. Export CSS custom properties for customization
3. Update `/harmony/dist/harmony.css` build output
4. Admin automatically adds to component browser
5. Joni can use immediately

### Building a Joni page (homepage/product page)
1. Create new HTML file in `/joni/` or subdirectory (e.g., `homepage.html`, `product.html`)
2. Use shared classes and styles from `/joni/src/style.css`
3. Import shared components (global nav, icons, etc.)
4. Use Harmony tokens via CSS custom properties
5. Start Steve and Joni dev servers
6. Test multiple layout variations in the same page

### Creating page variations
1. Use CSS classes to define different layout options
2. Share base styles across variations
3. Import layout-specific CSS for each variant
4. Test responsive behavior with Harmony tokens
5. Reuse components across pages

### Previewing component changes in Joni
1. Start Steve and Admin dev servers
2. Edit Harmony components
3. Admin fetches updated tokens/CSS from Steve
4. Preview updates automatically in browser
5. Verify Joni pages use new components correctly

## Dependencies & Versions

- **pnpm:** 10.15.1+
- **Node:** 18+
- **Turbo:** 2.0.6+ (build orchestration)
- **Vite:** 7.1.7+
- **TypeScript:** 5.9.3+

## Related Documentation

- [ADRdecisions.md](./ADRdecisions.md) - Architecture decisions and rationale
- [Harmony README](../harmony/README.md) - Design system details
- [Steve README](../steve/README.md) - CDN configuration
