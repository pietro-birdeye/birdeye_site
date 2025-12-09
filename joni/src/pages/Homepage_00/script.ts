import { steveOrigin } from '../../utils/steve';
import { hydrateIcons } from '../../utils/icons';
import { initHeader } from './header';
import { initFooter } from './footer';
import heroTemplate from './sections/hero/hero.html?raw';
import './sections/hero/hero.css';
import { initG2Animation } from '../../components/g2-animation/g2-animation';
import g2AnimationTemplate from '../../components/g2-animation/g2-animation.html?raw';
import { initEmailCta } from '../../components/email-cta/email-cta';
import emailCtaTemplate from '../../components/email-cta/email-cta.html?raw';
import { initHorizontalSlider } from '../../components/horizontal-slider/horizontal-slider';
import horizontalSliderTemplate from '../../components/horizontal-slider/horizontal-slider.html?raw';
import { initVariantSwitcher } from '../../components/variant-switcher/variantSwitcher';
import { initProductBlock } from '../../components/product-block/product-block';
import productBlockTemplate from '../../components/product-block/product-block.html?raw';
import { initSplitBlock } from '../../components/split-block/split-block';
import splitBlockTemplate from '../../components/split-block/split-block.html?raw';
import '../../components/variant-switcher/variant-switcher.css';
import industriesTemplate from '../../components/industries/industries.html?raw';
import { initIndustries } from '../../components/industries/industries';
import aiStackTemplate from '../../components/ai-stack/ai-stack.html?raw';
import { initAIStack } from '../../components/ai-stack/ai-stack';
import { injectOutcomeCards } from './sections/brand-cards/brand-cards';
import { injectCustomerCards } from './sections/customer-cards/customer-cards';
import mainValuesTemplate from '../../components/main-values/main-values.html?raw';
import { initMainValues } from '../../components/main-values/main-values';

const INLINE_ARROW = `<svg aria-hidden="true" focusable="false" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 3.5h-2v1.75h-5v2h5V9l2.5-2.5L10.5 4z"/><path d="M5 11.25h2v2h-2z"/><path d="M8 11.25h2v2H8z"/><path d="M11 11.25h2v2h-2z"/></svg>`;

const ensureInlineArrow = (scope: ParentNode) => {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-icon="arrow.up.right"]'));
  nodes.forEach((node) => {
    if (node.firstElementChild) return;
    node.innerHTML = INLINE_ARROW;
  });
};

const pageRoot = document.documentElement;
const heroMount = document.querySelector<HTMLElement>('[data-hero]');
const navMount = document.querySelector<HTMLElement>('[data-global-nav]');
const footerMount = document.querySelector<HTMLElement>('[data-footer]');
const horizontalSliderMount = document.querySelector<HTMLElement>('[data-horizontal-slider-section]');
const horizontalSliderCustomersMount = document.querySelector<HTMLElement>('[data-horizontal-slider-customers]');
const productBlockMount = document.querySelector<HTMLElement>('[data-product-block]');
const splitBlockMount = document.querySelector<HTMLElement>('[data-split-block]');
const industriesMount = document.querySelector<HTMLElement>('[data-industries]');
const aiStackMount = document.querySelector<HTMLElement>('[data-ai-stack]');
const mainValuesMount = document.querySelector<HTMLElement>('[data-main-values]');

if (navMount) {
  initHeader(navMount);
}

if (heroMount) {
  heroMount.innerHTML = heroTemplate;
  const animationMount = heroMount.querySelector<HTMLElement>('[data-g2-animation-mount]');
  const emailCtaMount = heroMount.querySelector<HTMLElement>('[data-email-cta]');
  if (animationMount) {
    animationMount.innerHTML = g2AnimationTemplate;
    initG2Animation(animationMount);
  }
  if (emailCtaMount) {
    emailCtaMount.innerHTML = emailCtaTemplate;
    initEmailCta();
  }
}

if (horizontalSliderMount) {
  horizontalSliderMount.innerHTML = horizontalSliderTemplate;
  const section = horizontalSliderMount.querySelector<HTMLElement>('[data-horizontal-slider]');
  const heading = section?.querySelector<HTMLElement>('.horizontal-slider__header h2');
  const headingText = horizontalSliderMount.dataset.heading || 'Outcomes';
  const sectionName = horizontalSliderMount.dataset.sectionName || headingText;
  section?.setAttribute('data-section-name', sectionName);
  if (heading) {
    heading.classList.add('display-hero--stacked');
    heading.innerHTML =
      '<span class="display-hero__line">Trusted by the biggest</span><span class="display-hero__line">multi-location brands globally</span>';
  }
  injectOutcomeCards();
}

if (horizontalSliderCustomersMount) {
  horizontalSliderCustomersMount.innerHTML = horizontalSliderTemplate;
  const section = horizontalSliderCustomersMount.querySelector<HTMLElement>('[data-horizontal-slider]');
  const heading = section?.querySelector<HTMLElement>('.horizontal-slider__header h2');
  const headingText = horizontalSliderCustomersMount.dataset.heading || 'Customers';
  const sectionName = horizontalSliderCustomersMount.dataset.sectionName || headingText;
  section?.setAttribute('data-section-name', sectionName);
  if (heading) heading.textContent = headingText;
  injectCustomerCards();
}

if (productBlockMount) {
  productBlockMount.innerHTML = productBlockTemplate;
  initProductBlock();
}

if (splitBlockMount) {
  splitBlockMount.innerHTML = splitBlockTemplate;
  ensureInlineArrow(splitBlockMount);
  hydrateIcons(splitBlockMount);
  initSplitBlock();
}

if (industriesMount) {
  industriesMount.innerHTML = industriesTemplate;
  hydrateIcons(industriesMount);
  ensureInlineArrow(industriesMount);
  initIndustries();
}

if (aiStackMount) {
  aiStackMount.innerHTML = aiStackTemplate;
  ensureInlineArrow(aiStackMount);
  hydrateIcons(aiStackMount);
  initAIStack();
}

// Main values intentionally omitted on Homepage_00

initFooter(footerMount);

hydrateIcons(pageRoot);
ensureInlineArrow(pageRoot);
initVariantSwitcher();
initHorizontalSlider();
