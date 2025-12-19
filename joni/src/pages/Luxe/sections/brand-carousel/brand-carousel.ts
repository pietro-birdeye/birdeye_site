import { steveOrigin } from '../../../../utils/steve';

export const initBrandCarouselSection = () => {
  const brandImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-img]'));
  const brandHoverImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-hover]'));
  const brandLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-logo]'));
  const abstractMedias = Array.from(document.querySelectorAll<HTMLElement>('[data-abstract-img]'));
  const brandTrack = document.querySelector<HTMLElement>('[data-brand-track]');
  const brandViewport = document.querySelector<HTMLElement>('[data-brand-viewport]');
  const slides = brandTrack ? Array.from(brandTrack.querySelectorAll<HTMLElement>('.brand-carousel__slide')) : [];
  const brandPrev = document.querySelector<HTMLButtonElement>('[data-brand-prev]');
  const brandNext = document.querySelector<HTMLButtonElement>('[data-brand-next]');
  let activeIndex = 0;

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

  if (!brandTrack || !brandViewport || !slides.length) return;

  const getGap = () => {
    const styles = getComputedStyle(brandTrack);
    const raw = styles.columnGap || styles.gap || '0';
    const parsed = parseFloat(raw);
    return Number.isFinite(parsed) ? parsed : 0;
  };

  const slidesPerView = () => {
    const slideWidth = slides[0]?.getBoundingClientRect().width ?? 1;
    const gap = getGap();
    const viewportWidth = brandViewport.getBoundingClientRect().width || slideWidth;
    return Math.max(1, Math.floor((viewportWidth + gap) / (slideWidth + gap)));
  };

  const maxIndex = () => Math.max(0, slides.length - slidesPerView());

  const updateButtons = () => {
    if (!brandPrev || !brandNext) return;
    brandPrev.disabled = activeIndex <= 0;
    brandNext.disabled = activeIndex >= maxIndex();
  };

  const translateToIndex = (index: number) => {
    activeIndex = Math.min(Math.max(index, 0), maxIndex());
    const gap = getGap();
    const slideWidth = slides[0]?.getBoundingClientRect().width ?? 0;
    const step = slideWidth + gap;
    brandTrack.style.transform = `translateX(-${activeIndex * step}px)`;
    updateButtons();
  };

  if (brandPrev) {
    brandPrev.addEventListener('click', () => {
      translateToIndex(activeIndex - 1);
    });
  }

  if (brandNext) {
    brandNext.addEventListener('click', () => {
      translateToIndex(activeIndex + 1);
    });
  }

  window.addEventListener('resize', () => {
    translateToIndex(activeIndex);
  });

  translateToIndex(0);
};
