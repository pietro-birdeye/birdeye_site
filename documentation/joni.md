# Joni - Birdeye Website

**Location:** `/joni/`
**Package:** `@clickeen/joni`
**Type:** Marketing website

## What is Joni?

Joni is the Birdeye marketing website. It's built using Harmony design tokens and follows a consistent layout system based on sections, stages, and grids.

## Core Concepts

### Sections

Pages are divided into distinct sections marked with `data-section-name` attributes. Each section represents a logical block of content (hero, features, testimonials, etc.).

```html
<section data-section-name="hero">
  <!-- Hero content -->
</section>

<section data-section-name="features">
  <!-- Features content -->
</section>
```

### Stage

`.stage` is a full-width container that:
- Stretches across the entire viewport width
- Stacks sections vertically
- Provides consistent rhythm and gutters

**Usage:** Wrap each major section in a stage.

```html
<div class="stage">
  <!-- Full-width section content -->
</div>
```

### Grid

`.grid` is a centered content container that:
- Centers content horizontally
- Constrains to 1600px max width
- Applies responsive horizontal padding
- Uses CSS Grid: `repeat(auto-fit, minmax(320px, 1fr))`
- Makes cards/columns wrap automatically on smaller screens

**Usage:** Place inside `.stage` for centered, responsive content.

```html
<div class="stage">
  <div class="grid">
    <!-- Centered, responsive content -->
  </div>
</div>
```

### Stage + Grid Pattern

Every section should use this pattern for consistency:

```html
<div class="stage">
  <div class="grid">
    <!-- Your content here -->
  </div>
</div>
```

**Why:** This keeps spacing, responsiveness, and token alignment predictable across all pages and variants.

## Split Blocks (A / B)

When building split blocks, always name the two halves as block **A** and block **B**:
- `.split-block__a` and `.split-block__b`
- `birdeye-block-a` and `birdeye-block-b`

**Why:** Consistent A/B naming makes content ordering, responsive stacking, and documentation clear across all variants.

## CSS Organization

### Global CSS (`style.css`)

**Location:** `/joni/src/style.css`

This file contains styles shared across all pages:

- **Harmony imports** - Tokens, components, typography from the design system
- **Global resets** - Box-sizing, body styles, root variables
- **Layout system** - `.stage`, `.grid`, `.container`
- **Navigation** - Site header, nav, mega menus, dropdowns
- **Reusable utilities** - `.grid-horizontal`, `.grid-vertical`
- **Form patterns** - Floating label inputs, form groups
- **Typography resets** - Heading styles (h1-h6)

**Use global CSS for:**
- Layout structures used on multiple pages
- Navigation and header components
- Reusable utility classes
- Common patterns repeated across pages

### Per-Page CSS (e.g., `homepage.css`)

**Location:** `/joni/src/homepage.css`

Each page can have its own CSS file for page-specific styles:

- **Page-specific sections** - Unique hero layouts, custom stages
- **Page-specific components** - One-off elements that only appear on this page
- **Custom animations** - Keyframes and animations unique to the page
- **Custom colors/styles** - Overrides or extensions of global styles

**Use per-page CSS for:**
- Styles that only apply to one page
- Page-specific animations and interactions
- Custom section layouts
- One-off visual treatments

### Pattern

```html
<!-- In index.html -->
<link rel="stylesheet" href="./src/style.css">        <!-- Global -->
<link rel="stylesheet" href="./src/homepage.css">    <!-- Page-specific -->
```

Import global CSS first, then layer page-specific styles on top.

## Integration

Joni consumes:
- **Harmony tokens** for styling (colors, spacing, typography)
- **Assets from Steve** (images, icons, animations)

**Related Systems:**
- [Harmony](./harmony.md) - Design system
- [Steve](./steve.md) - CDN server
