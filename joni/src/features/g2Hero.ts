import { steveOrigin } from '../utils/steve';

const setDotDelays = (dots: SVGCircleElement[]) => {
  dots.forEach((dot, index) => {
    dot.style.animationDelay = `${0.6 + index * 0.05}s`;
  });
};

export const initG2Hero = () => {
  const g2Base = `${steveOrigin()}/v1/imgs/g2_2025`;
  const images = Array.from(document.querySelectorAll<HTMLImageElement>('[data-g2-src]'));
  const wrapper = document.querySelector<HTMLElement>('.bblock-g2-hero');
  const dots = Array.from(document.querySelectorAll<SVGCircleElement>('.g2-competitors circle'));
  const logo = document.querySelector<HTMLImageElement>('[data-g2-logo]');

  if (logo) {
    logo.src = `${g2Base}/g2logo.svg`;
    logo.decoding = 'async';
  }

  if (!images.length) {
    return;
  }

  let pending = images.length;
  const maybeStart = () => {
    if (pending <= 0 && wrapper) {
      setDotDelays(dots);
      wrapper.classList.add('g2-animating');
    }
  };

  images.forEach((img) => {
    const file = img.dataset.g2Src;
    if (!file) {
      pending -= 1;
      return;
    }
    img.src = `${g2Base}/${file}`;
    img.decoding = 'async';
    const settle = () => {
      pending -= 1;
      maybeStart();
    };
    img.addEventListener('load', settle, { once: true });
    img.addEventListener('error', settle, { once: true });
  });

  // Fallback: if loads hang, start animation after 1s
  setTimeout(() => {
    if (wrapper && !wrapper.classList.contains('g2-animating')) {
      setDotDelays(dots);
      wrapper.classList.add('g2-animating');
    }
  }, 1000);
};
