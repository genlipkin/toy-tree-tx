import { useContext, useEffect, useMemo } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { EN_LANGUAGES } from '../../constants/languages';
import { AllyFeaturesActions } from './use-ally-features';
import { LSTServiceContext } from '../../contexts/lst/lst-provider';

const DICTIONARY_FEATURE_KEY = 's21';

enum DICTIONARY_ACTION_STATE {
  DISABLED = 0,
  ENABLED = 1,
}

export const useDictionaryAvailability = ({
  allyFeaturesList,
  allyFeaturesState,
  allyFeatureDispatch,
}) => {
  const { tunings, accountIdCode } = useContext(ApplicationContext);
  const { language } = useContext(LSTServiceContext);

  const featuresListLoaded = useMemo(() => allyFeaturesList?.length, [allyFeaturesList]);
  const isDictionaryFeatureAvailable = useMemo(
    () => !!allyFeaturesState[DICTIONARY_FEATURE_KEY],
    [allyFeaturesState],
  );

  useEffect(() => {
    if (!language || !featuresListLoaded || !isDictionaryFeatureAvailable) {
      return;
    }

    const disabledForAccounts = [atob('eExxdFhtQVRSdw==')];
    const isDisabledAccount = disabledForAccounts.includes(accountIdCode);
    const isDictionaryHidden = tunings.widget_hide_dictionary === true;
    // disable Dictionary feature for non-English language
    const isSupportedLanguage = EN_LANGUAGES.find((lang) => lang === language);
    const dictionaryEnabled = isSupportedLanguage && !isDictionaryHidden && !isDisabledAccount;
    const isDictionaryOn = allyFeaturesState[DICTIONARY_FEATURE_KEY].actionState;

    allyFeatureDispatch(
      AllyFeaturesActions.update({
        name: DICTIONARY_FEATURE_KEY,
        actionState:
          dictionaryEnabled && isDictionaryOn
            ? DICTIONARY_ACTION_STATE.ENABLED
            : DICTIONARY_ACTION_STATE.DISABLED,
        temporaryDisabled: dictionaryEnabled ? false : { reason: '' },
      }),
    );
  }, [language, featuresListLoaded, isDictionaryFeatureAvailable]);
};
