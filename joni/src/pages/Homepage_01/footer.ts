import footerHtml from '../../components/footer/footer.html?raw';
import '../../components/footer/footer.css';

export const initFooter = async (mount: HTMLElement | null) => {
  if (!mount) return;
  try {
    mount.innerHTML = footerHtml;
  } catch {
    // swallow footer load errors
  }
};
