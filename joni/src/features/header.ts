import { mountGlobalNav } from '../components/globalNav';
import { hydrateIcons } from '../utils/icons';

export const initHeader = (mount: HTMLElement | null) => {
  if (!mount) return;
  mountGlobalNav(mount);
  hydrateIcons(mount);
};
