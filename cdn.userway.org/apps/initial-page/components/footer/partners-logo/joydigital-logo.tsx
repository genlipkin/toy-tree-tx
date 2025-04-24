import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

export const JOYDIGITAL = 'joydigital';

export const JoyDigitalLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled, whiteLabelOptions, customBrandingOptions } =
    useContext(ApplicationContext);

  useEffect(() => {
    if (
      config.current?.services?.partner !== JOYDIGITAL ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== JOYDIGITAL ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div
      className="brand-footer"
      style="padding-bottom: 1rem; justify-content: center; font-size: 50%;"
    >
      <div
        style="display: flex; justify-content: center; width: 40%;"
        className="brand-footer__item-rtl"
      >
        <a style="width: 50%;" href="https://joydigital.co.il/#uaw" target="_blank">
          <img
            src="./frontend/images/joydigital.png"
            alt="JoyDigital Accessibility Logo - Opens in a new tab"
          />
        </a>
      </div>
      <div
        style="width: 40%; display: flex; justify-content: center;"
        className="brand-footer__item-rtl"
      >
        <a
          style="width: 80%;"
          href="https://userway.org#uaw"
          target="_blank"
          {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
        >
          <img src="./frontend/images/logo.svg" alt="UserWay Logo - Opens in a new tab" />
        </a>
      </div>
    </div>
  );
};
