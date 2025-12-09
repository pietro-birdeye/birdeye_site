import { steveOrigin } from '../../../../utils/steve';

const hydrateBrandCard = (card: HTMLElement) => {
  const defaultImg = card.querySelector<HTMLImageElement>('[data-brand-img]');
  const hoverImg = card.querySelector<HTMLImageElement>('[data-brand-hover]');
  const logoImg = card.querySelector<HTMLImageElement>('[data-brand-logo]');
  const link = card.querySelector<HTMLAnchorElement>('.brand-card__link');

  if (defaultImg?.dataset.brandImg) {
    defaultImg.src = `${steveOrigin()}/v1/brand-carousel/${defaultImg.dataset.brandImg}`;
  }
  if (hoverImg?.dataset.brandHover) {
    hoverImg.src = `${steveOrigin()}/v1/brand-carousel/${hoverImg.dataset.brandHover}`;
  }
  if (logoImg?.dataset.brandLogo) {
    logoImg.src = `${steveOrigin()}/v1/brand-carousel/${logoImg.dataset.brandLogo}`;
  }
  if (link) {
    link.href = '#';
  }
};

export const initNewCarousel = () => {
  const carousels = Array.from(
    document.querySelectorAll<HTMLElement>('.new-carousel[data-new-carousel]'),
  );
  if (!carousels.length) return;

  carousels.forEach((mount) => {
    const track = mount.querySelector<HTMLElement>('[data-new-carousel-track]');
    const scroller = mount.querySelector<HTMLElement>('[data-new-carousel-wrapper]');
    const prevButtons = mount.querySelectorAll<HTMLButtonElement>('[data-new-carousel-prev]');
    const nextButtons = mount.querySelectorAll<HTMLButtonElement>('[data-new-carousel-next]');

    if (!track || !track.children.length || !scroller) return;

    // Hydrate brand outcomes images
    const brandCards = Array.from(track.querySelectorAll<HTMLElement>('.brand-card'));
    brandCards.forEach((card) => hydrateBrandCard(card));

    // Hydrate customer result logos
    const customerLogos = Array.from(track.querySelectorAll<HTMLImageElement>('[data-customer-logo]'));
    customerLogos.forEach((img) => {
      const file = img.dataset.customerLogo;
      if (!file) return;
      img.src = `${steveOrigin()}/v1/logos/customer-results/${file}`;
      img.decoding = 'async';
      img.loading = 'lazy';
    });

    // Hook up navigation for cards with hrefs
    const cards = Array.from(track.querySelectorAll<HTMLElement>('.new-carousel__card[data-href]'));
    cards.forEach((card) => {
      const href = card.dataset.href;
      if (!href) return;
      const navigate = () => {
        window.location.href = href;
      };
      card.addEventListener('click', navigate);
      card.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter' || evt.key === ' ') {
          evt.preventDefault();
          navigate();
        }
      });
    });

    const slidesCount = track.children.length;

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
      const slideWidth = scroller.scrollWidth / slidesCount;
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
      if (currentIndex >= slidesCount - 1) return;
      scrollToIndex(Math.min(slidesCount - 1, currentIndex + 1));
    };

    prevButtons.forEach((btn) => btn.addEventListener('click', handlePrev));
    nextButtons.forEach((btn) => btn.addEventListener('click', handleNext));

    scroller.addEventListener('scroll', updateButtons);

    const onDragStart = () => {
      isDragging = true;
    };
    const onDragEnd = () => {
      isDragging = false;
      const slideWidth = scroller.scrollWidth / slidesCount;
      const snappedIndex = Math.round(scroller.scrollLeft / slideWidth);
      currentIndex = Math.min(slidesCount - 1, Math.max(0, snappedIndex));
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
  });
};
