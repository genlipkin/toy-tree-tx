import { useCallback, useEffect, useMemo } from 'preact/hooks';
import { useApplicationSetup } from 'contexts/use-application-setup';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { sessionStore } from 'global/session.store';
import { headerStore } from 'global/header.store';
import { stateStore } from 'global/state.store';
import {
  FocusableTrapElement,
  useFocusableElement,
  useTranslationBase,
} from '@uw/common-components';
import { includes } from 'helpers/index';
import { layoutStore } from 'global/layout.store';
import { Trigger } from 'types/trigger';
import { INITIAL_PAGE_STATE, REPORT_PAGE_STATE } from '../../constants/constants';
import { PARTNERS } from './partners-logo/generic-partner-logo';
import { SHORTPOINT } from './partners-logo/shortpoint-logo';
import { PORT_CITY_MARKETING } from './partners-logo/portcitymarketing-logo';
import { ADAGUARDIAN } from './partners-logo/adaguardian-logo';

const UWAW_NO_FOOTER = 'uwaw-no-footer';

interface UseFooterProps {
  context: ReturnType<typeof useApplicationSetup>;
  translate: ReturnType<typeof useTranslationBase>;
}

export const useFooter = ({ context, translate }: UseFooterProps) => {
  const {
    partner,
    tunings,
    accessibilityStatement,
    whiteLabelOptions,
    noManage,
    noReport,
    customBrandingOptions,
    trigger,
  } = context;
  const [isLogged] = useConnect(sessionStore.isLogged$);
  const [isMainMenuUrl] = useConnect(headerStore.isMainMenu);
  const [backState] = useConnect(headerStore.backState);
  const [state] = useConnect(stateStore.state);
  const callbackRef = useFocusableElement(FocusableTrapElement.LastElement);

  const goReport = () => {
    stateStore.state.next(REPORT_PAGE_STATE);
  };

  const goLogin = () => {
    stateStore.state.next('main.login');
  };

  const isFooterNavLinksVisible = useMemo(
    () => !backState || state === 'main.logged.payment.servicesWL',
    [backState, state],
  );

  const accessibilityStatementVisible = useMemo(
    () => accessibilityStatement?.enabled && trigger === Trigger.Main,
    [accessibilityStatement?.enabled, trigger],
  );

  const accessibilityStatementLink = useMemo(() => {
    if (accessibilityStatement?.link && !accessibilityStatement?.link.match('^http')) {
      return `http://${accessibilityStatement.link}`;
    }
    return accessibilityStatement?.link;
  }, [accessibilityStatement?.link]);

  const reportProblemVisible = useMemo(
    () =>
      !noReport &&
      !whiteLabelOptions?.wlHideReport &&
      trigger === Trigger.Main &&
      context.widgetLayout !== 'headless' &&
      !context.tuningsFromServerInProgress,
    [
      noReport,
      whiteLabelOptions?.wlHideReport,
      trigger,
      context.widgetLayout,
      context.tuningsFromServerInProgress,
    ],
  );

  const manageLinkVisible = useMemo(
    () =>
      !noManage &&
      !whiteLabelOptions?.wlHideManage &&
      trigger === Trigger.Main &&
      context.widgetLayout !== 'headless' &&
      !context.tuningsFromServerInProgress,
    [
      noManage,
      whiteLabelOptions?.wlHideManage,
      trigger,
      context.widgetLayout,
      context.tuningsFromServerInProgress,
    ],
  );

  const isPartnerDefaultLogoEnvironment =
    !!partner &&
    [ADAGUARDIAN, SHORTPOINT, PORT_CITY_MARKETING].includes(partner) &&
    !whiteLabelOptions?.wlHideLogo &&
    (!customBrandingOptions || !customBrandingOptions.custom_logo_image_path);

  const isGenericPartnerCustomLogoEnvironment =
    partner &&
    PARTNERS.includes(partner) &&
    !!customBrandingOptions &&
    !!customBrandingOptions.custom_logo_image_path;

  const asteriskVisible = useMemo(
    () =>
      whiteLabelOptions?.wlHideManage &&
      !whiteLabelOptions?.wlHideAsterisk &&
      includes(['main.home', 'main.logged.payment.servicesWL'], state),
    [whiteLabelOptions?.wlHideManage, whiteLabelOptions?.wlHideAsterisk, state],
  );

  const accessibilityStatementText = useMemo(() => {
    if (!accessibilityStatement) return '';

    return accessibilityStatement.text === 'widget.footer.statement.label'
      ? translate(accessibilityStatement.text, { site: tunings.site_name })
      : accessibilityStatement.text;
  }, [accessibilityStatement?.text, translate]);

  const clickToMainMenu = useCallback(
    ($event) => {
      $event.stopPropagation();
      stateStore.state.next(INITIAL_PAGE_STATE);
    },
    [isLogged],
  );

  const clickBack = useCallback(() => {
    stateStore.state.next(backState);
  }, [backState]);

  useEffect(() => {
    const isEmpty =
      !backState &&
      whiteLabelOptions?.wlHideReport &&
      whiteLabelOptions?.wlHideManage &&
      whiteLabelOptions?.wlHideLogo &&
      whiteLabelOptions?.wlHideAsterisk &&
      !customBrandingOptions?.custom_logo_image_path &&
      !accessibilityStatement?.enabled;

    isEmpty
      ? layoutStore.mainContainer.addClass(UWAW_NO_FOOTER)
      : layoutStore.mainContainer.removeClass(UWAW_NO_FOOTER);
  }, [
    backState,
    whiteLabelOptions,
    customBrandingOptions?.custom_logo_image_path,
    accessibilityStatement?.enabled,
  ]);

  return {
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
    callbackRef,
    isMainMenuUrl,
    isLogged,
    backState,
    accessibilityStatementLink,
  };
};
