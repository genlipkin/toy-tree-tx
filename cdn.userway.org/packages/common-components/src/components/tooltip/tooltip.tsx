import { h, JSX, FunctionalComponent } from 'preact';
import { useRef, useState } from 'preact/hooks';
import { generateId } from '../../utils/generate-id';
import { TooltipTailLeftIcon } from '@uw/icons';
import './tooltip.scss';

export interface TooltipProps {
  title: string;
  icon: JSX.Element;
  ariaLabel?: string;
}

const INACTIVE_TOOLTIP_DELAY = 300;

export const Tooltip: FunctionalComponent<TooltipProps> = ({
  title,
  ariaLabel,
  icon,
  children,
}) => {
  const [id] = useState(generateId());
  const [isOpened, setIsOpened] = useState(false);
  const mouseOutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const tooltipContainer = useRef<HTMLSpanElement>(null);

  const onCloseInit = () => {
    mouseOutTimer.current && clearTimeout(mouseOutTimer.current);
    if (tooltipContainer.current && !tooltipContainer.current.contains(document.activeElement)) {
      mouseOutTimer.current = setTimeout(() => {
        setIsOpened(false);
      }, INACTIVE_TOOLTIP_DELAY);
    }
  };

  const enableTooltip = () => {
    mouseOutTimer.current && clearTimeout(mouseOutTimer.current);
    setIsOpened(true);
  };

  const handleFocusOut = (e: FocusEvent) => {
    if (
      tooltipContainer.current &&
      !tooltipContainer.current.contains(e.relatedTarget as HTMLElement)
    ) {
      setIsOpened(false);
    }
  };

  return (
    <span
      ref={tooltipContainer}
      onMouseOut={onCloseInit}
      onMouseOver={enableTooltip}
      onFocusOut={handleFocusOut}
      className="uwaw-main-tooltip-container"
    >
      <span
        id={`uwaw-tooltip-icon-${id}`}
        tabIndex={0}
        role="button"
        aria-expanded={isOpened}
        aria-describedby={`uwaw-tooltip-${id}`}
        aria-label={ariaLabel}
        className="uwaw-main-tooltip-icon"
        onFocus={enableTooltip}
        onMouseOver={enableTooltip}
      >
        {icon}
      </span>
      <span
        id={`uwaw-tooltip-${id}`}
        role="tooltip"
        className={`uwaw-main-tooltip ${!isOpened ? 'uwaw-main-tooltip__hidden' : ''}`}
      >
        <TooltipTailLeftIcon
          svgAttrs={{ 'aria-hidden': 'true' }}
          className="uwaw-main-tooltip__tail"
        />
        <span className="uwaw-main-tooltip__i">
          <span className="uwaw-main-tooltip__title">{title}</span>
          {children}
        </span>
      </span>
    </span>
  );
};
