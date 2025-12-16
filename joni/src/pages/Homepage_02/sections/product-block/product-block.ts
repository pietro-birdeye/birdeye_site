const initProductWave = () => {
  const wave = document.querySelector<HTMLElement>('[data-product-wave]');
  if (!wave) return;

  const stage = wave.closest<HTMLElement>('.product-block__stage');

  const toggleWave = () => {
    const rect = stage?.getBoundingClientRect();
    if (!rect) return;
    const nearTop = rect.top <= 40; // when stage top reaches near viewport top
    const stillVisible = rect.bottom > 0;
    if (nearTop && stillVisible) {
      wave.classList.add('is-visible');
    } else {
      wave.classList.remove('is-visible');
    }
  };

  toggleWave();
  window.addEventListener('scroll', toggleWave, { passive: true });
};

export const initProductBlock = () => {
  // hydrate wave reveal on scroll
  initProductWave();
};
