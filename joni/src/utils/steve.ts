declare const __STEVE_URL__: string;

const STEVE_ORIGIN =
  typeof __STEVE_URL__ === 'string' && __STEVE_URL__.length > 0
    ? __STEVE_URL__
    : 'http://localhost:4000';
const TOKENS_PATH = '/v1/harmony/tokens/tokens.css';

export const steveTokensUrl = () => `${STEVE_ORIGIN}${TOKENS_PATH}`;

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
