import { createContext, RefObject } from 'preact';
import { useCallback, useContext, useEffect, useState } from 'preact/hooks';

const focusableElements =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

export enum FocusableTrapElement {
  FirstElement = 'setFirstFocusableElement',
  BeforeLastElement = 'setBeforeLastFocusableElement',
  LastElement = 'setLastFocusableElement',
}

export const FocusTrapContext = createContext<ReturnType<typeof useFocusTrap>>({
  setFirstFocusableElement: () => {},
  setBeforeLastFocusableElement: () => {},
  setLastFocusableElement: () => {},
});

export const useFocusableElement = <TElement extends HTMLElement>(
  focusableElement: FocusableTrapElement,
  refToConnect?: RefObject<TElement>,
  ...dependencies: any[]
): ((node: TElement | null) => void) => {
  const context = useContext(FocusTrapContext);

  return useCallback(
    (node: TElement | null) => {
      if (refToConnect) {
        refToConnect.current = node;
      }

      if (!node) {
        return;
      }

      let element: HTMLElement | null = null;
      let elements: HTMLElement[] = Array.from(node.querySelectorAll(focusableElements));

      elements = elements.filter((elem) => !elem.tabIndex || elem.tabIndex !== -1);

      if (node.matches(focusableElements)) {
        elements = [node, ...elements];
      }

      if (focusableElement === FocusableTrapElement.FirstElement) {
        element = elements[0];
      } else {
        element = elements[elements.length - 1];
      }

      context[focusableElement](element);
    },
    [context, ...dependencies],
  );
};

export const useFocusTrap = () => {
  const [firstFocusableElement, setFirstFocusableElement] = useState<HTMLElement | null>(null);
  const [beforeLastFocusableElement, setBeforeLastFocusableElement] = useState<HTMLElement | null>(null);
  const [lastFocusableElement, setLastFocusableElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const listenTabKey = (event: KeyboardEvent) => {
      const isTabPressed = event.key === 'Tab' || event.keyCode === 9;

      if (!isTabPressed) {
        return;
      }

      if (event.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
          (lastFocusableElement ?? beforeLastFocusableElement)?.focus();
          event.preventDefault();
        }
      } else if (
        (lastFocusableElement && document.activeElement === lastFocusableElement) ||
        (!lastFocusableElement && document.activeElement === beforeLastFocusableElement)
      ) {
        firstFocusableElement?.focus();
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', listenTabKey);

    return () => document.removeEventListener('keydown', listenTabKey);
  }, [firstFocusableElement, lastFocusableElement]);

  return {
    setFirstFocusableElement,
    setLastFocusableElement,
    setBeforeLastFocusableElement,
  };
};
