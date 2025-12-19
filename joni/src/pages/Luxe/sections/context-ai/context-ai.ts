import { steveOrigin } from '../../../../utils/steve';

export const initContextAI = (scope: ParentNode = document) => {
  const items = Array.from(scope.querySelectorAll<HTMLButtonElement>('.context-ai__item'));
  const visual = scope.querySelector<HTMLImageElement>('[data-context-ai-visual]');
  const visualContainer = scope.querySelector<HTMLElement>('.context-ai__a');
  const visualFrame = scope.querySelector<HTMLElement>('.context-ai__visual');
  if (!items.length || !visual) return;

  if (visualContainer) {
    visualContainer.style.backgroundImage = 'none';
    visualContainer.style.backgroundColor = 'var(--color-system-brown-5, #f1eae1)';
  }

  const setActive = (item: HTMLButtonElement) => {
    const imgPath = item.dataset.visual;
    const alt = item.dataset.alt || '';
    const visualKey = item.dataset.visualKey || '';
    items.forEach((btn) => {
      const isActive = btn === item;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
    if (visualFrame) {
      if (visualKey) visualFrame.dataset.visualKey = visualKey;
      else visualFrame.removeAttribute('data-visual-key');
    }
    if (imgPath) {
      visual.src = `${steveOrigin()}/v1/${imgPath}`;
      visual.alt = alt;
    }
  };

  items.forEach((item) => {
    item.addEventListener('click', () => setActive(item));
    item.addEventListener('focus', () => setActive(item));
    item.addEventListener('keydown', (evt) => {
      if (evt.key === 'Enter' || evt.key === ' ') {
        evt.preventDefault();
        setActive(item);
      }
    });
  });

  setActive(items[0]);
};
