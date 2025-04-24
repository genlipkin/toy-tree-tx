import { h, FunctionalComponent } from 'preact';
import { onKeyboardSelection } from 'helpers/operators';
import './footer.scss';
import { useContext, useEffect, useRef } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useTranslation } from 'hooks/use-translation';
import { useUwBranding } from 'hooks/use-uw-branding';
import { footerReveal } from '../../../shared/gsap-animations/footer-reveal';
import { Logo } from './logo';
import { ShortpointLogo } from './partners-logo/shortpoint-logo';
import { LeosLogo } from './partners-logo/leos-logo';
import { NagishLiLogo } from './partners-logo/nagishli-logo';
import { NazoozLogo } from './partners-logo/nazooz-logo';
import { AltmeyerLogo } from './partners-logo/altmeyer-logo';
import { PortcitymarketingLogo } from './partners-logo/portcitymarketing-logo';
import { GenericPartnerLogo } from './partners-logo/generic-partner-logo';
import { useFooter } from './use-footer';
import { DigitouchLogo } from './partners-logo/digitouch-logo';
import { AdaguardianLogo } from './partners-logo/adaguardian-logo';
import { JoyDigitalLogo } from './partners-logo/joydigital-logo';
import { MadeByCatLogo } from './partners-logo/madebycat-logo';
import { XperientsLogo } from './partners-logo/xperients-logo';
import { SorceLogo } from './partners-logo/sorce-logo';
import { OctecLogo } from './partners-logo/octec-logo';

const truncate = (text: string, limit: number) =>
  text.length > limit ? text.substr(0, limit - 1) : text;

let animated = false;

export const Footer: FunctionalComponent = () => {
  const context = useContext(ApplicationContext);
  const { translate } = useTranslation();
  const {
    clickToMainMenu,
    clickBack,
    accessibilityStatementText,
    asteriskVisible,
    isPartnerDefaultLogoEnvironment,
    isGenericPartnerCustomLogoEnvironment,
    manageLinkVisible,
    reportProblemVisible,
    accessibilityStatementVisible,
    isFooterNavLinksVisible,
    goLogin,
    goReport,
    // callbackRef,
    isMainMenuUrl,
    isLogged,
    backState,
    accessibilityStatementLink,
  } = useFooter({ context, translate });

  const { isWhiteLabeled } = useUwBranding();

  const isCustomLogoEnvironment =
    isPartnerDefaultLogoEnvironment || isGenericPartnerCustomLogoEnvironment;

  const footer = useRef(null);

  useEffect(() => {
    if (animated) return;
    footerReveal(footer.current, 0.2, 0.3, null, () => {
      animated = true;
    });
  }, []);

  const isHiddenNavMenuButtons =
    !(isFooterNavLinksVisible && accessibilityStatementVisible) &&
    !(isFooterNavLinksVisible && manageLinkVisible) &&
    !(isFooterNavLinksVisible && reportProblemVisible) &&
    !(isLogged && backState) &&
    isCustomLogoEnvironment;
  return (
    context && (
      <div
        ref={footer}
        className={`uwaw-footer ${asteriskVisible ? 'uwaw-footer_has-asterisk' : ''} ${
          isCustomLogoEnvironment ? 'uwaw-footer_has-brand' : ''
        }  ${
          isFooterNavLinksVisible && accessibilityStatementVisible
            ? 'uwaw-footer_has-has-statement'
            : ''
        }`}
      >
        {!isHiddenNavMenuButtons && (
          <div className="uwaw-footer__i">
            <div className="uwaw-footer__l">
              <ul className="uwaw-footer__nav">
                {isFooterNavLinksVisible && accessibilityStatementVisible && (
                  <li className="uwaw-footer__nav__item">
                    <a
                      className="uwaw-footer__nav__lnk"
                      href={accessibilityStatementLink}
                      target="_blank"
                      aria-label={`${accessibilityStatementText} - ${translate('widget.new_tab')}`}
                    >
                      <span className="uwaw-features__nav_truncate">
                        {truncate(accessibilityStatementText, 50)}
                      </span>
                    </a>
                  </li>
                )}
                {isFooterNavLinksVisible && reportProblemVisible && (
                  <li className="uwaw-footer__nav__item">
                    <button
                      className="uwaw-footer__nav__lnk"
                      tabIndex={0}
                      onClick={goReport}
                      onKeyUp={onKeyboardSelection(goReport)}
                    >
                      {translate('widget.footer.report.label')}
                    </button>
                  </li>
                )}
                {isFooterNavLinksVisible && manageLinkVisible && (
                  <li className="uwaw-footer__nav__item">
                    <button
                      className="uwaw-footer__nav__lnk uwaw-footer__nav__lnk_mng"
                      onClick={goLogin}
                      onKeyUp={onKeyboardSelection(goLogin)}
                      tabIndex={0}
                      aria-label={translate(
                        isWhiteLabeled
                          ? 'widget.footer.manage_whitelabel.aria'
                          : 'widget.footer.manage.aria',
                      )}
                    >
                      {translate('widget.footer.manage.label')}
                    </button>
                  </li>
                )}

                {isLogged &&
                  backState &&
                  context.widgetLayout !== 'headless' &&
                  !context.tuningsFromServerInProgress && (
                    <li className="uwaw-footer__nav__item">
                      <button
                        className="uwaw-footer__nav__lnk uwaw-footer__nav__lnk_mng"
                        onKeyUp={onKeyboardSelection(isMainMenuUrl ? clickToMainMenu : clickBack)}
                        onClick={isMainMenuUrl ? clickToMainMenu : clickBack}
                        tabIndex={0}
                      >
                        {translate('widget.footer.misc.main_menu')}
                      </button>
                    </li>
                  )}
              </ul>
            </div>
            {!isCustomLogoEnvironment && <div className="uwaw-footer__r">{<Logo />}</div>}
          </div>
        )}

        <AdaguardianLogo />

        <ShortpointLogo />

        <PortcitymarketingLogo />

        <LeosLogo />

        <DigitouchLogo />

        <NagishLiLogo />

        <NazoozLogo />

        <AltmeyerLogo />

        <JoyDigitalLogo />

        <MadeByCatLogo />

        <XperientsLogo />

        <SorceLogo />

        <OctecLogo />

        {asteriskVisible && (
          <button
            className="uwaw-footer__asterisk"
            onClick={goLogin}
            onKeyUp={onKeyboardSelection(goLogin)}
            tabIndex={0}
            aria-label={translate(
              isWhiteLabeled ? 'widget.footer.manage_whitelabel.aria' : 'widget.footer.manage.aria',
            )}
          >
            *
          </button>
        )}

        <GenericPartnerLogo />
      </div>
    )
  );
};
