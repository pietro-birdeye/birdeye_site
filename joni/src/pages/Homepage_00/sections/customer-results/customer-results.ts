import { steveOrigin } from '../../../../utils/steve';

export const initCustomerResultsSection = () => {
  const customerResultCards = Array.from(document.querySelectorAll<HTMLElement>('.customer-result-card'));
  const customerResultLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-customer-logo]'));

  const initCustomerCarousel = (root: HTMLElement) => {
    const viewport = root.querySelector<HTMLElement>('[data-cr-viewport]');
    const track = root.querySelector<HTMLElement>('[data-cr-track]');
    const slides = track ? Array.from(track.querySelectorAll<HTMLElement>('.harmony-carousel__card')) : [];
    const prev = root.querySelector<HTMLButtonElement>('[data-harmony-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-harmony-next]');
    let activeIndex = 0;

    const getGap = () => {
      if (!track) return 0;
      const styles = getComputedStyle(track);
      const raw = styles.columnGap || styles.gap || '0';
      const parsed = parseFloat(raw);
      return Number.isFinite(parsed) ? parsed : 0;
    };

    const slidesPerView = () => {
      if (!viewport || slides.length === 0) return 1;
      const slideWidth = slides[0].getBoundingClientRect().width || 1;
      const gap = getGap();
      const viewportWidth = viewport.getBoundingClientRect().width || slideWidth;
      return Math.max(1, Math.floor((viewportWidth + gap) / (slideWidth + gap)));
    };

    const maxIndex = () => Math.max(0, slides.length - slidesPerView());

    const updateButtons = () => {
      if (!prev || !next) return;
      prev.disabled = activeIndex <= 0;
      next.disabled = activeIndex >= maxIndex();
      prev.setAttribute('aria-disabled', prev.disabled ? 'true' : 'false');
      next.setAttribute('aria-disabled', next.disabled ? 'true' : 'false');
    };

    const translateTo = (index: number) => {
      if (!track || slides.length === 0) return;
      activeIndex = Math.min(Math.max(index, 0), maxIndex());
      const gap = getGap();
      const slideWidth = slides[0].getBoundingClientRect().width || 0;
      const step = slideWidth + gap;
      track.style.transform = `translateX(-${activeIndex * step}px)`;
      updateButtons();
    };

    if (prev) {
      prev.addEventListener('click', () => translateTo(activeIndex - 1));
    }
    if (next) {
      next.addEventListener('click', () => translateTo(activeIndex + 1));
    }

    window.addEventListener('resize', () => translateTo(activeIndex));
    translateTo(0);
  };

  const customerCarouselRoots = Array.from(document.querySelectorAll<HTMLElement>('.customer-results'));
  customerCarouselRoots.forEach((root) => initCustomerCarousel(root));

  customerResultCards.forEach((card) => {
    const href = card.dataset.href;
    if (!href) return;
    card.addEventListener('click', () => {
      window.location.href = href;
    });
    card.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        window.location.href = href;
      }
    });
  });

  customerResultLogos.forEach((logo) => {
    const file = logo.dataset.customerLogo;
    if (!file) return;
    logo.src = `${steveOrigin()}/v1/logos/customer-results/${file}`;
    logo.decoding = 'async';
    logo.loading = 'lazy';
  });
};
