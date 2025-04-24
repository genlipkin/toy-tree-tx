import { Subject } from 'helpers/store';
import { INITIAL_PAGE_STATE } from 'constants/constants';

class StateStore {
  public state = new Subject<string>({ replay: true, initialState: INITIAL_PAGE_STATE });

  public angularStateChanges$ = new Subject<string>({ replay: true });

  public onClose$ = new Subject<void>();

  public onOpen$ = new Subject<void>();

  public get isOnHomePage() {
    return this.state.lastValue === INITIAL_PAGE_STATE;
  }
}

(window as any).stateStore = new StateStore();

export const stateStore = (window as any).stateStore as StateStore;
