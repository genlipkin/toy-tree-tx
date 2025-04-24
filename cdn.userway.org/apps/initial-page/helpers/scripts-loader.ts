export interface ScriptOptions {
  id?: string;
  charset?: string;
}

function includeScript(
  src: string,
  callback: (value?: unknown) => void,
  error: (err: string | Event) => void,
  options: ScriptOptions,
) {
  const content = document.body || document.head;
  const script = document.createElement('script');

  script.onload = function () {
    callback();
  };

  script.onerror = function (e) {
    error(e);
  };

  script.src = src;

  if (!!options && options.charset) {
    script.charset = options.charset;
  }
  if (!!options && options.id) {
    script.id = options.id;
  }

  content.appendChild(script);
}

export const loadDeferredJs = (url: string, options?: ScriptOptions) =>
  new Promise((resolve, reject) => {
    try {
      includeScript(url, resolve, reject, options);
    } catch (e) {
      reject(e);
    }
  });
