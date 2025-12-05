import { steveOrigin } from '../../../../utils/steve';

type CustomerResult = {
  logo: string;
  logoAlt: string;
  href: string;
  ariaLabel: string;
  value: string;
  label: string;
  quoteHighlight?: string;
  quote: string;
  name: string;
  title: string;
};

const customerSlides: CustomerResult[] = [
  {
    logo: 'valley-veterinary.png',
    logoAlt: 'Valley Veterinary Care',
    href: 'https://www.birdeye.com/resources/case-studies/valley-veterinary-care/',
    ariaLabel: 'Valley Veterinary Care case study',
    value: '400%',
    label: 'increase in social publishing',
    quoteHighlight:
      'Birdeye Social allows us to post across locations while still connecting with our communities.',
    quote:
      'We can post in bulk while keeping the voice of the practice without the tediousness of posting individually to each account.',
    name: 'Meghan S. Bingham',
    title: 'CVPM Senior Operations Manager, Valley Veterinary Care',
  },
  {
    logo: 'superior-storage.png',
    logoAlt: 'Superior Storage',
    href: 'https://www.birdeye.com/resources/case-studies/superior-storage/',
    ariaLabel: 'Superior Storage case study',
    value: '86%',
    label: 'increase in direction requests',
    quote: 'Birdeye does the hard work, making our jobs easier, and provides top-notch service to better your business.',
    name: 'Brandon Wipperfurth',
    title: 'Director of Marketing, Superior Storage',
  },
  {
    logo: 'pacifica.png',
    logoAlt: 'Pacifica Senior Living',
    href: 'https://www.birdeye.com/resources/case-studies/pacifica-senior-living/',
    ariaLabel: 'Pacifica Senior Living case study',
    value: '25%',
    label: 'increase in digital interactions',
    quoteHighlight:
      'Having a platform where everything is monitored in one place makes such a difference and has streamlined our approach to social media.',
    quote:
      'This has such a huge impact on our processes and the amount of manpower it takes to keep up.',
    name: 'Carly Dodd',
    title: 'Content Manager, Pacifica Senior Living',
  },
  {
    logo: 'american-pacific.png',
    logoAlt: 'American Pacific Mortgage',
    href: 'https://www.birdeye.com/resources/case-studies/american-pacific-mortgage/',
    ariaLabel: 'American Pacific Mortgage case study',
    value: '131k',
    label: 'reviews with a 4.9 star rating',
    quote:
      "We love Birdeye. We've been a client for years and really value our partnership as well as what the platform can do.",
    quoteHighlight:
      "It's foundational to have something easy to automate review requests, monitor incoming feedback, and organize it in a way that works for us.",
    name: 'Melissa Wright',
    title: 'Chief Sales & Marketing Officer, American Pacific Mortgage',
  },
  {
    logo: 'fairlawn.png',
    logoAlt: 'Fairlawn Real Estate',
    href: 'https://www.birdeye.com/resources/case-studies/fairlawn-real-estate/',
    ariaLabel: 'Fairlawn Real Estate case study',
    value: '1.6k',
    label: 'new reviews across all sources',
    quoteHighlight:
      'Using Birdeye AI to respond to reviews has saved us so much time while ensuring we maintain a professional and personal connection with our residents.',
    quote:
      'It’s helped us consistently deliver high-quality communication across the board.',
    name: 'Allison Ross',
    title: 'Senior Marketing Specialist, Fairlawn Real Estate',
  },
];

const buildCard = (slide: CustomerResult) => {
  const card = document.createElement('article');
  // Use the new carousel + customer card styling; skip Harmony shell class to avoid its default padding.
  card.className = 'new-carousel__card customer-result-card';
  card.setAttribute('role', 'link');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', slide.ariaLabel);
  card.dataset.href = slide.href;

  const highlight = slide.quoteHighlight
    ? `<span class="customer-result-card__highlight">${slide.quoteHighlight}</span>`
    : '';

  card.innerHTML = `
    <div class="customer-result-card__band">
      <div class="customer-result-card__logo-wrap">
        <img
          class="customer-result-card__logo"
          alt="${slide.logoAlt}"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="customer-result-card__stat">
        <div class="customer-result-card__value heading-1">${slide.value}</div>
        <div class="customer-result-card__label heading-5">${slide.label}</div>
      </div>
      <span class="customer-result-card__arrow" data-icon="arrow.up.right" aria-hidden="true"></span>
    </div>
    <p class="customer-result-card__quote body-xl">
      ${highlight}
      ${slide.quote}
    </p>
    <div class="customer-result-card__meta">
      <div class="customer-result-card__name heading-6">${slide.name}</div>
      <div class="customer-result-card__title body-s">${slide.title}</div>
    </div>
  `;

  const logo = card.querySelector<HTMLImageElement>('.customer-result-card__logo');
  if (logo) {
    logo.src = `${steveOrigin()}/v1/logos/customer-results/${slide.logo}`;
  }

  const navigate = () => {
    window.location.href = slide.href;
  };
  card.addEventListener('click', navigate);
  card.addEventListener('keydown', (evt) => {
    if (evt.key === 'Enter' || evt.key === ' ') {
      evt.preventDefault();
      navigate();
    }
  });

  return card;
};

export const initNewCarousel = () => {
  const mount = document.querySelector<HTMLElement>('[data-new-carousel]');
  if (!mount) return;

  const track = mount.querySelector<HTMLElement>('[data-new-carousel-track]');
  const scroller = mount.querySelector<HTMLElement>('[data-new-carousel-wrapper]');
  const prevButtons = mount.querySelectorAll<HTMLButtonElement>('[data-new-carousel-prev]');
  const nextButtons = mount.querySelectorAll<HTMLButtonElement>('[data-new-carousel-next]');

  if (!track || !scroller) return;

  customerSlides.forEach((slide) => {
    track.appendChild(buildCard(slide));
  });

  let currentIndex = 0;
  let isDragging = false;

  const updateButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scroller;
    const canScrollLeft = scrollLeft > 0;
    const canScrollRight = scrollLeft < scrollWidth - clientWidth - 10;
    prevButtons.forEach((btn) => (btn.disabled = !canScrollLeft));
    nextButtons.forEach((btn) => (btn.disabled = !canScrollRight));
  };

  const scrollToIndex = (index: number) => {
    const slideWidth = scroller.scrollWidth / customerSlides.length;
    currentIndex = index;
    scroller.scrollTo({
      left: slideWidth * index,
      behavior: 'smooth',
    });
    updateButtons();
  };

  const handlePrev = () => {
    if (currentIndex === 0) return;
    scrollToIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    if (currentIndex >= customerSlides.length - 1) return;
    scrollToIndex(Math.min(customerSlides.length - 1, currentIndex + 1));
  };

  prevButtons.forEach((btn) => btn.addEventListener('click', handlePrev));
  nextButtons.forEach((btn) => btn.addEventListener('click', handleNext));

  scroller.addEventListener('scroll', updateButtons);

  const onDragStart = () => {
    isDragging = true;
  };
  const onDragEnd = () => {
    isDragging = false;
    const slideWidth = scroller.scrollWidth / customerSlides.length;
    const snappedIndex = Math.round(scroller.scrollLeft / slideWidth);
    currentIndex = Math.min(customerSlides.length - 1, Math.max(0, snappedIndex));
    scrollToIndex(currentIndex);
  };

  scroller.addEventListener('mousedown', onDragStart);
  scroller.addEventListener('touchstart', onDragStart);
  scroller.addEventListener('mouseup', onDragEnd);
  scroller.addEventListener('mouseleave', () => {
    if (isDragging) onDragEnd();
  });
  scroller.addEventListener('touchend', onDragEnd);

  updateButtons();
};
