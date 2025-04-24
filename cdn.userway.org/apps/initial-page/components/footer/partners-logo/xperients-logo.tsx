import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';
import './styles/xperients.scss';

interface Props {}

export const XPERIENTS = 'xperients';

const rtlLanguages = ['he', 'ar', 'fa'];

export const XperientsLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled, whiteLabelOptions, customBrandingOptions } =
    useContext(ApplicationContext);
  const isRtlLanguage =
    config.current &&
    config.current.language &&
    rtlLanguages.some((lang) => config.current.language.includes(lang));
  const itemClassName = isRtlLanguage ? 'brand-footer__item-rtl' : 'brand-footer__item';

  useEffect(() => {
    if (
      config.current?.services?.partner !== XPERIENTS ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== XPERIENTS ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="xperients-footer">
      <div className={itemClassName}>
        <a
          href="https://xperients.com/#uaw"
          target="_blank"
          aria-label="go to Xperients website - Opens in a new tab"
        >
          <img
            src="./frontend/images/custom-logo/xperients-logo.svg"
            alt="Xperients Accessibility Logo"
          />
        </a>
      </div>
      <div className={itemClassName}>
        <a
          href="https://userway.org#uaw"
          target="_blank"
          {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
          aria-label="go to UserWay website - Opens in a new tab"
        >
          <img src="./frontend/images/logo.svg" alt="UserWay Logo" />
        </a>
      </div>
    </div>
  );
};
