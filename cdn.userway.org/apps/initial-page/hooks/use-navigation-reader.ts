import { useCallback, useContext } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { readerInteractionStore } from '../global/reader-interaction.store';

interface ReaderRequestOptions {
  isAlert?: boolean;
  isReader?: boolean;
  readingSpeedRate?: number;
  menuLanguage?: string;
}

type ReaderRequestFn = (content: string, options?: ReaderRequestOptions) => void;

export const useNavigationReader = () => {
  const { settings } = useContext(ApplicationContext);

  const sendNavigationReaderRequest = useCallback<ReaderRequestFn>((content, options = {}) => {
    const { isAlert = false, isReader = false, menuLanguage, readingSpeedRate } = options;
    const readerFeatureEnabled =
      isReader ||
      (!!settings && !!settings.current?.['userway-s9'] && settings.current['userway-s9'].value);

    if (readerFeatureEnabled) {
      readerInteractionStore.forceReaderToRead(content, {
        isAlert,
        menuLanguage,
        readingSpeedRate: isReader ? readingSpeedRate : settings.current['userway-s9'].value,
      });
    }
  }, []);

  return {
    sendNavigationReaderRequest,
  };
};
