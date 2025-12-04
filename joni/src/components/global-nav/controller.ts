import navHtml from './global-nav.html?raw';
import './global-nav.css';
import { hydrateIcons } from '../../utils/icons';
import { steveOrigin } from '../../utils/steve';

type NavTheme = 'light' | 'dark';
type NavSurface = 'transparent' | 'solid';

type SwitchTarget =
  | number
  | {
      element: Element;
      offset?: number;
    };

export type NavControllerOptions = {
  mount: HTMLElement | null;
  theme?: NavTheme;
  scrolledTheme?: NavTheme;
  surface?: NavSurface;
  scrolledSurface?: NavSurface;
  opacity?: number; // 0-1
  scrolledOpacity?: number; // 0-1
  sticky?: boolean;
  switchAt?: SwitchTarget;
};

export type NavController = {
  update(next: Partial<Omit<NavControllerOptions, 'mount'>>): void;
  destroy(): void;
};

const DEFAULTS: Required<Omit<NavControllerOptions, 'mount' | 'switchAt'>> = {
  theme: 'light',
  scrolledTheme: 'light',
  surface: 'solid',
  scrolledSurface: 'solid',
  opacity: 1,
  scrolledOpacity: 1,
  sticky: true,
};

const toPercent = (value: number) => {
  const clamped = Math.max(0, Math.min(1, value));
  return `${Math.round(clamped * 100)}%`;
};

export const mountGlobalNav = (options: NavControllerOptions): NavController | null => {
  const { mount } = options;
  if (!mount) return null;

  const normalized = navHtml.replace(/src="(\/v1\/[^"]+)"/g, (_, path) => `src="${steveOrigin()}${path}"`);
  mount.innerHTML = normalized;

  const navRoot = mount.querySelector<HTMLElement>('.site-header');
  if (!navRoot) return null;

  hydrateIcons(navRoot);

  let current = { ...DEFAULTS, ...options };
  let scrolledState = false;
  let scrollHandler: (() => void) | null = null;
  let observer: IntersectionObserver | null = null;

  const applyState = (isScrolled: boolean) => {
    scrolledState = isScrolled;
    const theme = isScrolled ? current.scrolledTheme : current.theme;
    const surface = isScrolled ? current.scrolledSurface : current.surface;
    const opacity = isScrolled ? current.scrolledOpacity : current.opacity;
    navRoot.dataset.navTheme = theme;
    navRoot.dataset.navSurface = surface;
    navRoot.dataset.navSticky = current.sticky ? 'true' : 'false';
    navRoot.style.setProperty('--nav-surface-opacity', toPercent(opacity));
  };

  const setScrolled = (next: boolean) => {
    if (scrolledState === next) return;
    applyState(next);
  };

  const tearDownListeners = () => {
    if (scrollHandler) {
      window.removeEventListener('scroll', scrollHandler);
      scrollHandler = null;
    }
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  };

  const setupSwitching = () => {
    tearDownListeners();
    const target = current.switchAt;
    if (typeof target === 'number') {
      const threshold = target;
      scrollHandler = () => {
        setScrolled(window.scrollY > threshold);
      };
      window.addEventListener('scroll', scrollHandler, { passive: true });
      setScrolled(window.scrollY > threshold);
    } else if (target && target.element instanceof Element) {
      const offset = target.offset ?? 0;
      observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          const isIntersecting = entry?.isIntersecting ?? false;
          setScrolled(!isIntersecting);
        },
        {
          rootMargin: `-${offset}px 0px 0px 0px`,
          threshold: [0],
        },
      );
      observer.observe(target.element);
    }
  };

  applyState(false);
  setupSwitching();

  return {
    update(next) {
      current = { ...current, ...next };
      applyState(scrolledState);
      setupSwitching();
    },
    destroy() {
      tearDownListeners();
      mount.innerHTML = '';
    },
  };
};
