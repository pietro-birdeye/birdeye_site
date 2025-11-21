import { steveLogoUrl } from '../utils/steve';

const navTemplate = `
<header class="site-header" data-header>
  <div class="stage">
    <div class="grid">
      <div class="nav" role="navigation" aria-label="Primary">
        <div class="nav-l">
          <div class="logo-wrapper">
            <a class="brand" href="#" aria-label="Birdeye">
              <img class="brand-logo" src="" alt="Birdeye logo" />
            </a>
          </div>
          <div class="menu-wrapper">
            <ul class="NavList">
              <li class="NavItem">
                <div class="Dropdown" data-nav-item="Platform">
                  <button
                    class="diet-nav-btn DropdownToggle"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="nav-label body-s">Platform</span>
                  </button>
                  <div class="DropdownContent mega-panel" aria-label="Platform menu"></div>
                </div>
              </li>
              <li class="NavItem">
                <div class="Dropdown" data-nav-item="Solutions">
                  <button
                    class="diet-nav-btn DropdownToggle"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="nav-label body-s">Solutions</span>
                  </button>
                  <div class="DropdownContent mega-panel" aria-label="Solutions menu"></div>
                </div>
              </li>
              <li class="NavItem">
                <a class="diet-nav-btn NavLink" href="#">
                  <span class="nav-label body-s">Partners</span>
                </a>
              </li>
              <li class="NavItem">
                <div class="Dropdown" data-nav-item="Resources">
                  <button
                    class="diet-nav-btn DropdownToggle"
                    type="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <span class="nav-label body-s">Resources</span>
                  </button>
                  <div class="DropdownContent mega-panel" aria-label="Resources menu"></div>
                </div>
              </li>
              <li class="NavItem">
                <a class="diet-nav-btn NavLink" href="#">
                  <span class="nav-label body-s">Pricing</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="nav-r">
          <div class="phone-wrapper">
            <button class="diet-btn-ictxt body-m" data-size="md" data-variant="neutral" type="button">
              <span class="diet-btn-ictxt__icon" data-icon="phone"></span>
              <span class="diet-btn-ictxt__label body-m">1 800 561 3357</span>
            </button>
            <button class="diet-btn-txt body-m" data-size="md" data-variant="secondary" type="button">
              <span class="diet-btn-txt__label body-m">Sign In</span>
            </button>
          </div>
          <div class="cta-wrapper">
            <button class="diet-btn-txt body-m" data-size="md" data-variant="line1" type="button">
              <span class="diet-btn-txt__label body-m">Scan your brand</span>
            </button>
            <button class="diet-btn-txt body-m" data-size="md" data-variant="primary" type="button">
              <span class="diet-btn-txt__label body-m">Watch demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
`;

export function mountGlobalNav(root: HTMLElement) {
  root.innerHTML = navTemplate;
  const logo = root.querySelector<HTMLImageElement>('.brand-logo');
  if (logo) {
    logo.src = steveLogoUrl();
  }
  initNavMenu(root);
}

const MEGA_CONTENT: Record<string, string> = {
  Platform: 'Platform content goes here.',
  Solutions: 'Solutions content goes here.',
  Partners: 'Partners content goes here.',
  Resources: 'Resources content goes here.',
  Pricing: 'Pricing content goes here.',
};

function getOrCreateNavBackdrop(): HTMLElement | null {
  if (typeof document === 'undefined') return null;
  let backdrop = document.querySelector<HTMLElement>('.nav-backdrop');
  if (!backdrop) {
    backdrop = document.createElement('div');
    backdrop.className = 'nav-backdrop';
    document.body.appendChild(backdrop);
  }
  return backdrop;
}

function initNavMenu(root: HTMLElement) {
  const dropdownWrappers = Array.from(root.querySelectorAll<HTMLElement>('.Dropdown'));
  const menuWrapper = root.querySelector<HTMLElement>('.menu-wrapper');
  const header = root.querySelector<HTMLElement>('.site-header');
  const directLinks = Array.from(root.querySelectorAll<HTMLAnchorElement>('.NavLink'));
  const backdrop = getOrCreateNavBackdrop();

  type NavDropdown = {
    wrapper: HTMLElement;
    button: HTMLButtonElement;
    content: HTMLElement;
    label: string;
  };

  const dropdowns: NavDropdown[] = [];

  dropdownWrappers.forEach((wrapper) => {
    const button = wrapper.querySelector<HTMLButtonElement>('.DropdownToggle');
    const content = wrapper.querySelector<HTMLElement>('.DropdownContent');
    const label = wrapper.querySelector<HTMLElement>('.nav-label')?.textContent?.trim() ?? '';
    if (!button || !content) return;
    button.setAttribute('aria-expanded', 'false');
    const copy = MEGA_CONTENT[label] ?? '';
    content.innerHTML = `
      <div class="mega-panel-inner">
        <div class="mega-panel-header">${label}</div>
        <div class="mega-panel-body">${copy}</div>
      </div>
    `;
    dropdowns.push({ wrapper, button, content, label });
  });

  let openDropdown: NavDropdown | null = null;

  function setNavOpenState(isOpen: boolean) {
    if (isOpen) {
      menuWrapper?.setAttribute('data-nav-open', 'true');
      document.body.classList.add('nav-open');
      if (backdrop) {
        backdrop.classList.add('is-visible');
      }
    } else {
      menuWrapper?.removeAttribute('data-nav-open');
      document.body.classList.remove('nav-open');
      if (backdrop) {
        backdrop.classList.remove('is-visible');
      }
    }
  }

  function closeAllNow() {
    dropdowns.forEach(({ wrapper, button, content }) => {
      wrapper.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      content.classList.remove('is-open');
    });
    openDropdown = null;
    setNavOpenState(false);
  }

  function openNow(dropdown: NavDropdown) {
    if (openDropdown === dropdown) {
      return;
    }
    openDropdown = dropdown;
    dropdowns.forEach(({ wrapper, button, content }) => {
      const isActive = wrapper === dropdown.wrapper;
      wrapper.classList.toggle('is-open', isActive);
      button.setAttribute('aria-expanded', isActive ? 'true' : 'false');
      content.classList.toggle('is-open', isActive);
    });
    if (openDropdown) {
      setNavOpenState(true);
    }
  }

  function scheduleOpen(dropdown: NavDropdown) {
    openNow(dropdown);
  }

  function scheduleCloseAll() {
    if (!openDropdown) return;
    closeAllNow();
  }

  dropdowns.forEach((dropdown) => {
    const { button } = dropdown;
    button.addEventListener('mouseenter', () => scheduleOpen(dropdown));
    button.addEventListener('focus', () => scheduleOpen(dropdown));
    button.addEventListener('click', (event) => {
      event.preventDefault();
      if (openDropdown === dropdown) {
        closeAllNow();
      } else {
        openNow(dropdown);
      }
    });
  });

  directLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => scheduleCloseAll());
    link.addEventListener('focus', () => scheduleCloseAll());
  });

  if (header) {
    header.addEventListener('mouseleave', () => {
      scheduleCloseAll();
    });
  }

  if (backdrop && !backdrop.dataset.navBound) {
    backdrop.addEventListener('click', () => {
      closeAllNow();
    });
    backdrop.dataset.navBound = 'true';
  }

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) {
      closeAllNow();
    }
  });
}
