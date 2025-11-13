import { navGroups, showcaseIndex, showcaseModules } from './data/routes';
import { STEVE_URL } from './data/env';

// Inject Harmony tokens from Steve if STEVE_URL is provided
if (STEVE_URL) {
  const existing = document.querySelector('link[data-steve-tokens]') as HTMLLinkElement | null;
  if (!existing) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', `${STEVE_URL}/v1/harmony/tokens/tokens.css`);
    link.setAttribute('data-steve-tokens', 'true');
    document.head.appendChild(link);
  }
}

const appRoot = document.getElementById('app');
if (!appRoot) {
  throw new Error('DevStudio root node not found');
}

const shell = document.createElement('div');
shell.className = 'docs-shell';

const sidebar = document.createElement('aside');
sidebar.className = 'docs-shell__sidebar';

const main = document.createElement('main');
main.className = 'docs-shell__main devstudio-page-layout';

shell.append(sidebar, main);
appRoot.append(shell);

const navHeader = document.createElement('header');
navHeader.className = 'docs-shell__brand';
navHeader.innerHTML = '<h2 class="heading-2 docs-shell__brand-title">Harmony</h2>';
sidebar.append(navHeader);

const nav = document.createElement('nav');
nav.className = 'docs-shell__nav';
sidebar.append(nav);

const links = new Map<string, HTMLAnchorElement>();

navGroups.forEach((group) => {
  if (!group.items.length) return;

  const wrapper = document.createElement('section');
  wrapper.className = 'nav-group';

  if (group.title) {
    const title = document.createElement('p');
    title.className = 'nav-group__title label-small';
    title.textContent = group.title;
    wrapper.append(title);
  }

  const list = document.createElement('ul');
  list.className = 'nav-group__list';

  group.items.forEach((item) => {
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.className = 'nav-link body-m';
    link.href = item.path;
    link.textContent = item.title;
    link.addEventListener('click', (event) => {
      event.preventDefault();
      navigateTo(item.path);
    });
    li.append(link);
    list.append(li);
    links.set(item.path, link);
  });

  wrapper.append(list);
  nav.append(wrapper);
});

function navigateTo(path: string) {
  if (window.location.hash !== path) {
    window.location.hash = path;
  } else {
    renderFromHash();
  }
}

function parseSlug(hash: string): string | null {
  if (!hash.startsWith('#/harmony/')) return null;
  return hash.replace('#/harmony/', '').split('?')[0];
}

function setActive(path: string) {
  links.forEach((link, value) => {
    if (value === path) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

function hydrateIcons(scope: ParentNode) {
  if (!STEVE_URL) return;
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-icon]'));
  nodes.forEach((node) => {
    const name = node.getAttribute('data-icon');
    if (!name) return;
    // Use consolidated path (/v1/icons/svg/*.svg); server also aliases old path
    fetch(`${STEVE_URL}/v1/icons/svg/${encodeURIComponent(name)}.svg`)
      .then((res) => (res.ok ? res.text() : Promise.reject(new Error(String(res.status)))))
      .then((svg) => {
        // ensure aria-hidden for consistency
        const normalized = svg.includes('aria-hidden')
          ? svg
          : svg.replace('<svg', '<svg aria-hidden="true" focusable="false"');
        node.innerHTML = normalized;
        node.removeAttribute('data-icon');
      })
      .catch(() => {
        // leave as-is on failure
      });
  });
}


function executeScripts(scope: DocumentFragment | Element) {
  scope.querySelectorAll('script').forEach((oldScript) => {
    const script = document.createElement('script');
    Array.from(oldScript.attributes).forEach((attr) => {
      script.setAttribute(attr.name, attr.value);
    });
    script.textContent = oldScript.textContent ?? '';
    oldScript.replaceWith(script);
  });
}

function renderHtmlPage(htmlPath: string, styles: string[] = []): DocumentFragment {
  const raw = showcaseModules[htmlPath];
  const template = document.createElement('template');
  template.innerHTML = raw ?? '<!-- missing fragment -->';
  const cloned = template.content.cloneNode(true) as DocumentFragment;
  hydrateIcons(cloned);
  executeScripts(cloned);
  const fragment = document.createDocumentFragment();
  styles.forEach((entry) => {
    if (!entry) return;
    const isUrl = /^(https?:)?\//.test(entry);
    if (isUrl) {
      const link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', entry);
      fragment.append(link);
    } else {
      const style = document.createElement('style');
      style.textContent = entry;
      fragment.append(style);
    }
  });
  fragment.append(cloned);
  return fragment;
}

function renderNotFound(slug: string): DocumentFragment {
  const fragment = document.createDocumentFragment();
  const article = document.createElement('article');
  article.className = 'stack';
  article.innerHTML = `<h1 class="heading-2">Missing</h1><p>Could not load \`${slug}\`.</p>`;
  fragment.append(article);
  return fragment;
}

function wrapWithPageChrome(fragment: DocumentFragment, title: string): DocumentFragment {
  if (fragment.querySelector('.devstudio-page')) {
    return fragment;
  }

  const nodes = Array.from(fragment.childNodes);
  const container = document.createElement('div');
  container.className = 'devstudio-page';
  let headingElement: Element | null = null;
  const skipNodes = new Set<Node>();

  for (const node of nodes) {
    if (!(node instanceof Element)) continue;

    if (/^H[1-6]$/.test(node.tagName)) {
      headingElement = node;
      skipNodes.add(node);
      break;
    }

    if (node.children.length === 1) {
      const child = node.children[0];
      if (/^H[1-6]$/.test(child.tagName)) {
        headingElement = child;
        skipNodes.add(node);
        break;
      }
    }
  }

  const header = document.createElement('header');
  header.className = 'devstudio-page__header';

  if (headingElement) {
    headingElement.parentElement?.removeChild(headingElement);
    header.append(headingElement);
  } else {
    const heading = document.createElement('h1');
    heading.className = 'heading-2';
    heading.textContent = title;
    header.append(heading);
  }

  const defaultSection = document.createElement('div');
  defaultSection.className = 'devstudio-page-section';
  let hasDefaultContent = false;
  const sections: Element[] = [];

  nodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE && !(node.textContent ?? '').trim()) {
      return;
    }

  if (skipNodes.has(node)) {
    return;
  }

    // Move style/link assets to container head area (not inside sections)
    if (node instanceof HTMLStyleElement || (node instanceof Element && node.tagName === 'LINK')) {
      container.append(node);
      return;
    }

    if (node instanceof Element && node.classList.contains('devstudio-page-section')) {
      if (defaultSection.childNodes.length) {
        sections.push(defaultSection.cloneNode(true) as Element);
        defaultSection.replaceChildren();
      }
      sections.push(node);
      return;
    }

    defaultSection.append(node);
    hasDefaultContent = true;
  });

  container.append(header);
  // Append only non-empty sections
  sections
    .filter((section) => {
      // Consider a section empty if it has no element children or only whitespace
      const hasElementChild = Array.from(section.childNodes).some((n) => n.nodeType === Node.ELEMENT_NODE);
      if (hasElementChild) return true;
      const text = section.textContent?.trim() ?? '';
      return text.length > 0;
    })
    .forEach((section) => container.append(section));
  // Append default section only if it has visible content (elements other than LINK/STYLE)
  const defaultHasVisibleContent = Array.from(defaultSection.childNodes).some((n) => {
    if (!(n instanceof Element)) return false;
    const tag = n.tagName;
    return tag !== 'LINK' && tag !== 'STYLE';
  });
  if (hasDefaultContent && defaultHasVisibleContent) container.append(defaultSection);

  const wrapped = document.createDocumentFragment();
  wrapped.append(container);
  return wrapped;
}


function renderFromHash() {
  const slug = parseSlug(window.location.hash);
  if (!slug) {
    const first = navGroups[0]?.items[0];
    if (first) navigateTo(first.path);
    return;
  }

  const page = showcaseIndex.get(slug);
  if (!page) {
    main.replaceChildren(renderNotFound(slug));
    return;
  }

  const pageStyles = page.css ? [...page.css] : [];
  if (page.slug === 'icons' && STEVE_URL) {
    pageStyles.push(`${STEVE_URL}/v1/harmony/components/icon/icon.css`);
  }

  const content = renderHtmlPage(page.htmlPath, pageStyles);

  const wrapped = wrapWithPageChrome(content, page.title);
  setActive(page.path);
  document.title = `Harmony · ${page.title}`;
  main.replaceChildren(wrapped);
}

window.addEventListener('hashchange', renderFromHash);
renderFromHash();
