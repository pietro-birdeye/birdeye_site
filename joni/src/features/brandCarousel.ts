import { steveOrigin } from '../utils/steve';

export const initBrandCarousel = () => {
  const brandImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-img]'));
  const brandHoverImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-hover]'));
  const brandLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-logo]'));
  const abstractMedias = Array.from(document.querySelectorAll<HTMLElement>('[data-abstract-img]'));
  const brandRail = document.querySelector<HTMLElement>('[data-brand-rail]');
  const brandPrev = document.querySelector<HTMLButtonElement>('[data-brand-prev]');
  const brandNext = document.querySelector<HTMLButtonElement>('[data-brand-next]');

  brandImages.forEach((img) => {
    const file = img.dataset.brandImg;
    if (!file) return;
    img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
    img.decoding = 'async';
    img.loading = 'lazy';
  });

  brandHoverImages.forEach((img) => {
    const file = img.dataset.brandHover;
    if (!file) return;
    img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
    img.decoding = 'async';
    img.loading = 'lazy';
  });

  brandLogos.forEach((img) => {
    const file = img.dataset.brandLogo;
    if (!file) return;
    img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
    img.decoding = 'async';
    img.loading = 'lazy';
  });

  abstractMedias.forEach((el) => {
    const file = el.dataset.abstractImg;
    if (!file) return;
    el.style.setProperty('--brand-abstract-img', `url(${steveOrigin()}/v1/imgs/abstract/${file})`);
  });

  if (!brandRail) return;

  const scrollStep = () => brandRail.clientWidth * 0.8;

  if (brandPrev) {
    brandPrev.addEventListener('click', () => {
      brandRail.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
    });
  }

  if (brandNext) {
    brandNext.addEventListener('click', () => {
      brandRail.scrollBy({ left: scrollStep(), behavior: 'smooth' });
    });
  }
};
