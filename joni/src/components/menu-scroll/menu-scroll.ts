export const initMenuScroll = (root: ParentNode = document) => {
  const sections = Array.from(root.querySelectorAll<HTMLElement>('[data-menu-scroll]'));

  sections.forEach((section) => {
    const nav = section.querySelector<HTMLElement>('[data-menu-scroll-nav]');
    const content = section.querySelector<HTMLElement>('[data-menu-scroll-content]');
    const links = Array.from(
      nav?.querySelectorAll<HTMLButtonElement>('[data-menu-scroll-link]') ?? [],
    );
    const cards = Array.from(
      content?.querySelectorAll<HTMLElement>('[data-menu-scroll-section]') ?? [],
    );
    if (!nav || !content || !links.length || !cards.length) return;

    const activate = (id: string) => {
      links.forEach((link) => {
        const isActive = link.dataset.menuScrollLink === id;
        link.classList.toggle('is-active', isActive);
        link.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    };

    const topOffset = 100; // activate ~100px before the card actually hits the viewport top

    const activateByScroll = () => {
      const belowOrAtTop = cards.filter(
        (card) => card.getBoundingClientRect().top - topOffset <= 0,
      );
      const targetCard = belowOrAtTop.at(-1) ?? cards[0];
      if (targetCard) activate(targetCard.id);
    };

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.dataset.menuScrollLink;
        if (!targetId) return;
        const target = content.querySelector<HTMLElement>(`#${CSS.escape(targetId)}`);
        if (target) {
          const { top } = target.getBoundingClientRect();
          const scrollTop = window.scrollY + top - topOffset;
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
          activate(targetId);
        }
      });
    });

    document.addEventListener('scroll', () => {
      requestAnimationFrame(activateByScroll);
    });
    activateByScroll();
  });
};
