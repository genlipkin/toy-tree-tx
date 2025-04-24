import { Subject } from 'helpers/store';
import { ALLY_FEATURES } from 'constants/ally-features';

export interface ResetFeatureData {
  trigger: {
    feature: string;
    actionState: number;
  };
}

class AllyFeaturesStore {
  public resetFeature$ = new Subject<ResetFeatureData>();

  public get features() {
    return Object.keys(ALLY_FEATURES)
      .filter((key) => !ALLY_FEATURES[key].isProfile)
      .reduce((res, key) => {
        res[key] = ALLY_FEATURES[key];
        return res;
      }, {});
  }

  public get profiles() {
    return Object.keys(ALLY_FEATURES)
      .filter((key) => ALLY_FEATURES[key].isProfile)
      .reduce((res, key) => {
        res[key] = ALLY_FEATURES[key];
        return res;
      }, {});
  }
}

(window as any).allyFeaturesStore = new AllyFeaturesStore();

export const allyFeaturesStore = (window as any).allyFeaturesStore as AllyFeaturesStore;
