export const languageIterator = (filteredLanguages, currentFocusedLanguageIndex) => {
  const languagesCount = filteredLanguages.length;

  const focusNextLanguage = () => {
    if (currentFocusedLanguageIndex === languagesCount - 1) {
      return 0;
    }
    return ++currentFocusedLanguageIndex;
  };

  const focusPreviousLanguage = () => {
    if (currentFocusedLanguageIndex === 0) {
      return languagesCount - 1;
    }
    return --currentFocusedLanguageIndex;
  };

  return {
    focusNextLanguage,
    focusPreviousLanguage,
  };
};
