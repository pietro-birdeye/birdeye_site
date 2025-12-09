import { steveOrigin } from '../../utils/steve';
import { loadLottieLib, type AnimationItem } from '../../utils/lottie';

const AISTACK_BG_MAP: Record<string, string> = {
  outcomes: 'outcomes.jpg',
  agents: 'agents.jpg',
  models: 'models.jpg',
};

export const initAIStack = () => {
  const aiLogos = Array.from(document.querySelectorAll<HTMLImageElement>('[data-ai-logo]'));
  const aiStackBlocks = Array.from(document.querySelectorAll<HTMLElement>('.aistack-block'));
  const closeTimers = new WeakMap<HTMLElement, number>();

  aiLogos.forEach((img) => {
    const file = img.dataset.aiLogo;
    if (!file) return;
    img.src = `${steveOrigin()}/v1/imgs/${file}`;
    img.decoding = 'async';
    img.loading = 'lazy';
  });

  aiStackBlocks.forEach((block) => {
    const variant = block.classList.contains('aistack-block--outcomes')
      ? 'outcomes'
      : block.classList.contains('aistack-block--agents')
        ? 'agents'
        : block.classList.contains('aistack-block--models')
          ? 'models'
          : null;

    if (variant && AISTACK_BG_MAP[variant]) {
      const file = AISTACK_BG_MAP[variant];
      block.style.setProperty(
        '--aistack-bg-image',
        `url(${steveOrigin()}/v1/imgs/AI_Stack_Block/AI_block_bgrs/${file})`,
      );
    }

    const title = block.querySelector<HTMLElement>('.aistack-block__title');
    if (!title) return;

    const setExpanded = (expanded: boolean) => {
      block.dataset.expanded = expanded ? 'true' : 'false';
      title.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    };

    title.setAttribute('role', 'button');
    title.tabIndex = 0;
    setExpanded(false);

    const clearCloseTimer = () => {
      const existing = closeTimers.get(block);
      if (existing) {
        window.clearTimeout(existing);
        closeTimers.delete(block);
      }
    };

    const closeOthers = () => {
      aiStackBlocks.forEach((other) => {
        if (other !== block) {
          other.dataset.expanded = 'false';
          const otherTitle = other.querySelector<HTMLElement>('.aistack-block__title');
          if (otherTitle) otherTitle.setAttribute('aria-expanded', 'false');
        }
      });
    };

    const openThis = () => {
      clearCloseTimer();
      closeOthers();
      setExpanded(true);
    };

    const closeThis = () => {
      clearCloseTimer();
      if (block.classList.contains('aistack-block--agents')) {
        const timer = window.setTimeout(() => {
          setExpanded(false);
          closeTimers.delete(block);
        }, 360);
        closeTimers.set(block, timer);
      } else {
        setExpanded(false);
      }
    };

    title.addEventListener('click', (event) => {
      event.preventDefault();
      openThis();
    });
    title.addEventListener('mouseenter', openThis);
    block.addEventListener('mouseenter', openThis);
    block.addEventListener('mouseleave', closeThis);
    title.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openThis();
      }
    });
  });
};
