import { steveOrigin } from '../../utils/steve';

export const initMainValues = () => {
  const scope =
    document.querySelector<HTMLElement>('[data-section-name="Main values"]') ?? document;

  const cards = Array.from(scope.querySelectorAll<HTMLElement>('.main-values-grid .brand-card'));
  const abstractMedias = Array.from(scope.querySelectorAll<HTMLElement>('[data-abstract-img]'));

  abstractMedias.forEach((el) => {
    const hoverFile = el.dataset.abstractImg;
    if (hoverFile) {
      el.style.setProperty('--brand-abstract-img', `url(${steveOrigin()}/v1/imgs/abstract/${hoverFile})`);
    }
    const baseFile = el.dataset.abstractBase;
    if (baseFile) {
      el.style.setProperty('--brand-abstract-base', `url(${steveOrigin()}/v1/imgs/abstract/${baseFile})`);
    }
  });

  cards.forEach((card, index) => {
    const initial = card.querySelector<HTMLElement>('[data-main-value-img]');
    if (!initial) return;
    const file = initial.dataset.mainValueImg;
    if (!file) return;
    const url = `${steveOrigin()}/v1/imgs/mainvalues/${file}`;
    initial.style.setProperty('--initial-mask', `url(${url})`);

    const color =
      index === 0
        ? 'var(--color-system-pink-1)'
        : index === 1
          ? 'var(--color-system-indigo-1)'
          : 'var(--color-system-purple-1)';
    initial.style.setProperty('--initial-color', color);
  });
};
