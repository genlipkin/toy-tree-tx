import { h, Fragment, FunctionComponent } from 'preact';
import { useEffect } from 'preact/hooks';
import { useNavigationReader } from 'hooks/use-navigation-reader';

/*
 * Global wrapper to track currently focused element inside the widget.
 * It's handling screen reader action to read focused element.
 * */

export const useFocusedElements = () => {
  const { sendNavigationReaderRequest } = useNavigationReader();

  useEffect(() => {
    const handleFocusedElement = () => {
      const focusedElement = document.activeElement;
      const language = focusedElement.getAttribute('data-uw-reader-language');
      const content =
        focusedElement.getAttribute('data-uw-reader-content') ||
        focusedElement.getAttribute('aria-label');

      if (!content) return;

      sendNavigationReaderRequest(content, { menuLanguage: language });
    };

    document.addEventListener('focus', handleFocusedElement, true);

    return () => {
      document.removeEventListener('focus', handleFocusedElement, true);
    };
  }, []);
};

export const FocusedElementsHandlerWrapper: FunctionComponent = ({ children }) => {
  useFocusedElements();

  return <Fragment>{children}</Fragment>;
};
