import navHtml from './nav-2026.html?raw';
import './nav-2026.css';
import { hydrateIcons } from '../../utils/icons';
import { steveOrigin } from '../../utils/steve';

type DropdownEls = {
  root: HTMLElement;
  toggle: HTMLButtonElement;
  panel: HTMLElement;
};

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

export const mountNav2026 = (options: NavControllerOptions): NavController | null => {
  const { mount } = options;
  if (!mount) return null;

  const normalized = navHtml.replace(/src="(\/v1\/[^"]+)"/g, (_, path) => `src="${steveOrigin()}${path}"`);
  mount.innerHTML = normalized;

  const navRoot = mount.querySelector<HTMLElement>('.site-header');
  if (!navRoot) return null;

  hydrateIcons(navRoot);

  const dropdowns = Array.from(navRoot.querySelectorAll<HTMLElement>('.Dropdown'));
  const backdrop = navRoot.querySelector<HTMLElement>('.mega-backdrop');
  const initialTheme = (navRoot.dataset.navTheme as NavTheme | undefined) ?? DEFAULTS.theme;

  let overlay = document.querySelector<HTMLElement>('.nav-2026-overlay');
  const overlayWasCreated = !overlay;
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.className = 'nav-2026-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
  }

  let current = { ...DEFAULTS, ...options };
  const resolveSurfaces = (config: typeof current) => {
    const theme = config.theme ?? DEFAULTS.theme;
    return {
      ...config,
      surface: config.surface ?? (theme === 'dark' ? 'transparent' : 'solid'),
      scrolledSurface: config.scrolledSurface ?? 'solid',
    };
  };
  current = resolveSurfaces(current);
  let scrolledState = false;
  let scrollHandler: (() => void) | null = null;
  let observer: IntersectionObserver | null = null;
  let hoverTimer: number | null = null;
  let leaveTimer: number | null = null;
  let openDropdown: DropdownEls | null = null;
  let cachedHeight = 0;
  let forcedTheme: NavTheme | null = null;
  const lockTargets: (HTMLElement | null)[] = [document.documentElement, document.body];
  const overlayClick = () => closeAll();

  const applyState = (isScrolled: boolean) => {
    scrolledState = isScrolled;
    const theme = forcedTheme ?? (isScrolled ? current.scrolledTheme : current.theme);
    const surface =
      forcedTheme === 'light'
        ? 'solid'
        : isScrolled
          ? current.scrolledSurface
          : current.surface;
    const opacity =
      forcedTheme === 'light' ? 1 : isScrolled ? current.scrolledOpacity : current.opacity;
    navRoot.dataset.navTheme = theme;
    navRoot.dataset.navSurface = surface;
    navRoot.dataset.navSticky = current.sticky ? 'true' : 'false';
    navRoot.style.setProperty('--nav-surface-opacity', toPercent(opacity));
  };

  const setForcedThemeLight = (force: boolean) => {
    forcedTheme = force ? 'light' : null;
    navRoot.dataset.navTheme = force ? 'light' : initialTheme;
  };

  const measureTallest = () => {
    let maxHeight = 0;
    dropdowns.forEach((root) => {
      const panel = root.querySelector<HTMLElement>('.mega-panel');
      if (!panel) return;
      const h = panel.offsetHeight || panel.scrollHeight;
      if (h > maxHeight) maxHeight = h;
    });
    cachedHeight = maxHeight;
  };

  const clearTimers = () => {
    if (hoverTimer) {
      window.clearTimeout(hoverTimer);
      hoverTimer = null;
    }
    if (leaveTimer) {
      window.clearTimeout(leaveTimer);
      leaveTimer = null;
    }
  };

  const closeAll = (options?: { resetTheme?: boolean }) => {
    const resetTheme = options?.resetTheme ?? true;
    clearTimers();
    dropdowns.forEach((root) => {
      root.classList.remove('is-open');
      const toggle = root.querySelector<HTMLButtonElement>('.DropdownToggle');
      const panel = root.querySelector<HTMLElement>('.mega-panel');
      toggle?.setAttribute('aria-expanded', 'false');
      panel?.classList.remove('is-open');
    });
    openDropdown = null;
    if (backdrop) {
      backdrop.style.height = '0px';
      backdrop.classList.remove('is-open');
    }
    if (resetTheme) {
      overlay?.classList.remove('is-visible');
      lockTargets.forEach((node) => node?.classList.remove('nav-2026-locked'));
      setForcedThemeLight(false);
      applyState(scrolledState);
    }
  };

  const openDropdownMenu = (dropdown: DropdownEls) => {
    if (openDropdown?.root === dropdown.root) return;
    closeAll({ resetTheme: false });
    dropdown.root.classList.add('is-open');
    dropdown.toggle.setAttribute('aria-expanded', 'true');
    dropdown.panel.classList.add('is-open');
    if (backdrop) {
      const measured = dropdown.panel.offsetHeight || dropdown.panel.scrollHeight || cachedHeight;
      backdrop.style.height = `${measured}px`;
      backdrop.classList.add('is-open');
    }
    overlay?.classList.add('is-visible');
    lockTargets.forEach((node) => node?.classList.add('nav-2026-locked'));
    setForcedThemeLight(true);
    applyState(scrolledState);
    openDropdown = dropdown;
  };

  const toggleDropdownMenu = (dropdown: DropdownEls) => {
    if (openDropdown?.root === dropdown.root) {
      closeAll();
    } else {
      openDropdownMenu(dropdown);
    }
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

  const setupDropdowns = () => {
    if (!dropdowns.length) return;
    measureTallest();

    const hoverEnterDelay = 0;
    const hoverLeaveDelay = 400;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    dropdowns.forEach((root) => {
      const toggle = root.querySelector<HTMLButtonElement>('.DropdownToggle');
      const panel = root.querySelector<HTMLElement>('.mega-panel');
      if (!toggle || !panel) return;
      const dropdown: DropdownEls = { root, toggle, panel };

      const onEnter = () => {
        if (!isFinePointer) return;
        clearTimers();
        hoverTimer = window.setTimeout(() => openDropdownMenu(dropdown), hoverEnterDelay);
      };

      const onLeave = () => {
        if (!isFinePointer) return;
        clearTimers();
        leaveTimer = window.setTimeout(() => closeAll(), hoverLeaveDelay);
      };

      root.addEventListener('mouseenter', onEnter);
      root.addEventListener('mouseleave', onLeave);

      toggle.addEventListener('click', (event) => {
        event.preventDefault();
        toggleDropdownMenu(dropdown);
      });
    });

    document.addEventListener('click', (event) => {
      const target = event.target as Node;
      if (!navRoot.contains(target)) {
        closeAll();
      }
    });
    overlay?.addEventListener('click', overlayClick);

    window.addEventListener(
      'resize',
      () => {
        measureTallest();
        if (backdrop && openDropdown) {
          const measured = openDropdown.panel.offsetHeight || openDropdown.panel.scrollHeight || cachedHeight;
          backdrop.style.height = `${measured}px`;
        }
      },
      { passive: true },
    );
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
  setupDropdowns();

  return {
    update(next) {
      current = resolveSurfaces({ ...current, ...next });
      applyState(scrolledState);
      setupSwitching();
    },
    destroy() {
      tearDownListeners();
      overlay?.classList.remove('is-visible');
      lockTargets.forEach((node) => node?.classList.remove('nav-2026-locked'));
      overlay?.removeEventListener('click', overlayClick);
      if (overlay && overlayWasCreated) {
        overlay.remove();
      }
      mount.innerHTML = '';
    },
  };
};
