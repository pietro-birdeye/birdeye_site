import navHtml from './global-nav.html?raw';
import './global-nav.css';
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

export const mountGlobalNav = (options: NavControllerOptions): NavController | null => {
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

  let current = { ...DEFAULTS, ...options };
  let scrolledState = false;
  let scrollHandler: (() => void) | null = null;
  let observer: IntersectionObserver | null = null;
  let hoverTimer: number | null = null;
  let leaveTimer: number | null = null;
  let openDropdown: DropdownEls | null = null;
  let cachedHeight = 0;

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

  const setThemeForcedLight = (force: boolean) => {
    navRoot.dataset.navTheme = force ? 'light' : initialTheme;
  };

  const measureTallest = () => {
    let maxHeight = 0;
    dropdowns.forEach((root) => {
      const panel = root.querySelector<HTMLElement>('.mega-panel');
      if (!panel) return;
      const prevDisplay = panel.style.display;
      const prevVisibility = panel.style.visibility;
      const prevPointer = panel.style.pointerEvents;
      panel.style.display = 'flex';
      panel.style.visibility = 'hidden';
      panel.style.pointerEvents = 'none';
      const h = panel.getBoundingClientRect().height;
      if (h > maxHeight) maxHeight = h;
      panel.style.display = prevDisplay;
      panel.style.visibility = prevVisibility;
      panel.style.pointerEvents = prevPointer;
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

  const closeAll = () => {
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
    setThemeForcedLight(false);
  };

  const open = (dropdown: DropdownEls) => {
    if (openDropdown?.root === dropdown.root) return;
    closeAll();
    dropdown.root.classList.add('is-open');
    dropdown.toggle.setAttribute('aria-expanded', 'true');
    dropdown.panel.classList.add('is-open');
    if (backdrop) {
      const measured = cachedHeight || dropdown.panel.getBoundingClientRect().height;
      backdrop.style.height = `${measured}px`;
      backdrop.classList.add('is-open');
    }
    setThemeForcedLight(true);
    openDropdown = dropdown;
  };

  const toggleDropdown = (dropdown: DropdownEls) => {
    if (openDropdown?.root === dropdown.root) {
      closeAll();
    } else {
      open(dropdown);
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

    const hoverEnterDelay = 120;
    const hoverLeaveDelay = 180;
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;

    dropdowns.forEach((root) => {
      const toggle = root.querySelector<HTMLButtonElement>('.DropdownToggle');
      const panel = root.querySelector<HTMLElement>('.mega-panel');
      if (!toggle || !panel) return;
      const dropdown: DropdownEls = { root, toggle, panel };

      const onEnter = () => {
        if (!isFinePointer) return;
        clearTimers();
        hoverTimer = window.setTimeout(() => open(dropdown), hoverEnterDelay);
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
        toggleDropdown(dropdown);
      });
    });

    document.addEventListener('click', (event) => {
      const target = event.target as Node;
      if (!navRoot.contains(target)) {
        closeAll();
      }
    });

    window.addEventListener(
      'resize',
      () => {
        measureTallest();
        if (backdrop && openDropdown) {
          backdrop.style.height = `${cachedHeight}px`;
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
