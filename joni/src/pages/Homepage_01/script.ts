import {
  ensureSteveComponentStylesheet,
  ensureSteveGlobalComponentsStylesheet,
  ensureSteveTokensStylesheet,
  steveOrigin,
} from '../../utils/steve';
import { hydrateIcons } from '../../utils/icons';
import { initHeader } from './header';
import { initFooter } from './footer';
import { initBrandCarouselSection } from './sections/brand-carousel/brand-carousel';
import { initSplitBlock } from './sections/split-block/split-block';
import { initAIStack } from './sections/ai-stack/ai-stack';
import { initMainValues } from './sections/main-values/main-values';
import { initProductBlock } from './sections/product-block/product-block';
import { initVariantSwitcher } from '../../components/variant-switcher/variantSwitcher';
import { initHeroSection } from './sections/hero/hero';
import { initHorizontalSlider } from '../../components/horizontal-slider/horizontal-slider';
import '../../components/variant-switcher/variant-switcher.css';
import { initNewCarousel } from './sections/new-carousel/new-carousel';
import aiStackTemplate from './sections/ai-stack/ai-stack.html?raw';
import productBlockTemplate from './sections/product-block/product-block.html?raw';
import brandCarouselTemplate from './sections/brand-carousel/brand-carousel.html?raw';
import splitBlockTemplate from './sections/split-block/split-block.html?raw';
import industriesTemplate from './sections/industries/industries.html?raw';
import heroTemplate from './sections/hero/hero.html?raw';
import newCarouselTemplate from './sections/new-carousel/new-carousel.html?raw';
import { initIndustries } from './sections/industries/industries';

const INLINE_ARROW = `<svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3.5h-2v1.75h-5v2h5V9l2.5-2.5L10.5 4z"/><path d="M5 11.25h2v2h-2z"/><path d="M8 11.25h2v2H8z"/><path d="M11 11.25h2v2h-2z"/></svg>`;

const ensureInlineArrow = (scope: ParentNode) => {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-icon="arrow.up.right"]'));
  nodes.forEach((node) => {
    if (node.firstElementChild) return;
    node.innerHTML = INLINE_ARROW;
  });
};

const HERO_MEDIA_BASE = `${steveOrigin()}/v1/imgs/library/sky01`;
const initHeroBackgroundVideo = () => {
  const heroSection = document.querySelector<HTMLElement>('.stage-hero');
  const heroVideo = document.querySelector<HTMLVideoElement>('[data-hero-bg-video]');
  if (!heroSection || !heroVideo) return;

  const posterUrl = `${HERO_MEDIA_BASE}.jpg`;
  const videoUrl = `${HERO_MEDIA_BASE}.mp4`;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  heroSection.style.setProperty('--stage-hero-bg-image', `url(${posterUrl})`);
  heroVideo.poster = posterUrl;
  heroVideo.src = videoUrl;
  heroVideo.muted = true;
  heroVideo.loop = true;
  heroVideo.playsInline = true;

  const showFallbackImage = () => {
    heroVideo.pause();
    heroVideo.style.display = 'none';
    heroSection.style.setProperty('--stage-hero-bg-image', `url(${posterUrl})`);
  };

  const playVideo = () => {
    heroVideo.style.display = '';
    heroVideo
      .play()
      .catch(() => {
        showFallbackImage();
      });
  };

  if (prefersReducedMotion.matches) {
    showFallbackImage();
  } else {
    playVideo();
  }

  const onMotionChange = (event: MediaQueryListEvent) => {
    if (event.matches) {
      showFallbackImage();
    } else {
      playVideo();
    }
  };

  if (typeof prefersReducedMotion.addEventListener === 'function') {
    prefersReducedMotion.addEventListener('change', onMotionChange);
  } else if (typeof prefersReducedMotion.addListener === 'function') {
    prefersReducedMotion.addListener(onMotionChange);
  }

  heroVideo.addEventListener('error', showFallbackImage);
};

document.body.classList.add('page-homepage-01');

ensureSteveTokensStylesheet();
ensureSteveComponentStylesheet('button');
ensureSteveGlobalComponentsStylesheet();

const pageRoot = document.documentElement;
const heroMount = document.querySelector<HTMLElement>('[data-hero]');
const navMount = document.querySelector<HTMLElement>('[data-global-nav]');
const footerMount = document.querySelector<HTMLElement>('[data-footer]');
const productBlockMount = document.querySelector<HTMLElement>('[data-product-block]');
const brandCarouselMount = document.querySelector<HTMLElement>('[data-brand-carousel]');
const splitBlockMount = document.querySelector<HTMLElement>('[data-split-block]');
const aiStackMount = document.querySelector<HTMLElement>('[data-ai-stack]');
const industriesMount = document.querySelector<HTMLElement>('[data-industries]');
const newCarouselMounts = Array.from(
  document.querySelectorAll<HTMLElement>('[data-new-carousel]:not(.new-carousel)'),
);
const horizontalSliderMount = document.querySelector<HTMLElement>('[data-horizontal-slider]');

if (heroMount) {
  heroMount.innerHTML = heroTemplate;
}
initHeroBackgroundVideo();
initHeroSection();
initMainValues();
const navController = initHeader(navMount);
const heroSection = document.querySelector<HTMLElement>('.stage-hero');
if (navController && heroSection) {
  navController.update({
    switchAt: {
      element: heroSection,
      offset: 24,
    },
  });
}
initFooter(footerMount);

if (productBlockMount) {
  productBlockMount.innerHTML = productBlockTemplate;
  hydrateIcons(productBlockMount);
  ensureInlineArrow(productBlockMount);
  initProductBlock();
}

if (brandCarouselMount) {
  brandCarouselMount.innerHTML = brandCarouselTemplate;
  hydrateIcons(brandCarouselMount);
  ensureInlineArrow(brandCarouselMount);
  initBrandCarouselSection();
}

if (splitBlockMount) {
  splitBlockMount.innerHTML = splitBlockTemplate;
  hydrateIcons(splitBlockMount);
  ensureInlineArrow(splitBlockMount);
  initSplitBlock();
}

if (industriesMount) {
  industriesMount.innerHTML = industriesTemplate;
  hydrateIcons(industriesMount);
  ensureInlineArrow(industriesMount);
  initIndustries();
}

if (aiStackMount) {
  aiStackMount.innerHTML = aiStackTemplate;
  hydrateIcons(aiStackMount);
  ensureInlineArrow(aiStackMount);
  initAIStack();
}

newCarouselMounts.forEach((mount) => {
  mount.innerHTML = newCarouselTemplate;
  const heading = mount.querySelector<HTMLElement>('.brand-carousel__header h2');
  const customTitle = mount.dataset.carouselTitle;
  if (heading && customTitle) {
    heading.textContent = customTitle;
  }
});
initNewCarousel();
initHorizontalSlider();

hydrateIcons(pageRoot);
ensureInlineArrow(pageRoot);
initVariantSwitcher();
