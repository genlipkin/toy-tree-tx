import { createContext, FunctionComponent, h } from 'preact';
import { useMemo, useReducer } from 'preact/hooks';
import { ALLY_FEATURES } from 'constants/ally-features';

export interface AllyFeatureState {
  name: string;
  disabledSlot?: boolean;
  disabledSteps?: number[];
  actionState?: number;
  isProfile?: boolean;
  icon?: string;
  temporaryDisabled?:
    | {
        reason: string;
      }
    | false
    | undefined;
}

interface AllyFeatureOptions {
  isWhiteLabeled: boolean;
}

interface AllyFeatureComputed {
  onTriggerFn: (
    state: string | number,
    options?: AllyFeatureOptions,
  ) => Record<string, string | number>;
  actionStatesMeta: Record<number, Record<string, string>>;
}

export type AllyFeatureData = AllyFeatureState & AllyFeatureComputed;
export type AllyFeaturesAction = {
  type: ALLY_FEATURES_ACTIONS;
  data?: AllyFeatureState;
};

enum ALLY_FEATURES_ACTIONS {
  ADD,
  UPDATE,
  RESET_ALL,
}

export const AllyFeaturesActions = {
  add: (data: AllyFeatureState) => ({ type: ALLY_FEATURES_ACTIONS.ADD, data }),
  update: (data: AllyFeatureState) => ({ type: ALLY_FEATURES_ACTIONS.UPDATE, data }),
  resetAll: () => ({ type: ALLY_FEATURES_ACTIONS.RESET_ALL }),
};

export const AllyFeaturesContext = createContext<ReturnType<typeof useAllyFeatures>>(null);

const useAllyFeatures = () => {
  const allyFeatureReducer = (
    state: Record<string, AllyFeatureData>,
    action: AllyFeaturesAction,
  ): Record<string, AllyFeatureData> => {
    switch (action.type) {
      case ALLY_FEATURES_ACTIONS.ADD: {
        const allyFeature = ALLY_FEATURES[action.data.name];

        if (!allyFeature) {
          console.error(`Unexpected ally feature: ${action.data.name}`);
          return state;
        }
        return {
          ...state,
          [action.data.name]: {
            ...action.data,
            actionState: action.data.actionState || 0,
            onTriggerFn: ALLY_FEATURES[action.data.name].onActionTrigger,
            actionStatesMeta: ALLY_FEATURES[action.data.name].actionStates,
            isProfile: ALLY_FEATURES[action.data.name].isProfile,
            icon: ALLY_FEATURES[action.data.name].icon,
          },
        };
      }
      case ALLY_FEATURES_ACTIONS.UPDATE: {
        return {
          ...state,
          [action.data.name]: {
            ...state[action.data.name],
            ...action.data,
          },
        };
      }
      case ALLY_FEATURES_ACTIONS.RESET_ALL: {
        return Object.keys(state).reduce(
          (result, featureKey) => ({
            ...result,
            [featureKey]: {
              ...state[featureKey],
              actionState: 0,
            },
          }),
          {},
        );
      }
      default: {
        return state;
      }
    }
  };

  const [allyFeaturesState, allyFeatureDispatch] = useReducer(allyFeatureReducer, {});

  const allyFeaturesList = useMemo(
    () => Object.keys(allyFeaturesState).map((key) => allyFeaturesState[key]),
    [allyFeaturesState],
  );

  return {
    allyFeaturesList,
    allyFeaturesState,
    allyFeatureDispatch,
  };
};

export const AllyFeaturesWrapper: FunctionComponent = ({ children }) => {
  const allyFeatures = useAllyFeatures();

  return (
    <AllyFeaturesContext.Provider value={allyFeatures}>{children}</AllyFeaturesContext.Provider>
  );
};
