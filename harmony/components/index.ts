// Harmony Component Contracts — only Button remains in this release.

export type Size = 'xs' | 'sm' | 'md';

// Button (control/primary/danger) with layout types
export interface HarmonyButtonProps {
  size?: Size;
  variant?: 'control' | 'primary' | 'danger';
  layout?: 'icon-only' | 'icon-text' | 'text-only';
  disabled?: boolean;
  buttonType?: 'button' | 'submit' | 'reset';
}

