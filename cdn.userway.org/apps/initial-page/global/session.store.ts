import { useApi } from 'hooks/use-api';
import { stateStore } from 'global/state.store';
import { tokenStore } from 'global/token.store';
import { Subject } from 'helpers/store';
import { configStore } from 'global/config.store';

const TOKEN_REFRESH_INTERVAL_MS = 15 * 60000;
let refreshTokenInterval = null;

class SessionStore {
  private Api = useApi();

  private user: User = null;

  private refreshProcessInProgress: Promise<User | null> | null = null;

  private userAccountData: { loginType: string } = null;

  public isLogged$ = new Subject<boolean>({ replay: true, initialState: false });

  public isLoggedMember$ = new Subject<boolean>({ replay: true, initialState: false });

  constructor() {
    tokenStore.tokenInvalid$.subscribe(() => this.handleInvalidToken());

    tokenStore.token$.subscribe(() => this.checkLogin());

    this.isLogged$.subscribe((isLogged) => {
      this.isLoggedMember$.next(isLogged && this.isMember());
    });
  }

  private handleInvalidToken() {
    this.clearUserData();

    // Navigate to the login page if user inside "manage" app
    if (!stateStore.isOnHomePage) {
      stateStore.state.next('main.login');
    }
  }

  private checkLogin() {
    const isUserLogged = tokenStore.hasToken() && !!sessionStore.getUser();
    this.isLogged$.next(isUserLogged);
  }

  getUser(): User {
    return this.user;
  }

  setUser(data: User): void {
    this.user = data;
    this.checkLogin();
  }

  setUserAccountData(data) {
    this.userAccountData = data;
  }

  isMember() {
    return this.userAccountData?.loginType === 'MEMBER_LOGIN_AS';
  }

  isCsrExpert() {
    return this.user?.csrConfig;
  }

  isCsrExpertExternal() {
    const csrConfig = this.user?.csrConfig;
    return (
      csrConfig &&
      (csrConfig.scopeParentAccounts.length ||
        csrConfig.scopeAccounts.length ||
        csrConfig.scopeSites.length)
    );
  }

  login(data: UserData = {}) {
    this.setUser(data.user);
    this.setUserAccountData(data.jwtUserDetails);
    configStore.siteCount$.next(data.user.sitesCount);
    tokenStore.setToken(data.token);
    if (data.refreshToken) {
      tokenStore.setRefreshToken(data.refreshToken);
    }

    this.initTokenRefresh();
  }

  logout() {
    this.clearUserData();
  }

  refreshWidget({
    code = configStore.config$.lastValue?.accountIdCode,
    force = false,
  }: { code?: string; force?: boolean } = {}): Promise<User | null> {
    if (this.refreshProcessInProgress) {
      return this.refreshProcessInProgress;
    }

    this.refreshProcessInProgress = new Promise<User | null>((resolve) => {
      const token = tokenStore.getToken();
      tokenStore.token$.next(token);

      if (!code || !tokenStore.hasToken()) {
        return resolve(null);
      }

      if (!!this.user && !force) {
        return resolve(this.user);
      }

      this.refreshToken()
        .then(() =>
          this.Api.get('users/info-widget', { code }).then((response) => {
            if (response.code === 401) {
              this.logout();
            }
            if (response.code === 200) {
              this.setUser(response.data.user);
              this.setUserAccountData(response.data.jwtUserDetails);
              configStore.siteCount$.next(response.data.user.sitesCount);
            }
            resolve(this.user);
          }),
        )
        .catch((error) => {
          console.log('[Error] Refresh Token:', error);
          tokenStore.tokenInvalid$.next();
          resolve(null);
        });
    }).finally(() => {
      this.refreshProcessInProgress = null;
    });

    return this.refreshProcessInProgress;
  }

  refreshToken() {
    return new Promise<void>((resolve, reject) => {
      const refreshToken = tokenStore.getRefreshToken();

      if (!refreshToken) {
        resolve(null);
      } else {
        this.Api.get('sso/v0/public/service-user/refresh-token', null, {
          headers: {
            Authorization: refreshToken,
            'X-Sso-Request-Origin': 'WIDGET_ORIGIN',
          },
        }).then(
          (res) => {
            tokenStore.setToken(res.payload.accessToken);
            tokenStore.setRefreshToken(res.payload.refreshToken);
            resolve();
          },
          (err) => {
            tokenStore.tokenInvalid$.next();
            reject(err);
          },
        );
      }
    });
  }

  clearUserData() {
    this.setUser(null);
    tokenStore.setToken(null);
    tokenStore.setRefreshToken(null);
    this.cancelTokenRefresh();
  }

  initTokenRefresh() {
    if (refreshTokenInterval) {
      return;
    }
    refreshTokenInterval = setInterval(() => {
      this.refreshToken();
    }, TOKEN_REFRESH_INTERVAL_MS);
  }

  cancelTokenRefresh() {
    !!refreshTokenInterval && clearInterval(refreshTokenInterval);
    refreshTokenInterval = null;
  }
}

(window as any).sessionStore = new SessionStore();

export const sessionStore = (window as any).sessionStore as SessionStore;
