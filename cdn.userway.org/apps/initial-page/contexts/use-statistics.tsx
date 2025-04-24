import { createContext, FunctionComponent, h } from 'preact';
import { useCallback, useContext, useEffect, useRef } from 'preact/hooks';
import { useApi } from 'hooks/use-api';
import { uwStatistics } from 'helpers/uw-statistics';
import { configStore } from 'global/config.store';
import { PROFILE_CONFIG } from 'constants/profileConfig';
import { ALLY_FEATURES } from 'constants/ally-features';
import { ApplicationContext } from './use-application-setup';

const STATISTICS_ENDPOINT = 'v1/stats/enabled-feature';

export const StatisticsContext = createContext<ReturnType<typeof useStatistics>>(null);

export const useStatistics = () => {
  const Api = useApi();
  const {
    thisSiteId,
    accountIdCode,
    isOpen,
    href,
    isClosedByUser,
    paidAi,
    userId,
    config,
    widgetLayout,
  } = useContext(ApplicationContext);
  const isOnPrem = config.current.onPrem;
  const isOpenedStatisticSent = useRef<boolean>(false);
  const statsRequestWaitList = useRef<string[]>([]);

  const enabledFeatures = useRef({});

  const sendEnableFeatureStats = (feat: string, real: boolean = true) => {
    if (isOnPrem) return;
    Api.post(STATISTICS_ENDPOINT, {
      uid: userId,
      siteId: thisSiteId,
      account: accountIdCode,
      type: paidAi ? 'paid' : 'free',
      feat,
      real,
      widgetLayout,
    }).catch((e) => console.error(e));
  };

  const sendStatistics = (feature: string, real: boolean = true) => {
    // disable statistic tracking for specific customer
    const isDisabled = accountIdCode === atob('eExxdFhtQVRSdw==');

    if (isDisabled) return;

    if (thisSiteId) {
      sendEnableFeatureStats(feature, real);
      return;
    }

    // if client still did not receive config with site id then stats should be sent later
    statsRequestWaitList.current.push(feature);
  };

  useEffect(() => {
    if (thisSiteId && accountIdCode && statsRequestWaitList.current.length) {
      statsRequestWaitList.current.forEach((data) => {
        sendEnableFeatureStats(data);
      });
      statsRequestWaitList.current = [];
    }
  }, [thisSiteId, accountIdCode]);

  const onFeatureTrigger = (feature: string, actionState?: string | number) => {
    if (feature === 's8') {
      for (const feature in enabledFeatures.current) {
        if (enabledFeatures.current.hasOwnProperty(feature)) {
          enabledFeatures.current[feature] = false;
        }
      }
      return;
    }

    if (actionState !== 0) {
      const isProfileFeature = Boolean(PROFILE_CONFIG[feature]);
      const featureName = ALLY_FEATURES[feature].description;

      if (isProfileFeature) {
        uwStatistics.profileTriggered({ data: featureName });
        for (const feature in enabledFeatures.current) {
          if (enabledFeatures.current.hasOwnProperty(feature)) {
            enabledFeatures.current[feature] = false;
          }
        }
      } else {
        uwStatistics.featureTriggered({ data: featureName });
      }
    }

    // exclude feature that user turned off if that feature has already been turned on on load
    // (such a feature will not be on the map and the state will be 0)
    if (actionState === 0 && !enabledFeatures.current[feature]) {
      return;
    }

    enabledFeatures.current[feature] = actionState !== 0;
  };

  const notifyServerThatWidgetOpened = useCallback(() => {
    if (isOpenedStatisticSent.current) {
      return;
    }

    uwStatistics.widgetOpened({ data: configStore.config$.lastValue.href });

    sendStatistics('opens');
    isOpenedStatisticSent.current = true;
  }, [thisSiteId, accountIdCode, Api, href]);

  useEffect(() => {
    if (isOpen) {
      notifyServerThatWidgetOpened();
    }
  }, [isOpen, notifyServerThatWidgetOpened]);

  useEffect(() => {
    if (isClosedByUser) {
      const features = Object.keys(enabledFeatures.current);
      if (features.length) {
        features.forEach((feat) => {
          sendStatistics(feat, enabledFeatures.current[feat]);
        });
        enabledFeatures.current = {};
      }
    }
  }, [isClosedByUser, sendStatistics]);

  return {
    onFeatureTrigger,
    sendStatistics,
  };
};

export const StatisticsWrapper: FunctionComponent = ({ children }) => {
  const statistics = useStatistics();

  return <StatisticsContext.Provider value={statistics}>{children}</StatisticsContext.Provider>;
};
