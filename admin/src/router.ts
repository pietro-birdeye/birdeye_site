export type RouteKind = 'home' | 'showcase';

export interface RouteMatch {
  kind: RouteKind;
  slug?: string;
}

const HOME_HASHES = new Set(['', '#', '#/']);

const normalizeHash = (hash: string): string => hash.split('?')[0];

export const parseHash = (hash: string): RouteMatch => {
  // Strip query parameters (cache busting) before parsing
  const cleanHash = hash.split('?')[0];

  if (HOME_HASHES.has(cleanHash)) {
    return { kind: 'home' };
  }

  if (cleanHash.startsWith('#/harmony/')) {
    const slug = cleanHash.replace('#/harmony/', '').trim();
    return { kind: 'showcase', slug: slug || undefined };
  }

  if (cleanHash.startsWith('#/harmony-components-new/')) {
    const slug = cleanHash.replace('#/harmony-components-new/', '').trim();
    const mapped = slug ? `harmony-new-${slug}` : undefined;
    return { kind: 'showcase', slug: mapped };
  }

  return { kind: 'home' };
};

export const startRouter = (listener: (match: RouteMatch) => void) => {
  const handle = () => listener(parseHash(normalizeHash(window.location.hash)));
  window.addEventListener('hashchange', handle);
  handle();
  return () => window.removeEventListener('hashchange', handle);
};

export const navigate = (hash: string) => {
  // Add cache-busting timestamp to force fresh content
  const separator = hash.includes('?') ? '&' : '?';
  const cacheBust = `${separator}t=${Date.now()}`;

  if (!hash.startsWith('#')) {
    window.location.hash = `#${hash}${cacheBust}`;
  } else {
    window.location.hash = `${hash}${cacheBust}`;
  }
};
