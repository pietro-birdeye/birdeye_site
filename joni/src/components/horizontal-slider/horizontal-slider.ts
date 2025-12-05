import { steveOrigin } from '../../utils/steve';

export const initHorizontalSlider = () => {
  const sliders = Array.from(document.querySelectorAll<HTMLElement>('[data-horizontal-slider]'));
  if (!sliders.length) return;

  sliders.forEach((slider) => {
    const track = slider.querySelector<HTMLElement>('[data-horizontal-track]');
    const scroller = slider.querySelector<HTMLElement>('[data-horizontal-scroller]');
    const prevButtons = slider.querySelectorAll<HTMLButtonElement>('[data-horizontal-prev]');
    const nextButtons = slider.querySelectorAll<HTMLButtonElement>('[data-horizontal-next]');
    if (!track || !scroller || !track.children.length) return;

    const slides = Array.from(track.children) as HTMLElement[];

    // Hydrate customer logos if present
    const customerLogos = Array.from(track.querySelectorAll<HTMLImageElement>('[data-customer-logo]'));
    customerLogos.forEach((img) => {
      const file = img.dataset.customerLogo;
      if (!file) return;
      img.src = `${steveOrigin()}/v1/logos/customer-results/${file}`;
      img.decoding = 'async';
      img.loading = 'lazy';
    });

    // Wire navigation for cards with hrefs
    const linkCards = Array.from(track.querySelectorAll<HTMLElement>('[data-href]'));
    linkCards.forEach((card) => {
      const href = card.dataset.href;
      if (!href) return;
      const navigate = () => {
        window.location.href = href;
      };
      card.addEventListener('click', navigate);
      card.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter' || evt.key === ' ') {
          evt.preventDefault();
          navigate();
        }
      });
    });

    let currentIndex = 0;

    const getStep = () => {
      const gapRaw = getComputedStyle(track).gap || getComputedStyle(track).columnGap || '0';
      const gap = parseFloat(gapRaw) || 0;
      const width = slides[0]?.getBoundingClientRect().width || 0;
      return width + gap;
    };

    const slidesCount = slides.length;

    const updateButtons = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scroller;
      const canScrollLeft = scrollLeft > 0;
      const canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;
      prevButtons.forEach((btn) => (btn.disabled = !canScrollLeft));
      nextButtons.forEach((btn) => (btn.disabled = !canScrollRight));
    };

    const scrollToIndex = (index: number) => {
      const step = getStep();
      currentIndex = Math.max(0, Math.min(index, slidesCount - 1));
      scroller.scrollTo({
        left: step * currentIndex,
        behavior: 'smooth',
      });
      updateButtons();
    };

    const handlePrev = () => scrollToIndex(currentIndex - 1);
    const handleNext = () => scrollToIndex(currentIndex + 1);

    prevButtons.forEach((btn) => btn.addEventListener('click', handlePrev));
    nextButtons.forEach((btn) => btn.addEventListener('click', handleNext));

    scroller.addEventListener('scroll', updateButtons);
    window.addEventListener('resize', () => {
      updateButtons();
    });

    // Optional snapping on drag end
    let isDragging = false;
    const onDragStart = () => {
      isDragging = true;
    };
    const onDragEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      const step = getStep();
      const snapped = Math.round(scroller.scrollLeft / step);
      scrollToIndex(snapped);
    };

    scroller.addEventListener('mousedown', onDragStart);
    scroller.addEventListener('touchstart', onDragStart);
    scroller.addEventListener('mouseup', onDragEnd);
    scroller.addEventListener('mouseleave', onDragEnd);
    scroller.addEventListener('touchend', onDragEnd);

    updateButtons();
  });
};
