import { h, FunctionalComponent } from 'preact';
import {
  useCallbackRef,
  FocusableTrapElement,
  useFocusableElement,
  getHotkeyString,
} from '@uw/common-components';
import { isMobile } from 'helpers/detect-user-agent';
import { useCallback, useEffect, useMemo, useRef } from 'preact/hooks';
import { useTranslation } from 'hooks/use-translation';
import { DASHBOARD_TITLE, LOGIN_TITLE, headerStore, HOME_TITLE } from 'global/header.store';
import { useConnect } from 'helpers/use-connect-to-global-store';
import { stateStore } from 'global/state.store';
import './header.scss';
import { BackArrowIcon, CloseIcon } from '@uw/icons';

export const Header: FunctionalComponent<{ config }> = ({ config }) => {
  const { translate } = useTranslation();
  const [backState] = useConnect(headerStore.backState);
  const [title] = useConnect(headerStore.title);
  const showHotKey = useMemo(() => title === HOME_TITLE, [title]);
  const headerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [backButton, backButtonRef] = useCallbackRef<HTMLButtonElement>();

  const isHeadlessMenu = config.widgetLayout === 'headless';

  const callbackRef = useFocusableElement(FocusableTrapElement.FirstElement, headerRef, backButton);

  useEffect(() => {
    const unsubscribe = stateStore.angularStateChanges$.subscribe(() => {
      setTimeout(() => backButton?.focus());
    });

    return () => unsubscribe();
  }, [backButton]);

  useEffect(() => {
    stateStore.onOpen$.subscribe(() => {
      closeButtonRef.current.focus();
    });
  }, []);

  const clickBack = useCallback(() => {
    stateStore.state.next(backState);
  }, [backState]);

  return (
    <div ref={callbackRef} class="uwaw-header">
      <div class="uwaw-header__l">
        {backState && (!isHeadlessMenu || ![DASHBOARD_TITLE, LOGIN_TITLE].includes(title)) && (
          <button
            aria-label="Go back"
            ref={backButtonRef}
            type="button"
            class="uwaw-header__back-btn"
            onClick={clickBack}
          >
            <BackArrowIcon svgAttrs={{ 'aria-hidden': 'true', focusable: 'false' }} />
          </button>
        )}
        <h1 id="uwaw-header" class="uwaw-header__title">
          {translate(title)} {!isMobile() && showHotKey && <span>({getHotkeyString(config)})</span>}
        </h1>
      </div>
      <button
        ref={closeButtonRef}
        class="uwaw-header__close"
        type="button"
        onClick={config.close}
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
        aria-label={translate('widget.header.close.aria')}
      >
        <CloseIcon
          height={16}
          width={16}
          svgAttrs={{ 'aria-hidden': 'true', focusable: 'false', width: '16', height: '16' }}
        />
      </button>
    </div>
  );
};
