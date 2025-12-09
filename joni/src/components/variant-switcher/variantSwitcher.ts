import { hydrateIcons } from '../../utils/icons';

export type VariantLink = {
  label: string;
  url: string;
};

const DEFAULT_VARIANTS: VariantLink[] = [
  // Homepage_00 is served at the root index; no standalone /Homepage_00/ file in the build.
  { label: 'Homepage_00', url: '/' },
  { label: 'Homepage_01', url: '/Homepage_01/' },
  { label: 'Homepage_02', url: '/Homepage_02/' },
  { label: 'Homepage_03', url: '/Homepage_03/' },
  { label: 'Homepage_04', url: '/Homepage_04/' },
];

const createVariantItem = (variant: VariantLink) => {
  const link = document.createElement('a');
  link.className = 'variant-switcher__link body-m';
  link.href = variant.url;
  link.textContent = variant.label;
  link.rel = 'noopener noreferrer';
  return link;
};

export const initVariantSwitcher = (variants: VariantLink[] = DEFAULT_VARIANTS) => {
  if (!variants.length) return;

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

  const list = document.createElement('div');
  list.className = 'variant-switcher__list';
  variants.forEach((variant) => list.appendChild(createVariantItem(variant)));

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
