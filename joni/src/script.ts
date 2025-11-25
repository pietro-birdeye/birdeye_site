import { ensureSteveComponentStylesheet, ensureSteveTokensStylesheet, steveOrigin } from './utils/steve';
import { hydrateIcons } from './utils/icons';
import { mountGlobalNav } from './components/globalNav';
import type { AnimationItem } from 'lottie-web';

ensureSteveTokensStylesheet();
ensureSteveComponentStylesheet('button');
document.documentElement.style.setProperty(
  '--stage-hero-bg-image',
  `url(${steveOrigin()}/v1/imgs/pink_bgr.jpg)`,
);

const g2Base = `${steveOrigin()}/v1/imgs/g2_2025`;
const g2Images = Array.from(document.querySelectorAll<HTMLImageElement>('[data-g2-src]'));
const g2Wrapper = document.querySelector<HTMLElement>('.bblock-g2-hero');
const g2Dots = Array.from(document.querySelectorAll<SVGCircleElement>('.g2-competitors circle'));
const g2Logo = document.querySelector<HTMLImageElement>('[data-g2-logo]');
const pageRoot = document.documentElement;
const brandImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-img]'));
const brandVideos = Array.from(document.querySelectorAll<HTMLVideoElement>('.brand-card__video'));
const brandRail = document.querySelector<HTMLElement>('[data-brand-rail]');
const brandPrev = document.querySelector<HTMLButtonElement>('[data-brand-prev]');
const brandNext = document.querySelector<HTMLButtonElement>('[data-brand-next]');
const splitItems = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-split-img]'));
const splitHero = document.querySelector<HTMLImageElement>('[data-split-hero]');
const splitLottie = document.querySelector<HTMLElement>('[data-split-lottie]');
const industryImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-industry-img]'));
const industryBg = document.querySelector<HTMLElement>('[data-industry-bg]');
let splitLottiePlayer: AnimationItem | null = null;
let lottieLibPromise: Promise<typeof import('lottie-web')> | null = null;

const loadLottieLib = () => {
  if (!lottieLibPromise) {
    lottieLibPromise = import('lottie-web');
  }
  return lottieLibPromise;
};

if (g2Logo) {
  g2Logo.src = `${g2Base}/g2logo.svg`;
  g2Logo.decoding = 'async';
}

let pending = g2Images.length;

g2Images.forEach((img) => {
  const file = img.dataset.g2Src;
  if (!file) {
    pending -= 1;
    return;
  }
  img.src = `${g2Base}/${file}`;
  img.decoding = 'async';
  const settle = () => {
    pending -= 1;
    if (pending <= 0 && g2Wrapper) {
      g2Dots.forEach((dot, index) => {
        dot.style.animationDelay = `${0.6 + index * 0.05}s`;
      });
      g2Wrapper.classList.add('g2-animating');
    }
  };
  img.addEventListener('load', settle, { once: true });
  img.addEventListener('error', settle, { once: true });
});

// Fallback: if loads hang, start animation after 1s
setTimeout(() => {
  if (g2Wrapper && !g2Wrapper.classList.contains('g2-animating')) {
    g2Dots.forEach((dot, index) => {
      dot.style.animationDelay = `${0.6 + index * 0.05}s`;
    });
    g2Wrapper.classList.add('g2-animating');
  }
}, 1000);

const mountPoint = document.querySelector<HTMLElement>('[data-global-nav]');
if (mountPoint) {
  mountGlobalNav(mountPoint);
  hydrateIcons(mountPoint);
}

// Hydrate any page-level Harmony icons (e.g., display hero sparkles)
hydrateIcons(pageRoot);

brandImages.forEach((img) => {
  const file = img.dataset.brandImg;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

brandVideos.forEach((vid) => {
  const src = vid.dataset.src;
  if (!src) return;
  vid.src = `${steveOrigin()}/v1/brand-carousel/${src}`;
  vid.preload = 'none';
});

// Simple scroll controls for brand rail
const scrollStep = () => (brandRail ? brandRail.clientWidth * 0.8 : 0);

if (brandPrev && brandRail) {
  brandPrev.addEventListener('click', () => {
    brandRail.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  });
}

if (brandNext && brandRail) {
  brandNext.addEventListener('click', () => {
    brandRail.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  });
}

// Split block image swapping
if (splitHero && splitItems.length) {
  const setActive = (btn: HTMLButtonElement) => {
    splitItems.forEach((b) => {
      const toggle = b.querySelector<HTMLElement>('.split-block__item-toggle');
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-expanded', b === btn ? 'true' : 'false');
      if (toggle) {
        toggle.textContent = b === btn ? '−' : '+';
      }
    });
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

  setActive(splitItems[0]);
}

// Industries block asset hydration
industryImages.forEach((img) => {
  const file = img.dataset.industryImg;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/industries/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

if (industryBg) {
  const file = industryBg.dataset.industryBg;
  if (file) {
    industryBg.style.backgroundImage = `url(${steveOrigin()}/v1/industries/${file})`;
    industryBg.style.backgroundSize = 'cover';
    industryBg.style.backgroundPosition = 'center';
    industryBg.style.backgroundRepeat = 'no-repeat';
  }
}
