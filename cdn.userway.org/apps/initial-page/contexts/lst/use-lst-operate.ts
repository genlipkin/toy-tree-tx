import { useCallback, useContext, useEffect } from 'preact/hooks';
import { LSTServiceContext } from './lst-provider';
import { LANGUAGES } from '../../constants/languages';
import { sendPostMessage } from '../../helpers/post-message.helper';
import { loadDeferredJs } from '../../helpers/scripts-loader';
import { configStore } from '../../global/config.store';
import { LstOperateAPI } from './types';

export const useLstOperate = (): LstOperateAPI => {
  const { originalSiteLang, setLanguage, setHostSiteLang } = useContext(LSTServiceContext);

  const requestLanguage = useCallback(
    (language: string, shouldNotTriggerLiveTranslation?: boolean) => {
      sendPostMessage({
        action: 'setWidgetLanguage',
        langCode: language,
        shouldNotTriggerLiveTranslation,
      });

      loadDeferredJs(
        // eslint-disable-next-line
        `${'__CDN__' + 'frontend/locales/'}${language}.js`,
      )
        .then(() => {
          setLanguage(language);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    [],
  );

  // used by widget manage part (angular) in the widget lang settings
  const changeWidgetLanguage = useCallback((language: string) => {
    const langCode = language === 'auto' ? originalSiteLang : language;

    setHostSiteLang(langCode);
    requestLanguage(langCode, true);
  }, []);

  const revertLST = useCallback(() => {
    const defaultLangInfo = LANGUAGES.find(({ value }) => value === originalSiteLang);
    requestLanguage(defaultLangInfo.value);
    sendPostMessage({
      action: 'disableLiveTranslation',
    });
  }, []);

  useEffect(() => {
    // watch lst updates and pass new values to the configStore
    configStore.lstOperate$.next({
      requestLanguage,
      revertLST,
      changeWidgetLanguage,
    });
  }, [requestLanguage, revertLST, changeWidgetLanguage]);

  return {
    requestLanguage,
    revertLST,
    changeWidgetLanguage,
  };
};
