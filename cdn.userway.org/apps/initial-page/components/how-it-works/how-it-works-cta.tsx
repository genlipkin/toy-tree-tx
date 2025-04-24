import { h } from 'preact';
import { useTranslation } from 'hooks/use-translation';
import { PlaySmallIcon } from '@uw/icons';

import './how-it-works.scss';
import { useContext, useMemo } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { isMobile } from 'helpers/detect-user-agent';
import { sessionStore } from 'global/session.store';

declare const applicationConfig: { base: { frontend: string } };

export const HowItWorksCta = () => {
  const { translate } = useTranslation();
  const {
    tunings,
    targetPageOrigin,
    config,
    paidProductsEnabled,
    tuningsFromServerInProgress,
    paidAi,
  } = useContext(ApplicationContext);
  const [isLogged] = useConnect(sessionStore.isLogged$);

  const href = useMemo(() => {
    const baseUrl = isMobile()
      ? `${applicationConfig.base.frontend}pre-mobile-widget`
      : `${applicationConfig.base.frontend}how-it-works`;

    // we shouldn't add any utm params for userway account sites e.g. userway.org, manage.userway.org, scan.userway.org etc
    const queryParams =
      config.current?.services?.userId === 46522
        ? ''
        : `?${[
            'utm_medium=widget_footer',
            'utm_campaign=how_it_works',
            `utm_source=${tunings?.site_name}`,
            `url=${targetPageOrigin}`,
          ]
            .map((param) => encodeURI(param))
            .join('&')}`;

    return `${baseUrl}${queryParams}`;
  }, [tunings, targetPageOrigin]);

  const howItWorksButtonVisible = useMemo(() => {
    if (!paidProductsEnabled) {
      return false;
    }

    const hasAffiliateLink = !!config.current?.services?.affiliateLink;

    return (
      !tuningsFromServerInProgress &&
      !paidProductsEnabled.WHITE_LABEL &&
      !paidProductsEnabled.CUSTOM_BRANDING &&
      !paidProductsEnabled.REMEDIATION &&
      !hasAffiliateLink &&
      !isLogged &&
      !paidAi
    );
  }, [paidProductsEnabled, tuningsFromServerInProgress, isLogged, paidAi]);

  if (!howItWorksButtonVisible) {
    return null;
  }

  return (
    <div class="uwaw-how-it-works">
      <a
        class="uwaw-btn uwaw-btn_blue"
        target="_blank"
        aria-label={translate('widget.howItWorks.ariaLabel')}
        href={href}
      >
        <span class="uwaw-btn__icon">
          <PlaySmallIcon />
        </span>
        {translate('widget.howItWorks.videoButton')}
      </a>
    </div>
  );
};
