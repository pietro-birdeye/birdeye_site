import { steveOrigin } from '../../../../utils/steve';

export const initG2Brag = () => {
  const baseUrl = `${steveOrigin()}/v1/imgs/g2_2025`;
  const section = document.querySelector<HTMLElement>('[data-g2-brag]');
  if (!section) return;

  const base = section.querySelector<HTMLImageElement>('[data-g2-base]');
  const overlays = Array.from(section.querySelectorAll<HTMLElement>('[data-g2-overlay]'));
  const dots = Array.from(section.querySelectorAll<HTMLElement>('[data-g2-page]'));
  const eyebrow = document.querySelector<HTMLElement>('.g2-brag__eyebrow-text');
  const logo = document.querySelector<HTMLImageElement>('[data-g2-logo]');
  const frames = ['01', '02', '03'] as const;
  const durationMs = 15000;
  const stepMs = durationMs / frames.length;
  let current = 0;

  const rankCopy: Record<(typeof frames)[number], string> = {
    '01': '#1 in Online Reputation Management',
    '02': '#1 in Social Media Suites',
    '03': '#1 in Local Listings Management Software',
  };

  if (logo) {
    logo.src = `${baseUrl}/g2logo.svg`;
    logo.decoding = 'async';
    logo.loading = 'lazy';
  }

  if (base && base.dataset.g2Base) {
    base.src = `${baseUrl}/${base.dataset.g2Base}`;
    base.decoding = 'async';
    base.loading = 'lazy';
  }

  overlays.forEach((overlay) => {
    const frame = overlay.dataset.g2Overlay ?? '01';
    const img = overlay.querySelector<HTMLImageElement>('[data-g2-overlay-img]');
    const logo = overlay.querySelector<HTMLImageElement>('[data-g2-overlay-logo]');
    if (img) {
      img.src = `${baseUrl}/${frame}.svg`;
      img.decoding = 'async';
      img.loading = 'lazy';
    }
    if (logo) {
      logo.src = `${baseUrl}/${frame}Logo.svg`;
      logo.decoding = 'async';
      logo.loading = 'lazy';
    }
  });

  const setFrame = (idx: number) => {
    current = ((idx % frames.length) + frames.length) % frames.length;
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === current));
    overlays.forEach((overlay, i) => {
      overlay.style.opacity = i === current ? '1' : '0';
    });
    const frame = frames[current];
    if (eyebrow) eyebrow.textContent = rankCopy[frame] || '';
  };

  setFrame(0);
  window.setInterval(() => setFrame(current + 1), stepMs);
};
