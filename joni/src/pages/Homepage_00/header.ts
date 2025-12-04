import { mountGlobalNav } from '../../components/global-nav/controller';

export const initHeader = (mount: HTMLElement | null) => {
  const controller = mountGlobalNav({
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
