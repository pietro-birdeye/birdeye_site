import { ensureSteveTokensStylesheet } from './utils/steve';
import { mountGlobalNav } from './components/globalNav';

ensureSteveTokensStylesheet();

const mountPoint = document.querySelector<HTMLElement>('[data-global-nav]');
if (mountPoint) {
  mountGlobalNav(mountPoint);
}
