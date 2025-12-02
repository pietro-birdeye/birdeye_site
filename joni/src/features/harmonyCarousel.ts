export const initHarmonyCarousels = () => {
  const harmonyCarousels = Array.from(document.querySelectorAll<HTMLElement>('.harmony-carousel'));

  harmonyCarousels.forEach((root) => {
    const rail = root.querySelector<HTMLElement>('.harmony-carousel__rail');
    const cards = rail ? Array.from(rail.querySelectorAll<HTMLElement>('.harmony-carousel__card')) : [];
    const prev = root.querySelector<HTMLButtonElement>('[data-harmony-prev]');
    const next = root.querySelector<HTMLButtonElement>('[data-harmony-next]');
    let focusIndex = 0;
    let ticking = false;
    let suppressScrollUpdate = false;

    const setState = (nextIndex: number) => {
      if (nextIndex === focusIndex) return;
      focusIndex = nextIndex;
      cards.forEach((card, idx) => {
        card.dataset.state = idx === focusIndex ? 'focus' : 'rest';
      });
      if (prev) {
        prev.disabled = focusIndex === 0;
        prev.setAttribute('aria-disabled', prev.disabled ? 'true' : 'false');
      }
      if (next) {
        next.disabled = focusIndex === cards.length - 1;
        next.setAttribute('aria-disabled', next.disabled ? 'true' : 'false');
      }
    };

    const computeNearestIndex = () => {
      if (!rail || cards.length === 0) return 0;
      const leftEdge = rail.scrollLeft;
      let bestIdx = 0;
      let bestDelta = Number.POSITIVE_INFINITY;
      cards.forEach((card, idx) => {
        const delta = Math.abs(card.offsetLeft - leftEdge);
        if (delta < bestDelta) {
          bestDelta = delta;
          bestIdx = idx;
        }
      });
      return bestIdx;
    };

    const scrollToIndex = (targetIdx: number) => {
      if (!rail || cards.length === 0) return;
      const clamped = Math.min(Math.max(targetIdx, 0), cards.length - 1);
      const targetCard = cards[clamped];
      suppressScrollUpdate = true;
      rail.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth',
      });
      window.setTimeout(() => {
        suppressScrollUpdate = false;
      }, 320);
      setState(clamped);
    };

    if (cards.length > 0) {
      cards.forEach((card, idx) => {
        card.dataset.state = idx === 0 ? 'focus' : 'rest';
        card.addEventListener('click', () => {
          if (idx !== focusIndex) {
            scrollToIndex(idx);
          }
        });
        card.addEventListener('focus', () => {
          setState(idx);
        });
      });
      if (prev) {
        prev.disabled = true;
        prev.setAttribute('aria-disabled', 'true');
      }
      if (next) {
        next.disabled = cards.length === 1;
        next.setAttribute('aria-disabled', next.disabled ? 'true' : 'false');
      }
    }

    if (rail) {
      rail.addEventListener('scroll', () => {
        if (ticking) return;
        if (suppressScrollUpdate) return;
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          const nearest = computeNearestIndex();
          setState(nearest);
        });
      });
    }

    if (prev) {
      prev.addEventListener('click', () => {
        scrollToIndex(focusIndex - 1);
      });
    }

    if (next) {
      next.addEventListener('click', () => {
        scrollToIndex(focusIndex + 1);
      });
    }
  });
};
