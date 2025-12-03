import { hydrateIcons } from '../../../../utils/icons';
import { steveOrigin } from '../../../../utils/steve';

const initG2Hero = () => {
  const g2Base = `${steveOrigin()}/v1/imgs/g2_2025`;
  const heroRoot = document.querySelector<HTMLElement>('.bblock-g2-hero');
  const base = document.querySelector<HTMLImageElement>('[data-g2-base]');
  const overlays = Array.from(document.querySelectorAll<HTMLElement>('[data-g2-overlay]'));
  const logo = document.querySelector<HTMLImageElement>('[data-g2-logo]');
  const rank = document.querySelector<HTMLElement>('.g2-title__rank');
  const pages = Array.from(document.querySelectorAll<HTMLElement>('.g2-page'));
  let pending = overlays.length * 2 + (base ? 1 : 0);
  const frames = ['01', '02', '03'] as const;
  const rankCopy: Record<(typeof frames)[number], string> = {
    '01': '#1 in Online Reputation Management',
    '02': '#1 in Social Media Suites',
    '03': '#1 in Local Listings Management Software',
  };

  const markReady = () => {
    pending -= 1;
    if (pending <= 0 && heroRoot) {
      heroRoot.dataset.state = 'ready';
    }
  };

  if (logo) {
    logo.src = `${g2Base}/g2logo.svg`;
    logo.decoding = 'async';
    logo.loading = 'lazy';
  }

  if (base) {
    const file = base.dataset.g2Base;
    if (file) {
      base.src = `${g2Base}/${file}`;
      base.decoding = 'async';
      base.loading = 'lazy';
      base.addEventListener('load', markReady, { once: true });
      base.addEventListener('error', markReady, { once: true });
    } else {
      markReady();
    }
  }

  overlays.forEach((overlay) => {
    const frame = overlay.dataset.g2Overlay;
    const img = overlay.querySelector<HTMLImageElement>('[data-g2-overlay-img]');
    const frameLogo = overlay.querySelector<HTMLImageElement>('[data-g2-overlay-logo]');
    if (img) {
      img.src = `${g2Base}/${frame ?? '01'}.svg`;
      img.decoding = 'async';
      img.loading = 'lazy';
      img.addEventListener('load', markReady, { once: true });
      img.addEventListener('error', markReady, { once: true });
    } else {
      markReady();
    }
    if (frameLogo) {
      frameLogo.src = `${g2Base}/${frame ?? '01'}Logo.svg`;
      frameLogo.decoding = 'async';
      frameLogo.loading = 'lazy';
      frameLogo.addEventListener('load', markReady, { once: true });
      frameLogo.addEventListener('error', markReady, { once: true });
    } else {
      markReady();
    }
  });

  if (pending <= 0 && heroRoot) {
    heroRoot.dataset.state = 'ready';
  }

  if (rank && heroRoot) {
    const styles = getComputedStyle(heroRoot);
    const durationVar = styles.getPropertyValue('--g2-cycle-duration').trim();
    const totalMs = durationVar.endsWith('s')
      ? parseFloat(durationVar) * 1000
      : parseFloat(durationVar || '15000');
    const cycleMs = Number.isFinite(totalMs) && totalMs > 0 ? totalMs : 15000;
    const stepMs = cycleMs / frames.length;
    let currentIndex = 0;
    const fadeMs = 240;

    const setFrame = (nextIndex: number) => {
      currentIndex = ((nextIndex % frames.length) + frames.length) % frames.length;
      const frame = frames[currentIndex];
      const nextCopy = rankCopy[frame];
      rank.classList.add('is-fading');
      window.setTimeout(() => {
        rank.textContent = nextCopy;
        rank.classList.remove('is-fading');
      }, fadeMs / 2);
      pages.forEach((page, idx) => {
        page.classList.toggle('is-active', idx === currentIndex);
      });
    };

    setFrame(0);
    window.setInterval(() => setFrame(currentIndex + 1), stepMs);
  }
};

export const initHeroSection = () => {
  hydrateIcons(document);
  initG2Hero();
};
