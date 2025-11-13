const navTemplate = `
<header class="site-header is-sticky" data-header>
  <div class="container header-row">
    <a class="brand" href="#">Joni</a>
    <nav class="primary-nav">
      <button
        class="nav-btn"
        data-menu-toggle
        aria-expanded="false"
        aria-controls="mega-solutions"
      >
        Solutions ▾
      </button>
      <button
        class="nav-btn"
        data-menu-toggle
        aria-expanded="false"
        aria-controls="mega-products"
      >
        Products ▾
      </button>
      <a class="nav-link" href="#culture">Culture</a>
      <button
        class="nav-btn"
        data-menu-toggle
        aria-expanded="false"
        aria-controls="mega-resources"
      >
        Resources ▾
      </button>
      <a class="nav-link" href="#pricing">Pricing</a>
    </nav>
    <div class="header-actions">
      <div class="phone">📞 1 800 561 3357</div>
      <a class="nav-link" href="#signin">Sign In</a>
      <a class="nav-link" href="#demo">Watch Demo</a>
    </div>
  </div>
  <div id="mega-solutions" class="mega" data-mega hidden>
    <div class="mega-inner">
      <a class="mega-item" href="#reputation">Reputation</a>
      <a class="mega-item" href="#messaging">Messaging</a>
      <a class="mega-item" href="#listings">Listings</a>
    </div>
  </div>
  <div id="mega-products" class="mega" data-mega hidden>
    <div class="mega-inner">
      <a class="mega-item" href="#platform">Platform</a>
      <a class="mega-item" href="#automation">Automation</a>
      <a class="mega-item" href="#analytics">Analytics</a>
    </div>
  </div>
  <div id="mega-resources" class="mega" data-mega hidden>
    <div class="mega-inner">
      <a class="mega-item" href="#blog">Blog</a>
      <a class="mega-item" href="#stories">Customer Stories</a>
      <a class="mega-item" href="#guides">Guides</a>
    </div>
  </div>
</header>
`;

const OPEN_DELAY_MS = 80;
const CLOSE_DELAY_MS = 160;

export function mountGlobalNav(root: HTMLElement) {
  root.innerHTML = navTemplate;
  const header = root.querySelector<HTMLElement>('[data-header]');
  if (header) {
    initNavMega(header);
  }
}

function initNavMega(header: HTMLElement) {
  if (header.dataset.navMega === 'initialized') {
    return;
  }
  header.dataset.navMega = 'initialized';
  const triggers = Array.from(header.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]'));
  const panels = new Map<string, HTMLElement>();
  triggers.forEach((trigger) => {
    const targetId = trigger.getAttribute('aria-controls');
    if (!targetId) return;
    const panel = header.querySelector<HTMLElement>(`#${CSS.escape(targetId)}`);
    if (panel) {
      panels.set(targetId, panel);
    }
  });

  if (!triggers.length || !panels.size) {
    return;
  }

  let openId: string | null = null;
  let openTimer = 0;
  let closeTimer = 0;
  let backdrop: HTMLDivElement | null = null;

  function ensureBackdrop() {
    if (backdrop) {
      return backdrop;
    }
    const existing = document.querySelector<HTMLDivElement>('.nav-backdrop');
    if (existing) {
      backdrop = existing;
      return backdrop;
    }
    const element = document.createElement('div');
    element.className = 'nav-backdrop';
    element.addEventListener('click', closeAll);
    document.body.appendChild(element);
    backdrop = element;
    return element;
  }

  function isWithinHeader(element: EventTarget | null) {
    return element instanceof Node && header.contains(element);
  }

  function show(id: string) {
    if (openId === id) {
      return;
    }
    panels.forEach((panel, pid) => {
      if (pid !== id) {
        hide(pid);
      }
    });
    const panel = panels.get(id);
    const trigger = triggers.find((t) => t.getAttribute('aria-controls') === id);
    if (!panel || !trigger) return;
    trigger.setAttribute('aria-expanded', 'true');
    panel.hidden = false;
    panel.classList.add('is-open');
    openId = id;
    header.classList.add('nav-open');
    ensureBackdrop().classList.add('is-visible');
  }

  function hide(id: string) {
    const panel = panels.get(id);
    const trigger = triggers.find((t) => t.getAttribute('aria-controls') === id);
    if (!panel || !trigger) return;
    trigger.setAttribute('aria-expanded', 'false');
    panel.classList.remove('is-open');
    panel.hidden = true;
    if (openId === id) {
      openId = null;
    }
    if (!openId) {
      header.classList.remove('nav-open');
      backdrop?.classList.remove('is-visible');
    }
  }

  function closeAll() {
    panels.forEach((_, key) => hide(key));
  }

  function scheduleOpen(id: string) {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    openTimer = setTimeout(() => show(id), OPEN_DELAY_MS);
  }

  function scheduleClose(id: string) {
    clearTimeout(openTimer);
    clearTimeout(closeTimer);
    closeTimer = setTimeout(() => hide(id), CLOSE_DELAY_MS);
  }

  triggers.forEach((trigger) => {
    const targetId = trigger.getAttribute('aria-controls');
    if (!targetId) return;
    trigger.addEventListener('mouseenter', () => scheduleOpen(targetId));
    trigger.addEventListener('mouseleave', (event) => {
      const to = event.relatedTarget;
      if (to && panels.get(targetId)?.contains(to as Node)) return;
      scheduleClose(targetId);
    });
    trigger.addEventListener('click', (event) => {
      event.preventDefault();
      if (openId === targetId) {
        closeAll();
      } else {
        show(targetId);
      }
    });
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAll();
      }
    });
  });

  panels.forEach((panel, id) => {
    panel.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
    });
    panel.addEventListener('mouseleave', (event) => {
      const to = event.relatedTarget;
      if (to && isWithinHeader(to)) return;
      scheduleClose(id);
    });
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAll();
    }
  });

  document.addEventListener('click', (event) => {
    if (!isWithinHeader(event.target)) {
      closeAll();
    }
  });
}
