import { steveOrigin } from '../utils/steve';

const ensureFooterStylesheet = () => {
  const id = 'steve-footer';
  let link = document.getElementById(id) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id = id;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = `${steveOrigin()}/v1/components/footer/footer.css`;
};

export const initFooter = async (mount: HTMLElement | null) => {
  if (!mount) return;
  ensureFooterStylesheet();

  const footerUrl = `${steveOrigin()}/v1/components/footer/footer.html`;
  try {
    const res = await fetch(footerUrl, { credentials: 'omit', cache: 'no-store' });
    if (!res.ok) return;
    const html = await res.text();
    const prefix = `${steveOrigin()}/v1/components/footer/assets/`;
    const normalizedHtml = html.replace(/src="\.\/assets\//g, `src="${prefix}`);
    mount.innerHTML = normalizedHtml;
  } catch {
    // swallow footer load errors
  }
};
