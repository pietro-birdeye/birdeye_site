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
