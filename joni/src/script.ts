import { ensureSteveTokensStylesheet, steveOrigin } from './utils/steve';
import { hydrateIcons } from './utils/icons';
import { mountGlobalNav } from './components/globalNav';

ensureSteveTokensStylesheet();
document.documentElement.style.setProperty(
  '--stage-hero-bg-image',
  `url(${steveOrigin()}/v1/imgs/pink_bgr.jpg)`,
);

const g2Base = `${steveOrigin()}/v1/imgs/g2_2025`;
const g2Images = Array.from(document.querySelectorAll<HTMLImageElement>('[data-g2-src]'));
const g2Wrapper = document.querySelector<HTMLElement>('.bblock-g2-hero');
const g2Dots = Array.from(document.querySelectorAll<SVGCircleElement>('.g2-competitors circle'));
const g2Logo = document.querySelector<HTMLImageElement>('[data-g2-logo]');

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
