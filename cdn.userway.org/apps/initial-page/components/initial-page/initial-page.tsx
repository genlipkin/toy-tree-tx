import { h } from 'preact';
import { useHtmlLang } from 'hooks/use-html-lang';
import { useContext, useEffect, useMemo, useState } from 'preact/hooks';
import { sendPostMessage } from 'helpers/post-message.helper';
import { ApplicationContext, useApplicationSetup } from 'contexts/use-application-setup';
import { stateStore } from 'global/state.store';
import { layoutStore } from 'global/layout.store';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { loadDeferredJs } from 'helpers/scripts-loader';
import {
  ABOUT_STATE,
  HOW_IT_WORKS_STATE,
  INITIAL_PAGE_STATE,
  LOGIN_STATE,
  REPORT_PAGE_STATE,
} from 'constants/constants';
import { Trigger } from 'types/trigger';
import { configStore } from 'global/config.store';
import { loadDeferredCss } from 'helpers/styles-loader';
import { useKeyboardEvents } from 'hooks/use-keyboard-events';
import { headerStore, HOME_TITLE } from 'global/header.store';
import { useAllyFeatureListeners } from 'hooks/use-ally-feature-listeners';
import { sessionStore } from 'global/session.store';
import { StatisticsWrapper } from 'contexts/use-statistics';
import { ReportView } from 'components/report/report';
import { FocusedElementsHandlerWrapper } from 'contexts/use-focused-element-reader';
import { OversizedWidget } from '../oversized-widget/oversized-widget';
import { Violations } from '../violations/violations';
import { About } from '../about/about';
import { HowItWorksPage } from '../how-it-works/how-it-works-page';
import { Upgrade } from '../upgrade/upgrade';
import { remediationStore, Violations as ViolationsType } from '../../global/remediation.store';
import { LearnMoreButton } from '../learn-more-button/learn-more-button';
import { HowItWorksCta } from '../how-it-works/how-it-works-cta';
import {
  AllyFeaturesContext,
  AllyFeaturesWrapper,
} from '../accessibility-features/use-ally-features';
import { useReaderGuidePosition } from '../accessibility-features/use-reader-guide-position';
import { Profiles } from '../accessibility-features/profiles/profiles';
import { AllyFeaturesList } from '../accessibility-features/ally-features/ally-features-list';
import { Footer } from '../footer/footer';
import { MoveHide } from '../move-hide/move-hide';
import { Skeleton } from '../skeleton/skeleton';
import { LanguageSelector } from '../language-selector/language-selector';
import { Header } from '../header/header';
import { MainWrapper } from '../main-wrapper/main-wrapper';
import { OVERSIZED_CLASS } from '../oversized-widget/oversized.store';
import { AccessibilityFeaturesWrapper } from '../accessibility-features/use-accessibility-fetures';
import { LSTProvider } from '../../contexts/lst/lst-provider';
import './initial-page.scss';

declare const applicationConfig: { staticVersion: string };

enum Views {
  InitialPage,
  InitialPageLst,
  ReportPage,
  AboutPage,
  HowItWorksPage,
  SkeletonPage,
}

export const InitialPageWrapper = () => {
  const [isAngularLoaded, setIsAngularLoaded] = useState(false);
  const [configLoaded, setConfigLoaded] = useState(false);
  const [state, setState] = useConnect(stateStore.state);
  const [isLogged] = useConnect(sessionStore.isLogged$);
  const [isLoggedMember] = useConnect(sessionStore.isLoggedMember$);
  const [violations] = useConnect<ViolationsType>(remediationStore.violations$, null);
  const { allyFeaturesState } = useContext(AllyFeaturesContext);

  useHtmlLang();

  const config = useApplicationSetup();
  useAllyFeatureListeners(config.sendEvent, config.settings.current);
  useKeyboardEvents(config);

  // react on config updates and pass new values to the configStore
  useEffect(() => {
    configStore.config$.next(config);
  }, [config]);

  useReaderGuidePosition(allyFeaturesState);

  const isUpgradeSectionVisible = useMemo(
    () =>
      isLogged && !isLoggedMember && !config?.paidProductsEnabled?.REMEDIATION && !config.paidAi,
    [isLogged, isLoggedMember, config.paidProductsEnabled, config.paidAi],
  );

  const isViolationSectionVisible = useMemo(
    () => isLogged && !isLoggedMember && !config.paidAi && !!violations.totalCount,
    [isLogged, isLoggedMember, config.paidAi, violations],
  );

  const isNoLogoTuning = config?.tunings?.widget_no_logo;

  const trigger = config?.trigger;

  const isObjectEmpty = (obj) => !Object.keys(obj).length;

  const view = useMemo(() => {
    if (state === REPORT_PAGE_STATE) {
      headerStore.setBackStateToHomePage();
      headerStore.title.next('widget.report.title');
      return Views.ReportPage;
    }

    if (state === ABOUT_STATE) {
      headerStore.setBackStateToHomePage();
      // TODO Translate text
      headerStore.title.next(`About UserWay's AI Widget`);
      return Views.AboutPage;
    }

    if (state === HOW_IT_WORKS_STATE) {
      headerStore.setBackStateToHomePage();
      // TODO Translate text
      headerStore.title.next(`About UserWay Widget`);
      return Views.HowItWorksPage;
    }

    if (state !== INITIAL_PAGE_STATE && trigger === Trigger.Lst) {
      // we don't support login/manage screens for lst widget
      stateStore.state.next(INITIAL_PAGE_STATE);
    }

    if (state === INITIAL_PAGE_STATE && trigger === Trigger.Lst) {
      headerStore.backState.next('');
      headerStore.title.next('Live Site Translator');
      layoutStore.scrollTop(0, false);
      layoutStore.mainContainer.removeClass(OVERSIZED_CLASS);
      return Views.InitialPageLst;
    }

    if (state === INITIAL_PAGE_STATE && trigger === Trigger.Main) {
      // remove back state on home page
      headerStore.backState.next('');
      headerStore.title.next(HOME_TITLE);
      layoutStore.scrollTop(0, false);

      return Views.InitialPage;
    }

    if (!isAngularLoaded || !trigger) {
      return Views.SkeletonPage;
    }

    return null;
  }, [state, isAngularLoaded, trigger]);

  // This hook triggers only once peg widget initialization
  useEffect(() => {
    const unsubscribe = configStore.config$.subscribe((config) => {
      if (!config.tuningsFromServerInProgress) {
        const initialState = config.widgetLayout === 'headless' ? LOGIN_STATE : INITIAL_PAGE_STATE;
        setState(initialState);
        setConfigLoaded(true);
        sendPostMessage({ action: 'appConfigLoaded' });
        unsubscribe();
      }
    });
  }, []);

  useEffect(() => {
    const extendFilePath = (filePath) =>
      // eslint-disable-next-line
      '__CDN__' + `${filePath}?v=${applicationConfig.staticVersion}`;

    if ((view === Views.SkeletonPage || isLogged) && !isAngularLoaded) {
      const appStyles = extendFilePath('frontend/stylesheets/combined.css');
      const mainJs = extendFilePath('frontend/javascripts/combined.js');

      Promise.all([loadDeferredCss(appStyles), loadDeferredJs(mainJs)]).then(() => {
        setIsAngularLoaded(true);
      });
    }
  }, [view, isLogged, isAngularLoaded]);

  // disable move/hide for specific customer
  const isMoveHideDisabled = config.accountIdCode === atob('aVVSaVVMZm1uZQ==');

  return (
    <ApplicationContext.Provider value={config}>
      <LSTProvider>
        <StatisticsWrapper>
          <AccessibilityFeaturesWrapper>
            <MainWrapper
              header={<Header config={config} />}
              footer={config && !config.tuningsFromServerInProgress && <Footer />}
            >
              <FocusedElementsHandlerWrapper>
                {(view === Views.SkeletonPage || !configLoaded) && <Skeleton />}

                {view === Views.InitialPage && configLoaded && (
                  <div className="uwaw-initial-page">
                    {isUpgradeSectionVisible && !isNoLogoTuning && (
                      <LearnMoreButton onClick={() => setState(ABOUT_STATE)} />
                    )}

                    {!isNoLogoTuning && <HowItWorksCta />}

                    {isViolationSectionVisible && <Violations />}

                    {isUpgradeSectionVisible && !isViolationSectionVisible && <Upgrade />}

                    <ul className="uwaw-options">
                      <li className="uwaw-options__item">
                        <LanguageSelector />
                      </li>
                      <li className="uwaw-options__item">
                        <Profiles />
                      </li>
                      <li className="uwaw-options__item">
                        <OversizedWidget />
                      </li>
                    </ul>

                    <AllyFeaturesList />

                    {!isMoveHideDisabled && !isObjectEmpty(allyFeaturesState) && (
                      <div className="uwaw-options">
                        <div className="uwaw-options__item">
                          <MoveHide />
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {view === Views.InitialPageLst && (
                  <div className="uwaw-initial-page">
                    <ul className="uwaw-options">
                      <li className="uwaw-options__item lst">
                        <LanguageSelector />
                      </li>
                    </ul>
                  </div>
                )}

                {view === Views.ReportPage && configLoaded && <ReportView />}

                {view === Views.AboutPage && configLoaded && <About />}

                {view === Views.HowItWorksPage && configLoaded && <HowItWorksPage />}

                {/* Angular view */}
                <div ui-view="" />
                {/* ------------ */}
              </FocusedElementsHandlerWrapper>
            </MainWrapper>
          </AccessibilityFeaturesWrapper>
        </StatisticsWrapper>
      </LSTProvider>
    </ApplicationContext.Provider>
  );
};

export const InitialPage = () => (
  <AllyFeaturesWrapper>
    <InitialPageWrapper />
  </AllyFeaturesWrapper>
);
