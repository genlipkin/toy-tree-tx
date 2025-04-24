function includeStyles(
  src: string,
  callback: (value?: unknown) => void,
  error: (err: string | Event) => void,
) {
  const content = document.head || document.querySelector('head');
  const link = document.createElement('link');

  link.rel = 'stylesheet';
  link.href = src;

  link.onload = function () {
    if (callback) {
      callback();
    }
  };

  link.onerror = function (e) {
    error(e);
  };

  content.appendChild(link);
}

export const loadDeferredCss = (url: string) =>
  new Promise((resolve, reject) => {
    try {
      includeStyles(url, resolve, reject);
    } catch (e) {
      reject(e);
    }
  });
