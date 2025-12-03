import { hydrateIcons } from '../../utils/icons';

type VariantLink = {
  label: string;
  url: string;
};

const VARIANTS: VariantLink[] = [
  { label: 'Homepage (current)', url: '/' },
  { label: 'Homepage_00', url: '/Homepage_00/' },
  { label: 'Homepage_01', url: '/Homepage_01/' },
];

const createVariantItem = (variant: VariantLink) => {
  const link = document.createElement('a');
  link.className = 'variant-switcher__link body-m';
  link.href = variant.url;
  link.textContent = variant.label;
  link.rel = 'noopener noreferrer';
  return link;
};

export const initVariantSwitcher = () => {
  if (!VARIANTS.length) return;

  const root = document.createElement('div');
  root.className = 'variant-switcher';

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'diet-btn-ic';
  button.dataset.variant = 'secondary';
  button.dataset.size = 'lg';
  button.setAttribute('aria-label', 'Page variants');
  const icon = document.createElement('span');
  icon.className = 'diet-btn-ic__icon';
  icon.dataset.icon = 'gearshape';
  button.appendChild(icon);

  const panel = document.createElement('div');
  panel.className = 'variant-switcher__panel';

  const title = document.createElement('div');
  title.className = 'variant-switcher__title heading-6';
  title.textContent = 'Page Variants';

  const list = document.createElement('div');
  list.className = 'variant-switcher__list';
  VARIANTS.forEach((v) => list.appendChild(createVariantItem(v)));

  panel.appendChild(title);
  panel.appendChild(list);
  root.appendChild(panel);
  root.appendChild(button);
  document.body.appendChild(root);
  hydrateIcons(root);

  const closePanel = () => root.classList.remove('is-open');
  const togglePanel = () => root.classList.toggle('is-open');

  button.addEventListener('click', (event) => {
    event.stopPropagation();
    togglePanel();
  });

  panel.addEventListener('click', (event) => event.stopPropagation());

  document.addEventListener('click', closePanel);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closePanel();
  });
};
