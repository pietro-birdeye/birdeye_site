import { hydrateIcons } from '../../utils/icons';
import { steveOrigin } from '../../utils/steve';
import navHtml from '../../components/global-nav/global-nav.html?raw';
import '../../components/global-nav/global-nav.css';

export const initHeader = async (mount: HTMLElement | null) => {
  if (!mount) return;
  try {
    const normalized = navHtml.replace(/src="(\/v1\/[^"]+)"/g, (_, path) => `src="${steveOrigin()}${path}"`);
    mount.innerHTML = normalized;
    hydrateIcons(mount);
  } catch {
    // ignore nav load failures
  }
};
