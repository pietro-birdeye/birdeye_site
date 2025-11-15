import { ensureSteveTokensStylesheet } from './utils/steve';
import { hydrateIcons } from './utils/icons';
import { mountGlobalNav } from './components/globalNav';

ensureSteveTokensStylesheet();

const mountPoint = document.querySelector<HTMLElement>('[data-global-nav]');
if (mountPoint) {
  mountGlobalNav(mountPoint);
  hydrateIcons(mountPoint);
}
