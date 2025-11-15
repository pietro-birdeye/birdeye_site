import { steveOrigin } from './steve';

const ICON_HOST = `${steveOrigin()}/v1/icons/svg`;

export async function hydrateIcons(scope: ParentNode) {
  const nodes = Array.from(scope.querySelectorAll<HTMLElement>('[data-icon]'));
  await Promise.all(
    nodes.map(async (node) => {
      const name = node.getAttribute('data-icon');
      if (!name) return;
      try {
        const res = await fetch(`${ICON_HOST}/${encodeURIComponent(name)}.svg`);
        if (!res.ok) return;
        let svg = await res.text();
        if (!svg.includes('aria-hidden')) {
          svg = svg.replace('<svg', '<svg aria-hidden="true" focusable="false"');
        }
        node.innerHTML = svg;
        node.removeAttribute('data-icon');
      } catch {
        // ignore
      }
    }),
  );
}
