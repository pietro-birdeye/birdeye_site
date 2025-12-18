import {
  ensureSteveComponentStylesheet,
  ensureSteveGlobalComponentsStylesheet,
  ensureSteveTokensStylesheet,
} from '../../utils/steve';
import { hydrateIcons } from '../../utils/icons';
import { initHeader } from './header';
import { initFooter } from './footer';
import { initSplitBlock } from './sections/split-block/split-block';
import { initMainValues } from './sections/main-values/main-values';
import { initProductBlock } from './sections/product-block/product-block';
import { initVariantSwitcher } from '../../components/variant-switcher/variantSwitcher';
import { initHeroSection } from './sections/hero/hero';
import '../../components/variant-switcher/variant-switcher.css';
import { initHorizontalSlider } from '../../components/horizontal-slider/horizontal-slider';
import horizontalSliderTemplate from '../../components/horizontal-slider/horizontal-slider.html?raw';
import mainValuesTemplate from './sections/main-values/main-values.html?raw';
import productBlockTemplate from './sections/product-block/product-block.html?raw';
import splitBlockTemplate from './sections/split-block/split-block.html?raw';
import heroTemplate from './sections/hero/hero.html?raw';
import platformBlockTemplate from './sections/platform-block/platform-block.html?raw';
import { initPlatformBlock } from './sections/platform-block/platform-block';
import contextAITemplate from './sections/context-ai/context-ai.html?raw';
import { initContextAI } from './sections/context-ai/context-ai';
import { injectCustomerCards } from './sections/customer-cards/customer-cards';
import g2BragTemplate from './sections/g2-brag/g2-brag.html?raw';
import { initG2Brag } from './sections/g2-brag/g2-brag';

const INLINE_ARROW = `<svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3.5h-2v1.75h-5v2h5V9l2.5-2.5L10.5 4z"/><path d="M5 11.25h2v2h-2z"/><path d="M8 11.25h2v2H8z"/><path d="M11 11.25h2v2h-2z"/></svg>`;

const ensureInlineArrow = (scope: ParentNode) => {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-icon="arrow.up.right"]'));
  nodes.forEach((node) => {
    if (node.firstElementChild) return;
    node.innerHTML = INLINE_ARROW;
  });
};

document.body.classList.add('page-homepage-03');

ensureSteveTokensStylesheet();
ensureSteveComponentStylesheet('button');
ensureSteveGlobalComponentsStylesheet();

const pageRoot = document.documentElement;
const heroMount = document.querySelector<HTMLElement>('[data-hero]');
const navMount = document.querySelector<HTMLElement>('[data-global-nav]');
const footerMount = document.querySelector<HTMLElement>('[data-footer]');
const mainValuesMount = document.querySelector<HTMLElement>('[data-main-values]');
const productBlockMount = document.querySelector<HTMLElement>('[data-product-block]');
const splitBlockMount = document.querySelector<HTMLElement>('[data-split-block]');
const contextAIMount = document.querySelector<HTMLElement>('[data-context-ai]');
let horizontalSliderCustomersMount = document.querySelector<HTMLElement>(
  '[data-horizontal-slider-customers], [data-customer-results]',
);
let g2BragMount = document.querySelector<HTMLElement>('[data-g2-brag-section]');

let platformBlockMount = document.querySelector<HTMLElement>('[data-platform-block]');
if (!platformBlockMount) {
  platformBlockMount = document.createElement('div');
  platformBlockMount.setAttribute('data-platform-block', '');

  if (productBlockMount) {
    productBlockMount.insertAdjacentElement('beforebegin', platformBlockMount);
  } else if (mainValuesMount) {
    mainValuesMount.insertAdjacentElement('afterend', platformBlockMount);
  } else {
    document.body.appendChild(platformBlockMount);
  }
}

if (heroMount) {
  heroMount.innerHTML = heroTemplate;
}
initHeroSection();
const navController = initHeader(navMount);
const heroSection = document.querySelector<HTMLElement>('.stage-hero');
if (navController && heroSection) {
  navController.update({
    switchAt: {
      element: heroSection,
      offset: 24,
    },
  });
}
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

platformBlockMount.innerHTML = platformBlockTemplate;
hydrateIcons(platformBlockMount);
ensureInlineArrow(platformBlockMount);
initPlatformBlock();

if (splitBlockMount) {
  splitBlockMount.innerHTML = splitBlockTemplate;
  hydrateIcons(splitBlockMount);
  ensureInlineArrow(splitBlockMount);
  initSplitBlock();
}

if (contextAIMount) {
  contextAIMount.innerHTML = contextAITemplate;
  initContextAI(contextAIMount);
}

if (!horizontalSliderCustomersMount) {
  horizontalSliderCustomersMount = document.createElement('div');
  horizontalSliderCustomersMount.setAttribute('data-horizontal-slider-customers', '');
  horizontalSliderCustomersMount.dataset.heading = 'Customer outcomes';
  const footerSection = footerMount?.closest('.section-name');
  if (footerSection) {
    footerSection.insertAdjacentElement('beforebegin', horizontalSliderCustomersMount);
  } else {
    document.body.appendChild(horizontalSliderCustomersMount);
  }
}

if (!g2BragMount) {
  g2BragMount = document.createElement('div');
  g2BragMount.setAttribute('data-g2-brag-section', '');
  if (horizontalSliderCustomersMount) {
    horizontalSliderCustomersMount.insertAdjacentElement('beforebegin', g2BragMount);
  } else if (footerMount) {
    footerMount.insertAdjacentElement('beforebegin', g2BragMount);
  } else {
    document.body.appendChild(g2BragMount);
  }
}

if (g2BragMount) {
  g2BragMount.innerHTML = g2BragTemplate;
  initG2Brag();
}

if (horizontalSliderCustomersMount) {
  horizontalSliderCustomersMount.setAttribute('data-horizontal-slider-customers', '');
  horizontalSliderCustomersMount.innerHTML = horizontalSliderTemplate;
  const section = horizontalSliderCustomersMount.querySelector<HTMLElement>('[data-horizontal-slider]');
  const heading = section?.querySelector<HTMLElement>('.horizontal-slider__header h2');
  const headingText = horizontalSliderCustomersMount.dataset.heading || 'Customer outcomes';
  const sectionName = horizontalSliderCustomersMount.dataset.sectionName || headingText;
  section?.setAttribute('data-section-name', sectionName);
  if (heading) {
    heading.textContent = headingText;
    heading.classList.remove('display-h2');
    heading.classList.add('display-h1');
  }
  injectCustomerCards();
}

hydrateIcons(pageRoot);
ensureInlineArrow(pageRoot);
initHorizontalSlider();
initVariantSwitcher();
