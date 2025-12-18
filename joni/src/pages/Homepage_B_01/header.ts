import { mountNav2026_02 } from '../../components/nav-2026_02';

export const initHeader = (mount: HTMLElement | null) =>
  mountNav2026_02({
    mount,
    theme: 'dark',
    scrolledTheme: 'dark',
    surface: 'transparent',
    scrolledSurface: 'solid',
    sticky: true,
    switchAt: 120,
  });
