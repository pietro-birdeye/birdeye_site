import { mountGlobalNav } from '../../components/global-nav/controller';

export const initHeader = (mount: HTMLElement | null) =>
  mountGlobalNav({
    mount,
    theme: 'dark',
    scrolledTheme: 'dark',
    surface: 'transparent',
    scrolledSurface: 'solid',
    sticky: true,
    switchAt: 120,
  });
