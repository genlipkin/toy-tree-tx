import { useCallback, useContext, useEffect } from 'preact/hooks';
import { includes } from 'helpers';
import { ApplicationContext } from 'contexts/use-application-setup';
import { AllyFeaturesActions } from './use-ally-features';

// this list must be the same as in main.js line 1804
const visualImpairedFeatures = ['s2', 's4', 's6', 's7', 's12', 's13', 's14', 's23'];

export const useUpdateVisuallyImpairedState = (allyFeatureDispatch, onResetAll) => {
  const { enabledMenuFeatures } = useContext(ApplicationContext);
  const enableVisuallyImpairedFeatures = useCallback(
    (features) => {
      features.forEach((feature) => {
        allyFeatureDispatch(
          AllyFeaturesActions.update({
            name: feature,
            actionState: feature === 's7' || feature === 's23' ? 2 : 1,
          }),
        );
      });
    },
    [allyFeatureDispatch],
  );

  const updateVisuallyImpairedState = useCallback(
    (event) => {
      const data = event.data || {};
      if (!data.isUserWay || data.action !== 'updateVisuallyImpairedState') {
        return;
      }

      // We should reset all features before enable the "VisuallyImpaired" profile
      onResetAll({ isProfileDisable: true });

      if (!data.config) return;

      const availableVisualImpairedFeatures = visualImpairedFeatures.filter((feature) =>
        includes(enabledMenuFeatures.current, feature),
      );

      enableVisuallyImpairedFeatures(availableVisualImpairedFeatures);
    },
    [enableVisuallyImpairedFeatures, onResetAll],
  );

  useEffect(() => {
    window.addEventListener('message', updateVisuallyImpairedState);

    return () => {
      window.removeEventListener('message', updateVisuallyImpairedState);
    };
  }, [updateVisuallyImpairedState]);
};
