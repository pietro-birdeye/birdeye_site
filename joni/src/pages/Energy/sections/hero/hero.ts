import lottie from 'lottie-web';
import { hydrateIcons } from '../../../../utils/icons';
import { steveOrigin } from '../../../../utils/steve';

const initHeroAnimation = () => {
  const container = document.querySelector<HTMLElement>('[data-hero-lottie]');
  if (!container) return;

  lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: `${steveOrigin()}/v1/imgs/Product_Dashboards/Reviews-Product.json`,
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet', clearCanvas: true },
  });
};

const initHeroWave = () => {
  const wave = document.querySelector<HTMLElement>('[data-hero-wave]');
  if (!wave) return;

  const threshold = 60;
  const toggleWave = () => {
    if (window.scrollY > threshold) {
      wave.classList.add('is-visible');
    } else {
      wave.classList.remove('is-visible');
    }
  };

  toggleWave();
  window.addEventListener('scroll', toggleWave, { passive: true });
};

export const initHeroSection = () => {
  hydrateIcons(document);
  initHeroAnimation();
  initHeroWave();
};
