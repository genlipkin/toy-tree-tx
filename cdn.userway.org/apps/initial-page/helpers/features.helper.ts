interface ActionState {
  label: string;
  aria: string;
  iconAlt?: string;
  iconClass?: string;
  iconWrapClass?: string;
}
interface AllyFeatureOptions {
  isWhiteLabeled: boolean;
}
interface Feature {
  description?: string;
  modifyMenuLabel?: string;
  isProfile?: boolean;
  icon?: string;
  actionStates: { [key: number]: ActionState };
  onActionTrigger: (state: number, options?: AllyFeatureOptions) => Record<string, string | number>;
}

export type FeatureList = { [key: string]: Feature };

export const filterActiveFeatures = (features: string[], featureList: FeatureList) =>
  features.filter((feature) => !!featureList[feature]);

export const filterActiveFeaturesPattern = (features: string, featureList: FeatureList) =>
  filterActiveFeatures(features.split('|'), featureList).join('|');
