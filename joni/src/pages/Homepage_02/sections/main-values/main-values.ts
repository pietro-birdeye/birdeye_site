type Animator = {
  start: () => void;
  stop: () => void;
  isRunning: () => boolean;
  redraw: () => void;
};

type SizeGetter = () => { width: number; height: number };

const createAnimator = (drawFrame: (time: number) => void, restTime = 1.2): Animator => {
  let rafId: number | null = null;
  let running = false;
  let startAt = 0;
  let currentTime = restTime;

  const tick = (timestamp: number) => {
    if (!running) return;
    const elapsed = (timestamp - startAt) / 1000;
    currentTime = elapsed;
    drawFrame(elapsed);
    rafId = requestAnimationFrame(tick);
  };

  const start = () => {
    if (running) return;
    running = true;
    startAt = performance.now() - currentTime * 1000;
    rafId = requestAnimationFrame(tick);
  };

  const stop = () => {
    running = false;
    if (rafId !== null) {
      cancelAnimationFrame(rafId);
      rafId = null;
    }
    // keep the last drawn frame for the resting state
    drawFrame(currentTime);
  };

  drawFrame(currentTime);

  return {
    start,
    stop,
    isRunning: () => running,
    redraw: () => drawFrame(currentTime),
  };
};

const setupCanvas = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D,
  media: HTMLElement,
  scale = 0.9,
) => {
  const measureSize = () => {
    const rect = media.getBoundingClientRect();
    const base = Math.min(rect.width, rect.height);
    if (!base || !isFinite(base)) return 220; // fallback so Safari/early layout never returns 0
    return Math.max(220, base * scale);
  };

  const resize = () => {
    const size = measureSize();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { width: size, height: size };
  };

  resize();

  const getSize: SizeGetter = () => {
    const size = measureSize();
    return { width: size, height: size };
  };

  return { resize, getSize };
};

const createConcentricAnimator = (
  ctx: CanvasRenderingContext2D,
  getSize: SizeGetter,
): Animator => {
  const drawFrame = (time: number) => {
    const { width, height } = getSize();
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.min(width, height) * 0.48;
    const ringCount = 5;

    // center dot
    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 10, 12, 0.82)';
    ctx.fill();

    for (let r = 0; r < ringCount; r++) {
      const baseRadius = ((r + 1) / ringCount) * maxRadius;
      const dotCount = 6 + r * 6;
      const phaseOffset = r % 2 === 0 ? time * 0.2 : -time * 0.2;
      const ringPhase = time + r * 0.7;

      for (let i = 0; i < dotCount; i++) {
        const angle = (i / dotCount) * Math.PI * 2 + phaseOffset;
        const radiusPulse = Math.sin(ringPhase) * 3;
        const finalRadius = baseRadius + radiusPulse;
        const x = cx + Math.cos(angle) * finalRadius;
        const y = cy + Math.sin(angle) * finalRadius;

        const baseSize = 2 + r / Math.max(1, ringCount - 1);
        const sizePulse = Math.sin(ringPhase) * baseSize * 0.7 + baseSize;
        const opacityPulse = 0.6 + Math.sin(ringPhase) * 0.4;

        ctx.beginPath();
        ctx.arc(x, y, sizePulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 10, 12, ${Math.max(0.2, Math.min(1, opacityPulse))})`;
        ctx.fill();
      }
    }
  };

  return createAnimator(drawFrame, 0.6);
};

const createRadialAnimator = (
  ctx: CanvasRenderingContext2D,
  getSize: SizeGetter,
): Animator => {
  const ringCount = 6;
  const dotsPerRing = 18;
  const pulseSpeed = 0.6;

  const drawFrame = (time: number) => {
    const { width, height } = getSize();
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.min(width, height) * 0.45;

    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 10, 12, 0.82)';
    ctx.fill();

    for (let i = 0; i < ringCount; i++) {
      const pulsePhase = (time * pulseSpeed + i / ringCount) % 1;
      const ringRadius = pulsePhase * maxRadius;
      if (ringRadius < 6) continue;
      const opacity = 1 - pulsePhase;

      for (let j = 0; j < dotsPerRing; j++) {
        const angle = (j / dotsPerRing) * Math.PI * 2;
        const x = cx + Math.cos(angle) * ringRadius;
        const y = cy + Math.sin(angle) * ringRadius;
        const size = 2 + (1 - pulsePhase) * 1.2;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 10, 12, ${Math.max(0.12, Math.min(0.9, opacity))})`;
        ctx.fill();
      }
    }
  };

  return createAnimator(drawFrame, 0.5);
};

const createOrbitalAnimator = (
  ctx: CanvasRenderingContext2D,
  getSize: SizeGetter,
): Animator => {
  const orbits = [
    { radiusFactor: 0.30, dotCount: 8 },
    { radiusFactor: 0.45, dotCount: 12 },
    { radiusFactor: 0.60, dotCount: 16 },
    { radiusFactor: 0.75, dotCount: 20 },
    { radiusFactor: 0.90, dotCount: 24 },
  ];

  const drawFrame = (time: number) => {
    const { width, height } = getSize();
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const maxRadius = Math.min(width, height) * 0.8;

    ctx.beginPath();
    ctx.arc(cx, cy, 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 10, 12, 0.8)';
    ctx.fill();

    orbits.forEach((orbit, idx) => {
      const baseRadius = orbit.radiusFactor * maxRadius;
      const pulse = Math.max(0, Math.sin(time * 0.8 - idx * 0.35)) * maxRadius * 0.015;
      const radius = baseRadius + pulse;
      const spin = idx % 2 === 0 ? time * 0.6 : -time * 0.6;

      for (let i = 0; i < orbit.dotCount; i++) {
        const angle = (i / orbit.dotCount) * Math.PI * 2 + spin;
        const x = cx + Math.cos(angle) * radius;
        const y = cy + Math.sin(angle) * radius;

        const size = 1.8 + (pulse / maxRadius) * 18;
        const opacity = 0.4 + (pulse / maxRadius) * 8;

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(10, 10, 12, ${Math.max(0.25, Math.min(0.9, opacity))})`;
        ctx.fill();
      }
    });
  };

  return createAnimator(drawFrame);
};

const createSequentialAnimator = (
  ctx: CanvasRenderingContext2D,
  getSize: SizeGetter,
): Animator => {
  const dotCount = 16;

  const drawFrame = (time: number) => {
    const { width, height } = getSize();
    ctx.clearRect(0, 0, width, height);

    const cx = width / 2;
    const cy = height / 2;
    const baseRadius = Math.min(width, height) * 0.46;

    ctx.beginPath();
    ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(10, 10, 12, 0.82)';
    ctx.fill();

    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * Math.PI * 2;
      const pulsePhase = (time * 0.65 + i / dotCount) % 1;
      const wave = Math.sin(pulsePhase * Math.PI * 2);
      const radius = baseRadius + wave * baseRadius * 0.08;
      const x = cx + Math.cos(angle) * radius;
      const y = cy + Math.sin(angle) * radius;

      const size = 2.2 + wave * 2;
      const opacity = 0.45 + wave * 0.35;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(x, y);
      ctx.strokeStyle = `rgba(10, 10, 12, ${Math.max(0.1, opacity * 0.25)})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(10, 10, 12, ${Math.max(0.2, Math.min(0.9, opacity))})`;
      ctx.fill();
    }
  };

  return createAnimator(drawFrame, 0.8);
};

const createAnimationForCard = (card: HTMLElement): Animator | null => {
  const media = card.querySelector<HTMLElement>('.brand-card__media');
  const canvas = media?.querySelector<HTMLCanvasElement>('.brand-card__canvas');
  if (!media || !canvas) return null;

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const { resize, getSize } = setupCanvas(canvas, ctx, media);
  const type = media.dataset.animation ?? 'concentric';

  const animator =
    type === 'radial'
      ? createRadialAnimator(ctx, getSize)
      : type === 'sequential'
        ? createSequentialAnimator(ctx, getSize)
        : type === 'orbital'
          ? createOrbitalAnimator(ctx, getSize)
          : createConcentricAnimator(ctx, getSize);

  resize();
  animator.redraw();

  return {
    ...animator,
    redraw: () => {
      resize();
      animator.redraw();
    },
  };
};

export const initMainValues = () => {
  const scope =
    document.querySelector<HTMLElement>('[data-section-name="Main values"]') ?? document;

  const cards = Array.from(scope.querySelectorAll<HTMLElement>('.main-values-grid .brand-card'));

  cards.forEach((card) => {
    const animator = createAnimationForCard(card);
    if (!animator) return;

    const handleEnter = () => animator.start();
    const handleLeave = () => animator.stop();
    const handleResize = () => {
      const wasRunning = animator.isRunning();
      animator.stop();
      animator.redraw();
      if (wasRunning) animator.start();
    };

    card.addEventListener('mouseenter', handleEnter);
    card.addEventListener('focusin', handleEnter);
    card.addEventListener('mouseleave', handleLeave);
    card.addEventListener('focusout', handleLeave);
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(card);
    window.addEventListener('resize', handleResize, { passive: true });

    requestAnimationFrame(() => {
      handleResize();
    });
  });
};
