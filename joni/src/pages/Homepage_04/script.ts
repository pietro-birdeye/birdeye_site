import { hydrateIcons } from '../../utils/icons';
import { steveOrigin } from '../../utils/steve';
import lottie from 'lottie-web';
import { initHeader } from './header';
import { initFooter } from './footer';
import heroTemplate from './sections/hero/hero.html?raw';
import './sections/hero/hero.css';
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
import menuScrollTemplate from '../../components/menu-scroll/menu-scroll.html?raw';
import { initMenuScroll } from '../../components/menu-scroll/menu-scroll';

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
const menuScrollMount = document.querySelector<HTMLElement>('[data-menu-scroll]');

const loadScriptOnce = (src: string) =>
  new Promise<void>((resolve, reject) => {
    if (document.querySelector(`script[data-inline-src="${src}"]`)) {
      resolve();
      return;
    }
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.dataset.inlineSrc = src;
    script.src = src;
    script.onload = () => resolve();
    script.onerror = (err) => reject(err);
    document.head.appendChild(script);
  });

const loadGsapFromCdn = async () => {
  await loadScriptOnce('https://cdn.jsdelivr.net/npm/gsap@3/dist/gsap.min.js');
  await loadScriptOnce('https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/MorphSVGPlugin3.min.js');
  return {
    gsap: (window as any).gsap,
    MorphSVGPlugin: (window as any).MorphSVGPlugin,
  };
};

if (navMount) {
  initHeader(navMount);
}

if (heroMount) {
  heroMount.innerHTML = heroTemplate;
  const heroVideo = heroMount.querySelector<HTMLVideoElement>('[data-hero-video]');
  const animationMount = heroMount.querySelector<HTMLElement>('[data-hero-animation]');
  const emailCtaMount = heroMount.querySelector<HTMLElement>('[data-email-cta]');
  if (heroVideo) {
    const videoBase = `${steveOrigin()}/v1/imgs/library/sky01`;
    const posterUrl = `${steveOrigin()}/v1/imgs/abstract/SKY_01blue.jpg`;
    const source = heroVideo.querySelector('source');
    heroVideo.poster = posterUrl;
    heroVideo.preload = 'metadata';
    heroVideo.muted = true;
    heroVideo.playsInline = true;
    heroVideo.autoplay = true;
    if (source) source.src = `${videoBase}.mp4`;
    const playSafe = () =>
      heroVideo
        .play()
        .catch(() => {
          heroVideo.pause();
        });
    heroVideo.addEventListener('loadeddata', playSafe, { once: true });
    heroVideo.load();
  }
  if (animationMount) {
    const placeholder = document.createElement('div');
    placeholder.className = 'hero-lottie-placeholder';
    placeholder.style.backgroundImage = `url(${steveOrigin()}/v1/imgs/library/sky01.jpg)`;
    animationMount.appendChild(placeholder);

    const loadLottie = () => {
      const anim = lottie.loadAnimation({
        container: animationMount,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `${steveOrigin()}/v1/imgs/Product_Dashboards/FD_REVIEWS.json`,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid meet',
          clearCanvas: true,
        },
      });
      anim.addEventListener('DOMLoaded', () => placeholder.remove());
      anim.setSpeed(0.64); // slow down ~20% more from prior speed
    };

    if ('requestIdleCallback' in window) {
      (window as typeof window & { requestIdleCallback: any }).requestIdleCallback(loadLottie, {
        timeout: 500,
      });
    } else {
      setTimeout(loadLottie, 300);
    }
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

if (menuScrollMount) {
  menuScrollMount.innerHTML = menuScrollTemplate;
  initMenuScroll(menuScrollMount);

  loadGsapFromCdn()
    .then(({ gsap, MorphSVGPlugin }) => {
      if (!gsap || !MorphSVGPlugin) {
        console.warn('GSAP/MorphSVGPlugin failed to load; skipping icon morph.');
        return;
      }
      gsap.registerPlugin(MorphSVGPlugin);
      const shapes = Array.from(
        menuScrollMount.querySelectorAll<SVGPathElement>('[data-icon-morph]'),
      );
      const timelines = new Map<SVGPathElement, gsap.core.Timeline>();

      shapes.forEach((shape, idx) => {
        const magD = shape.dataset.magD;
        const checkD = shape.dataset.checkD;
        if (!magD || !checkD) return;
        gsap.set(shape, { attr: { d: magD }, transformOrigin: '50% 50%' });
        try {
          const tl = gsap
            .timeline({
              paused: true,
              defaults: { duration: 0.9, ease: 'power2.inOut' },
              delay: idx * 0.15,
            })
            .to(
              shape,
              {
                morphSVG: { shape: checkD, shapeIndex: 'auto', map: 'size' },
                scale: 0.98,
              },
              0,
            );
          timelines.set(shape, tl);
        } catch (err) {
          // Fallback: draw-on stroke animation so other icons still animate
          try {
            const length = shape.getTotalLength();
            gsap.set(shape, {
              strokeDasharray: length,
              strokeDashoffset: length,
              scale: 0.98,
            });
            const fallbackTl = gsap
              .timeline({
                paused: true,
                defaults: { duration: 0.9, ease: 'power2.inOut' },
                delay: idx * 0.15,
              })
              .to(shape, { strokeDashoffset: 0 }, 0)
              .to(shape, { scale: 1, duration: 0.4, ease: 'power1.out' }, 0.3);
            timelines.set(shape, fallbackTl);
          } catch (fallbackErr) {
            console.warn('Morph fallback failed for shape', shape, fallbackErr, err);
          }
        }
      });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as SVGPathElement;
            const tl = timelines.get(el);
            if (!tl) return;

            if (entry.isIntersecting) {
              if (el.dataset.morphPlayed === 'true') return;
              tl.play(0);
              el.dataset.morphPlayed = 'true';
            } else {
              // Reset when leaving viewport so it can replay on re-entry
              tl.pause(0);
              el.dataset.morphPlayed = 'false';
              gsap.set(el, { attr: { d: el.dataset.magD } });
            }
          });
        },
        {
          root: null,
          threshold: 0.35,
          rootMargin: '-100px 0px -20% 0px',
        },
      );

      shapes.forEach((shape) => observer.observe(shape));
    })
    .catch(() => {
      // swallow load errors for now
    });
}

// Split-block intentionally omitted on Homepage_04

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

if (mainValuesMount) {
  mainValuesMount.innerHTML = mainValuesTemplate;
  ensureInlineArrow(mainValuesMount);
  hydrateIcons(mainValuesMount);
  const mediaNodes = Array.from(
    mainValuesMount.querySelectorAll<HTMLElement>('.brand-card__media[data-abstract-img]'),
  );
  mediaNodes.forEach((node) => {
    node.dataset.abstractImg = 'SKY_01blue.jpg';
    node.dataset.abstractBase = 'SKY_01pink.jpg';
  });
  initMainValues();
}

initFooter(footerMount);

hydrateIcons(pageRoot);
ensureInlineArrow(pageRoot);
initVariantSwitcher();
initHorizontalSlider();
