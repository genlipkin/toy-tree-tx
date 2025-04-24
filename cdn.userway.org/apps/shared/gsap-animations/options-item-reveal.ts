import { gsap } from 'gsap';

export const optionsItemReveal = (
  element: HTMLElement,
  duration: number,
  delay?: number,
  ease?: string,
  onComplete?: GSAPCallback,
) => {
  if (!element) return
  gsap.fromTo(
      element,
      {
        opacity: 0,
        height: '0px',
      },
      {
        opacity: 1,
        height: 'auto',
        duration: duration,
        delay: delay,
        ease: ease,
        onComplete: onComplete,
      },
  );
};
