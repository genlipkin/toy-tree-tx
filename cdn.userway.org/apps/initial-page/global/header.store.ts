import { Subject } from 'helpers/store';
import { INITIAL_PAGE_STATE } from 'constants/constants';

export const HOME_TITLE = 'widget.home.title';
export const DASHBOARD_TITLE = 'widget.dashboard.title';
export const LOGIN_TITLE = 'widget.login.title';

class HeaderStore {
  public clickBack = new Subject();

  public backState = new Subject({ replay: true, initialState: '' });

  public title = new Subject({ replay: true, initialState: '' });

  public isMainMenu = new Subject({ replay: true, initialState: true });

  setBackStateToHomePage() {
    this.backState.next(INITIAL_PAGE_STATE);
  }

  setIsMainMenu(value: boolean) {
    this.isMainMenu.next(value);
  }
}

(window as any).headerStore = new HeaderStore();

export const headerStore = (window as any).headerStore as HeaderStore;
