import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';
import './styles/madebycat.scss';

interface Props {}

export const MADEBYCAT = 'madebycat';

const rtlLanguages = ['he', 'ar', 'fa'];

export const MadeByCatLogo: FunctionalComponent<Props> = () => {
  const { config, whiteLabelOptions, customBrandingOptions, isNoFollowEnabled } =
    useContext(ApplicationContext);
  const isRtlLanguage =
    config.current &&
    config.current.language &&
    rtlLanguages.some((lang) => config.current.language.includes(lang));
  const itemClassName = isRtlLanguage ? 'brand-footer__item-rtl' : 'brand-footer__item';

  useEffect(() => {
    if (config.current?.services?.partner !== MADEBYCAT || !!whiteLabelOptions?.wlHideLogo) return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== MADEBYCAT ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="madebycat-logo">
      <div className={itemClassName}>
        <a
          href="https://madebycat.com/"
          target="_blank"
          aria-label="go to made by cat website - opens in a new tab"
        >
          <img
            src="./frontend/images/custom-logo/madebycat/madebycat_logo.svg"
            alt="MadeByCat Accessibility Logo"
          />
        </a>
      </div>
      <div className={itemClassName}>
        <a
          href="https://userway.org#uaw"
          target="_blank"
          {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
          aria-label="go to UserWay website - opens in a new tab"
        >
          <img src="./frontend/images/logo.svg" alt="UserWay Logo" />
        </a>
      </div>
    </div>
  );
};
