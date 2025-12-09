import { mountNav2026 } from '../../components/nav-2026/controller';

export const initHeader = (mount: HTMLElement | null) => {
  const controller = mountNav2026({
    mount,
    theme: 'light',
    scrolledTheme: 'light',
    surface: 'solid',
    scrolledSurface: 'solid',
    opacity: 1,
    scrolledOpacity: 1,
    sticky: true,
    switchAt: 0,
  });
  const navRoot = mount?.querySelector<HTMLElement>('.site-header');
  // Nav surface uses default theme colors; no page-specific override.
  return controller;
};
