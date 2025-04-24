import { Subject } from '../../helpers';

const OVERSIZED_KEY = 'oversized';
export const OVERSIZED_CLASS = 'uwaw_oversized';

export const isOversizedEnabled = (): boolean => {
  try {
    return JSON.parse(window.localStorage.getItem(OVERSIZED_KEY) || 'false');
  } catch (e) {
    return false;
  }
};

export const storeOversizedValue = (value: boolean) => {
  try {
    window.localStorage.setItem(OVERSIZED_KEY, JSON.stringify(value));
  } catch (e) {
    // No-op
  }
};

class OversizedStore {
  public isOversized$ = new Subject<boolean>({ replay: true, initialState: isOversizedEnabled() });

  constructor() {
    this.isOversized$.subscribe((value) => {
      storeOversizedValue(value);
    });
  }
}

export const oversizedStore = new OversizedStore();
