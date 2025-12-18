const widgetCleanup = new WeakMap<HTMLElement, () => void>();

const toggleState = (root: HTMLElement, active: boolean) => {
  root.classList.toggle('is-active', active);
  root.dataset.state = active ? 'active' : 'rest';
  const button = root.querySelector<HTMLButtonElement>('.cta-expand__button');
  if (button) {
    button.setAttribute('aria-expanded', active ? 'true' : 'false');
  }
};

export const initCTAExpand = (scope: ParentNode = document) => {
  const widgets = Array.from(scope.querySelectorAll<HTMLElement>('[data-cta-expand]'));

  widgets.forEach((root) => {
    if (widgetCleanup.has(root)) return;

    const button = root.querySelector<HTMLButtonElement>('.cta-expand__button');
    if (!button) return;

    const onClick = (event: MouseEvent) => {
      event.stopPropagation();
      toggleState(root, true);
      button.focus();
    };

    const onDocumentClick = (event: MouseEvent) => {
      const target = event.target as Node | null;
      if (target && root.contains(target)) return;
      toggleState(root, false);
    };

    button.addEventListener('click', onClick);
    document.addEventListener('click', onDocumentClick);

    widgetCleanup.set(root, () => {
      button.removeEventListener('click', onClick);
      document.removeEventListener('click', onDocumentClick);
    });
  });
};

export const destroyCTAExpand = (scope: ParentNode = document) => {
  const widgets = Array.from(scope.querySelectorAll<HTMLElement>('[data-cta-expand]'));
  widgets.forEach((root) => {
    const cleanup = widgetCleanup.get(root);
    if (cleanup) {
      cleanup();
      widgetCleanup.delete(root);
    }
    toggleState(root, false);
  });
};
