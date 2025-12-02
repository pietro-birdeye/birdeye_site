import { steveOrigin } from '../../../../utils/steve';
import { loadLottieLib, type AnimationItem } from '../../../../utils/lottie';

type IndustryContent = {
  bg: string;
  overlay: string;
  quote: string;
  name: string;
  company: string;
};

const INDUSTRY_ASSETS: Record<string, IndustryContent> = {
  healthcare: {
    bg: 'industries_photos/healthcare.jpg',
    overlay: 'industries_photos/Industries_graphic/healthcare.svg',
    quote:
      '<span class="quote-highlight">The best review generation platform on the market!</span> It uses cutting-edge AI to analyze customer sentiments, allowing for precise and insightful feedback. A five-star solution all the way!',
    name: 'Ken Norquist',
    company: "Axia Women's Health",
  },
  realestate: {
    bg: 'industries_photos/realestate.jpg',
    overlay: 'lottie/real_estate_desktop_v2.json',
    quote:
      '<span class="quote-highlight">Birdeye’s AI-powered tools have streamlined operations.</span> From improving responses to addressing trends proactively, we’ve seen a noticeable difference in efficiency and resident satisfaction.',
    name: 'Allison Ross',
    company: 'Fairlawn Real Estate',
  },
  finance: {
    bg: 'industries_photos/finance.jpg',
    overlay: 'lottie/finance_desktop_v3.json',
    quote:
      '<span class="quote-highlight">Surveys have been a game-changer in delighting our customers.</span> Understanding feedback allows us to correct any issues before they escalate.',
    name: 'Jeff Smith',
    company: 'Guaranteed Rate',
  },
  'self-storage': {
    bg: 'industries_photos/self-storage.jpg',
    overlay: 'lottie/self-storage-desktop.json',
    quote:
      'Before Birdeye, our average monthly Google review count had been 25 reviews across all locations. <span class="quote-highlight">After implementing Birdeye, we saw an immediate difference of 45–50 new reviews each month.</span>',
    name: 'Brian Wipperfurth',
    company: 'Superior Storage',
  },
  dental: {
    bg: 'industries_photos/dental.jpg',
    overlay: 'lottie/dental_desktop_v2.json',
    quote:
      '<span class="quote-highlight">Birdeye is a game changer for patient experience.</span> We can message all our patients using one central inbox.',
    name: 'Brandon Dowdy-Ernst',
    company: 'Smile Workshop',
  },
  restaurants: {
    bg: 'industries_photos/restaurants.jpg',
    overlay: 'lottie/restaurants-desktop.json',
    quote:
      '<span class="quote-highlight">Birdeye’s AI tools allow us to scale effortlessly.</span> Whether we’re at 72 diners or 172, the platform grows with us and continues to deliver exactly what we need.',
    name: 'Denise D’Amico Johnson',
    company: 'Black Bear Diner',
  },
  legal: {
    bg: 'industries_photos/legal01.jpg',
    overlay: 'lottie/legal_desktop_v2.json',
    quote: '<span class="quote-highlight">10 years later and my firm is still finding value from Birdeye reviews, surveys, and messaging.</span>',
    name: 'Lanette S',
    company: 'All Family Law Group',
  },
  auto: {
    bg: 'industries_photos/auto.jpg',
    overlay: 'lottie/auto_destop_v2.json',
    quote:
      '<span class="quote-highlight">With Birdeye, we’ve turned customer experience insights into opportunities to build trust and credibility.</span>',
    name: 'Carmen Garcia',
    company: 'Strickland Brothers 10 Minute Oil Change',
  },
  retail: {
    bg: 'industries_photos/realestate.jpg',
    overlay: 'lottie/retail_desktop_v2.json',
    quote:
      '<span class="quote-highlight">Birdeye helps us zone in on hundreds of different locations, identify individual areas of opportunity, and then come up with really detailed action plans that leverages our strengths.</span>',
    name: 'Holly Carrol',
    company: "David's Bridal",
  },
};

export const initIndustries = () => {
  const industryImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-industry-img]'));
  const industryBg = document.querySelector<HTMLElement>('[data-industry-bg]');
  const industryLottieContainer = document.querySelector<HTMLElement>('[data-industry-lottie]');
  const industryTabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.industries-tab'));
  const tabsWrapper = document.querySelector<HTMLElement>('.industries-tabs');
  const tabsContainer = tabsWrapper?.querySelector<HTMLElement>('.industries-block__tabs');
  const prevBtn = tabsWrapper?.querySelector<HTMLButtonElement>('[data-industries-prev]');
  const nextBtn = tabsWrapper?.querySelector<HTMLButtonElement>('[data-industries-next]');
  const prevIconImg = tabsWrapper?.querySelector<HTMLImageElement>('[data-industries-prev-icon]');
  const nextIconImg = tabsWrapper?.querySelector<HTMLImageElement>('[data-industries-next-icon]');
  const industryQuote = document.querySelector<HTMLElement>('[data-industry-quote]');
  const industryQuoteSub = document.querySelector<HTMLElement>('[data-industry-quote-sub]');
  const industryName = document.querySelector<HTMLElement>('[data-industry-name]');
  const industryCompany = document.querySelector<HTMLElement>('[data-industry-company]');
  let industryLottiePlayer: AnimationItem | null = null;

  industryImages.forEach((img) => {
    const file = img.dataset.industryImg;
    if (!file) return;
    img.src = `${steveOrigin()}/v1/industries/${file}`;
    img.decoding = 'async';
    img.loading = 'lazy';
  });

  const setIndustry = (slug: string) => {
    const assets = INDUSTRY_ASSETS[slug] ?? INDUSTRY_ASSETS.healthcare;

    industryTabs.forEach((tab) => {
      const isActive = tab.dataset.industry === slug;
      tab.classList.toggle('is-active', isActive);
      tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });

    if (industryBg && assets.bg) {
      industryBg.style.backgroundImage = `url(${steveOrigin()}/v1/industries/${assets.bg})`;
      industryBg.dataset.industryBg = assets.bg;
      industryBg.style.backgroundSize = 'cover';
      industryBg.style.backgroundPosition = 'center';
      industryBg.style.backgroundRepeat = 'no-repeat';
    }

    if (industryLottieContainer && assets.overlay) {
      const overlayUrl = `${steveOrigin()}/v1/industries/${assets.overlay}`;
      if (assets.overlay.endsWith('.json')) {
        industryLottieContainer.innerHTML = '';
        loadLottieLib()
          .then((lottie) => {
            if (industryLottiePlayer) {
              industryLottiePlayer.destroy();
            }
            industryLottiePlayer = lottie.loadAnimation({
              container: industryLottieContainer,
              renderer: 'svg',
              loop: false,
              autoplay: true,
              path: overlayUrl,
            });
          })
          .catch(() => {
            // ignore lottie failures
          });
      }
    }

    if (industryQuote) {
      industryQuote.innerHTML = assets.quote;
    }
    if (industryQuoteSub) {
      industryQuoteSub.textContent = '';
      industryQuoteSub.style.display = 'none';
    }
    if (industryName) {
      industryName.textContent = assets.name;
    }
    if (industryCompany) {
      industryCompany.textContent = assets.company;
    }
  };

  if (industryBg) {
    const file = industryBg.dataset.industryBg;
    if (file) {
      industryBg.style.backgroundImage = `url(${steveOrigin()}/v1/industries/${file})`;
      industryBg.style.backgroundSize = 'cover';
      industryBg.style.backgroundPosition = 'center';
      industryBg.style.backgroundRepeat = 'no-repeat';
    }
  }

  if (prevIconImg) {
    prevIconImg.src = `${steveOrigin()}/v1/icons/Left.svg`;
  }
  if (nextIconImg) {
    nextIconImg.src = `${steveOrigin()}/v1/icons/Right.svg`;
  }

  if (industryTabs.length) {
    const defaultSlug =
      industryTabs.find((tab) => tab.classList.contains('is-active'))?.dataset.industry ??
      industryTabs[0]?.dataset.industry;
    if (defaultSlug) {
      setIndustry(defaultSlug);
    }
    industryTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const slug = tab.dataset.industry;
        if (!slug) return;
        setIndustry(slug);
      });
    });
  }

  if (tabsContainer) {
    const updateOverflow = () => {
      const overflowAmount = tabsContainer.scrollWidth - tabsContainer.clientWidth;
      if (overflowAmount > 16) {
        tabsContainer.classList.add('has-overflow');
        tabsWrapper?.classList.add('has-overflow');
      } else {
        tabsContainer.classList.remove('has-overflow');
        tabsWrapper?.classList.remove('has-overflow');
      }
    };

    const scrollStep = () => tabsContainer.clientWidth * 0.6;

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        tabsContainer.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        tabsContainer.scrollBy({ left: scrollStep(), behavior: 'smooth' });
      });
    }

    updateOverflow();
    requestAnimationFrame(updateOverflow);
    window.addEventListener('resize', updateOverflow);
    window.addEventListener('load', updateOverflow);
  }
};
