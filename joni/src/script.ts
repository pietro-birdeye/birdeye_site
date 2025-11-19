import { ensureSteveTokensStylesheet, steveOrigin } from './utils/steve';
import { hydrateIcons } from './utils/icons';
import { mountGlobalNav } from './components/globalNav';

ensureSteveTokensStylesheet();
document.documentElement.style.setProperty(
  '--stage-hero-bg-image',
  `url(${steveOrigin()}/v1/imgs/pink_bgr.jpg)`,
);

const mountPoint = document.querySelector<HTMLElement>('[data-global-nav]');
if (mountPoint) {
  mountGlobalNav(mountPoint);
  hydrateIcons(mountPoint);
}
