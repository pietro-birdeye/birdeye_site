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
            <button class="diet-btn-ictxt diet-nav-btn" data-size="xl" data-variant="secondary" type="button">
              <span class="diet-btn-ictxt__label body-m">Platform</span>
              <span class="diet-btn-ictxt__icon" data-icon="chevron-down"></span>
            </button>
            <button class="diet-btn-ictxt diet-nav-btn" data-size="xl" data-variant="secondary" type="button">
              <span class="diet-btn-ictxt__label body-m">Solutions</span>
              <span class="diet-btn-ictxt__icon" data-icon="chevron-down"></span>
            </button>
            <button class="diet-btn-ictxt diet-nav-btn" data-size="xl" data-variant="secondary" type="button">
              <span class="diet-btn-ictxt__label body-m">Partners</span>
            </button>
            <button class="diet-btn-ictxt diet-nav-btn" data-size="xl" data-variant="secondary" type="button">
              <span class="diet-btn-ictxt__label body-m">Resources</span>
              <span class="diet-btn-ictxt__icon" data-icon="chevron-down"></span>
            </button>
            <button class="diet-btn-ictxt diet-nav-btn" data-size="xl" data-variant="secondary" type="button">
              <span class="diet-btn-ictxt__label body-m">Pricing</span>
            </button>
          </div>
        </div>
        <div class="nav-r">
          <div class="cta-wrapper"></div>
          <div class="phone-wrapper"></div>
        </div>
      </div>
    </div>
  </div>
  <div class="mega-panel" aria-label="Navbar mega panel"></div>
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

function initNavMenu(root: HTMLElement) {
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>('.diet-nav-btn'));
  const megaPanel = root.querySelector<HTMLElement>('.mega-panel');
  let openButton: HTMLButtonElement | null = null;

  function closeMenu() {
    if (!megaPanel) return;
    megaPanel.classList.remove('is-open');
    openButton?.setAttribute('aria-expanded', 'false');
    openButton = null;
  }

  function openMenu(button: HTMLButtonElement, label: string) {
    if (!megaPanel) return;
    if (openButton === button) {
      closeMenu();
      return;
    }
    buttons.forEach((btn) => btn.setAttribute('aria-expanded', 'false'));
    button.setAttribute('aria-expanded', 'true');
    openButton = button;
    megaPanel.textContent = MEGA_CONTENT[label] ?? '';
    megaPanel.classList.add('is-open');
  }

  buttons.forEach((button) => {
    const label = button.querySelector<HTMLElement>('.diet-btn-ictxt__label')?.textContent?.trim() ?? '';
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => openMenu(button, label));
  });

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target as Node)) {
      closeMenu();
    }
  });
}
