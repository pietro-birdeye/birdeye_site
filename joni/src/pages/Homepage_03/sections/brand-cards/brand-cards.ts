import { steveOrigin } from '../../../../utils/steve';
import brandCardTemplateString from './brand-cards.html?raw';

type BrandCardDatum = {
  img: string;
  hover: string;
  logo: string;
  aria: string;
};

const brandCardsData: BrandCardDatum[] = [
  {
    img: 'Imgs/WYNDHAM2.png',
    hover: 'Imgs/WYNDHAM_Hover.png',
    logo: 'Logos/WYNDHAM_LOGO.svg',
    aria: 'Wyndham brand story',
  },
  {
    img: 'Imgs/SMILE2.png',
    hover: 'Imgs/SMILE_Hover.png',
    logo: 'Logos/SMILE_LOGO.svg',
    aria: 'Smile brand story',
  },
  {
    img: 'Imgs/HR2.png',
    hover: 'Imgs/HR_Hover.png',
    logo: 'Logos/HR_LOGO.svg',
    aria: 'H&R Block brand story',
  },
  {
    img: 'Imgs/DAVID2.png',
    hover: 'Imgs/David_Hover.png',
    logo: 'Logos/David_LOGO.svg',
    aria: "David's Bridal brand story",
  },
  // Repeat to fill the track if more cards are present
  {
    img: 'Imgs/WYNDHAM2.png',
    hover: 'Imgs/WYNDHAM_Hover.png',
    logo: 'Logos/WYNDHAM_LOGO.svg',
    aria: 'Wyndham brand story (2)',
  },
  {
    img: 'Imgs/SMILE2.png',
    hover: 'Imgs/SMILE_Hover.png',
    logo: 'Logos/SMILE_LOGO.svg',
    aria: 'Smile brand story (2)',
  },
  {
    img: 'Imgs/HR2.png',
    hover: 'Imgs/HR_Hover.png',
    logo: 'Logos/HR_LOGO.svg',
    aria: 'H&R Block brand story (2)',
  },
  {
    img: 'Imgs/DAVID2.png',
    hover: 'Imgs/David_Hover.png',
    logo: 'Logos/David_LOGO.svg',
    aria: "David's Bridal brand story (2)",
  },
];

const brandCardTemplate = (() => {
  const wrapper = document.createElement('template');
  wrapper.innerHTML = brandCardTemplateString.trim();
  const innerTemplate = wrapper.content.querySelector<HTMLTemplateElement>('[data-brand-card-template]');
  const tpl = document.createElement('template');
  if (innerTemplate) {
    tpl.innerHTML = innerTemplate.innerHTML.trim();
  }
  return tpl;
})();

const hydrateBrandCard = (card: HTMLElement, data: BrandCardDatum) => {
  const defaultImg = card.querySelector<HTMLImageElement>('[data-brand-img]');
  const hoverImg = card.querySelector<HTMLImageElement>('[data-brand-hover]');
  const logoImg = card.querySelector<HTMLImageElement>('[data-brand-logo]');
  const link = card.querySelector<HTMLAnchorElement>('.brand-card__link');

  if (defaultImg) {
    defaultImg.dataset.brandImg = data.img;
    defaultImg.alt = `${data.aria} visual`;
    defaultImg.src = `${steveOrigin()}/v1/brand-carousel/${data.img}`;
    defaultImg.decoding = 'async';
    defaultImg.loading = 'lazy';
  }

  if (hoverImg) {
    hoverImg.dataset.brandHover = data.hover;
    hoverImg.alt = '';
    hoverImg.src = `${steveOrigin()}/v1/brand-carousel/${data.hover}`;
    hoverImg.decoding = 'async';
    hoverImg.loading = 'lazy';
  }

  if (logoImg) {
    logoImg.dataset.brandLogo = data.logo;
    logoImg.alt = `${data.aria} logo`;
    logoImg.src = `${steveOrigin()}/v1/brand-carousel/${data.logo}`;
    logoImg.decoding = 'async';
    logoImg.loading = 'lazy';
  }

  if (link) {
    link.setAttribute('aria-label', data.aria);
    link.href = '#';
  }
};

export const injectOutcomeCards = () => {
  const outcomesTrack = document.querySelector<HTMLElement>(
    '[data-horizontal-slider-section] [data-horizontal-track]',
  );
  if (!outcomesTrack) return;

  const cardBodies = Array.from(
    outcomesTrack.querySelectorAll<HTMLElement>('.horizontal-slider-card__body'),
  );
  if (!cardBodies.length) return;

  cardBodies.forEach((body, index) => {
    const data = brandCardsData[index % brandCardsData.length];
    const cardNode = brandCardTemplate.content.firstElementChild?.cloneNode(
      true,
    ) as HTMLElement | null;
    if (!cardNode) return;

    body.innerHTML = '';
    body.appendChild(cardNode);
    hydrateBrandCard(cardNode, data);
  });
};
