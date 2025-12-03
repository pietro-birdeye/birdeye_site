import { steveOrigin } from '../utils/steve';
import { loadLottieLib, type AnimationItem } from '../utils/lottie';

export const initSplitBlock = () => {
  const splitItems = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-split-img]'));
  const splitHero = document.querySelector<HTMLImageElement>('[data-split-hero]');
  const splitLottie = document.querySelector<HTMLElement>('[data-split-lottie]');
  let splitLottiePlayer: AnimationItem | null = null;
  let autoTimer: number | null = null;
  const AUTO_MS = 6000;

  const restartProgress = (btn: HTMLButtonElement) => {
    const progress = btn.querySelector<HTMLElement>('.split-block__progress');
    if (!progress) return;
    progress.style.setProperty('--split-auto-ms', `${AUTO_MS}ms`);
    progress.classList.remove('is-animate');
    void progress.offsetWidth; // reflow to restart animation
    progress.classList.add('is-animate');
  };

  const clearTimer = () => {
    if (autoTimer) {
      window.clearTimeout(autoTimer);
      autoTimer = null;
    }
  };

  if (!splitHero || !splitItems.length) return;

  const setActive = (btn: HTMLButtonElement) => {
    clearTimer();
    splitItems.forEach((b) => {
      const toggle = b.querySelector<HTMLElement>('.split-block__item-toggle');
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-expanded', b === btn ? 'true' : 'false');
      if (toggle) {
        toggle.textContent = b === btn ? '−' : '+';
      }
    });
    restartProgress(btn);
    const file = btn.dataset.splitImg;
    if (file) {
      splitHero.src = `${steveOrigin()}/v1/split-block/${file}`;
      splitHero.decoding = 'async';
      splitHero.loading = 'lazy';
    }

    if (splitLottie) {
      const lottieSrc = `${steveOrigin()}/v1/split-block/Animations/Listings.json`;
      loadLottieLib()
        .then((lottie) => {
          if (splitLottiePlayer) {
            splitLottiePlayer.destroy();
          }
          splitLottiePlayer = lottie.loadAnimation({
            container: splitLottie,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: lottieSrc,
          });
        })
        .catch(() => {
          // ignore if lottie fails
        });
    }
  };

  splitItems.forEach((btn) => {
    btn.addEventListener('click', () => setActive(btn));
    btn.addEventListener('focus', () => setActive(btn));
    btn.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        setActive(btn);
      }
    });
  });

  const startAuto = (current: HTMLButtonElement) => {
    const idx = splitItems.indexOf(current);
    autoTimer = window.setTimeout(() => {
      const next = splitItems[(idx + 1) % splitItems.length];
      setActive(next);
      startAuto(next);
    }, AUTO_MS);
  };

  setActive(splitItems[0]);
  startAuto(splitItems[0]);
};
