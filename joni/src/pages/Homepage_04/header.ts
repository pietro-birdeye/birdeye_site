import { mountNav2026 } from '../../components/nav-2026/controller';

export const initHeader = (mount: HTMLElement | null) => {
  return mountNav2026({
    mount,
    theme: 'dark',
    scrolledTheme: 'dark',
    surface: 'transparent',
    scrolledSurface: 'solid',
    sticky: true,
    switchAt: 120,
  });
};
