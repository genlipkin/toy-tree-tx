import { tokenStore } from '../global/token.store';
import { configStore } from '../global/config.store';

type Primitive = string | number | boolean;

const API_BASE = '__API_BASE__';

const toUrlParams = (params: string | Record<string, Primitive>) =>
  Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');

function fetch<R = any>(url: string, opts: RequestInit) {
  return new Promise<R>((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(opts.method, url);
    xhr.onload = function () {
      if (this.status >= 200 && this.status < 300) {
        resolve(xhr.response);
      } else {
        reject({
          status: this.status,
          statusText: xhr.statusText,
        });
      }
    };
    xhr.onerror = function () {
      reject({
        status: this.status,
        statusText: xhr.statusText,
      });
    };
    if (opts.headers) {
      Object.keys(opts.headers).forEach((key) => {
        xhr.setRequestHeader(key, opts.headers[key]);
      });
    }

    let params = opts.body as XMLHttpRequestBodyInit;
    if (params && typeof params === 'object') {
      params = Object.keys(params)
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');
    }

    xhr.send(params);
  });
}

// TODO: check why it is supposed to be a hook. should we make just util functions
export const useApi = () => {
  const request = <R = any>(url: string, options?: RequestInit): Promise<R> => {
    const match = url.match(/^https?:\/\//);
    let isFullUrl = false;
    if (match) {
      isFullUrl = true;
    }

    let language;
    configStore.lstConfig$.subscribe((config) => {
      if (config?.language) {
        language = config.language;
      }
    });

    const headers = {
      'X-Auth-Language': language,
      ...(tokenStore.hasToken() ? { 'X-Auth-Token': tokenStore.getToken() } : {}),
      ...options.headers,
    };

    return fetch(isFullUrl ? url : API_BASE + url, {
      ...options,
      headers,
    })
      .then((response) => {
        if (response.status === 401) {
          tokenStore.tokenInvalid$.next();
        }

        if (!response) {
          return null;
        }

        try {
          return JSON.parse(response) as R;
        } catch {
          console.error('Invalid response:', response);
          return null;
        }
      })
      .catch((reject) => {
        if (reject.status === 401) {
          tokenStore.tokenInvalid$.next();
          return null;
        }

        throw reject;
      });
  };

  const post = <T = Primitive, R = any>(url: string, data: T | Record<string, T>) =>
    request<R>(url, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(data),
    });

  const get = <R = any>(
    url: string,
    params?: string | Record<string, Primitive>,
    options?: RequestInit,
  ) =>
    request<R>(url + (params ? `?${toUrlParams(params)}` : ''), {
      method: 'GET',
      ...options,
    });

  const sendFormData = (url: string, formData: FormData) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('POST', API_BASE + url);

      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(xhr.response);
        } else {
          let errors;

          try {
            const response = JSON.parse(xhr.response);
            errors = response?.errors || null;
          } catch (error) {
            errors = null;
          }

          reject({
            status: this.status,
            statusText: xhr.statusText,
            errors,
          });
        }
      };
      xhr.onerror = function (error) {
        console.log('Network error: ', error);
        reject({
          status: this.status,
          statusText: xhr.statusText,
          errors: {
            email: 'Client error. Looks like something went wrong...',
            text: 'Client error. Looks like something went wrong...',
          },
        });
      };

      xhr.send(formData);
    }).then((response: any) => {
      if (!response) {
        return null;
      }

      try {
        return JSON.parse(response);
      } catch {
        console.error('Invalid response:', response);
        return null;
      }
    });

  return {
    post,
    get,
    sendFormData,
  };
};
