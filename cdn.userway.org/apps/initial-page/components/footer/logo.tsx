import { h, Fragment, FunctionalComponent } from 'preact';
import { useContext } from 'preact/hooks';
import { isMobile } from 'helpers/detect-user-agent';
import { useTranslation } from 'hooks/use-translation';
import { ApplicationContext } from 'contexts/use-application-setup';
import { SHORTPOINT } from './partners-logo/shortpoint-logo';
import { PORT_CITY_MARKETING } from './partners-logo/portcitymarketing-logo';
import { LEOS } from './partners-logo/leos-logo';
import { NAGISHLI } from './partners-logo/nagishli-logo';
import { NAZOOZ } from './partners-logo/nazooz-logo';
import { ALTMEYER } from './partners-logo/altmeyer-logo';
import { DIGITOUCH } from './partners-logo/digitouch-logo';
import { ADAGUARDIAN } from './partners-logo/adaguardian-logo';
import { JOYDIGITAL } from './partners-logo/joydigital-logo';
import { MADEBYCAT } from './partners-logo/madebycat-logo';
import { XPERIENTS } from './partners-logo/xperients-logo';
import { SORCE } from './partners-logo/sorce-logo';
import { OCTEC } from './partners-logo/octec-logo';

declare const applicationConfig: { base: { frontend: string } };

const isSpanish = (lang: string): boolean => {
  const spanishLang = ['es', 'es-MX'];
  return spanishLang.includes(lang);
};

const getLogoUrl = (utmSource: string, widgetType: 'free_widget' | 'widget', userId, lang) => {
  const baseUrl = isMobile()
    ? `${applicationConfig.base.frontend}pre-mobile-widget`
    : `${applicationConfig.base.frontend}`;

  const additionalLangParam = isSpanish(lang) ? 'es' : '';
  const query =
    userId === 46522
      ? ''
      : `?utm_source=${utmSource}&utm_medium=widget_footer&utm_campaign=${widgetType}`;
  return `${baseUrl}${additionalLangParam}${query}`;
};

const CustomLogo = ({ logoSrc }: { logoSrc: string }) => (
  <img className="userway_custom_logo" src={logoSrc} alt="Logo, decorative" />
);

const CustomLogoLink = ({
  link,
  logoSrc,
  ariaLabel,
}: {
  link: string;
  logoSrc: string;
  ariaLabel?: string;
}) => (
  <a className="uwaw-footer__logo-label" aria-label={ariaLabel} href={link} target="_blank">
    <CustomLogo logoSrc={logoSrc} />
  </a>
);

export const Logo: FunctionalComponent = () => {
  const {
    config,
    paidAi,
    tunings,
    previewCustomLogo,
    noLogo,
    whiteLabelOptions,
    customBrandingOptions,
    isNoFollowEnabled,
  } = useContext(ApplicationContext);

  const { translate } = useTranslation();

  // show logo template in the preview mode
  if (previewCustomLogo?.path) {
    return previewCustomLogo?.link ? (
      <CustomLogoLink link={previewCustomLogo.link} logoSrc={previewCustomLogo?.path} />
    ) : (
      <CustomLogo logoSrc={previewCustomLogo?.path} />
    );
  }

  const isCustomLogoEnvironment: boolean =
    !!config.current?.services?.partner &&
    [
      ADAGUARDIAN,
      SHORTPOINT,
      PORT_CITY_MARKETING,
      LEOS,
      NAGISHLI,
      NAZOOZ,
      ALTMEYER,
      DIGITOUCH,
      JOYDIGITAL,
      MADEBYCAT,
      XPERIENTS,
      SORCE,
      OCTEC,
    ].includes(config.current?.services?.partner);

  const logoHref =
    config.current?.services?.affiliateLink ??
    getLogoUrl(
      tunings?.site_name,
      paidAi ? 'widget' : 'free_widget',
      config.current?.services?.userId,
      config.current?.language,
    );

  // if not in preview mode and no white label logo
  if (!previewCustomLogo && !noLogo) {
    // display original UserWay logo
    if (
      !whiteLabelOptions?.wlHideLogo &&
      !customBrandingOptions.custom_logo_image_path &&
      !isCustomLogoEnvironment
    ) {
      return (
        <Fragment>
          <div class="uwaw-footer__logo">
            <a
              class="uwaw-logo-img"
              target="_blank"
              href={logoHref}
              {...(isNoFollowEnabled ? { rel: 'nofollow' } : {})}
            >
              <img
                src="./frontend/images/logo.svg"
                alt={`UserWay Logo - ${translate('widget.new_tab')}`}
              />
            </a>
          </div>
        </Fragment>
      );
    }

    // display custom logo
    if (customBrandingOptions.custom_logo_image_path) {
      return customBrandingOptions.custom_logo_image_link ? (
        <CustomLogoLink
          link={customBrandingOptions.custom_logo_image_link}
          logoSrc={customBrandingOptions.custom_logo_image_path}
          ariaLabel={`Link to the ${customBrandingOptions.custom_logo_image_link_no_schema} homepage - opens in a new tab`}
        />
      ) : (
        <CustomLogo logoSrc={customBrandingOptions.custom_logo_image_path} />
      );
    }
  }

  return null;
};
