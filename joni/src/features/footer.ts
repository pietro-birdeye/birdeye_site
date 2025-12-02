import { steveOrigin } from '../utils/steve';

export const initFooter = async (mount: HTMLElement | null) => {
  if (!mount) return;
  const footerUrl = `${steveOrigin()}/v1/components/footer/footer.html`;
  try {
    const res = await fetch(footerUrl, { credentials: 'omit', cache: 'no-store' });
    if (!res.ok) return;
    const html = await res.text();
    mount.innerHTML = html;
  } catch {
    // swallow footer load errors
  }
};
