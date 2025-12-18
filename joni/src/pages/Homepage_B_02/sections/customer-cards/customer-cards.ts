import { steveOrigin } from '../../../../utils/steve';
import customerCardsTemplateString from './customer-cards.html?raw';

type CustomerCardDatum = {
  logo: string;
  alt: string;
  value: string;
  label: string;
  highlight?: string;
  quote: string;
  name: string;
  title: string;
  href: string;
};

const customerCardsData: CustomerCardDatum[] = [
  {
    logo: 'valley-veterinary.png',
    alt: 'Valley Veterinary Care',
    value: '400%',
    label: 'increase in social publishing',
    highlight: 'Birdeye Social allows us to post across locations while still connecting with our communities.',
    quote:
      'We can post in bulk while keeping the voice of the practice without the tediousness of posting individually to each account.',
    name: 'Meghan S. Bingham',
    title: 'CVPM Senior Operations Manager, Valley Veterinary Care',
    href: 'https://www.birdeye.com/resources/case-studies/valley-veterinary-care/',
  },
  {
    logo: 'superior-storage.png',
    alt: 'Superior Storage',
    value: '86%',
    label: 'increase in direction requests',
    quote: 'Birdeye does the hard work, making our jobs easier, and provides top-notch service to better your business.',
    name: 'Brandon Wipperfurth',
    title: 'Director of Marketing, Superior Storage',
    href: 'https://www.birdeye.com/resources/case-studies/superior-storage/',
  },
  {
    logo: 'pacifica.png',
    alt: 'Pacifica Senior Living',
    value: '25%',
    label: 'increase in digital interactions',
    highlight:
      'Having a platform where everything is monitored in one place makes such a difference and has streamlined our approach to social media.',
    quote: 'This has such a huge impact on our processes and the amount of manpower it takes to keep up.',
    name: 'Carly Dodd',
    title: 'Content Manager, Pacifica Senior Living',
    href: 'https://www.birdeye.com/resources/case-studies/pacifica-senior-living/',
  },
  {
    logo: 'american-pacific.png',
    alt: 'American Pacific Mortgage',
    value: '131k',
    label: 'reviews with a 4.9 star rating',
    highlight:
      "It's foundational to have something easy to automate review requests, monitor incoming feedback, and organize it in a way that works for us.",
    quote: "We love Birdeye. We've been a client for years and really value our partnership as well as what the platform can do.",
    name: 'Melissa Wright',
    title: 'Chief Sales & Marketing Officer, American Pacific Mortgage',
    href: 'https://www.birdeye.com/resources/case-studies/american-pacific-mortgage/',
  },
  {
    logo: 'fairlawn.png',
    alt: 'Fairlawn Real Estate',
    value: '1.6k',
    label: 'new reviews across all sources',
    highlight:
      'Using Birdeye AI to respond to reviews has saved us so much time while ensuring we maintain a professional and personal connection with our residents.',
    quote: "It’s helped us consistently deliver high-quality communication across the board.",
    name: 'Allison Ross',
    title: 'Senior Marketing Specialist, Fairlawn Real Estate',
    href: 'https://www.birdeye.com/resources/case-studies/fairlawn-real-estate/',
  },
];

const customerCardTemplate = (() => {
  const wrapper = document.createElement('template');
  wrapper.innerHTML = customerCardsTemplateString.trim();
  const innerTemplate = wrapper.content.querySelector<HTMLTemplateElement>('[data-customer-card-template]');
  const tpl = document.createElement('template');
  if (innerTemplate) {
    tpl.innerHTML = innerTemplate.innerHTML.trim();
  }
  return tpl;
})();

const hydrateCustomerCard = (card: HTMLElement, data: CustomerCardDatum) => {
  const logoImg = card.querySelector<HTMLImageElement>('[data-customer-logo]');
  const value = card.querySelector<HTMLElement>('.customer-result-card__value');
  const label = card.querySelector<HTMLElement>('.customer-result-card__label');
  const highlight = card.querySelector<HTMLElement>('.customer-result-card__highlight');
  const quoteRest = card.querySelector<HTMLElement>('.customer-result-card__quote-rest');
  const name = card.querySelector<HTMLElement>('.customer-result-card__name');
  const title = card.querySelector<HTMLElement>('.customer-result-card__title');

  if (logoImg) {
    logoImg.dataset.customerLogo = data.logo;
    logoImg.alt = data.alt;
    logoImg.src = `${steveOrigin()}/v1/logos/customer-results/${data.logo}`;
    logoImg.decoding = 'async';
    logoImg.loading = 'lazy';
  }

  if (value) value.textContent = data.value;
  if (label) label.textContent = data.label;

  if (highlight) {
    if (data.highlight) {
      highlight.textContent = data.highlight;
    } else {
      highlight.remove();
    }
  }

  if (quoteRest) {
    quoteRest.textContent = data.quote;
  }

  if (name) name.textContent = data.name;
  if (title) title.textContent = data.title;

  card.setAttribute('data-href', data.href);
  card.setAttribute('aria-label', `${data.alt} case study`);
};

export const injectCustomerCards = () => {
  const track = document.querySelector<HTMLElement>('[data-horizontal-slider-customers] [data-horizontal-track]');
  if (!track) return;

  const cardBodies = Array.from(track.querySelectorAll<HTMLElement>('.horizontal-slider-card__body'));
  if (!cardBodies.length) return;

  cardBodies.forEach((body, index) => {
    const data = customerCardsData[index % customerCardsData.length];
    const cardNode = customerCardTemplate.content.firstElementChild?.cloneNode(true) as HTMLElement | null;
    if (!cardNode) return;

    body.innerHTML = '';
    body.appendChild(cardNode);
    hydrateCustomerCard(cardNode, data);
  });
};
