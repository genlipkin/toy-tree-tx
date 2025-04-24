import { useContext, useEffect, useState } from 'preact/hooks';
import { useUwBranding } from 'hooks/use-uw-branding';
import { createContext, FunctionComponent, h } from 'preact';
import { ALLY_FEATURES } from 'constants/ally-features';
import { ApplicationContext } from 'contexts/use-application-setup';
import { StatisticsContext } from 'contexts/use-statistics';
import { useNavigationReader } from 'hooks/use-navigation-reader';
import { useTranslation } from 'hooks/use-translation';
import { sendPostMessage } from '../../helpers/post-message.helper';
import {
  AllyFeatureData,
  AllyFeaturesActions,
  AllyFeaturesContext,
  AllyFeatureState,
} from './use-ally-features';
import {
  isChromiumBrowsers,
  isFFBrowser,
  isIeBrowser,
  isMicrosoftBrowser,
  isMobile,
  isSafariBrowser,
} from '../../helpers/detect-user-agent';
import { includes } from '../../helpers/operators';
import { useUpdateVisuallyImpairedState } from './use-update-visually-impaired-state';
import { layoutStore } from '../../global/layout.store';
import { useAllyFeaturesWindowEvents } from './use-window-events';
import { PROFILE_CONFIG } from '../../constants/profileConfig';
import { FF_FEATURE_EXCEPTIONS_LIST } from '../../constants/ff-feature-exceptions-list';
import { useDictionaryAvailability } from './use-dictionary-availability';
import { usePosition } from '../move-hide/use-position';

const getMenuSlotStepsDisabled = (featureName, config, tunings) => {
  const biggerTextHiddenStates = tunings.widget_s4;

  if (featureName === 'userway-s3' && isIeBrowser()) {
    return [1, 4]; // 'Invert colors' and 'Desaturate' features are disabled for IEs
  }

  if (featureName === 'userway-s17') {
    const lineHeightLvls = [1, 2, 3];
    const customLvlsCount = tunings.widget_custom_line_height_lvls_count || 3;
    return lineHeightLvls.slice(customLvlsCount);
  }

  if (featureName === 'userway-s4') {
    if (biggerTextHiddenStates) {
      const steps = JSON.parse(biggerTextHiddenStates);
      if (isMobile()) {
        return steps.mobile.hiddenStates;
      }
      return steps.desktop.hiddenStates;
    }

    // Bigger text on mobile is limited. 2 states only.
    if (isMobile()) {
      return [3, 4];
    }
  }

  if (featureName === 'userway-s14') {
    const textSpacingtLvls = [1, 2, 3];
    const customLvlsCount = tunings.widget_custom_text_spacing_lvls_count || 3;
    return textSpacingtLvls.slice(customLvlsCount);
  }

  return [];
};

function isFeatureTemporaryDisabled(featureName, config): boolean {
  return featureName === 'userway-s9' && !config.reader?.enabled;
}

const activateBigCursor = () => {
  const rootHtml = document.documentElement.classList;
  if (isMicrosoftBrowser()) {
    rootHtml.add('userway-s2-ie');
  } else {
    rootHtml.add('userway-s2');
  }
};

const getInitialState = (settings) => {
  const initialActionStates = {};

  Object.keys(settings)
    .map((key) => [key, settings[key]])
    .forEach(([featureName, obj]: [string, any]) => {
      if (!obj) {
        obj = {};
      }

      if (obj.value === false) {
        obj.value = 0;
      }

      let featureKey = featureName.split('-')[1];
      let actionState = obj.value;

      if (actionState) {
        if (featureKey === 's10') {
          featureKey = 's2';
          actionState = 3;
        }

        if (featureKey === 's16') {
          featureKey = 's2';
          actionState = 2;
        }

        if (featureKey === 's7') {
          featureKey = 's7';
          actionState = 2;
        }

        if (featureKey === 's15') {
          featureKey = 's7';
          actionState = 1;
        }
      }

      initialActionStates[featureKey] = actionState;

      if (featureName === 'userway-s2' && !!obj.value) {
        activateBigCursor();
      }

      if (featureName === 'userway-s4' && isMobile() && !!obj.value) {
        document.querySelector('.uwaw-app').classList.add(`${featureName}-${obj.value}`);
      }
    });

  return initialActionStates;
};

const useAccessibilityFeatures = () => {
  const { translate } = useTranslation();
  const { setDefaultPosition } = usePosition();
  const {
    config,
    tunings,
    settings,
    settingsLoaded,
    soundEffectsEnabled,
    sendEvent,
    enabledMenuFeatures,
  } = useContext(ApplicationContext);
  const { onFeatureTrigger } = useContext(StatisticsContext);
  const { sendNavigationReaderRequest } = useNavigationReader();
  const { isWhiteLabeled } = useUwBranding();

  const [isDictionaryOn, setIsDictionaryOn] = useState(false);

  const { allyFeaturesList, allyFeaturesState, allyFeatureDispatch } =
    useContext(AllyFeaturesContext);

  const profiles = allyFeaturesList.filter((profile) => profile.isProfile);
  const profileNames = [];

  profiles.forEach((profile) => {
    profileNames.push(profile.name);
  });

  useEffect(() => {
    if (!settingsLoaded) return;
    loadSettings();
  }, [settingsLoaded]);

  useEffect(() => {
    if (settings.current) {
      refreshSettings(allyFeaturesList);
      sendEvent();
    }
  }, [allyFeaturesList]);

  useEffect(() => {
    const handlePostMessage = ({ data }) => {
      if (data.name === 's8') {
        onResetAll();
      }
    };

    window.addEventListener('message', handlePostMessage);

    return () => window.removeEventListener('message', handlePostMessage);
  }, []);

  const loadSettings = () => {
    const initialState = getInitialState(settings.current);
    const generatedMenuLayout = generateMenuLayout(enabledMenuFeatures.current, initialState);

    generatedMenuLayout.forEach((feature) => {
      allyFeatureDispatch(AllyFeaturesActions.add(feature));
    });

    const el = document.querySelector('.uwaw-app') as HTMLElement;
    el.style.visibility = 'visible';

    const dictionary =
      !!tunings && tunings.hasOwnProperty('widget_dictionary') ? tunings.widget_dictionary : true;
    setIsDictionaryOn(dictionary);
  };

  const generateMenuLayout = (enabledMenuFeatures, initialState) => {
    const generatedMenuLayout: AllyFeatureState[] = [];

    enabledMenuFeatures = enabledMenuFeatures.filter((featureKey) => {
      if (FF_FEATURE_EXCEPTIONS_LIST.indexOf(featureKey) === -1) {
        return true;
      }
      return !isFFBrowser();
    });

    enabledMenuFeatures.forEach((featureKey) => {
      const featureName = `userway-${featureKey}`;
      if (!isMenuSlotHidden(featureName)) {
        const disabledSteps = getMenuSlotStepsDisabled(featureName, config, tunings);
        const temporaryDisabled = isFeatureTemporaryDisabled(featureName, config.current)
          ? { reason: translate('widget.responsive_voice.language_is_not_supported') }
          : false;

        generatedMenuLayout.push({
          name: featureKey,
          disabledSlot: false,
          disabledSteps,
          temporaryDisabled,
          actionState: initialState[featureKey],
        });
      }
    });

    return generatedMenuLayout;
  };

  const isMenuSlotHidden = (featureName) => {
    const isOnPrem = config.current.onPrem;

    if (isOnPrem && featureName === 'userway-s9' && !config.current.reader?.enabled) {
      return true;
    }

    if (isOnPrem && featureName === 'userway-s21') {
      return true;
    }

    if (featureName === 'userway-s5' && isIeBrowser()) {
      return true;
    }

    if (settings.current[featureName] && settings.current[featureName].disabled) {
      return true;
    }

    if (featureName === 'userway-s24') {
      const services = config.current.services;
      const voiceNavAddonEnabled =
        services?.VOICE_NAVIGATION && services?.VOICE_NAVIGATION?.is_enabled;
      const isSupportedBrowser = isChromiumBrowsers() || isSafariBrowser();

      if (!isSupportedBrowser || !voiceNavAddonEnabled) {
        return true;
      }
    }

    // hide 'Keyboard', 'Cursor' and 'Tooltips' features on mobile
    // temporarily disabled 'Voice Navigation - userway-s24' on mobile devices
    return !!(
      isMobile() &&
      includes(['userway-s1', 'userway-s12', 'userway-s2', 'userway-s24'], featureName)
    );
  };

  const clearSettings = () => {
    settings.current = Object.keys(settings.current).reduce(
      (result, key) => ({
        ...result,
        [key]: { ...settings.current[key], value: 0 },
      }),
      {},
    );
  };

  const refreshSettings = (menuFeatures: AllyFeatureData[]) => {
    clearSettings();
    Object.keys(menuFeatures).forEach((key) => {
      const feature = menuFeatures[key];
      const { name, actionState } = feature;

      if (name === 's2') {
        if (actionState === 1) {
          settings.current['userway-s2'].value = 1;
          settings.current['userway-s10'].value = 0;
          settings.current['userway-s16'].value = 0;
          activateBigCursor();
        } else if (actionState === 2) {
          settings.current['userway-s2'].value = 0;
          settings.current['userway-s10'].value = 0;
          settings.current['userway-s16'].value = 1;
        } else if (actionState === 3) {
          settings.current['userway-s2'].value = 0;
          settings.current['userway-s10'].value = 1;
          settings.current['userway-s16'].value = 0;
        } else {
          settings.current['userway-s2'].value = 0;
          settings.current['userway-s10'].value = 0;
          settings.current['userway-s16'].value = 0;
        }
      } else if (name === 's7') {
        if (actionState === 1) {
          settings.current['userway-s7'].value = 0;
          settings.current['userway-s15'].value = 1;
        } else if (actionState === 2) {
          settings.current['userway-s7'].value = 1;
          settings.current['userway-s15'].value = 0;
        } else {
          settings.current['userway-s7'].value = 0;
          settings.current['userway-s15'].value = 0;
        }
      } else if (name === 's3') {
        if (actionState === 1) {
          settings.current['userway-s3'].value = 1;
        } else if (actionState === 2) {
          settings.current['userway-s3'].value = 2;
        } else if (actionState === 3) {
          settings.current['userway-s3'].value = 3;
        } else if (actionState === 4) {
          settings.current['userway-s3'].value = 4;
        }
      } else if (name === 's8') {
        // No-op
      } else {
        settings.current[`userway-${name}`]
          ? (settings.current[`userway-${name}`].value = actionState)
          : null;
      }
    });
  };

  const triggerFeature = ({ name }: { name: string }) => {
    const { actionState, onTriggerFn, disabledSlot, disabledSteps } = allyFeaturesState[name];

    if (!onTriggerFn || disabledSlot) {
      return;
    }

    const triggerState = (state: number): ReturnType<typeof onTriggerFn> => {
      const nextTriggerState = onTriggerFn(state, { isWhiteLabeled });
      if (includes(disabledSteps, nextTriggerState.actionState as number)) {
        return triggerState(nextTriggerState.actionState as number);
      }

      return nextTriggerState;
    };

    const resetProfiles = () => {
      profileNames.forEach((profile) => {
        onFeatureTrigger(profile, 0);
        allyFeatureDispatch(AllyFeaturesActions.update({ name: profile, actionState: 0 }));
      });
    };

    const activateProfile = (name: string) => {
      onResetAll({ isProfileDisable: true, shouldSetDefaultPosition: false });
      Object.keys(PROFILE_CONFIG[name].features).forEach((featureName) => {
        const value = PROFILE_CONFIG[name].features[featureName];
        allyFeatureDispatch(AllyFeaturesActions.update({ name: featureName, actionState: value }));
      });
      allyFeatureDispatch(AllyFeaturesActions.update({ name, actionState: 1 }));
      setTimeout(() => {
        if (name === 's102') {
          blindReaderActivated();
        }
      }, 100);
    };

    const blindReaderActivated = () => {
      const translationKey = isWhiteLabeled
        ? 'widget.menu.responsive_voice.aria_wl.v1'
        : 'widget.menu.responsive_voice.aria.v1';

      sendNavigationReaderRequest(translate(translationKey));
    };

    const trigger = triggerState(actionState);

    allyFeatureDispatch(
      AllyFeaturesActions.update({ name, actionState: trigger.actionState as number }),
    );

    onFeatureTrigger(name, trigger.actionState);

    const featureName = ALLY_FEATURES[name].googleAnalyticsEventName;

    featureName &&
      sendPostMessage({
        action: 'sendEventToGoogleAnalytics',
        name: featureName,
        state: trigger.actionState as number,
      });

    if (trigger.toRead) {
      const content = translate(trigger.toRead as string);
      sendNavigationReaderRequest(content, {
        isReader: name === 's9',
        readingSpeedRate: trigger.actionState as number,
      });
    }

    if (name === 's9' && trigger.actionState) {
      window.localStorage.setItem('readerSpeed', trigger.actionState.toString());
    }

    if (profileNames.indexOf(name) !== -1 && trigger.actionState) {
      activateProfile(name);
    } else if (profileNames.indexOf(name) !== -1 && !trigger.actionState) {
      onResetAll({ isProfileDisable: true });
    } else {
      resetProfiles();
    }

    // if (name === 's3' && trigger.actionState === 2 && settings.current['userway-s20'].value && settings.current['userway-s20'].value !== 4) {
    //     allyFeatureDispatch(AllyFeaturesActions.update({name: 's20', actionState: 4}));
    // }
    //
    // if (name === 's3' && trigger.actionState === 3 && settings.current['userway-s20'].value && settings.current['userway-s20'].value !== 1) {
    //     allyFeatureDispatch(AllyFeaturesActions.update({name: 's20', actionState: 1}));
    // }

    // if (name === 's20' && trigger.actionState === 4 && settings.current['userway-s3'].value !== 2) {
    //     allyFeatureDispatch(AllyFeaturesActions.update({name: 's3', actionState: 2}));
    // }
    //
    // if (name === 's20' && trigger.actionState === 0 && settings.current['userway-s3'].value === 2) {
    //     allyFeatureDispatch(AllyFeaturesActions.update({name: 's3', actionState: 0}));
    // }

    if (name === 's2') {
      const rootHtml = document.documentElement.classList;
      if (trigger.actionState === 1) {
        activateBigCursor();
      } else {
        rootHtml.remove('userway-s2');
        rootHtml.remove('userway-s2-ie');
      }
    } else if (name === 's4') {
      if (isMobile()) {
        const el = document.querySelector('.uwaw-app').classList;
        el.remove('userway-s4-1');
        el.remove('userway-s4-2');
        el.remove('userway-s4-3');
        el.remove('userway-s4-4');
        if (trigger.actionState) {
          el.add(`userway-s4-${trigger.actionState}`);
        }
      }
    } else if (name === 's8') {
      return onResetAll();
    }
  };

  const onFeatureClick = ({ event, name }: { event: MouseEvent; name: string }) => {
    layoutStore.makeSureElementVisible(event.currentTarget as HTMLElement);

    if (name === 's8') {
      return onResetAll();
    }

    triggerFeature({ name });
  };

  const onResetAll = ({ isProfileDisable = false, shouldSetDefaultPosition = true } = {}) => {
    if (!isProfileDisable) {
      onFeatureTrigger('s8');
    }

    allyFeatureDispatch(AllyFeaturesActions.resetAll());

    if (soundEffectsEnabled) {
      try {
        const _audio = new Audio(`${config.current.cdn}widgetapp/sounds/reset.mp3`);
        _audio.play();
      } catch (e) {
        console.error(e);
      }
    }

    const rootHtml = document.documentElement;
    rootHtml.classList.remove('userway-s2-ie');
    rootHtml.classList.remove('userway-s2');

    const el = document.querySelector('.uwaw-app') as HTMLElement;
    el.classList.remove('userway-s4-1');
    el.classList.remove('userway-s4-2');
    el.classList.remove('userway-s4-3');
    el.classList.remove('userway-s4-4');

    shouldSetDefaultPosition && setDefaultPosition();

    if (isProfileDisable) {
      sendNavigationReaderRequest(
        translate(
          isWhiteLabeled
            ? 'widget.menu.responsive_voice.aria_off_action_wl'
            : 'widget.responsive_voice.disabledScreenReader',
        ),
      );
    } else {
      sendNavigationReaderRequest(
        translate(
          isWhiteLabeled
            ? 'widget.menu.responsive_voice.aria_off_action_wl'
            : 'widget.menu.reset.aria_off_action',
        ),
      );
    }
  };

  useAllyFeaturesWindowEvents({ allyFeaturesState, allyFeatureDispatch, onResetAll });

  useUpdateVisuallyImpairedState(allyFeatureDispatch, onResetAll);

  useDictionaryAvailability({ allyFeaturesState, allyFeaturesList, allyFeatureDispatch });

  return {
    onFeatureMouseClick: onFeatureClick,
    triggerFeature,
    onResetAll,
    isDictionaryOn,
    allyFeaturesList,
    allyFeaturesState,
  };
};

export const AccessibilityFeaturesContext =
  createContext<ReturnType<typeof useAccessibilityFeatures>>(null);

export const AccessibilityFeaturesWrapper: FunctionComponent = ({ children }) => {
  const accessibilityFeatures = useAccessibilityFeatures();

  return (
    <AccessibilityFeaturesContext.Provider value={accessibilityFeatures}>
      {children}
    </AccessibilityFeaturesContext.Provider>
  );
};
