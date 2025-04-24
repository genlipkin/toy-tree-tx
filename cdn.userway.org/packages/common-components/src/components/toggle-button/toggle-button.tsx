import { h, FunctionalComponent, JSX } from 'preact';
import { MutableRef, useMemo } from 'preact/hooks';
import { memo } from 'preact/compat';
import { generateId } from '../../utils/generate-id';
import { onKeyboardSelection } from '../../utils/operators';
import { CloseToggleIcon, CheckToggleIcon } from '@uw/icons';

import './toggle-button.scss';

interface ToggleButtonProps {
  reference?: MutableRef<HTMLInputElement>;
  checked: boolean;
  ariaLabel: string;
  label?: string;
  labelOn?: string;
  labelOff?: string;
  color?: string;
  onChange: (e: JSX.TargetedEvent<HTMLInputElement>) => void;
}

export const ToggleButton: FunctionalComponent<ToggleButtonProps> = memo((props) => {
  const {
    checked,
    onChange,
    ariaLabel,
    reference,
    label,
    labelOn,
    labelOff,
    color = '#0050FF',
    ...otherProps
  } = props;

  const id = useMemo(generateId, []);

  return (
    <div className={`uwaw-switcher ${label ? 'uwaw-switcher_has-label' : ''}`}>
      <label className="uwaw-switcher__input-label">
        {label && <span className="uwaw-switcher__label">{label}</span>}

        <input
          id={`uwaw-${id}`}
          ref={reference}
          type="checkbox"
          className="uwaw-switcher__input"
          checked={checked}
          onInput={(e) => onChange(e)}
          onKeyDown={onKeyboardSelection((e) => onChange(e as any))}
          aria-label={ariaLabel}
          {...otherProps}
        />
        <span className="uwaw-switcher__outline">
          <span className="uwaw-switcher__body">
            <span className="uwaw-switcher__trigger">
              <span aria-hidden={true} className="uwaw-switcher__state uwaw-switcher__state_on">
                <CheckToggleIcon height={12} width={12} color={color} />
              </span>
              <span aria-hidden={true} className="uwaw-switcher__state uwaw-switcher__state_off">
                <CloseToggleIcon height={12} width={12} color="#313D5C" />
              </span>
            </span>
          </span>
        </span>
      </label>
    </div>
  );
});
