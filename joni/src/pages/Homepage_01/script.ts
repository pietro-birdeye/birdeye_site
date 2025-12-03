import {
  ensureSteveComponentStylesheet,
  ensureSteveGlobalComponentsStylesheet,
  ensureSteveTokensStylesheet,
  steveOrigin,
} from '../../utils/steve';
import { hydrateIcons } from '../../utils/icons';
import { initHeader } from '../../features/header';
import { initFooter } from '../../features/footer';
import { initG2Hero } from '../../features/g2Hero';
import { initBrandCarouselSection } from './sections/brand-carousel/brand-carousel';
import { initSplitBlock } from '../../features/splitBlock';
import { initAIStack } from './sections/ai-stack/ai-stack';
import { initMainValues } from './sections/main-values/main-values';
import { initProductBlock } from './sections/product-block/product-block';
import { initHarmonyCarousels } from '../../features/harmonyCarousel';
import { initCustomerResults } from '../../features/customerResults';
import { initVariantSwitcher } from '../../features/variantSwitcher';
import './variant-switcher.css';
import aiStackTemplate from './sections/ai-stack/ai-stack.html?raw';
import mainValuesTemplate from './sections/main-values/main-values.html?raw';
import productBlockTemplate from './sections/product-block/product-block.html?raw';
import brandCarouselTemplate from './sections/brand-carousel/brand-carousel.html?raw';
import splitBlockTemplate from './sections/split-block/split-block.html?raw';
import customerResultsTemplate from './sections/customer-results/customer-results.html?raw';
import industriesTemplate from './sections/industries/industries.html?raw';
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
const mountPoint = document.querySelector<HTMLElement>('[data-global-nav]');
const footerMount = document.querySelector<HTMLElement>('[data-footer]');
const mainValuesMount = document.querySelector<HTMLElement>('[data-main-values]');
const productBlockMount = document.querySelector<HTMLElement>('[data-product-block]');
const brandCarouselMount = document.querySelector<HTMLElement>('[data-brand-carousel]');
const splitBlockMount = document.querySelector<HTMLElement>('[data-split-block]');
const customerResultsMount = document.querySelector<HTMLElement>('[data-customer-results]');
const aiStackMount = document.querySelector<HTMLElement>('[data-ai-stack]');
const industriesMount = document.querySelector<HTMLElement>('[data-industries]');

initHeader(mountPoint);
initFooter(footerMount);

if (mainValuesMount) {
  mainValuesMount.innerHTML = mainValuesTemplate;
  hydrateIcons(mainValuesMount);
  ensureInlineArrow(mainValuesMount);
  initMainValues();
}

if (productBlockMount) {
  productBlockMount.innerHTML = productBlockTemplate;
  hydrateIcons(productBlockMount);
  ensureInlineArrow(productBlockMount);
  initProductBlock();
}

if (brandCarouselMount) {
  brandCarouselMount.innerHTML = brandCarouselTemplate;
  hydrateIcons(brandCarouselMount);
  ensureInlineArrow(brandCarouselMount);
  initBrandCarouselSection();
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
  initHarmonyCarousels();
  initCustomerResults();
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
initG2Hero();
initVariantSwitcher();
