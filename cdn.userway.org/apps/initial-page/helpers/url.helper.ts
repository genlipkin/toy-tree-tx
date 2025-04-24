//  to eliminate the injection of malicious parameters
const ALLOWED_URL_PARAMS: string[] = [
  'services',
  'tunings',
  'language',
  'account',
  'widgetPageLang',
  'site-language',
];

export const getUrlParams = (): { [key: string]: any } => {
  const search = window.location.search;
  const urlParams = new URLSearchParams(search);

  const params = {};

  urlParams.forEach((value, key) => {
    if (ALLOWED_URL_PARAMS.includes(key)) {
      try {
        params[key] = JSON.parse(value);
      } catch (error) {
        params[key] = value;
      }
    }
  });

  return params;
};
