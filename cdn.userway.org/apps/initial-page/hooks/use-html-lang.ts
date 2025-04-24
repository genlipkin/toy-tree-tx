import { useEffect } from 'preact/hooks';

const setHtmlLang = ({ data: { action, lang } }) => {
  if (action === 'setHtmlLangAttribute') {
    document.documentElement.setAttribute('lang', lang);
  }
};

export const useHtmlLang = () => {
  useEffect(() => {
    window.addEventListener('message', setHtmlLang);
    return () => {
      window.removeEventListener('message', setHtmlLang);
    };
  }, []);
};
