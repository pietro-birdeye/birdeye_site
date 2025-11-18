# Harmony Component Contracts

This file is the canonical quick-reference for the CSS-only primitives shipped from `@ck/harmony`. It supplements the core Harmony specs and keeps integration rules close to the source package so each surface (Bob, Venice, admin harnesses) stays aligned.

**Last updated:** 2025-10-12 — When in doubt, verify against `harmony/components/*.css` and the Harmony Admin showcases.

## Using This Document

- **Markup** — copy the structure exactly. Attribute and class names are the contract; changing them breaks styling.
- **Behavior** — host applications own interactivity. Follow the guidance below to avoid inventing new UX.
- **QA** — run the short validation flow whenever you integrate or change behavior.

> **Reminder:** Harmony ships CSS only. No component includes JavaScript. Clients must implement interactions in their own runtime following the rules below.

---

## Button

- **USE**
  Primary call-to-action or utility control rendered as a standalone button. Supports icon-only, icon-text, and text-only configurations.

- **UX**
  - Hover applies a subtle surface tint.
  - Press adds a stronger tint and nudges the button down by 1px.
  - Focus-visible draws the shared Harmony focus ring.
  - Optional loading state replaces the label/icon with a spinner while disabling interactions.

- **Behaviors**
  - In production (Bob, Venice) loading is implemented by adding `data-state="loading"` *and* setting `disabled`/`aria-disabled`.
  - Icon-only buttons must expose an `aria-label`.
  - Variants map to semantics: `primary` (main CTA), `secondary` (supporting action), `neutral` (low-emphasis style), `line1` (outlined accent style), `line2` (outlined muted style).

- **Types & Variants**

  **Type: `icon-only`**

  | Variant (`data-variant`) | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- |
  | `primary` | `xs`, `sm`, `md`, `lg`, `xl` | Provide `aria-label`; icon renders at control icon size. |
  | `secondary` | `xs`, `sm`, `md`, `lg`, `xl` | Neutral surface action. |
  | `neutral` | `xs`, `sm`, `md`, `lg`, `xl` | Low-emphasis surface. |

  **Type: `icon-text`**

  | Variant (`data-variant`) | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- |
  | `primary` | `xs`, `sm`, `md`, `lg`, `xl` | Place `.harm-btn__icon` before `.harm-btn__label` for leading icon or after the label for trailing icon; spacing adjusts automatically. |
  | `secondary` | `xs`, `sm`, `md`, `lg`, `xl` | Neutral surface action. |
  | `neutral` | `xs`, `sm`, `md`, `lg`, `xl` | Low-emphasis surface. |

  **Type: `text-only`**

  | Variant (`data-variant`) | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- |
  | `primary` | `xs`, `sm`, `md`, `lg`, `xl` | `.harm-btn__label` required. |
  | `secondary` | `xs`, `sm`, `md`, `lg`, `xl` | Neutral surface action. |
  | `neutral` | `xs`, `sm`, `md`, `lg`, `xl` | Low-emphasis surface. |
  | `line1` | `xs`, `sm`, `md`, `lg`, `xl` | Text-only button with accent border. |
  | `line2` | `xs`, `sm`, `md`, `lg`, `xl` | Text-only button with muted border. |

- **Anatomy**
  ```html
  <button
    class="harm-btn"
    data-size="md"
    data-type="text-only"
    data-variant="primary"
  >
    <span class="harm-btn__label">Action</span>
  </button>
  ```
  - `.harm-btn__icon` is optional.
  - For icon-only, omit `.harm-btn__label` and rely on `aria-label`.
  - Loading state uses `::after` spinner; keep children in DOM to avoid layout shift.

- **Tokens**
  - Size & padding: `--control-size-*` sets control height. Horizontal padding comes from `--control-padding-inline`, mapped to the global `--space-*` scale; host surfaces should leave these values intact.
  - Icon gap: `--control-inline-gap-*` defines spacing between icon and label and also maps to `--space-*`.
  - Typography: `--control-text-*` applies the correct weight/size per control ladder.
  - Colors: `--color-system-*`, `--color-text`, and built-in mix tokens for hover/active states.
  - Radius: `--control-radius-*`.

- **Global Styles**
  - Shared Harmony focus ring (`--focus-ring-*`).
  - Typography inherits control text scale; no manual weights required.

- **Component-Specific Styles / Code**
  - Spinner defined in `button.css` (`data-state="loading"`).
  - Pressed state uses `transform`; avoid overriding `transition` or `transform` on the root.
  - Leave padding/gap tokens untouched—DOM order alone handles trailing icons.
  - No bundled JS; production toggles attributes/disabled state.

- **QA**
  1. Render all size/type/variant combinations; check alignment and spacing.
  2. Test hover, focus, pressed in light/dark themes.
  3. Toggle `data-state="loading"`; ensure spinner appears centered and the button disables.

---

## Segmented

- **USE**
  Single-select control for mode toggles (e.g., day/night) rendered as a compact segmented rail.

- **UX**
  - Rail shows inactive options with muted icons/text.
  - Hover lightens the surface; the active segment highlights in accent color.
  - Focus-visible draws the shared Harmony ring around the selected segment.
  - Disabled segments dim and ignore pointer input.

- **Behaviors**
  - Each label wraps a native radio input (`.harm-segment__input`); host must keep group names unique and update application state on change.
  - `data-size="sm|md|lg"` selects control height and typography.
  - Segment layout is controlled by `data-type` (`icon-only` or `text-only`). When no `data-type` is supplied the item renders with both icon and label (icon-text).
  - Provide `role="radiogroup"` and accessible labeling on the container.

- **Types & Variants**

  **Type: `icon-only`**

  | Supported sizes (`data-size`) | Notes |
  | --- | --- |
  | `sm`, `md`, `lg` | Use `data-type="icon-only"`; rely on icon glyph only (label moves to `.harm-segment__sr`). |

  **Type: `icon-text`**

  | Supported sizes (`data-size`) | Notes |
  | --- | --- |
  | `sm`, `md`, `lg` | Default configuration; omit `data-type`. Icon and label share spacing via tokenized gap. |

  **Type: `text-only`**

  | Supported sizes (`data-size`) | Notes |
  | --- | --- |
  | `sm`, `md`, `lg` | Set `data-type="text-only"`; renders label only with control typography. |

- **Anatomy**
  ```html
  <div class="harm-segmented" role="radiogroup" data-size="md" aria-label="Mode">
    <label class="harm-segment">
      <input class="harm-segment__input" type="radio" name="mode" checked />
      <span class="harm-segment__surface" aria-hidden="true"></span>
      <span class="harm-segment__icon" aria-hidden="true">…</span>
      <span class="harm-segment__label">Day</span>
    </label>
    <label class="harm-segment">
      <input class="harm-segment__input" type="radio" name="mode" />
      <span class="harm-segment__surface" aria-hidden="true"></span>
      <span class="harm-segment__icon" aria-hidden="true">…</span>
      <span class="harm-segment__label">Night</span>
    </label>
  </div>
  ```
  - `.harm-segment__surface` paints the active background.
  - Supply `.harm-segment__sr` text when hiding visible labels (icon-only).
  - Radio input controls checked state; CSS reads `:checked` to style the segment.

- **Tokens**
  - Track height: `--seg-track-height` derives from `--control-size-*` per size.
  - Padding & gap: `--seg-content-padding`, `--seg-content-gap`, `--seg-gap` map to `--control-padding-inline` and `--control-inline-gap-*`.
  - Colors: `--seg-color-active` / `--seg-color-inactive` align with accent and muted text tokens; hover blends of `var(--color-text)`.
  - Rail background: `--seg-rail-bg` mixes text color into the current surface (light/dark ready).

- **Global Styles**
  - Focus ring forwarded via `:focus-visible` onto `.harm-segment__surface` using shared offsets.
  - Typography inherits `--control-text-sm|md|lg` depending on size.

- **Component-Specific Styles / Code**
  - No bundled JS; consumers toggle radios manually and may listen to the `change` event.
  - Keep DOM order consistent when switching types; CSS relies on descendant structure to align icons and labels.

- **QA**
  1. Navigate segments with keyboard (`Tab` into group, arrow keys to move) and confirm focus ring follows the active segment.
  2. Toggle disabled segments and ensure they skip in keyboard navigation and visually dim.
  3. Verify accent color updates on selection in both light and dark themes.

---

## Textfield

- **USE**
  Primary text input for forms and configuration panels, with optional helper text and composed variants for icons/actions.

- **UX**
  - Idle state shows neutral border and placeholder text.
  - Focus swaps border/background to accent white; placeholder fades out.
  - Disabled state softens the background and blocks interaction.

- **Behaviors**
  - Host code provides `data-size="md|lg|xl"` to select control height and typography.
  - Helper text uses `.harm-input__helper` and should be referenced via `aria-describedby` when conveying validation messages.
  - Composed inputs wrap the field in `.harm-input__inner` or `.harm-input__control` for icons/buttons; inputs inside these wrappers drop their own border.
  - Validation or status styling (error/success) lives with the host surface; Harmony does not inject custom states.

- **Types & Variants**
  | Type | Variants | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- | --- |
  | `primary` | n/a | `md`, `lg`, `xl` | Core textfield style; use composed wrappers for icons/actions when needed. |

- **Anatomy**
  ```html
  <div class="harm-input" data-size="lg">
    <label class="harm-input__label" for="tf_name">Name</label>
    <input
      id="tf_name"
      class="harm-input__field"
      type="text"
      placeholder="Jane Doe"
      aria-describedby="tf_name_helper"
    />
    <span id="tf_name_helper" class="harm-input__helper caption">Optional helper text.</span>
  </div>
  ```
  - Wrap icon-afforded versions with `.harm-input__inner`; place `.harm-input__icon` elements before/after the field.
  - Use `.harm-input__control` when nesting complex children (e.g., select, button cluster).

- **Tokens**
  - Size & radius: `--control-size-*` and `--control-radius-*` applied per `data-size`.
  - Padding: `--control-padding-inline` drives horizontal inset; composed variants reuse the same token on wrappers.
  - Typography: `--control-text-*` adjusts label/input text per size.
  - Gap: wrappers use `--control-inline-gap-md` for icon spacing.
  - Colors: `--role-surface-bg`, `--color-system-blue`, and `color-mix` blends control hover/disabled states.

- **Global Styles**
  - Focus ring forwarded via `:focus-within` on the root or wrapper, using shared Harmony offsets.
  - Helper text leverages the global `.caption` typography.

- **Component-Specific Styles / Code**
  - Placeholder fade is handled purely via CSS; no script required.
  - When embedding action buttons inside `.harm-input__inner`, ensure they reuse Harmony tokens for consistency.

- **QA**
  1. Tab into the field and confirm placeholder fades plus border swaps to accent.
  2. Test disabled state to ensure background and cursor update appropriately.
  3. For composed variants, verify icons/buttons align and the input inherits focus ring from the wrapper.

---

## Dropdown

- **USE**
  Floating panel anchored to a trigger button for menus, filters, or contextual content.

- **UX**
  - Closed by default; opening fades the surface in with a slight upward offset.
  - Trigger icon rotates 180° when the dropdown opens.
  - Surface is offset by `space-4` and casts a floating shadow.

- **Behaviors**
  - Host controls `data-state="open|closed"` on `.harm-dropdown` and must mirror it with `aria-expanded` on the trigger.
  - Trigger stretches using standard Harmony button APIs; attach `data-dropdown-trigger` for wiring convenience.
  - Surface (`.harm-dropdown__surface`) should receive an appropriate role (`menu`, `listbox`, etc.) and accessible labeling.
  - Provide close behavior on outside click and escape key in host code; component CSS does not enforce this.

- **Types & Variants**
  | Type | Variants | Notes |
  | --- | --- | --- |
  | `primary` | n/a | Structure-only; visual styling comes from the trigger button variant. |

- **Anatomy**
  ```html
  <div class="harm-dropdown" data-state="closed">
    <button
      class="harm-btn harm-btn--block harm-btn--split"
      data-variant="primary"
      data-size="md"
      aria-haspopup="menu"
      aria-expanded="false"
      data-dropdown-trigger
    >
      <span class="harm-btn__label">Price</span>
      <span class="harm-btn__icon" aria-hidden="true">…</span>
    </button>
    <div class="harm-dropdown__surface" role="menu" aria-label="Price filter" data-dropdown-surface>
      <!-- Dropdown content -->
    </div>
  </div>
  ```
  - Trigger orientation and variant are standard Harmony button props.
  - Surface is absolutely positioned relative to the dropdown root; adjust placement in host CSS if required.

- **Tokens**
  - Spacing: `--space-4` margins and padding define offset and panel padding.
  - Radius: `--radius-4` shapes the surface corners.
  - Shadow: `--shadow-floating` provides elevation.
  - Background blend: `--dd-surface-bg` mixes background/text colors for theme-aware surfaces.

- **Global Styles**
  - Focus ring remains the responsibility of the trigger (a Harmony button).

- **Component-Specific Styles / Code**
  - Opening/closing is attribute-driven; host code should toggle `data-state` and manage lifecycle (outside click, escape key, focus trap as needed).
  - SVG in the trigger icon rotates based on state; ensure the icon is wrapped in `.harm-btn__icon`.

- **QA**
  1. Toggle `data-state` in dev tools; verify surface fades and offset animates correctly.
  2. Confirm trigger `aria-expanded` mirrors state changes and the icon rotation.
  3. Check surface shadow and padding against design tokens in both light and dark themes.

---

## Expander

- **USE**
  Inline disclosure that reveals additional content beneath a trigger without navigating away.

- **UX**
  - Trigger looks like a Harmony button; clicking toggles the content region while rotating the chevron icon.
  - Open state displays content block with floating shadow; closed state hides content.
  - Focus-visible highlights the trigger with the shared focus ring.

- **Behaviors**
  - Structure relies on a hidden checkbox (`.harm-expander__input`) paired with a label trigger; host must provide unique `id/for` attributes.
  - Trigger labels should include both open/close text spans to support `:checked` label swaps.
  - Content wrapper (`.harm-expander__content`) can hold arbitrary markup; host owns any aria semantics (e.g., `role="region"`).

- **Types & Variants**
  | Type | Variants | Notes |
  | --- | --- | --- |
  | `primary` | n/a | Visual style inherits from the button variant used on the trigger. |

- **Anatomy**
  ```html
  <div class="harm-expander">
    <input class="harm-expander__input sr-only" type="checkbox" id="expander-1" />
    <label class="harm-expander__trigger harm-btn harm-btn--block" data-size="md" data-variant="neutral" for="expander-1">
      <span class="harm-btn__label"><span class="label-open">Show</span><span class="label-close">Hide</span></span>
      <span class="harm-btn__icon" aria-hidden="true">…</span>
    </label>
    <div class="harm-expander__content" role="region" aria-label="Expander content">
      <!-- Expanded content -->
    </div>
  </div>
  ```
  - `.harm-expander__input` drives state; the trigger is a label tied to that input.
  - Icon orientation follows DOM order; place `.harm-btn__icon` before or after the label.

- **Tokens**
  - Trigger styling reuses Harmony button tokens (`--control-size-*`, `--control-padding-inline`).
  - Content padding uses `--space-4`; shadow uses `--shadow-floating` when open.

- **Global Styles**
  - Focus ring forwarded from the hidden input to the trigger using shared focus tokens.

- **Component-Specific Styles / Code**
  - Hover styling on the trigger is neutralized to avoid double emphasis (`--btn-hover-*` set to match resting state).
  - Chevron rotation relies on the `.harm-btn__icon` SVG; ensure the icon supports rotation around its center.
  - Host may listen to the checkbox change event for analytics or additional side effects.

- **QA**
  1. Activate the trigger and confirm content visibility toggles correctly.
  2. Keyboard-test: `Tab` to the trigger, toggle with `Space`/`Enter`, and check focus ring.
  3. Verify icon rotation and label swap (`label-open`/`label-close`).

---

## Toggle

- **USE**
  Binary on/off switch for settings, built on a checkbox while matching Harmony control sizing.

- **UX**
  - Track color changes from gray to success green when toggled on.
  - Knob slides horizontally with a 160ms transition.
  - Focus-visible highlights the track with the shared focus ring.
  - Disabled toggles dim and prevent pointer/keyboard interaction.

- **Behaviors**
  - Each toggle uses a hidden checkbox (`.harm-toggle__input`) with `role="switch"`; host code reads/writes the checkbox state.
  - `data-size="sm|md|lg"` selects rail height and text scale.
  - Alignment helpers: `.harm-toggle--block` expands width; `.harm-toggle--split` separates label and switch.
  - Labels should be associated via `aria-labelledby` or wrap the switch for accessible naming.

- **Types & Variants**
  | Type | Variants | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- | --- |
  | `primary` | n/a | `sm`, `md`, `lg` | Core toggle; visual style adjusts automatically per size. |

- **Anatomy**
  ```html
  <div class="harm-toggle" data-size="md">
    <span class="harm-toggle__label" id="toggle-email-label">Email notifications</span>
    <input
      id="toggle-email"
      class="harm-toggle__input sr-only"
      type="checkbox"
      role="switch"
      aria-labelledby="toggle-email-label"
    />
    <label class="harm-toggle__switch" for="toggle-email" aria-hidden="true">
      <span class="harm-toggle__knob"></span>
    </label>
  </div>
  ```
  - The checkbox drives state; the visual switch is a `<label>` kept in sync via `for/id`.
  - Label text can be visually hidden with `.sr-only` when placing copy elsewhere.

- **Tokens**
  - Rail geometry: `--control-size-*` → `--tog-h`, `--tog-w`, `--knob-d`.
  - Gaps use `--control-inline-gap-xs/sm` depending on size.
  - Colors rely on `--color-system-gray-5` (off) and `--role-success-bg` (on).
  - Typography inherits from `--control-text-sm|md|lg`.

- **Global Styles**
  - Focus ring forwarded from the hidden input to `.harm-toggle__switch` using shared focus tokens.

- **Component-Specific Styles / Code**
  - Transition and knob shadow are defined in CSS; avoid overriding `transform` or `transition` on `.harm-toggle__knob`.
  - For analytics or async operations, listen to the checkbox `change` event; do not manipulate the knob directly.

- **QA**
  1. Toggle via mouse and keyboard; confirm knob animates and track color updates.
  2. Tab into the switch to ensure focus ring appears on the track.
  3. Set `disabled` on the checkbox and verify opacity drop and blocked interaction.

---

## Tabs

- **USE**
  Horizontal tab row for switching between panels within the same view.

- **UX**
  - Tabs sit on a continuous baseline; the active tab paints a 2px accent underline.
  - Hover fades label opacity; press momentarily lowers opacity further.
  - Focus-visible highlights the tab with the shared focus ring.
  - Disabled tabs dim and are skipped in keyboard navigation.

- **Behaviors**
  - Each tab is powered by a hidden radio input (`.harm-tab__input`) sharing a `name` per tabset; host code responds to `change` events to swap content.
  - Container may include `role="tablist"` and individual tabs should be mapped to panels via host-managed JS (e.g., `aria-controls`).
  - `data-size="sm|md|lg"` controls tab height, padding, and typography.
  - Use `.harm-tabs--block` to stretch the row to the container width.

- **Types & Variants**
  | Type | Variants | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- | --- |
  | `primary` | n/a | `sm`, `md`, `lg` | Single visual style; accent underline derived from `--color-system-blue`. |

- **Anatomy**
  ```html
  <div class="harm-tabs" data-size="md" role="tablist" aria-label="Example tabs">
    <input class="harm-tab__input sr-only" type="radio" id="tab-a" name="example" checked>
    <label class="harm-tab" for="tab-a"><span class="harm-tab__label">First</span></label>

    <input class="harm-tab__input sr-only" type="radio" id="tab-b" name="example">
    <label class="harm-tab" for="tab-b"><span class="harm-tab__label">Second</span></label>
  </div>
  ```
  - Host should map radios to their panels (e.g., `aria-controls`, `aria-selected`).
  - The baseline comes from the pseudo-element on `.harm-tabs`; keep tabs positioned inside that container.

- **Tokens**
  - Height & padding: `--control-size-*` with padding adjustments via `--space-1/2` and `--hspace-*` tokens.
  - Gap: `--control-inline-gap-lg|xl` sets spacing between tabs.
  - Typography: `--control-text-sm|md|lg` applies per size.
  - Accent color: `--color-system-blue` for the active underline; baseline uses `--color-system-gray-6`.

- **Global Styles**
  - Focus ring forwarded from the radio input to the label using shared tokens.

- **Component-Specific Styles / Code**
  - Hover/active opacity effects are handled in CSS; avoid overriding `.harm-tab__label` transitions unless providing an alternative affordance.
  - Disabled tabs (`input:disabled`) reduce opacity and block pointer events; host should prevent selecting them programmatically.

- **QA**
  1. Navigate tabs with keyboard (arrow keys) and confirm the underline moves with the active tab.
  2. Test hover/press states visually for each size.
  3. Mark a tab disabled and ensure it visually dims and is skipped during navigation.

---

## Textrename

- **USE**
-  Inline rename affordance for entities (e.g., component titles) that toggles between read-only and edit states.

- **UX**
  - View state resembles a neutral button; hover/press provide subtle feedback.
  - Entering edit state swaps to a textfield with focus and caret at the end of the current value.
  - Leaving edit state restores the view pill.

- **Behaviors**
  - Host code manages `data-state="view|editing"` on `.harm-textrename`.
  - Clicking the view pill should flip to `editing`, copy the current value into the input, and focus it.
  - `Enter` commits changes (trim empty to default label); `Escape` or blur reverts.
  - Available sizes: `data-size="md|lg|xl"` (Birdeye defaults to `xl`).

- **Types & Variants**
  | Type | Variants | Supported sizes (`data-size`) | Notes |
  | --- | --- | --- | --- |
  | `primary` | n/a | `md`, `lg`, `xl` | Single visual style matching neutral button tokens. |

- **Anatomy**
  ```html
  <div class="harm-textrename" data-size="xl" data-state="view">
    <div class="harm-textrename__view" role="button" aria-label="Rename title">
      <span class="harm-textrename__label heading-3">Untitled label</span>
    </div>
    <div class="harm-textrename__edit">
      <input
        class="harm-textrename__input heading-3"
        type="text"
        value="Untitled label"
        placeholder="Untitled label"
        aria-label="Label name"
      />
    </div>
  </div>
  ```
  - `.harm-textrename__view` is shown when `data-state="view"`; `.harm-textrename__edit` is shown when `data-state="editing"`.
  - Host should manage focus/selection when toggling states.

- **Tokens**
  - Size, padding, radius: `--control-size-*`, `--control-padding-inline`, `--control-radius-*` reused from buttons.
  - Hover/active mixes: `--rename-hover-bg`, `--rename-active-bg` blend `var(--color-text)` with transparency.
  - Typography: use appropriate heading/label classes (e.g., `.heading-3`) depending on context.

- **Global Styles**
  - View focus ring uses shared Harmony offsets; edit input inherits the standard textfield focus styling.

- **Component-Specific Styles / Code**
  - Host should blur the input after committing to reapply view state visuals and reset caret position.
  - Keep view and edit values in sync to avoid flicker; trimming and default value logic lives in application code.

- **QA**
  1. Click to enter edit mode; ensure input focuses with caret at the end.
  2. Press `Enter` to save and confirm the view pill updates/collapses.
  3. Press `Escape` or click outside to cancel and restore the original label.

---
