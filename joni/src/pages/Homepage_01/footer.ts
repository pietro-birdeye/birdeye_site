import { steveOrigin } from '../../utils/steve';
import footerHtml from '../../components/footer/footer.html?raw';
import '../../components/footer/footer.css';

export const initFooter = async (mount: HTMLElement | null) => {
  if (!mount) return;
  try {
    const html = footerHtml;
    const prefix = `${steveOrigin()}/v1/components/footer/assets/`;
    const normalizedHtml = html.replace(/src="\.\/assets\//g, `src="${prefix}`);
    mount.innerHTML = normalizedHtml;
  } catch {
    // swallow footer load errors
  }
};
