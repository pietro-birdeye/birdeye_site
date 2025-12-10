import { steveOrigin } from '../../utils/steve';

type LogoItem = {
  slug: string;
  alt: string;
};

const LOGOS: LogoItem[] = [
  { slug: 'titlemax', alt: "Birdeye's Client: Titlemax" },
  { slug: 'smile-brands', alt: "Birdeye's Client: Smile Brands" },
  { slug: 'sono-bello', alt: "Birdeye's Client: Sono Bello" },
  { slug: 'blaze-pizza', alt: "Birdeye's Client: Blaze Pizza" },
  { slug: 'black-bear-diner', alt: "Birdeye's Client: Black Bear Diner" },
  { slug: 'hughston-clinic', alt: "Birdeye's Client: Hughston Clinic" },
  { slug: 'aspen-dental', alt: "Birdeye's Client: Aspen Dental" },
  { slug: 'davids-bridal', alt: "Birdeye's Client: David's Bridal" },
  { slug: 'national-storage', alt: "Birdeye's Client: National Storage" },
  { slug: 'superior-storage', alt: "Birdeye's Client: Superior Storage" },
  { slug: 'nva', alt: "Birdeye's Client: NVA" },
  { slug: 'apm', alt: "Birdeye's Client: APM" },
  { slug: 'ceasers', alt: "Birdeye's Client: Caesars" },
  { slug: 'coastal-ridge', alt: "Birdeye's Client: Coastal Ridge" },
  { slug: 'extra-space-storage', alt: "Birdeye's Client: Extra Space Storage" },
];

const logoSrc = (slug: string) =>
  `${steveOrigin()}/v1/brand-carousel/Logos/${slug}.png`;

const logoSrcSet = (slug: string) =>
  `${steveOrigin()}/v1/brand-carousel/Logos/${slug}.png 1x, ${steveOrigin()}/v1/brand-carousel/Logos/${slug}@2x.png 2x, ${steveOrigin()}/v1/brand-carousel/Logos/${slug}@3x.png 3x`;

export const initLogoSlider = (mount: HTMLElement | null) => {
  if (!mount) return;
  const rail = mount.querySelector<HTMLElement>('[data-logo-rail]');
  if (!rail) return;

  rail.innerHTML = '';
  LOGOS.forEach((logo) => {
    const wrap = document.createElement('div');
    wrap.className = 'logo-slider__logo';
    const img = document.createElement('img');
    img.src = logoSrc(logo.slug);
    img.srcset = logoSrcSet(logo.slug);
    img.alt = logo.alt;
    img.loading = 'lazy';
    img.decoding = 'async';
    wrap.appendChild(img);
    rail.appendChild(wrap);
  });
};
