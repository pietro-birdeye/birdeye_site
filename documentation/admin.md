# Admin - Component Preview Studio

**Location:** `/admin/`
**Package:** `@clickeen/devstudio`
**Type:** Internal development tool
**Port:** 5173 (Vite default)

## Purpose

Admin (DevStudio) is an internal development tool for previewing and testing Harmony components. It provides a visual component browser to QA design system components before they're used in production applications.

**Important:** Admin is NOT a production component library - it's a documentation and testing tool only.

## Features

### Visual Component Browser
- Interactive navigation interface
- Browse all Harmony components in one place
- Hash-based routing for easy sharing of specific components

### Live Component Previews
- Real-time previews of Harmony components
- See components with different states and variants
- Test interactions and visual appearance

### Auto-Generated Showcases
Admin automatically generates pages for:
- **Typography** - All text styles and font scales
- **Icons** - Complete icon registry with search
- **Components** - Individual component pages with examples

### Dynamic Token Loading
- Pulls tokens from Steve CDN at runtime
- No rebuild needed when tokens change
- Always shows latest Harmony changes

## Build Pipeline

The build process includes these steps:

1. **`generate-typography-page`** - Creates typography showcase from Harmony tokens
2. **`generate-icons-showcase`** - Creates icon registry preview from Steve
3. **`generate-component-pages`** - Creates individual component demo pages
4. **Vite build** - Bundles the complete static site

## Development Workflow

### Prerequisites
Steve must be running first (Admin loads tokens from Steve):
```bash
# Terminal 1: Start Steve CDN
pnpm --filter @clickeen/steve dev
```

### Start Admin
```bash
# Terminal 2: Start Admin
pnpm --filter @clickeen/devstudio dev
```

### Access
Visit `http://localhost:5173` to open the component browser.

### Or Use dev-up Script
Start everything at once:
```bash
pnpm dev-up
```

This starts:
- Steve on port 4000
- Admin on port 5173
- Joni on port 4173

## Integration with Harmony

### Fetching Tokens
Admin loads Harmony tokens dynamically from Steve:
```javascript
// Tokens loaded from Steve CDN
const STEVE_URL = import.meta.env.VITE_STEVE_URL || 'http://localhost:4000'
const tokensUrl = `${STEVE_URL}/v1/harmony/tokens/tokens.css`
```

### Component HTML
Admin contains component HTML fragments in:
- `/admin/components/` - Individual component examples
- `/admin/interactions/` - Demo interactions and behaviors

### No JavaScript Components
Since Harmony is CSS-only, Admin demonstrates:
- **Markup patterns** - Correct HTML structure
- **CSS classes** - How to apply component styles
- **State variations** - Different visual states (hover, focus, disabled)
- **Interaction patterns** - How apps should implement behaviors

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Vite 7.1.7+ | Build system and dev server |
| TypeScript 5.9.3+ | Type-safe development |
| Vanilla JavaScript | No framework dependency |
| Steve integration | Fetches Harmony distributables |

## Use Cases

### 1. Component QA
Before releasing new Harmony components:
1. Add component to Harmony
2. Build Harmony
3. Preview in Admin
4. Test all states and variants
5. Verify accessibility
6. Approve for production use

### 2. Design Review
Designers can:
- Review implemented components
- Verify tokens match design specs
- Test responsive behavior
- Provide feedback on visual appearance

### 3. Developer Reference
Developers can:
- See correct markup patterns
- Copy component HTML
- Understand component APIs
- Test integration patterns

### 4. Documentation
Admin serves as living documentation:
- Always up-to-date with latest Harmony
- Shows actual rendered components
- Demonstrates real behavior

## Deployment

### Build for Production
```bash
pnpm build
```

### Output
```
admin/dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── ...
```

### Deploy to Vercel
Admin builds to `admin/dist/` and can be deployed as a static site:
- Internal tool, typically not public
- Can be password-protected
- Useful for design team access

## Key Files

| File | Purpose |
|------|---------|
| `/admin/vite.config.ts` | Vite configuration |
| `/admin/src/` | Admin application source |
| `/admin/components/` | Component HTML examples |
| `/admin/interactions/` | Demo interactions |

## Configuration

### Environment Variables

```bash
# Steve CDN URL (where to load Harmony from)
VITE_STEVE_URL=http://localhost:4000

# Production
VITE_STEVE_URL=https://cdn.example.com
```

## Related Systems

- **Harmony** - Components being previewed
- **Steve** - Serves Harmony tokens and components to Admin
- **Joni** - Uses components after Admin QA approval

## Workflow Example

### Adding a New Component to Harmony

1. **Develop** - Create component CSS in `/harmony/components/new-component/`
2. **Build** - `pnpm --filter @ck/harmony build`
3. **Copy** - Assets copied to Steve automatically
4. **Start Servers:**
   ```bash
   pnpm --filter @clickeen/steve dev
   pnpm --filter @clickeen/devstudio dev
   ```
5. **Preview** - Visit `http://localhost:5173`, navigate to new component
6. **Test** - Verify appearance, states, accessibility
7. **Generate Page** - Run `generate-component-pages` to create demo page
8. **Review** - Get design approval
9. **Release** - Component ready for use in Joni and other apps

## Troubleshooting

### Components Not Showing
1. **Check Steve is running:** `curl http://localhost:4000/healthz`
2. **Verify Harmony built:** Check `steve/public/v1/harmony/`
3. **Clear cache:** Hard refresh browser
4. **Check console:** Look for asset loading errors

### Tokens Not Loading
1. **Verify STEVE_URL:** Check environment variable
2. **Inspect network tab:** See if token requests succeed
3. **Check CORS:** Steve should have CORS enabled

### Build Fails
1. **Check dependencies:** `pnpm install`
2. **Verify Steve CDN accessible:** Needed for build-time asset checks
3. **Check TypeScript errors:** `pnpm typecheck`
