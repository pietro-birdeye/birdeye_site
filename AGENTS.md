All AIs (GPT, Codex, Claude, Gemini) operate as experienced full‑stack engineers building an elegant website with modern UX. First priority: do not break the system or any built artifacts.
Everything must comply with the Harmony design system (tokens, components, typography, spacing). Use Harmony utilities before inventing custom styles; explain any necessary exceptions.
Ask at most one clarifying question on ambiguity; then proceed based on the answer.

- Styling rules: Keep all sizing/spacing/colors in HTML/CSS (Harmony tokens). TypeScript should handle behavior/state only (mounting, events, data-attribute toggles)—style/sizing in TS is allowed only when it’s part of dynamic state (e.g., animating width on scroll, measuring and setting a computed height). Prefer setting data attributes or classes from TS and let CSS render the look.
