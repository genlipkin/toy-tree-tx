import { FunctionalComponent, h, JSX } from 'preact';
import { MutableRef, useEffect, useRef, useState } from 'preact/hooks';
import { ChevronRightIcon } from '@uw/icons';
import { onKeyboardSelection } from '../../helpers';
import './expand-panel.scss';

interface ExpandPanelProps {
  title: string;
  renderRight?: () => JSX.Element;
  icon?: JSX.Element;
  control?: JSX.Element;
  isOpen?: boolean;
  scrollDown?: boolean;
  innerRef?: MutableRef<HTMLButtonElement>;
  onToggle?: (value?: MouseEvent | KeyboardEvent) => void;
  readerText?: string;
  readerLang?: string;
  isDisabled?: boolean;
  isCircledIcon?: boolean;
  hideArrowIcon?: boolean;
}

export const ExpandPanel: FunctionalComponent<ExpandPanelProps> = (props) => {
  const {
    icon,
    title,
    control,
    isOpen = false,
    onToggle,
    innerRef = null,
    scrollDown = false,
    readerText = '',
    readerLang = '',
    children,
    renderRight,
    isDisabled = false,
    isCircledIcon = true,
    hideArrowIcon = false,
  } = props;

  const [isExpanded, setIsExpanded] = useState(isOpen);

  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsExpanded(isOpen);
  }, [isOpen]);

  useEffect(() => {
    if (scrollDown && container.current && isExpanded) {
      // we need scrollIntoView to scroll to expanded content of ExpandPanel component
      container.current.scrollIntoView({ block: 'end', behavior: 'smooth' });
    }
  }, [isExpanded]);

  const toggleExpand = (event?: MouseEvent | KeyboardEvent) => {
    if (onToggle) {
      return onToggle(event);
    }

    setIsExpanded((value) => !value);
  };

  return (
    <div className="uwaw-option" ref={container}>
      <div className="uwaw-option__i">
        <button
          type="button"
          className="uwaw-option__drop-btn"
          aria-expanded={isExpanded}
          aria-label={readerText}
          onClick={toggleExpand}
          onKeyDown={onKeyboardSelection(toggleExpand)}
          ref={innerRef}
          disabled={isDisabled}
          data-uw-reader-content={readerText}
          data-uw-reader-language={readerLang} // TODO: get rid of LST logic in expand panel
        >
          <span className={`expanded_panel__wrapper ${isDisabled ? 'disabled' : ''}`}>
            <span className={`expanded_panel__wrapper__icon ${isCircledIcon ? 'circle' : ''}`}>
              {icon}
            </span>
            <span className="expanded_panel__wrapper__lang">{title}</span>
          </span>
          {!hideArrowIcon && (
            <span className="uwaw-option__drop-icon">
              <ChevronRightIcon svgAttrs={{ 'aria-hidden': 'true', focusable: 'false' }} />
            </span>
          )}
        </button>
        {control}
        {renderRight && renderRight()}
      </div>
      {isExpanded && <div className="uwaw-option__dropdown">{children}</div>}
    </div>
  );
};
