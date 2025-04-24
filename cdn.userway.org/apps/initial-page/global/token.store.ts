import { Subject } from 'helpers/store';

const AUTH_TOKEN_KEY = 'authToken';
const AUTH_REFRESH_TOKEN = 'refreshToken';

class TokenStore {
  public token$ = new Subject<string>({ replay: true });

  public refreshToken$ = new Subject<string>({ replay: true });

  public tokenInvalid$ = new Subject<void>();

  hasToken() {
    return !!this.getToken();
  }

  setToken(token) {
    tokenStore.token$.next(token);
    try {
      if (token) {
        window.localStorage.setItem(AUTH_TOKEN_KEY, token);
      } else {
        window.localStorage.removeItem(AUTH_TOKEN_KEY);
      }
    } catch {
      console.warn('Could not write to the localStorage. Widget can work incorrectly.');
    }
  }

  getToken() {
    try {
      return window.localStorage.getItem(AUTH_TOKEN_KEY);
    } catch {
      console.warn('Could not read from the localStorage. Widget can work incorrectly.');
      return this.token$.lastValue;
    }
  }

  setRefreshToken(refreshToken) {
    this.refreshToken$.next(refreshToken);
    try {
      if (refreshToken) {
        window.localStorage.setItem(AUTH_REFRESH_TOKEN, refreshToken);
      } else {
        window.localStorage.removeItem(AUTH_REFRESH_TOKEN);
      }
    } catch {
      console.warn('Could not write to the localStorage. Widget can work incorrectly.');
    }
  }

  getRefreshToken() {
    try {
      return window.localStorage.getItem(AUTH_REFRESH_TOKEN);
    } catch {
      console.warn('Could not read from the localStorage. Widget can work incorrectly.');
      return this.refreshToken$.lastValue;
    }
  }
}

(window as any).tokenStore = new TokenStore();

export const tokenStore = (window as any).tokenStore as TokenStore;
