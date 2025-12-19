import platformDiagramTemplate from '../../../../components/platform-diagram/platform-diagram.html?raw';
import { initPlatformDiagram } from '../../../../components/platform-diagram/platform-diagram';
import { hydrateIcons } from '../../../../utils/icons';

export const initPlatformBlock = () => {
  const diagramMount = document.querySelector<HTMLElement>('[data-platform-diagram-mount]');
  if (!diagramMount) return;
  diagramMount.innerHTML = platformDiagramTemplate;
  const diagramRoot =
    diagramMount.querySelector<HTMLElement>('[data-platform-diagram]') ?? diagramMount;
  diagramRoot.dataset.variant = 'luxe';
  hydrateIcons(diagramRoot);
  initPlatformDiagram(diagramRoot);
};
