import { steveOrigin } from '../../utils/steve';
import { loadLottieLib, type AnimationItem } from '../../utils/lottie';

export const initSplitBlock = () => {
  const splitItems = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-split-img]'));
  const splitLottie = document.querySelector<HTMLElement>('[data-split-lottie]');
  const splitStage = document.querySelector<HTMLElement>('.stage-split');
  let splitLottiePlayer: AnimationItem | null = null;
  let autoTimer: number | null = null;
  let pendingBg: string | null = null;
  const AUTO_MS = 6000;
  const DEFAULT_LOTTIES = [
    'Animations/Outcomes 1.json',
    'Animations/Outcomes 2.json',
    'Animations/03.json',
    'Animations/04.json',
  ];

  const restartProgress = (btn: HTMLButtonElement) => {
    const progress = btn.querySelector<HTMLElement>('.split-block__progress');
    if (!progress) return;
    progress.style.setProperty('--split-auto-ms', `${AUTO_MS}ms`);
    progress.classList.remove('is-animate');
    void progress.offsetWidth;
    progress.classList.add('is-animate');
  };

  const clearTimer = () => {
    if (autoTimer) {
      window.clearTimeout(autoTimer);
      autoTimer = null;
    }
  };

  if (!splitItems.length) return;

  const setHeroImage = (file: string | undefined | null) => {
    if (!splitStage || !file) return;
    const nextSrc = `${steveOrigin()}/v1/split-block/${file}`;
    if (splitStage.dataset.activeBg === nextSrc) return;

    // First paint: set immediately so we have a base image.
    if (!splitStage.dataset.activeBg) {
      splitStage.dataset.activeBg = nextSrc;
      splitStage.style.backgroundImage = `url(${nextSrc})`;
      pendingBg = null;
      return;
    }

    pendingBg = nextSrc;
    const img = new Image();
    img.decoding = 'async';
    img.loading = 'eager';
    img.src = nextSrc;
    const applySwap = () => {
      // Drop stale swaps if user clicked ahead.
      if (pendingBg !== nextSrc) return;
      splitStage.dataset.activeBg = nextSrc;
      splitStage.style.backgroundImage = `url(${nextSrc})`;
      pendingBg = null;
    };
    img
      .decode?.()
      .then(applySwap)
      .catch(() => {
        if (img.complete) {
          applySwap();
        } else {
          img.addEventListener('load', applySwap, { once: true });
        }
      });
  };

  const preloadImages = () => {
    splitItems.forEach((btn) => {
      const file = btn.dataset.splitImg;
      if (!file) return;
      const img = new Image();
      img.src = `${steveOrigin()}/v1/split-block/${file}`;
    });
  };

  const setActive = (btn: HTMLButtonElement) => {
    clearTimer();
    const btnIndex = splitItems.indexOf(btn);
    splitItems.forEach((b) => {
      const toggle = b.querySelector<HTMLElement>('.split-block__item-toggle');
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-expanded', b === btn ? 'true' : 'false');
      if (toggle) {
        toggle.textContent = b === btn ? '−' : '+';
      }
    });
    restartProgress(btn);
    setHeroImage(btn.dataset.splitImg);

    if (splitLottie) {
      const lottieFile =
        btn.dataset.splitLottie ||
        DEFAULT_LOTTIES[btnIndex] ||
        DEFAULT_LOTTIES[0];
      const lottieSrc = `${steveOrigin()}/v1/split-block/${lottieFile}`;
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
        .catch(() => {});
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

  preloadImages();
  setActive(splitItems[0]);
  startAuto(splitItems[0]);
};
