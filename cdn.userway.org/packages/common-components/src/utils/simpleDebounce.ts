export const simpleDebounce = <T extends any[]>(
  func: (...args: T) => void,
  delay: number,
): { (...args: T): void; cancel: () => void } => {
  let timer: ReturnType<typeof setTimeout>;

  function cancel() {
    clearTimeout(timer);
  }

  function debounced(...args: T) {
    cancel();
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  }

  debounced.cancel = cancel;
  return debounced;
};
