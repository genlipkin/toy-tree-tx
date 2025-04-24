import { h, FunctionalComponent } from 'preact';
import { useContext, useEffect } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { layoutStore } from '../../../global/layout.store';

interface Props {}

export const NAGISHLI = 'nagishli';

export const NagishLiLogo: FunctionalComponent<Props> = () => {
  const { config, isNoFollowEnabled, whiteLabelOptions, customBrandingOptions } =
    useContext(ApplicationContext);

  const isHebrew =
    config.current && config.current.language && config.current.language.includes('he');
  const linkContent = isHebrew ? 'נגיש לי' : 'NagishLi';
  const linkHref = isHebrew ? 'https://www.nagish.li/' : 'https://www.nagish.li/en';
  const itemClassName = isHebrew ? 'brand-footer__item-rtl' : 'brand-footer__item';

  useEffect(() => {
    if (
      config.current?.services?.partner !== NAGISHLI ||
      !!whiteLabelOptions?.wlHideLogo ||
      !!customBrandingOptions?.custom_logo_image_path
    )
      return;
    layoutStore.mainContainer.addClass('uw-partner');
  }, []);

  if (
    config.current?.services?.partner !== NAGISHLI ||
    !!whiteLabelOptions?.wlHideLogo ||
    !!customBrandingOptions?.custom_logo_image_path
  ) {
    return null;
  }

  return (
    <div className="brand-footer">
      <div className={itemClassName}>
        <a
          style="background-color: transparent!important; border-radius: 5px!important; padding: 5px 10px!important; color: #4169E1!important; text-decoration: none!important; font-weight: 700!important; display: inline-block!important; border: 5px solid #4169E1!important; font-family: Arial,Helvetica,sans-serif!important; text-align: center; width: 100%"
          href={linkHref}
          target="_blank"
        >
          {linkContent}
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
