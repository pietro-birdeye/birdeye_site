const initProductWave = () => {
  const wave = document.querySelector<HTMLElement>('[data-product-wave]');
  if (!wave) return;

  const stage = wave.closest<HTMLElement>('.product-block__stage');

  if (!stage) return;

  const TOP_TRIGGER_PX = 140; // when the stage top nears the viewport top
  let isVisible = false;

  const toggleWave = () => {
    const rect = stage.getBoundingClientRect();
    const shouldShow = rect.top <= TOP_TRIGGER_PX && rect.bottom > 0;
    if (shouldShow === isVisible) return;
    isVisible = shouldShow;
    wave.classList.toggle('is-visible', shouldShow);
  };

  toggleWave();
  window.addEventListener('scroll', toggleWave, { passive: true });
};

export const initProductBlock = () => {
  // hydrate wave reveal on scroll
  initProductWave();
};
