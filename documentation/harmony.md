# Harmony Design System

**Location:** `/harmony/`
**Package:** `@ck/harmony`
**Type:** Token-first CSS-only design system

## Purpose

Harmony is the foundation of the entire Birdeye system. It's a CSS-only, token-first design system with no JavaScript components. Applications consume Harmony tokens and components but own all interaction logic.

## What's Included

### 1. Tokens
CSS custom properties for:
- **Colors** - Theme-aware color system (light/dark/high-contrast)
- **Spacing** - 4px grid system for consistent spacing
- **Typography** - Font families, sizes, weights with semantic utility classes
- **Control Sizing** - Standard dimensions for interactive elements
- **Radius** - Border radius values
- **Motion/Duration** - Animation and transition timing

**Location:** `/harmony/tokens/`

### 2. Components
CSS-only primitive components including:
- Button
- Textfield
- Dropdown
- Tabs
- Segmented controls
- And more...

**Location:** `/harmony/components/`

### 3. Icons
- Normalized SVG icons
- `fill="currentColor"` for theming support
- Icon registry for centralized management

**Location:** `/harmony/icons/`

### 4. Fonts
Font definitions and weights

**Location:** `/harmony/fonts/`

## Key Characteristics

### CSS-Only Philosophy
- **No JavaScript** - Harmony ships only CSS and static assets
- Applications are responsible for:
  - Component behaviors (click handlers, form logic)
  - Interaction patterns
  - State management
- Keeps Harmony lightweight and portable

### Token-First Approach
- All styling driven by CSS custom properties
- Consistent design language across all applications
- Easy theming and customization

### Theme Support
Harmony is theme-aware via:
- `data-theme` attribute on root element
- `@media (prefers-color-scheme: dark)` media queries
- Supports light, dark, and high-contrast modes

### Immutable Builds
- Fingerprinted build output for cache busting
- Long cache TTL safe because assets are immutable

## Build Output

```
/harmony/dist/
├── harmony.css           # All components bundled
├── tokens.css           # CSS variables only
├── icons.svg            # Icon registry
└── fonts/               # Font files
    ├── font-name.woff2
    └── ...
```

## Distribution

Harmony is distributed via Steve CDN at:
```
http://localhost:4000/v1/harmony/
├── harmony.css
├── tokens.css
├── icons.svg
└── fonts/
```

In production, replace `localhost:4000` with your CDN URL.

## Usage in Applications

### Import Tokens
```html
<link rel="stylesheet" href="http://localhost:4000/v1/harmony/tokens/tokens.css">
```

### Import Components
```html
<!-- Individual component -->
<link rel="stylesheet" href="http://localhost:4000/v1/harmony/components/button/button.css">

<!-- All components -->
<link rel="stylesheet" href="http://localhost:4000/v1/harmony/harmony.css">
```

### Use CSS Custom Properties
```css
.my-element {
  padding: var(--space-4);
  background: var(--color-system-blue);
  font-size: var(--font-size-body-m);
}
```

## Development Workflow

### Updating Tokens
1. Edit token source files in `/harmony/tokens/`
2. Run `pnpm build` to regenerate `/harmony/dist/tokens.css`
3. Steve automatically serves updated tokens
4. Consumer apps automatically pick up changes (no rebuild needed)

### Adding New Components
1. Create new CSS file in `/harmony/components/`
2. Export CSS custom properties for customization
3. Update `/harmony/dist/harmony.css` build output
4. Admin automatically adds to component browser
5. Applications can use immediately

### Testing Components
1. Start Steve CDN: `pnpm --filter @clickeen/steve dev`
2. Start Admin preview: `pnpm --filter @clickeen/devstudio dev`
3. Visit `http://localhost:5173` to preview components
4. Make changes and see live updates

## Component Documentation

Detailed component integration guides with markup contracts and behavior expectations are available in:
- `/harmony/harmonycomponents.md`

## Dependencies

- **Node:** 18+
- **TypeScript:** 5.9.3+
- Build tools are internal to the package

## Related Systems

- **Steve** - Serves Harmony distributables via CDN
- **Admin** - Previews and tests Harmony components
- **Joni** - Consumes Harmony tokens to build website layouts

## Key Files

| File | Purpose |
|------|---------|
| `/harmony/tokens/tokens.css` | Master token import file |
| `/harmony/tokens/harmony-foundation-tokens.css` | Spacing, control sizing, motion tokens |
| `/harmony/tokens/harmony-color-tokens.css` | Color and theme tokens |
| `/harmony/tokens/harmony-typography.css` | Typography system |
| `/harmony/harmonycomponents.md` | Living documentation for component integration |
| `/harmony/dist/` | Build output directory |
