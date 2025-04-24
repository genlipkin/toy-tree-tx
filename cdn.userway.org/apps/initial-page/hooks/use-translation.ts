import { useContext } from 'preact/hooks';
import { useTranslationBase } from '@uw/common-components';
import { LSTServiceContext } from '../contexts/lst/lst-provider';

export const useTranslation = () => {
  const { language, setLanguage } = useContext(LSTServiceContext);

  const translate = useTranslationBase(language);

  return {
    translate,
    setLanguage,
  };
};
