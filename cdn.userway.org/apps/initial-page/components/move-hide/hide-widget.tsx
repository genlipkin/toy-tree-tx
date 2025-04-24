import { FunctionalComponent, h } from 'preact';
import { useTranslation } from 'hooks/use-translation';
import { useHideWidget } from './use-hide-widget';
import { TIME_OPTIONS_LIST } from './constants';

interface HideWidgetProps {
  onCancel: () => void;
}

export const HideWidget: FunctionalComponent<HideWidgetProps> = (props) => {
  const { translate } = useTranslation();
  const { onCancel } = props;
  const { selectedTime, setSelectedTime, hideWidget } = useHideWidget();

  return (
    <div className="uwaw-hide-options">
      <h2 className="uwaw-hide-options__title">
        {translate('widget.manageHideMove.hide_options.title')}
      </h2>
      <ul className="uwaw-hide-options__list">
        {TIME_OPTIONS_LIST.map((time) => (
          <li key={time.id} className="uwaw-hide-options__item">
            <label htmlFor={time.type} className="uwaw-custom-radio">
              <input
                onInput={() => setSelectedTime(time)}
                value={time.id}
                className="uwaw-custom-radio__inp"
                id={time.type}
                type="radio"
                data-uw-reader-content={translate(time.text)}
                name="uwawHide"
                checked={selectedTime.id === time.id}
              />
              <span className="uwaw-custom-radio__icon" />
              <span className="uwaw-custom-radio__label">{translate(time.text)}</span>
            </label>
          </li>
        ))}
      </ul>
      <div className="uwaw-hide-options__btn-row">
        <button
          type="button"
          data-uw-reader-content={translate('widget.manageHideMove.hide_options.cancel_btn')}
          className="uwaw-btn uwaw-btn_border"
          onClick={onCancel}
        >
          {translate('widget.manageHideMove.hide_options.cancel_btn')}
        </button>
        <button
          type="button"
          className="uwaw-btn uwaw-btn_border uwaw-btn_blue"
          data-uw-reader-content={translate('widget.manageHideMove.buttons.hide')}
          onClick={hideWidget}
        >
          {translate('widget.manageHideMove.buttons.hide')}
        </button>
      </div>
    </div>
  );
};
