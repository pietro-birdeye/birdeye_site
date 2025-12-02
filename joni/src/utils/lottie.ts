import type { AnimationItem } from 'lottie-web';

let lottieLibPromise: Promise<typeof import('lottie-web')> | null = null;

export const loadLottieLib = () => {
  if (!lottieLibPromise) {
    lottieLibPromise = import('lottie-web');
  }
  return lottieLibPromise;
};

export type { AnimationItem };
