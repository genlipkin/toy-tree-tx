import { h, FunctionComponent } from 'preact';
import { useContext, useEffect, useMemo, useRef, useState } from 'preact/hooks';
import {
  AxisMovementType,
  CustomScroll,
  FocusTrapContext,
  Toast,
  ToastServiceProvider,
  useCallbackRef,
  useDraggableWindow,
  useFocusTrap,
} from '@uw/common-components';
import { isMobile } from 'helpers/detect-user-agent';
import { isRTL } from 'helpers/detect-rtl-language';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useClickOutsideElement } from 'hooks/use-click-outside';
import { layoutStore } from 'global/layout.store';
import { Trigger } from 'types/trigger';
import { CriticalAlert } from 'components/critical-alert/critical-alert';
import { useTranslation } from 'hooks/use-translation';
import { useWidgetCustomColors } from 'hooks/use-widget-custom-colors';
import { useConnect } from '../../helpers/use-connect-to-global-store';
import { stateStore } from '../../global/state.store';
import { INITIAL_PAGE_STATE } from '../../constants/constants';
import { PAGES_WITHOUT_SCROLL } from '../../constants/pages-without-scroll';
import './main-wrapper.scss';
import { oversizedStore } from '../oversized-widget/oversized.store';
import { includes } from '../../helpers';
import { LSTServiceContext } from '../../contexts/lst/lst-provider';

export interface Props {
  header: preact.ComponentChildren;
  footer: preact.ComponentChildren;
}

export const MainWrapper: FunctionComponent<Props> = ({ header, footer, children }) => {
  const { tunings, config, userSpecificPosition, position, widgetBlocked, close, paidAi, trigger } =
    useContext(ApplicationContext);

  const { language } = useContext(LSTServiceContext);
  const menuContainer = useRef<HTMLDivElement>(null);
  const [contentClass] = useConnect(layoutStore.contentClass$);
  const [mainClassesList] = useConnect(layoutStore.mainContainer.classes$);
  const [isOversized] = useConnect(oversizedStore.isOversized$);
  const [state] = useConnect(stateStore.state);
  const [shouldRenderCustomScroll, setShouldRenderCustomScroll] = useState<boolean>(true);
  const [lstClass, setLstClass] = useState('');

  const mainClasses = useMemo(() => mainClassesList.join(' '), [mainClassesList]);

  const twoColumnLayout = config.current.services?.MODIFY_MENU?.two_columns_layout;
  const isFreeWidget = paidAi ? 'paid_widget' : 'free_widget';

  const [mainArea, setMainAreaRef] = useCallbackRef<HTMLDivElement>();
  const [headerElement, setHeaderRef] = useCallbackRef<HTMLDivElement>();
  const { translate } = useTranslation();

  const { resetPosition } = useDraggableWindow(headerElement, mainArea, AxisMovementType.X);

  useClickOutsideElement(menuContainer, close);

  const colorClass = useWidgetCustomColors(mainArea);

  const focusTrapSettings = useFocusTrap();

  useEffect(() => {
    userSpecificPosition && resetPosition();
  }, [userSpecificPosition]);

  const positionClass = useMemo(() => {
    if (userSpecificPosition) {
      return `p${userSpecificPosition}`;
    }
    if (position) {
      return `p${position}`;
    }
    if (tunings && tunings.widget_position) {
      return `p${tunings.widget_position}`;
    }

    return 'p1';
  }, [userSpecificPosition, tunings, tunings?.widget_position, position]);

  const positionStyles = useMemo(() => {
    if (includes(['p1', 'p2', 'p3'], positionClass)) {
      return { right: 0, left: 'auto' };
    }

    if (includes(['p4', 'p8'], positionClass)) {
      return { left: window.innerWidth / 2 - headerElement?.offsetWidth / 2 };
    }

    if (includes(['p5', 'p6', 'p7'], positionClass)) {
      return { left: 0 };
    }

    return {};
  }, [positionClass, headerElement]);

  /* "uwaw_2-col" class adds to the <main> if widget is on initial page AND not Paid OR 2 column layout enabled */
  const columnLayout = useMemo(
    () =>
      (twoColumnLayout || !paidAi) &&
      state === INITIAL_PAGE_STATE &&
      !isOversized &&
      trigger === Trigger.Main
        ? 'uwaw_2-col'
        : /* 3-column layout by default */
          '',
    [paidAi, state, isOversized, trigger],
  );

  useEffect(() => {
    const unsubscribe = stateStore.angularStateChanges$.subscribe((view) => {
      const shouldShowScroll = !PAGES_WITHOUT_SCROLL.find((page) => page === view);
      setShouldRenderCustomScroll(shouldShowScroll);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribeOnClose = stateStore.onClose$.subscribe(() => {
      setLstClass('');
    });

    const unsubscribeOnOpen = stateStore.onOpen$.subscribe(() => {
      setLstClass(trigger === Trigger.Lst ? 'lst' : 'main');
    });

    return () => {
      unsubscribeOnClose();
      unsubscribeOnOpen();
    };
  }, [trigger]);

  useEffect(() => {
    setLstClass(trigger === Trigger.Lst ? 'lst' : 'main');
  }, [trigger]);

  const rtlClass = useMemo(
    () => (state === INITIAL_PAGE_STATE && isRTL(language) ? 'uwaw_rtl' : ''),
    [state, language],
  );
  const initialPageClass = useMemo(
    () => (state === INITIAL_PAGE_STATE ? 'uwaw-initial' : ''),
    [state],
  );

  const assignScrollContainer = (el) => {
    const scrollContainer = el?.getScrolledElement();

    if (scrollContainer) {
      layoutStore.scrollContainer$.next(scrollContainer);
    }
  };

  return (
    <main
      ref={setMainAreaRef}
      className={`uwaw ${lstClass} ${mainClasses} ${columnLayout} ${colorClass} ${initialPageClass} ${isFreeWidget} ${
        isMobile() ? 'mobile' : ''
      } ${rtlClass}`}
      style={positionStyles}
    >
      <div
        ref={menuContainer}
        className="uwaw-app"
        role="dialog"
        aria-modal="true"
        aria-label={translate('widget.on_open')}
      >
        <FocusTrapContext.Provider value={focusTrapSettings}>
          <ToastServiceProvider>
            <div className="uwaw__inner">
              <div ref={setHeaderRef}>{header}</div>

              {widgetBlocked && <CriticalAlert />}

              {!widgetBlocked && (
                <div className={`uwaw-body ${lstClass}`}>
                  <Toast className="toast_initialPage" />
                  <CustomScroll
                    rtl={isRTL(language)}
                    ref={assignScrollContainer}
                    heightRelativeToParent="100%"
                    allowOuterScroll={true}
                    scrollTo={shouldRenderCustomScroll ? null : 0}
                    freezePosition={!shouldRenderCustomScroll}
                  >
                    <div className={`widget-content ${lstClass} ${contentClass || ''}`}>
                      {children}
                    </div>
                  </CustomScroll>
                </div>
              )}

              {!widgetBlocked && footer}
            </div>
          </ToastServiceProvider>
        </FocusTrapContext.Provider>
      </div>
    </main>
  );
};
