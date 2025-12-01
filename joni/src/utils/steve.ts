declare const __STEVE_URL__: string;

if (typeof __STEVE_URL__ !== 'string' || __STEVE_URL__.length === 0) {
  throw new Error('STEVE_URL is required for loading Harmony assets');
}
const STEVE_ORIGIN = __STEVE_URL__;
const TOKENS_PATH = '/v1/harmony/tokens/tokens.css';
const LOGO_PATH = '/v1/logos/birdeyelogo.svg';
const COMPONENTS_PATH = '/v1/harmony/components';
const GLOBAL_COMPONENTS_PATH = '/v1/globalcomponents.css?v=shadowfix';

export const steveTokensUrl = () => `${STEVE_ORIGIN}${TOKENS_PATH}`;
export const steveLogoUrl = () => `${STEVE_ORIGIN}${LOGO_PATH}`;
export const steveOrigin = () => STEVE_ORIGIN;
export const steveComponentUrl = (name: string) => `${STEVE_ORIGIN}${COMPONENTS_PATH}/${encodeURIComponent(name)}/${encodeURIComponent(name)}.css`;
export const steveGlobalComponentsUrl = () => `${STEVE_ORIGIN}${GLOBAL_COMPONENTS_PATH}`;

export function ensureSteveTokensStylesheet(id = 'steve-tokens') {
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = steveTokensUrl();
  return link;
}

export function ensureSteveComponentStylesheet(name: string, id?: string) {
  const linkId = id ?? `steve-component-${name}`;
  let link = document.getElementById(linkId) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = linkId;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = steveComponentUrl(name);
  return link;
}

export function ensureSteveGlobalComponentsStylesheet(id = 'steve-globalcomponents') {
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  }
  link.href = steveGlobalComponentsUrl();
  return link;
}
