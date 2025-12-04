import {
  ensureSteveComponentStylesheet,
  ensureSteveGlobalComponentsStylesheet,
  ensureSteveTokensStylesheet,
  steveOrigin,
} from '../../utils/steve';
import { hydrateIcons } from '../../utils/icons';
import { initHeader } from './header';
import { initFooter } from './footer';
import { initBrandCarouselSection } from './sections/brand-carousel/brand-carousel';
import { initProductBlock } from './sections/product-block/product-block';
import { initSplitBlock } from './sections/split-block/split-block';
import { initAIStack } from './sections/ai-stack/ai-stack';
import { initCustomerResultsSection } from './sections/customer-results/customer-results';
import { initVariantSwitcher } from '../../components/variant-switcher/variantSwitcher';
import { initHeroSection } from './sections/hero/hero';
import '../../components/variant-switcher/variant-switcher.css';
import aiStackTemplate from './sections/ai-stack/ai-stack.html?raw';
import brandCarouselTemplate from './sections/brand-carousel/brand-carousel.html?raw';
import productBlockTemplate from './sections/product-block/product-block.html?raw';
import splitBlockTemplate from './sections/split-block/split-block.html?raw';
import customerResultsTemplate from './sections/customer-results/customer-results.html?raw';
import industriesTemplate from './sections/industries/industries.html?raw';
import heroTemplate from './sections/hero/hero.html?raw';
import { initIndustries } from './sections/industries/industries';

const INLINE_ARROW = `<svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3.5h-2v1.75h-5v2h5V9l2.5-2.5L10.5 4z"/><path d="M5 11.25h2v2h-2z"/><path d="M8 11.25h2v2H8z"/><path d="M11 11.25h2v2h-2z"/></svg>`;

const ensureInlineArrow = (scope: ParentNode) => {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-icon="arrow.up.right"]'));
  nodes.forEach((node) => {
    if (node.firstElementChild) return;
    node.innerHTML = INLINE_ARROW;
  });
};

ensureSteveTokensStylesheet();
ensureSteveComponentStylesheet('button');
ensureSteveGlobalComponentsStylesheet();
document.documentElement.style.setProperty(
  '--stage-hero-bg-image',
  `url(${steveOrigin()}/v1/imgs/pink_bgr.jpg)`,
);

const pageRoot = document.documentElement;
const heroMount = document.querySelector<HTMLElement>('[data-hero]');
const navMount = document.querySelector<HTMLElement>('[data-global-nav]');
const footerMount = document.querySelector<HTMLElement>('[data-footer]');
const brandCarouselMount = document.querySelector<HTMLElement>('[data-brand-carousel]');
const productBlockMount = document.querySelector<HTMLElement>('[data-product-block]');
const splitBlockMount = document.querySelector<HTMLElement>('[data-split-block]');
const customerResultsMount = document.querySelector<HTMLElement>('[data-customer-results]');
const aiStackMount = document.querySelector<HTMLElement>('[data-ai-stack]');
const industriesMount = document.querySelector<HTMLElement>('[data-industries]');

if (navMount) {
  initHeader(navMount);
}

if (heroMount) {
  heroMount.innerHTML = heroTemplate;
}
initHeroSection();
initFooter(footerMount);

if (brandCarouselMount) {
  brandCarouselMount.innerHTML = brandCarouselTemplate;
  hydrateIcons(brandCarouselMount);
  ensureInlineArrow(brandCarouselMount);
  initBrandCarouselSection();
}

if (productBlockMount) {
  productBlockMount.innerHTML = productBlockTemplate;
  hydrateIcons(productBlockMount);
  ensureInlineArrow(productBlockMount);
  initProductBlock();
}

if (splitBlockMount) {
  splitBlockMount.innerHTML = splitBlockTemplate;
  hydrateIcons(splitBlockMount);
  ensureInlineArrow(splitBlockMount);
  initSplitBlock();
}

if (customerResultsMount) {
  customerResultsMount.innerHTML = customerResultsTemplate;
  hydrateIcons(customerResultsMount);
  ensureInlineArrow(customerResultsMount);
  initCustomerResultsSection();
}

if (industriesMount) {
  industriesMount.innerHTML = industriesTemplate;
  hydrateIcons(industriesMount);
  ensureInlineArrow(industriesMount);
  initIndustries();
}

if (aiStackMount) {
  aiStackMount.innerHTML = aiStackTemplate;
  hydrateIcons(aiStackMount);
  ensureInlineArrow(aiStackMount);
  initAIStack();
}

hydrateIcons(pageRoot);
ensureInlineArrow(pageRoot);
initVariantSwitcher();
