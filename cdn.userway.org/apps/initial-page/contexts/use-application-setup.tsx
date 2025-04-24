import { sendPostMessage } from 'helpers/post-message.helper';
import { useEffect, useMemo, useRef, useState } from 'preact/hooks';
import { CUSTOM_BRANDING, MODIFY_MENU, WHITE_LABEL, VOICE_NAVIGATION } from 'constants/constants';
import {
  ACCESSIBILITY_MENU_DEFAULT_PATTERN,
  ACCESSIBILITY_MENU_PAID_FEATURES,
  ACCESSIBILITY_MENU_PAID_PATTERN,
  ACCESSIBILITY_MENU_PROFILES_PATTERN,
} from 'constants/accessibility-menu-patterns';
import { colorsHelper, colourIsLight } from 'helpers/colors.helper';
import { createContext } from 'preact';
import { useApi } from 'hooks/use-api';
import uniq from 'lodash/uniq';
import { ALLY_FEATURES } from 'constants/ally-features';
import { sessionStore } from 'global/session.store';
import { readerInteractionStore } from 'global/reader-interaction.store';
import { useWidgetState } from 'hooks/use-widget-state';
import { includes } from 'helpers';
import { filterActiveFeatures, filterActiveFeaturesPattern } from '../helpers/features.helper';
import { getUrlParams } from '../helpers/url.helper';

export const ApplicationContext = createContext<ReturnType<typeof useApplicationSetup>>(null);

export const useApplicationSetup = () => {
  const Api = useApi();
  const config = useRef<any>({});
  const [widgetBlocked, setWidgetBlocked] = useState(false);
  const [userSpecificPosition, setUserSpecificPosition] = useState<number>(null);
  const [position, setPosition] = useState<number>(null);

  const [href, setHref] = useState<string>(null);
  const [code, setCode] = useState<string>(null);

  const [partner, setPartner] = useState<string>(null);
  const [isNoFollowEnabled, setIsNoFollowEnabled] = useState<boolean>(false);

  const paidFeatures = useMemo(
    () => filterActiveFeatures(ACCESSIBILITY_MENU_PAID_FEATURES, ALLY_FEATURES),
    [],
  );

  const defaultPattern = useMemo(
    () => filterActiveFeaturesPattern(ACCESSIBILITY_MENU_DEFAULT_PATTERN, ALLY_FEATURES),
    [],
  );

  const paidPattern = useMemo(
    () => filterActiveFeaturesPattern(ACCESSIBILITY_MENU_PAID_PATTERN, ALLY_FEATURES),
    [],
  );

  const [previewCustomLogo, setPreviewCustomLogo] = useState<{
    path: string;
    link: string;
  }>(null);

  const [areResourcesLoaded, setResourcesLoaded] = useState<boolean>(false);

  const [accessibilityStatement, setAccessibilityStatement] = useState<{
    text?: string;
    link?: string;
    enabled?: boolean;
  }>(null);

  const [tunings, setTunings] = useState<TuningConfig>(null);
  const [accountIdCode, setAccountIdCode] = useState<string>(null);
  const [targetPageOrigin, setTargetPageOrigin] = useState<string>(null);
  const [noManage, setNoManage] = useState<boolean>(null);
  const [noLogo, setNoLogo] = useState<boolean>(null);
  const [noReport, setNoReport] = useState<boolean>(null);
  const [thisSiteId, setThisSiteId] = useState<string>(null);
  const [userId, setUserId] = useState<string>(null);
  const [orgInfo, setOrgInfo] = useState<OrgInfo>(null);
  const [tuningsFromServerInProgress, setTuningsFromServerInProgress] = useState(true);
  const [widgetLayout, setWidgetLayout] = useState<string>('full');

  const [whiteLabelOptions, setWhiteLabelOptions] = useState<WhiteLabelOptions>(null);
  const [customBrandingOptions, setCustomBrandingOptions] = useState({
    custom_logo_image_path: '',
    custom_logo_image_link: '',
    custom_logo_image_link_no_schema: '',
  });

  const customMenuOptions = useRef<{ featuresPattern: string; colorMode?: string }>({
    featuresPattern: defaultPattern,
  });

  const [settingsLoaded, setSettingsLoaded] = useState(false);
  const settings = useRef<Record<string, { value: number; disabled: boolean }>>(null);
  const enabledMenuFeatures = useRef<string[]>([]);

  const [widgetColors, setWidgetColors] = useState<{
    mainBfColor: string;
    gradient: string;
    isLightColour: boolean;
  }>(null);

  const [paidAi, setPaidAi] = useState(false);
  const [paidProductsEnabled, setPaidProductsEnabled] = useState<PaidProducts>({
    WHITE_LABEL: false,
    CUSTOM_BRANDING: false,
    MODIFY_MENU: false,
    USAGE_STATS: false,
    REMEDIATION: false,
    LIVE_TRANSLATIONS: false,
    VOICE_NAVIGATION: false,
  });

  const { close, isOpen, trigger, isClosedByUser } = useWidgetState();

  useEffect(() => {
    if (!(document as any).fonts?.ready) {
      setResourcesLoaded(true);
    } else {
      (document as any).fonts.ready.then(() => {
        setResourcesLoaded(true);
      });
    }
  }, []);

  const modifyMenu = (payload, isPaidAi) => {
    setPaidProductsEnabled((values) => ({ ...values, MODIFY_MENU: true }));
    applyCustomMenu(payload, isPaidAi);
  };

  // TODO add logic for profiles when backend will be ready
  const checkProfilesPattern = (featuresPattern: string[]) => {
    const profiles = ACCESSIBILITY_MENU_PROFILES_PATTERN.split('|');
    const isProfilePresent = featuresPattern.find((feature) => includes(profiles, feature));

    return isProfilePresent ? featuresPattern : featuresPattern.concat(profiles);
  };

  function applyCustomMenu(payload, paidAi: boolean) {
    const receivedFeatures = payload.features_pattern
      .split('|')
      .filter((el) => !!ALLY_FEATURES[el]);

    // filter out paid features if widget plan is "free"
    const availablePattern = paidAi
      ? checkProfilesPattern(receivedFeatures)
      : receivedFeatures.filter((feature) => !includes(paidFeatures, feature));

    customMenuOptions.current = {
      featuresPattern: uniq(availablePattern).join('|'),
      colorMode: payload.color_mode,
    };
  }

  const getTunings = async (accountId: string, data: TuningsPayload): Promise<TuningsData> => {
    const result = await Api.post(`v1/tunings/${accountId}`, data).catch((error) => {
      console.error(error);
    });
    return result.data;
  };

  function getTuningsFromServer(
    accountIdCode: string,
    origin: string,
    platfAppInstalledSiteId: string,
    pageUrl: string,
  ) {
    getTunings(accountIdCode, { o: origin, op: true, pa: platfAppInstalledSiteId })
      .then((response) => {
        if (response) {
          updateUserServicesInfo(response.services, response.remediationV2 ?? response.remediation);
          setOrgInfo(response.orgInfo);
        }
      })
      .finally(() => setTuningsFromServerInProgress(false));
  }

  const updateWhiteLabelOptions = (data: {
    hide_report: boolean;
    hide_manage: boolean;
    hide_logo: boolean;
    hide_asterisk: boolean;
  }) => {
    setPaidProductsEnabled((values) => ({ ...values, WHITE_LABEL: true }));
    setWhiteLabelOptions({
      wlHideReport: data.hide_report,
      wlHideManage: data.hide_manage,
      wlHideLogo: data.hide_logo,
      wlHideAsterisk: data.hide_asterisk,
    });
  };

  const updateCustomBrandingOptions = (data: {
    custom_logo_image_path: string;
    custom_logo_image_link: string;
  }) => {
    setPaidProductsEnabled((values) => ({ ...values, CUSTOM_BRANDING: true }));
    setCustomBrandingOptions({
      custom_logo_image_path: data.custom_logo_image_path,
      custom_logo_image_link: data.custom_logo_image_link,
      custom_logo_image_link_no_schema: data.custom_logo_image_link
        ? data.custom_logo_image_link.replace(/(http|https):\/\//g, '')
        : null,
    });
  };

  function updateFooterLinksVisibilityTunings(tunings, services) {
    if (tunings.widget_no_logo || services.noLogo) {
      setNoLogo(true);
    }
    if (tunings.widget_no_manage || services.noManage) {
      setNoManage(true);
    }
    if (tunings.widget_no_report) {
      setNoReport(true);
    }
  }

  function updateUserServicesInfo(services, remediation) {
    if (services) {
      setThisSiteId(services.siteId);

      if (services[WHITE_LABEL]) {
        const srv = services[WHITE_LABEL];
        updateWhiteLabelOptions(srv);
      }
      if (services[CUSTOM_BRANDING]) {
        const srv = services[CUSTOM_BRANDING];
        updateCustomBrandingOptions(srv);
      }

      // make sure that remediation is not empty object (possibly can be sent by BE)
      if (remediation && Object.keys(remediation).length) {
        setPaidProductsEnabled((values) => ({ ...values, REMEDIATION: true }));
      }
    }
  }

  const checkLightColor = (color: string) => {
    const colorsForCheck = colorsHelper(color.replace('#', ''));
    return colourIsLight(colorsForCheck[0], colorsForCheck[1], colorsForCheck[2]);
  };

  function refreshAccessibilityMenuConfig(serverSettings, isPaidAi: boolean) {
    if (!serverSettings) {
      return;
    }

    const menuFeatures = customMenuOptions.current.featuresPattern
      .split('|')
      .filter((f) => !!f.trim() && !!ALLY_FEATURES[f]);

    const availableFeatures = isPaidAi
      ? menuFeatures
      : menuFeatures.filter((feature) => !includes(paidFeatures, feature));

    settings.current = availableFeatures.reduce((updSettings, featureName) => {
      updSettings[`userway-${featureName}`] = serverSettings[`userway-${featureName}`];

      if (featureName === 's2') {
        updSettings['userway-s10'] = serverSettings['userway-s10'];
        updSettings['userway-s16'] = serverSettings['userway-s16'];
      }

      if (featureName === 's7') {
        updSettings['userway-s15'] = serverSettings['userway-s15'];
      }

      return updSettings;
    }, {});

    setSettingsLoaded(true);
    enabledMenuFeatures.current = availableFeatures;
  }

  const init = () => {
    // get initial data from url
    const { services, tunings, account } = getUrlParams();
    receiveConfig({ services, tunings, account });

    sendPostMessage({
      action: 'getConfig',
    });

    // TODO: use useMessageData hook for 3 actions
    window.addEventListener('message', (event) => {
      const message = event.data || {};

      if (message.action === 'sendConfig') {
        receiveConfig(message.data?.config || message.config || {});
      } else if (message.action === 'setWidgetColour') {
        const color = message.config?._userway_config?.color || message.payload?.color || null;
        const gradient =
          message.config?._userway_config?.gradient || message.payload?.gradient || null;

        setWidgetColors({
          mainBfColor: color || '#0048FF',
          gradient,
          isLightColour: color ? checkLightColor(color) : false,
        });
      } else if (message.action === 'on_demand_reader_end') {
        readerInteractionStore.internalReaderStopped$.next();
      }
    });
  };

  const receiveConfig = (data) => {
    config.current = data || {};
    setWidgetLayout(data.widgetLayout);
    setAccountIdCode(data.account);
    setUserId(data.uid);
    updateUserServicesInfo(data.services, null);

    const isOnPrem = data.onPrem;
    if (isOnPrem) {
      updateUserServicesInfo(data.services, data.remediation);
      setTuningsFromServerInProgress(false);
    }

    if (!isOnPrem && data.account && data.origin) {
      setTargetPageOrigin(data.origin);

      const platfAppInstalledSiteId = data._userway_config?.platfAppInstalledSiteId || null;

      getTuningsFromServer(data.account, data.origin, platfAppInstalledSiteId, data.href);
    }

    sessionStore.refreshWidget({ code: data.account });

    let currentTunings;

    if (data.tunings) {
      updateFooterLinksVisibilityTunings(data.tunings, data.services);
      currentTunings = data.tunings;
      setTunings(currentTunings);
      if (
        currentTunings.widget_blocked_for_site &&
        currentTunings.widget_blocked_for_site === 'on'
      ) {
        setWidgetBlocked(true);
      }

      setIsNoFollowEnabled(data.tunings?.widget_no_follow || false);
    }

    if (data.partner) {
      setPartner(data.partner);
    }

    const hardcodedPos = data.position;
    const userSpecificPos = data.userSpecificPosition;
    // let currentPosition = 1;

    if (userSpecificPos) {
      setUserSpecificPosition(+userSpecificPos);
      // currentPosition = userSpecificPos;
    }

    if (hardcodedPos) {
      setPosition(+hardcodedPos);
      // if (userSpecificPosition) {
      //     currentPosition = hardcodedPos;
      // }
    }

    // if (currentTunings && currentTunings.widget_position && !userSpecificPos && !hardcodedPos) {
    //     currentPosition = currentTunings.widget_position;
    // }

    setHref(data.href);

    setCode(data?.account);

    let siteNameAccessibilityStatement = null;
    if (
      (data.statement_url || data.tunings.accessibility_url) &&
      !data.tunings.accessibility_link_text &&
      !data.statement_text &&
      data.tunings.site_name
    ) {
      siteNameAccessibilityStatement = 'widget.footer.statement.label';
    }

    setAccessibilityStatement(() => {
      const resultAccessibilityStatement: {
        text?: string;
        link?: string;
        enabled?: boolean;
      } = {};

      resultAccessibilityStatement.text =
        data.statement_text ||
        data.tunings.accessibility_link_text ||
        siteNameAccessibilityStatement;
      resultAccessibilityStatement.link = data.statement_url || data.tunings.accessibility_url;
      if (resultAccessibilityStatement.link && !resultAccessibilityStatement.link.match('^http')) {
        resultAccessibilityStatement.link = `http://${resultAccessibilityStatement.link}`;
      }
      const statementHardcoded = data.statement_url && data.statement_text;
      resultAccessibilityStatement.enabled =
        statementHardcoded ||
        (resultAccessibilityStatement.text &&
          resultAccessibilityStatement.link &&
          (!data.tunings.accessibility_link_enabled ||
            data.tunings.accessibility_link_enabled === 'on'));

      return resultAccessibilityStatement;
    });

    // Note, we set MODIFY_MENU here, not in updateUserServicesInfo to avoid menu jumping
    const { services } = data;
    const isPaidAi = services && !!services.paidAi;

    if (services && services[VOICE_NAVIGATION] && services[VOICE_NAVIGATION].is_enabled) {
      setPaidProductsEnabled((values) => ({ ...values, VOICE_NAVIGATION: true }));
    }
    if (services && services[MODIFY_MENU]) {
      modifyMenu(services[MODIFY_MENU], isPaidAi);
    } else {
      isPaidAi && (customMenuOptions.current.featuresPattern = paidPattern);
    }

    setPaidAi(isPaidAi);

    refreshAccessibilityMenuConfig(data.settings, isPaidAi);
    const color = config.current._userway_config?.color || currentTunings?.widget_color || null;
    const gradient =
      config.current._userway_config?.gradient || currentTunings?.widget_color_gradient || null;

    setWidgetColors({
      mainBfColor: color || '#0048FF',
      gradient,
      isLightColour: color ? checkLightColor(color) : false,
    });
  };

  const sendEvent = () => {
    sendPostMessage({
      action: 'setProperties',
      settings: settings.current,
      pattern: enabledMenuFeatures.current,
    });
  };

  const soundEffectsEnabled = useMemo(
    () => tunings?.hasOwnProperty('widget_sounds') && tunings?.widget_sounds,
    [tunings],
  );

  useEffect(() => {
    init();
  }, []);

  return {
    config,
    tunings,
    setTunings,
    settings,
    settingsLoaded,
    tuningsFromServerInProgress,
    accountIdCode,
    targetPageOrigin,
    widgetBlocked,
    widgetColors,
    whiteLabelOptions,
    updateWhiteLabelOptions,
    customBrandingOptions,
    updateCustomBrandingOptions,
    customMenuOptions,
    enabledMenuFeatures,
    modifyMenu,
    userSpecificPosition,
    setUserSpecificPosition,

    position,
    href,
    code,
    thisSiteId,
    userId,
    orgInfo,
    accessibilityStatement,
    soundEffectsEnabled,
    sendEvent,
    isOpen,
    isClosedByUser,
    trigger,
    close,

    paidProductsEnabled,
    setPaidProductsEnabled,
    paidAi,
    setPaidAi,
    noManage,
    noReport,
    noLogo,
    previewCustomLogo,
    setPreviewCustomLogo,
    setAccessibilityStatement,
    areResourcesLoaded,
    refreshAccessibilityMenuConfig,
    paidFeatures,
    defaultPattern,
    paidPattern,
    partner,
    widgetLayout,
    isNoFollowEnabled,
    setIsNoFollowEnabled,
  };
};
