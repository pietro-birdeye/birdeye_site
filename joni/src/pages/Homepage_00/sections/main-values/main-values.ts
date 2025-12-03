import { steveOrigin } from '../../../../utils/steve';

export const initMainValues = () => {
  const scope =
    document.querySelector<HTMLElement>('[data-section-name="Main values"]') ?? document;

  const cards = Array.from(scope.querySelectorAll<HTMLElement>('.main-values-grid .brand-card'));

  cards.forEach((card, index) => {
    const initial = card.querySelector<HTMLElement>('[data-main-value-img]');
    if (!initial) return;
    const file = initial.dataset.mainValueImg;
    if (!file) return;
    const url = `${steveOrigin()}/v1/imgs/mainvalues/${file}`;
    initial.style.setProperty('--initial-mask', `url(${url})`);

    const color =
      index === 0
        ? 'var(--color-system-orange-1)'
        : index === 1
          ? 'var(--color-system-mint-1)'
          : 'var(--color-system-purple-1)';
    initial.style.setProperty('--initial-color', color);
  });
};
