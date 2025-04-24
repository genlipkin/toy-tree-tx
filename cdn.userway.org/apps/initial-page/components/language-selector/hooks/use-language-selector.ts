import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { JSXInternal } from 'preact/src/jsx';
import { Trigger } from 'types/trigger';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useTranslation } from 'hooks/use-translation';
import { useNavigationReader } from 'hooks/use-navigation-reader';
import { sessionStore } from '../../../global/session.store';
import { stateStore } from '../../../global/state.store';
import { Language, LstButtonType, LANGUAGES } from '../../../constants/languages';
import { useConnect } from '../../../helpers/use-connect-to-global-store';
import { optionsItemReveal } from '../../../../shared/gsap-animations/options-item-reveal';
import { readContent } from '../utils/read-content';
import { languageIterator } from '../utils/language-iterator';
import { sortLanguages } from '../utils/sort-languages';
import TargetedEvent = JSXInternal.TargetedEvent;
import { LSTServiceContext } from '../../../contexts/lst/lst-provider';
import { useLstOperate } from '../../../contexts/lst/use-lst-operate';

let animated = false;

export const useLanguageSelector = () => {
  const { paidProductsEnabled, partner, trigger } = useContext(ApplicationContext);

  const {
    language,
    lstOptions,
    isLstButtonEnabled,
    isLangSelectorVisible,
    lstButtonType,
    widgetCustomLanguages,
    originalSiteLang,
  } = useContext(LSTServiceContext);
  const { requestLanguage, revertLST } = useLstOperate();

  const [showLanguageMenu, setShowLanguageMenu] = useState(
    isLstButtonEnabled && lstButtonType === LstButtonType.OneButton,
  );

  // filter to exclude 'en' language, bacause we have 2 English (USA) languages ('en', 'en-US') and need to show only one in the select dropdown list
  const [languages, setLanguages] = useState(LANGUAGES.filter((lang) => lang.value !== 'en'));
  const [filter, setFilter] = useState('');
  const [focusedItem, setFocusedItem] = useState<number | null>(null);
  const [focusedItemByKeyboard, setFocusedItemByKeyboard] = useState<number | null>(null);
  const langSelectButton = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const languagesRef = useRef<HTMLButtonElement[]>([]);
  const selectedLanguageFocus = useRef<boolean>(false);
  const panel = useRef(null);

  const [isLoggedUser] = useConnect(sessionStore.isLogged$);
  const { translate } = useTranslation();

  const { sendNavigationReaderRequest } = useNavigationReader();

  const filteredLanguages = useMemo(() => {
    const filtered = languages.filter(
      ({ name, value }) =>
        name.toLowerCase().includes(filter.toLowerCase()) ||
        value.toLowerCase().includes(filter.toLowerCase()),
    );

    if (!widgetCustomLanguages?.length) {
      sortLanguages(filtered);
    }

    if (filtered.length) setFocusedItem(0);

    return filtered;
  }, [filter, languages]);

  const isLiveTranslationAvailable = useMemo(
    () =>
      paidProductsEnabled.LIVE_TRANSLATIONS &&
      lstOptions.is_enabled &&
      lstOptions.translationAllowed,
    [lstOptions, paidProductsEnabled.LIVE_TRANSLATIONS],
  );

  const isLanguageSelectorVisible = () => {
    const noPaidProducts =
      !paidProductsEnabled.REMEDIATION && !paidProductsEnabled.LIVE_TRANSLATIONS;
    const remediationWithoutLst =
      paidProductsEnabled.REMEDIATION && !isLangSelectorVisible && trigger === Trigger.Main;

    return !(noPaidProducts || remediationWithoutLst);
  };

  const closeLanguageSelector = () => {
    setShowLanguageMenu(false);
    selectedLanguageFocus.current = true;
  };

  useEffect(() => {
    if (widgetCustomLanguages?.length) {
      setLanguages(widgetCustomLanguages);
    }
  }, [widgetCustomLanguages]);

  useEffect(() => {
    if (!isLanguageSelectorVisible() || animated) return;
    optionsItemReveal(panel.current, 0.15, null, null, () => {
      animated = true;
    });
  }, [paidProductsEnabled]);

  const toggleMenu = (event?) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    const activeLanguageIndex = filteredLanguages.findIndex((lang) => lang.value === language);
    setFocusedItem(activeLanguageIndex);

    setShowLanguageMenu((value) => !value);
  };

  const revertTranslation = () => {
    revertLST();
    closeLanguageSelector();
  };

  const updateLanguage = (newLanguage: Language) => {
    if (!newLanguage) return;

    if (newLanguage.value.toLowerCase() === originalSiteLang.toLowerCase()) {
      revertTranslation();
      return;
    }

    if ((isLiveTranslationAvailable || isLoggedUser) && !newLanguage.noLiveTranslation) {
      applyToSite(newLanguage);
    } else {
      requestLanguage(newLanguage.value, true);
    }
  };

  const selectLanguage = (selectedLanguage: Language) => {
    updateLanguage(selectedLanguage);
    // Focusing selected language
    setFocusedItem(languages.indexOf(selectedLanguage));
    closeLanguageSelector();
  };

  // Enter key handler
  const handleEnter = () => {
    const selectedLanguage = filteredLanguages[focusedItem];

    updateLanguage(selectedLanguage);

    // closing language selector if  only one language is available
    if (filteredLanguages.length === 1) {
      closeLanguageSelector();
      setFilter('');
    }
  };

  const applyToSite = (language: Language) => {
    if (!isLiveTranslationAvailable && isLoggedUser) {
      return stateStore.state.next('main.logged.live-site-translations.main');
    }

    requestLanguage(language.value, true);
  };

  const { focusPreviousLanguage, focusNextLanguage } = languageIterator(
    filteredLanguages,
    focusedItem,
  );

  // Search language input event handler
  const inputHandler = (event) => {
    setFilter((event.target as HTMLInputElement).value);
    readContent(
      event as TargetedEvent<HTMLInputElement, InputEvent>,
      sendNavigationReaderRequest,
      translate,
    );
  };

  // Keyboard event handler
  const keyHandler = (event) => {
    event.stopImmediatePropagation();

    if (event.code === 'ArrowUp') handleArrowUp();
    if (event.code === 'ArrowDown') handleArrowDown();
    if (event.code === 'Enter') handleEnter();
    if (event.code === 'Escape') handleEscape();
  };

  // Arrow up handler
  const handleArrowUp = () => {
    const focused = focusPreviousLanguage();
    setFocusedItem(focused);
    setFocusedItemByKeyboard(focused);
    readContent(filteredLanguages[focused]?.name, sendNavigationReaderRequest, translate);
  };

  // Arrow down handler
  const handleArrowDown = () => {
    const focused = focusNextLanguage();
    setFocusedItem(focused);
    setFocusedItemByKeyboard(focused);
    readContent(filteredLanguages[focused]?.name, sendNavigationReaderRequest, translate);
  };

  // Escape handler
  const handleEscape = () => {
    closeLanguageSelector();
    langSelectButton.current.focus();
  };

  return {
    partner,
    isLanguageSelectorVisible,
    panel,
    showLanguageMenu,
    toggleMenu,
    langSelectButton,
    filter,
    inputRef,
    keyHandler,
    inputHandler,
    setFilter,
    readContent,
    languages,
    languagesRef,
    filteredLanguages,
    focusedItem,
    focusedItemByKeyboard,
    selectLanguage,
  };
};
