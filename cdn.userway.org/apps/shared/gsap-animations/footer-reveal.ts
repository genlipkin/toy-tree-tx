import { gsap } from 'gsap';

export const footerReveal = (
  element: HTMLElement,
  duration: number,
  delay?: number,
  ease?: string,
  onComplete?: GSAPCallback,
) => {
  gsap.fromTo(
    element,
    {
      height: '0px',
    },
    {
      height: 'auto',
      duration: duration,
      delay: delay,
      ease: ease,
      onComplete: onComplete,
    },
  );
};
