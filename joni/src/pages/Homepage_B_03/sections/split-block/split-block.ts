import { steveOrigin } from '../../../../utils/steve';
import { loadLottieLib, type AnimationItem } from '../../../../utils/lottie';

export const initSplitBlock = () => {
  const splitItems = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-split-img]'));
  const splitLottie = document.querySelector<HTMLElement>('[data-split-lottie]');
  const splitStage = document.querySelector<HTMLElement>('.stage-split');
  let splitLottiePlayer: AnimationItem | null = null;
  let autoTimer: number | null = null;
  const AUTO_MS = 6000;
  const staticBackground = `${steveOrigin()}/v1/split-block/06.png`;
  const DEFAULT_LOTTIES = [
    'Animations/Minimal_Listings.json',
    'Animations/Minimal_Reviews.json',
    'Animations/Minimal_Social.json',
    'Animations/Minimal_Survey.json',
    'Animations/Minimal_Listings.json', // reuse first for the 5th slot
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

  if (splitStage) {
    splitStage.style.backgroundImage = `url(${staticBackground})`;
  }

  const setHeroImage = () => {
    if (!splitStage) return;
    if (splitStage.dataset.activeBg === staticBackground) return;
    splitStage.dataset.activeBg = staticBackground;
    splitStage.style.backgroundImage = `url(${staticBackground})`;
  };

  const preloadImages = () => {
    const img = new Image();
    img.src = staticBackground;
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
    setHeroImage();

    if (splitLottie) {
      const lottieFile = btn.dataset.splitLottie || DEFAULT_LOTTIES[btnIndex] || DEFAULT_LOTTIES[0];
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
