import { useEffect } from 'preact/hooks';
import { allyFeaturesStore } from '../global/ally-features.store';

export const useAllyFeatureListeners = (sendEvent: () => void, settings) => {
  useEffect(() => {
    const unsubscribe = allyFeaturesStore.resetFeature$.subscribe((resetFeature) => {
      const featureName = resetFeature.trigger.feature;
      const featureState = resetFeature.trigger.actionState;

      if (settings[`userway-${featureName}`]) {
        if (featureName === 's7') {
          settings['userway-s7'].value = 0;
          settings['userway-s15'].value = 0;
        }
        if (featureName === 's2') {
          settings['userway-s2'].value = 0;
          settings['userway-s10'].value = 0;
          settings['userway-s16'].value = 0;

          document.documentElement.classList.remove('userway-s2');
          document.documentElement.classList.remove('userway-s2-ie');
        } else {
          settings[`userway-${featureName}`].value = featureState;
        }

        sendEvent();
      }
    });

    return () => unsubscribe();
  }, [sendEvent, settings]);
};
