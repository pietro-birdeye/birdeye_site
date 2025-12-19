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

export const initHeroSection = () => {
  hydrateIcons(document);
  const stage = document.querySelector<HTMLElement>('.stage-hero');
  if (stage) {
    const poster = `${steveOrigin()}/v1/imgs/library/Posters/Poster_06.jpg`;
    stage.style.backgroundImage = `url(${poster})`;
    stage.style.backgroundSize = 'cover';
    stage.style.backgroundRepeat = 'no-repeat';
    stage.style.backgroundPosition = '50% 50%';
  }
  initHeroAnimation();
};
