import { MutableRef, useEffect } from 'preact/hooks';

export const isTouchDevice = 'ontouchstart' in document.documentElement;

export const useClickOutside = (
  ref: MutableRef<HTMLElement>,
  callback: () => void,
  enabled: boolean = true,
) => {
  useEffect(() => {
    if (!enabled) return;

    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    isTouchDevice
      ? document.addEventListener('touchstart', handleClickOutside)
      : document.addEventListener('mousedown', handleClickOutside);

    return () => {
      isTouchDevice
        ? document.removeEventListener('touchstart', handleClickOutside)
        : document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, enabled]);
};
