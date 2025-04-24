import { useCallback } from 'preact/hooks';

export const DEFAULT_LANGUAGE = 'en';

const parseString = (translationString: string) => translationString.split('.');

const getValueByPath = (target: any, path: string[]) => {
  let result = target;
  for (const point of path) {
    result = result[point];

    if (result == null) {
      return null;
    }
  }

  return result as string;
};

export const useTranslationBase = (language: string) => {
  return useCallback(
    (stringToTranslate: string, injection?: Record<string, string>) => {
      const LOCALES = (window as any).locales;

      if (!language || !LOCALES || !stringToTranslate) {
        return null;
      }

      const path = parseString(stringToTranslate);
      const translation =
        getValueByPath(LOCALES[language], path) ?? getValueByPath(LOCALES[DEFAULT_LANGUAGE], path);

      const injectionKeys = injection && Object.keys(injection);

      if (!translation) {
        return stringToTranslate;
      }

      let resultTranslation = translation;
      if (translation && injectionKeys && injectionKeys?.length !== 0) {
        injectionKeys.forEach((key) => {
          resultTranslation = resultTranslation.replace(`{${key}}`, injection[key]);
        });
      }

      return resultTranslation;
    },
    [language],
  );
};
