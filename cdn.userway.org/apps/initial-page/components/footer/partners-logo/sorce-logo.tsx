import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';
import './styles/sorce.scss';

interface Props {}

export const SORCE = 'sorceintranet';

const rtlLanguages = ['he', 'ar', 'fa'];

export const SorceLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled, whiteLabelOptions, customBrandingOptions } =
    useContext(ApplicationContext);

  if (
    config.current?.services?.partner !== SORCE ||
    whiteLabelOptions?.wlHideLogo ||
    customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  const isRtlLanguage = rtlLanguages.some((lang) => config?.current?.language?.includes(lang));
  const itemClassName = isRtlLanguage ? 'brand-footer__item-rtl' : 'brand-footer__item';

  useEffect(() => {
    if (
      config.current?.services?.partner !== SORCE ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  return (
    <div className="sorce-footer">
      <div className={itemClassName}>
        <a
          href="https://sorceintranet.co.uk/#uaw"
          target="_blank"
          aria-label="go to Sorce website - Opens in a new tab"
        >
          <img src="./frontend/images/custom-logo/sorce.png" alt="Sorce Accessibility Logo" />
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
