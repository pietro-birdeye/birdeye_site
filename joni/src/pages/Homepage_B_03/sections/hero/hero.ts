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
    // Filename on disk has a leading space; URL-encode it to load correctly.
    path: `${steveOrigin()}/v1/imgs/library/ProductSnippets/%20Product_Large_Reviews_Agents.json`,
    rendererSettings: { preserveAspectRatio: 'xMidYMid meet', clearCanvas: true },
  });
};

export const initHeroSection = () => {
  hydrateIcons(document);
  const stage = document.querySelector<HTMLElement>('.stage-hero');
  if (stage) {
    stage.style.backgroundImage = 'none';
    stage.style.backgroundColor = 'var(--color-system-white, #ffffff)';
  }
  initHeroAnimation();
};
