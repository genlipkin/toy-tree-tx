import { h } from 'preact';
import { useContext, useMemo, useRef } from 'preact/hooks';
import { ToggleButton } from '@uw/common-components';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useTranslation } from 'hooks/use-translation';
import { Language, LANGUAGES } from 'constants/languages';
import { useNavigationReader } from 'hooks/use-navigation-reader';
import { loadDeferredJs } from '../../helpers/scripts-loader';
import { LSTServiceContext } from '../../contexts/lst/lst-provider';

/*
Documentation:
https://xplacedev.atlassian.net/wiki/spaces/UAW/pages/1496907779/Revert+language+toggle
*/

type LocaleType = {
  [key: string]: string | LocaleType;
};
interface WindowWithLocales extends Window {
  locales: Record<string, LocaleType>;
}

const getTextFromLocale = (target: LocaleType, path: string): null | string => {
  let result = target as LocaleType | string;
  const pathArr = path.split('.');

  for (const key of pathArr) {
    result = result[key];
    if (!result) return null;
    if (typeof result === 'string') return result;
  }

  return null;
};

interface RevertLanguageButtonProps {
  selectLanguage: (lang: Language) => void;
}

// TODO: revert lang button refactoring
export const RevertLanguageButton = ({ selectLanguage }: RevertLanguageButtonProps) => {
  const { translate } = useTranslation();
  const { sendNavigationReaderRequest } = useNavigationReader();
  const { widgetColors } = useContext(ApplicationContext);
  const { language, hostSiteLang, widgetCustomLanguages } = useContext(LSTServiceContext);
  const toggleButton = useRef<HTMLInputElement>(null);

  const toggleButtonColor = widgetColors?.isLightColour ? null : widgetColors?.mainBfColor;

  const widgetLanguageData = useMemo(
    () =>
      LANGUAGES.find((langItem) => langItem.value.toLowerCase() === hostSiteLang.toLowerCase()) ??
      LANGUAGES[0],
    [hostSiteLang],
  );

  if (language.toLowerCase() !== hostSiteLang.toLowerCase()) {
    localStorage.setItem('userway-revert-language', language);
  }

  const lastLanguageData = useMemo(() => {
    const langToFind = localStorage.getItem('userway-revert-language') || hostSiteLang;
    return LANGUAGES.find((langItem) => langItem.value.toLowerCase() === langToFind.toLowerCase());
  }, [language]);

  // edge case when origin page lang was not added to the list
  const listHasOriginLang = useMemo(() => {
    if (widgetCustomLanguages?.length) {
      return widgetCustomLanguages.find(
        (lang) => lang.value.toLowerCase() === hostSiteLang.toLowerCase(),
      );
    }
    return true; // true for the case when there is no custom list
  }, [widgetCustomLanguages]);

  const toogleOnAriaLabel = translate('widget.language.revert_on');
  const toogleOffAriaLabel = translate('widget.language.revert_off');

  const isToggleOn = language.toLowerCase() !== hostSiteLang.toLowerCase();
  const isToggleVisible =
    !!localStorage.getItem('userway-revert-language') &&
    lastLanguageData.value.toLowerCase() !== hostSiteLang.toLowerCase();

  const sendTextToScreenReader = (textPath: string, locale: string): void => {
    if (!textPath || !locale || !language) return;

    const LOCALES: Record<string, LocaleType> = (window as unknown as WindowWithLocales).locales;

    loadDeferredJs(`${'__CDN__'}frontend/locales/${locale}.js`)
      .then(() => {
        const text = getTextFromLocale(LOCALES[locale], textPath);
        if (!text) return;

        sendNavigationReaderRequest(text, { menuLanguage: locale });
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = () => {
    if (isToggleOn) {
      selectLanguage(widgetLanguageData);
      const path = 'widget.language.revert_off';
      sendTextToScreenReader(path, widgetLanguageData.value);
    } else {
      selectLanguage(lastLanguageData);
      const path = 'widget.language.revert_on';
      sendTextToScreenReader(path, lastLanguageData.value);
    }
  };

  return listHasOriginLang && (isToggleOn || isToggleVisible) ? (
    <ToggleButton
      reference={toggleButton}
      data-uw-reader-content={isToggleOn ? toogleOnAriaLabel : toogleOffAriaLabel}
      ariaLabel={isToggleOn ? toogleOnAriaLabel : toogleOffAriaLabel}
      color={toggleButtonColor}
      onChange={handleOnChange}
      checked={isToggleOn}
    />
  ) : null;
};
