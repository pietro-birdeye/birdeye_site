declare const __STEVE_URL__: string;

const STEVE_ORIGIN =
  typeof __STEVE_URL__ === 'string' && __STEVE_URL__.length > 0
    ? __STEVE_URL__
    : 'http://localhost:4000';
const TOKENS_PATH = '/v1/harmony/tokens/tokens.css';
const LOGO_PATH = '/v1/logos/birdeyelogo.svg';

export const steveTokensUrl = () => `${STEVE_ORIGIN}${TOKENS_PATH}`;
export const steveLogoUrl = () => `${STEVE_ORIGIN}${LOGO_PATH}`;
export const steveOrigin = () => STEVE_ORIGIN;

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
