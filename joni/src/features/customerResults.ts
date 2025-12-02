import { steveOrigin } from '../utils/steve';

export const initCustomerResults = () => {
  const customerResultCards = Array.from(document.querySelectorAll<HTMLElement>('.customer-result-card'));
  const customerResultLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-customer-logo]'));

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
