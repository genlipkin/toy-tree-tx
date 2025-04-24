import { createContext, FunctionComponent, h } from 'preact';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';
import { useMessageData } from '@uw/common-components';
import {
  Language,
  LANGUAGES,
  LstButtonIcon,
  LstButtonType,
  LstTuningsOptions,
} from '../../constants/languages';
import { LIVE_TRANSLATIONS } from '../../constants/constants';
import { getUrlParams } from '../../helpers/url.helper';
import { configStore } from '../../global/config.store';
import { ApplicationContext } from '../use-application-setup';
import { sendPostMessage } from '../../helpers/post-message.helper';

export const useLSTService = () => {
  const { setPaidProductsEnabled } = useContext(ApplicationContext);
  // language that currently used for LST (by default it is th same as hostSiteLang but user can change it)
  const [language, setLanguage] = useState<string>(null);
  // the original lang taken from html tag lang attribute
  const [originalSiteLang, setOriginalSiteLang] = useState<string>(null);

  // it is widget lang set up by user. it is auto-detected by default (hostSiteLang equals originalSiteLang)
  const [hostSiteLang, setHostSiteLang] = useState<string>(null);

  // detailed info for currently selected languages, it is updated everytime selected language is updated
  const [languageInfo, setLanguageInfo] = useState<Language>(null);

  // shows if lst feature is enabled for current site
  const [isLangSelectorVisible, setIsLangSelectorVisible] = useState<string>(null);

  // widget button is configured as lst
  const [isLstButtonEnabled, setIsLstButtonEnabled] = useState<boolean>(null);

  const [lstButtonType, setLstButtonType] = useState<LstButtonType>(null);
  const [lstButtonIcon, setLstButtonIcon] = useState<LstButtonIcon>(null);

  const [widgetCustomLanguages, setWidgetCustomLanguages] = useState<Language[]>(null);

  const appConfiguration = useMessageData({
    allowedActionsList: ['sendConfig'],
  });

  const [lstOptions, setLstOptions] = useState({
    is_enabled: false,
    is_renewable: false,
    remainingChars: null,
    translationAllowed: false,
    autoTranslation: false,
  });

  // update selected lang information on language update
  useEffect(() => {
    const langInfo = LANGUAGES.filter(({ value }) => value === language)[0];
    if (!langInfo) {
      return;
    }

    setLanguageInfo(langInfo);

    // apply lst to the site
    if (lstOptions.is_enabled) {
      sendPostMessage({
        action: 'translateWebsite',
        value: langInfo.extraCode || langInfo.value,
      });
    }
  }, [language]);

  const setupLstOptions = (options: LstTuningsOptions) => {
    setPaidProductsEnabled((values) => ({ ...values, LIVE_TRANSLATIONS: true }));
    setLstOptions(options);
  };

  useEffect(() => {
    if (!appConfiguration?.config) {
      return;
    }

    const {
      config: { language, widgetPageLang, services, tunings, widgetCustomLanguages },
    } = appConfiguration;

    setLanguage(language);

    // if original site lang is not supported by widget - set EN
    const originalSiteLang = widgetPageLang ?? LANGUAGES[0].value;

    setOriginalSiteLang(originalSiteLang);
    // TODO: check - if there is no lang attr

    const configuredLang = tunings?.widget_language?.toLowerCase();
    const isAutoDetected = configuredLang === 'auto';
    setHostSiteLang(configuredLang && !isAutoDetected ? configuredLang : originalSiteLang);

    const liveTranslations = services?.[LIVE_TRANSLATIONS];
    if (liveTranslations) {
      setupLstOptions(liveTranslations);
    }

    if (!tunings) {
      return;
    }

    const {
      widget_live_language_enabled,
      widget_lst_button_enabled,
      widget_lst_button_type,
      widget_lst_button_icon_type,
    } = tunings;

    // language selector can be disabled by BE flag, if there is no flag we consider lang selector as visible
    setIsLangSelectorVisible(widget_live_language_enabled ?? true);

    // TODO: make separate context for LST buttons; check if all lst button props can be one object
    setIsLstButtonEnabled(widget_lst_button_enabled);
    setLstButtonType(widget_lst_button_type);
    setLstButtonIcon(widget_lst_button_icon_type);

    setWidgetCustomLanguages(widgetCustomLanguages ?? []);
  }, [appConfiguration]);

  const getLanguageDataFromUrl = () => {
    const { language, widgetPageLang } = getUrlParams();

    if (language) {
      setLanguage(language);
    }

    if (widgetPageLang) {
      setOriginalSiteLang(widgetPageLang);
    }
  };

  useEffect(() => {
    getLanguageDataFromUrl();
  }, []);

  const context = useMemo(
    () => ({
      language,
      setLanguage,
      originalSiteLang,
      lstOptions,
      isLangSelectorVisible,
      setIsLangSelectorVisible,
      setupLstOptions,
      languageInfo,
      isLstButtonEnabled,
      lstButtonType,
      lstButtonIcon,
      widgetCustomLanguages,
      hostSiteLang,
      setHostSiteLang,
    }),
    [
      language,
      originalSiteLang,
      lstOptions,
      isLangSelectorVisible,
      languageInfo,
      isLstButtonEnabled,
      lstButtonType,
      lstButtonIcon,
      widgetCustomLanguages,
      hostSiteLang,
      setHostSiteLang,
    ],
  );

  useEffect(() => {
    // watch lst updates and pass new values to the configStore
    configStore.lstConfig$.next(context);
  }, [language, isLangSelectorVisible, languageInfo, lstOptions]);

  return context;
};

export const LSTServiceContext = createContext<ReturnType<typeof useLSTService>>(null);

export const LSTProvider: FunctionComponent = ({ children }) => (
  <LSTServiceContext.Provider value={useLSTService()}>{children}</LSTServiceContext.Provider>
);
