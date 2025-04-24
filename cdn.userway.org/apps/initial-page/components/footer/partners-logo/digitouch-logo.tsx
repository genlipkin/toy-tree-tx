import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

export const DIGITOUCH = 'digitouch';

export const DigitouchLogo: FunctionalComponent<Props> = () => {
  const { config, whiteLabelOptions, customBrandingOptions, isNoFollowEnabled } =
    useContext(ApplicationContext);

  useEffect(() => {
    if (
      config.current?.services?.partner !== DIGITOUCH ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== DIGITOUCH ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="brand-footer">
      <div className="brand-footer__item-rtl">
        <a href="https://digitouch.co.il/#uaw" target="_blank">
          <img
            height="33.32"
            src="/frontend/images/digitouch.svg"
            alt="Digitouch Accessibility Logo - Opens in a new tab"
          />
        </a>
      </div>
      <div className="brand-footer__item-rtl">
        <a
          href="https://userway.org#uaw"
          target="_blank"
          {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
        >
          <img
            height="33.32"
            src="/frontend/images/logo.svg"
            alt="UserWay Logo - Opens in a new tab"
          />
        </a>
      </div>
    </div>
  );
};
