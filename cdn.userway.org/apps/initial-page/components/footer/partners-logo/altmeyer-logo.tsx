import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

export const ALTMEYER = 'altmeyer';

export const AltmeyerLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled, whiteLabelOptions, customBrandingOptions } =
    useContext(ApplicationContext);
  const isHebrew =
    config.current && config.current.language && config.current.language.includes('he');
  const itemClassName = isHebrew ? 'brand-footer__item-rtl' : 'brand-footer__item';

  useEffect(() => {
    if (
      config.current?.services?.partner !== ALTMEYER ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== ALTMEYER ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="brand-footer">
      <div className={itemClassName}>
        <a href="https://altmeyer.com/#uaw" target="_blank">
          <img
            height="34.78"
            style="width: auto; margin: 0 auto"
            src="/frontend/images/altmeyer-logo.png"
            alt="Altmeyer Accessibility Logo - Opens in a new tab"
          />
        </a>
      </div>
      <div className={itemClassName}>
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
