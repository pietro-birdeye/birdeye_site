import {
  ensureSteveComponentStylesheet,
  ensureSteveGlobalComponentsStylesheet,
  ensureSteveTokensStylesheet,
  steveOrigin,
} from './utils/steve';
import { hydrateIcons } from './utils/icons';
import { mountGlobalNav } from './components/globalNav';
import type { AnimationItem } from 'lottie-web';

ensureSteveTokensStylesheet();
ensureSteveComponentStylesheet('button');
ensureSteveGlobalComponentsStylesheet();
document.documentElement.style.setProperty(
  '--stage-hero-bg-image',
  `url(${steveOrigin()}/v1/imgs/pink_bgr.jpg)`,
);

const g2Base = `${steveOrigin()}/v1/imgs/g2_2025`;
const g2Images = Array.from(document.querySelectorAll<HTMLImageElement>('[data-g2-src]'));
const g2Wrapper = document.querySelector<HTMLElement>('.bblock-g2-hero');
const g2Dots = Array.from(document.querySelectorAll<SVGCircleElement>('.g2-competitors circle'));
const g2Logo = document.querySelector<HTMLImageElement>('[data-g2-logo]');
const pageRoot = document.documentElement;
const brandImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-img]'));
const brandHoverImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-hover]'));
const brandLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-brand-logo]'));
const abstractMedias = Array.from(document.querySelectorAll<HTMLElement>('[data-abstract-img]'));
const brandRail = document.querySelector<HTMLElement>('[data-brand-rail]');
const brandPrev = document.querySelector<HTMLButtonElement>('[data-brand-prev]');
const brandNext = document.querySelector<HTMLButtonElement>('[data-brand-next]');
const splitItems = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-split-img]'));
const splitHero = document.querySelector<HTMLImageElement>('[data-split-hero]');
const splitLottie = document.querySelector<HTMLElement>('[data-split-lottie]');
const industryImages = Array.from(document.querySelectorAll<HTMLImageElement>('[data-industry-img]'));
const industryBg = document.querySelector<HTMLElement>('[data-industry-bg]');
const industryLottieContainer = document.querySelector<HTMLElement>('[data-industry-lottie]');
const industryTabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.industries-tab'));
const industryQuote = document.querySelector<HTMLElement>('[data-industry-quote]');
const industryQuoteSub = document.querySelector<HTMLElement>('[data-industry-quote-sub]');
const industryName = document.querySelector<HTMLElement>('[data-industry-name]');
const industryCompany = document.querySelector<HTMLElement>('[data-industry-company]');
let industryLottiePlayer: AnimationItem | null = null;
const aiLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-ai-logo]'));
const aiStackBlocks = Array.from(document.querySelectorAll<HTMLElement>('.aistack-block'));
const AISTACK_BG_MAP: Record<string, string> = {
  outcomes: 'outcomes.jpg',
  agents: 'agents.jpg',
  models: 'models.jpg',
};
let splitLottiePlayer: AnimationItem | null = null;
let lottieLibPromise: Promise<typeof import('lottie-web')> | null = null;

const loadLottieLib = () => {
  if (!lottieLibPromise) {
    lottieLibPromise = import('lottie-web');
  }
  return lottieLibPromise;
};

if (g2Logo) {
  g2Logo.src = `${g2Base}/g2logo.svg`;
  g2Logo.decoding = 'async';
}

let pending = g2Images.length;

g2Images.forEach((img) => {
  const file = img.dataset.g2Src;
  if (!file) {
    pending -= 1;
    return;
  }
  img.src = `${g2Base}/${file}`;
  img.decoding = 'async';
  const settle = () => {
    pending -= 1;
    if (pending <= 0 && g2Wrapper) {
      g2Dots.forEach((dot, index) => {
        dot.style.animationDelay = `${0.6 + index * 0.05}s`;
      });
      g2Wrapper.classList.add('g2-animating');
    }
  };
  img.addEventListener('load', settle, { once: true });
  img.addEventListener('error', settle, { once: true });
});

// Fallback: if loads hang, start animation after 1s
setTimeout(() => {
  if (g2Wrapper && !g2Wrapper.classList.contains('g2-animating')) {
    g2Dots.forEach((dot, index) => {
      dot.style.animationDelay = `${0.6 + index * 0.05}s`;
    });
    g2Wrapper.classList.add('g2-animating');
  }
}, 1000);

const mountPoint = document.querySelector<HTMLElement>('[data-global-nav]');
if (mountPoint) {
  mountGlobalNav(mountPoint);
  hydrateIcons(mountPoint);
}

// Hydrate any page-level Harmony icons (e.g., display hero sparkles)
hydrateIcons(pageRoot);

brandImages.forEach((img) => {
  const file = img.dataset.brandImg;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

brandHoverImages.forEach((img) => {
  const file = img.dataset.brandHover;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

brandLogos.forEach((img) => {
  const file = img.dataset.brandLogo;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/brand-carousel/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

abstractMedias.forEach((el) => {
  const file = el.dataset.abstractImg;
  if (!file) return;
  el.style.setProperty('--brand-abstract-img', `url(${steveOrigin()}/v1/imgs/abstract/${file})`);
});

aiLogos.forEach((img) => {
  const file = img.dataset.aiLogo;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/imgs/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

aiStackBlocks.forEach((block) => {
  const variant = block.classList.contains('aistack-block--outcomes')
    ? 'outcomes'
    : block.classList.contains('aistack-block--agents')
      ? 'agents'
      : block.classList.contains('aistack-block--models')
        ? 'models'
        : null;
  if (variant && AISTACK_BG_MAP[variant]) {
    const file = AISTACK_BG_MAP[variant];
    block.style.setProperty(
      '--aistack-bg-image',
      `url(${steveOrigin()}/v1/imgs/AI_Stack_Block/AI_block_bgrs/${file})`,
    );
  }

  const title = block.querySelector<HTMLElement>('.aistack-block__title');
  if (!title) return;

  const setExpanded = (expanded: boolean) => {
    block.dataset.expanded = expanded ? 'true' : 'false';
    title.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  };

  title.setAttribute('role', 'button');
  title.tabIndex = 0;
  setExpanded(false);

  const closeOthers = () => {
    aiStackBlocks.forEach((other) => {
      if (other !== block) {
        other.dataset.expanded = 'false';
        const otherTitle = other.querySelector<HTMLElement>('.aistack-block__title');
        if (otherTitle) otherTitle.setAttribute('aria-expanded', 'false');
      }
    });
  };

  const openThis = () => {
    closeOthers();
    setExpanded(true);
  };

  const closeThis = () => {
    setExpanded(false);
  };

  title.addEventListener('click', (event) => {
    event.preventDefault();
    openThis();
  });
  title.addEventListener('mouseenter', openThis);
  block.addEventListener('mouseenter', openThis);
  block.addEventListener('mouseleave', closeThis);
  title.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openThis();
    }
  });
});

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

// Simple scroll controls for brand rail
const scrollStep = () => (brandRail ? brandRail.clientWidth * 0.8 : 0);

if (brandPrev && brandRail) {
  brandPrev.addEventListener('click', () => {
    brandRail.scrollBy({ left: -scrollStep(), behavior: 'smooth' });
  });
}

if (brandNext && brandRail) {
  brandNext.addEventListener('click', () => {
    brandRail.scrollBy({ left: scrollStep(), behavior: 'smooth' });
  });
}

// Split block image swapping
if (splitHero && splitItems.length) {
  const setActive = (btn: HTMLButtonElement) => {
    splitItems.forEach((b) => {
      const toggle = b.querySelector<HTMLElement>('.split-block__item-toggle');
      b.classList.toggle('is-active', b === btn);
      b.setAttribute('aria-expanded', b === btn ? 'true' : 'false');
      if (toggle) {
        toggle.textContent = b === btn ? '−' : '+';
      }
    });
    const file = btn.dataset.splitImg;
    if (file) {
      splitHero.src = `${steveOrigin()}/v1/split-block/${file}`;
      splitHero.decoding = 'async';
      splitHero.loading = 'lazy';
    }

    if (splitLottie) {
      const lottieSrc = `${steveOrigin()}/v1/split-block/Animations/Listings.json`;
      loadLottieLib()
        .then((lottie) => {
          if (splitLottiePlayer) {
            splitLottiePlayer.destroy();
          }
          splitLottiePlayer = lottie.loadAnimation({
            container: splitLottie,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: lottieSrc,
          });
        })
        .catch(() => {
          // ignore if lottie fails
        });
    }
  };

  splitItems.forEach((btn) => {
    btn.addEventListener('click', () => setActive(btn));
    btn.addEventListener('focus', () => setActive(btn));
    btn.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        setActive(btn);
      }
    });
  });

  setActive(splitItems[0]);
}

// Industries block asset hydration
industryImages.forEach((img) => {
  const file = img.dataset.industryImg;
  if (!file) return;
  img.src = `${steveOrigin()}/v1/industries/${file}`;
  img.decoding = 'async';
  img.loading = 'lazy';
});

if (industryBg) {
  const file = industryBg.dataset.industryBg;
  if (file) {
    industryBg.style.backgroundImage = `url(${steveOrigin()}/v1/industries/${file})`;
    industryBg.style.backgroundSize = 'cover';
    industryBg.style.backgroundPosition = 'center';
    industryBg.style.backgroundRepeat = 'no-repeat';
  }
}
