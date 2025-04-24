import { h, FunctionalComponent } from 'preact';
import { useCallback, useContext, useEffect, useRef, useMemo } from 'preact/hooks';
import { layoutStore } from 'global/layout.store';
import { useTranslation } from 'hooks/use-translation';
import { OversizedIcon } from '@uw/icons';
import { ToggleButton } from '@uw/common-components';
import { isMobile } from 'helpers/detect-user-agent';
import { ApplicationContext } from 'contexts/use-application-setup';
import { useNavigationReader } from 'hooks/use-navigation-reader';
import { OVERSIZED_CLASS, oversizedStore } from './oversized.store';
import { useConnect } from '../../helpers/use-connect-to-global-store';
import { useDynamicSize } from './use-dynamic-size';

import './oversized-widget.scss';
import { LSTServiceContext } from '../../contexts/lst/lst-provider';

export const OversizedWidget: FunctionalComponent = () => {
  const { translate } = useTranslation();
  const { sendNavigationReaderRequest } = useNavigationReader();
  const { config, widgetColors } = useContext(ApplicationContext);
  const { language } = useContext(LSTServiceContext);

  const services = config.current.services;
  const isPaidAI = services?.paidAi;
  const isLST = services?.LIVE_TRANSLATIONS?.is_enabled;
  const isOversizedIcon = isPaidAI || isLST;

  const size = useDynamicSize();

  const [isOversized, setIsOversized] = useConnect(oversizedStore.isOversized$);

  const toggleButton = useRef<HTMLInputElement>(null);
  const toggleButtonColor = widgetColors?.isLightColour ? null : widgetColors?.mainBfColor;

  useEffect(() => {
    isOversized
      ? layoutStore.mainContainer.addClass(OVERSIZED_CLASS)
      : layoutStore.mainContainer.removeClass(OVERSIZED_CLASS);
  }, [isOversized]);

  const toggle = (value: boolean) => {
    const nextValue = !value;

    setIsOversized(nextValue);

    const contextToRead = translate(
      nextValue
        ? 'widget.oversized_widget.toggle_button.enabled'
        : 'widget.oversized_widget.toggle_button.disabled',
    );

    sendNavigationReaderRequest(contextToRead);
  };

  const isOversizedViewDisabled =
    isMobile() ||
    (config.current.services?.MODIFY_MENU && !config.current.services.MODIFY_MENU.oversized);

  if (isOversizedViewDisabled) {
    setIsOversized(false);
    return null;
  }

  const handleOnChange = useCallback(() => toggle(isOversized), [isOversized]);

  const label = useMemo(() => translate('widget.oversized_widget.toggle_button.label'), [language]);

  const ariaLabel = useMemo(
    () => translate('widget.oversized_widget.toggle_button.ariaLabel'),
    [language],
  );

  const iconSize = useMemo(() => size(24, 32), [isOversized]);

  return (
    <div className="uwaw-oversized">
      <div className="uwaw-option">
        <div className="uwaw-option__i">
          <div className="uwaw-oversized__wrapper uwaw-switcher-wrap uwaw-switcher-wrap_fw">
            {isOversizedIcon && (
              <OversizedIcon
                svgAttrs={{ 'aria-hidden': 'true' }}
                className="uwaw-oversized__icon"
                width={iconSize}
                height={iconSize}
              />
            )}
            <ToggleButton
              reference={toggleButton}
              label={label}
              data-uw-reader-content={ariaLabel}
              ariaLabel={ariaLabel}
              checked={isOversized}
              color={toggleButtonColor}
              onChange={handleOnChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
