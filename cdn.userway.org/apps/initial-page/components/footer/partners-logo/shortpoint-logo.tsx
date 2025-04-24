import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

export const SHORTPOINT = 'shortpoint';

export const ShortpointLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled, whiteLabelOptions, customBrandingOptions } =
    useContext(ApplicationContext);

  useEffect(() => {
    if (
      config.current?.services?.partner !== SHORTPOINT ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== SHORTPOINT ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="brand-footer">
      <div className="brand-footer__item">
        <a href="https://www.shortpoint.com/#uaw" target="_blank">
          <img
            height="34.78"
            src="/frontend/images/shortpoint-logo.svg"
            alt="ShortPoint Accessibility Logo - Opens in a new tab"
          />
        </a>
      </div>
      <div className="brand-footer__item">
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
