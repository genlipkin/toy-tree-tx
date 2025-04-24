import { FunctionalComponent, h } from 'preact';
import './move-hide.scss';
import { GearIcon } from '@uw/icons';
import { useContext, useRef, useState } from 'preact/hooks';
import { FocusableTrapElement, useFocusableElement } from '@uw/common-components';
import { useTranslation } from 'hooks/use-translation';
import { ApplicationContext } from 'contexts/use-application-setup';
import { HideWidget } from './hide-widget';
import { usePosition } from './use-position';
import { ExpandPanel } from '../expand-panel/expand-panel';

// values according to the old data-grid positioning
enum Position {
  Left = 7,
  Center = 5,
  Right = 1,
}

export const MoveHide: FunctionalComponent = () => {
  const { translate } = useTranslation();
  const { tunings } = useContext(ApplicationContext);
  const [hide, setHide] = useState(false);
  const { currentPosition, savePosition } = usePosition(() => setHide(false));
  const container = useRef<HTMLDivElement>(null);
  const moveCallbackRef = useFocusableElement(FocusableTrapElement.BeforeLastElement, container);
  const isHideAvailable = !tunings.widget_custom_trigger_enabled;
  const translationForMoveOnly = isHideAvailable ? '' : '.onlyMove';

  return (
    <div
      ref={moveCallbackRef}
      className="uwaw-move-hide-component"
      data-uw-reader-content={translate(`widget.menu.moveHide${translationForMoveOnly}.aria`)}
    >
      <ExpandPanel
        title={translate(`widget.manageHideMove${translationForMoveOnly}.title`)}
        icon={<GearIcon width={16} height={16} />}
        scrollDown={true}
        readerText={translate(`widget.menu.moveHide${translationForMoveOnly}.aria`)}
      >
        <div className="uwaw-move-hide">
          <ul className="uwaw-move-hide__list">
            <li className="uwaw-move-hide__item">
              <label htmlFor="uwaw-move-l" className="uwaw-custom-radio">
                <input
                  className="uwaw-custom-radio__inp"
                  type="radio"
                  name="moveHide"
                  id="uwaw-move-l"
                  aria-label={translate('widget.manageHideMove.radio_icons.icons_aria_labels.left')}
                  data-uw-reader-content={translate(
                    'widget.manageHideMove.radio_icons.icons_aria_labels.left',
                  )}
                  checked={currentPosition === Position.Left}
                  onInput={() => savePosition(Position.Left)}
                />
                <span className="uwaw-custom-radio__icon" />
                <span className="uwaw-custom-radio__label">
                  {translate('widget.manageHideMove.radio_icons.left')}
                </span>
              </label>
            </li>

            <li className="uwaw-move-hide__item">
              <label htmlFor="uwaw-move-r" className="uwaw-custom-radio">
                <input
                  className="uwaw-custom-radio__inp"
                  type="radio"
                  name="moveHide"
                  id="uwaw-move-r"
                  aria-label={translate(
                    'widget.manageHideMove.radio_icons.icons_aria_labels.right',
                  )}
                  data-uw-reader-content={translate(
                    'widget.manageHideMove.radio_icons.icons_aria_labels.right',
                  )}
                  checked={currentPosition === Position.Right}
                  onInput={() => savePosition(Position.Right)}
                />
                <span className="uwaw-custom-radio__icon" />
                <span className="uwaw-custom-radio__label">
                  {translate('widget.manageHideMove.radio_icons.right')}
                </span>
              </label>
            </li>

            {isHideAvailable && (
              <li className="uwaw-move-hide__item">
                <label htmlFor="uwaw-move-h" className="uwaw-custom-radio">
                  <input
                    className="uwaw-custom-radio__inp"
                    type="radio"
                    name="moveHide"
                    id="uwaw-move-h"
                    aria-label={translate(
                      'widget.manageHideMove.radio_icons.icons_aria_labels.hide',
                    )}
                    data-uw-reader-content={translate(
                      'widget.manageHideMove.radio_icons.icons_aria_labels.hide',
                    )}
                    checked={hide}
                    onInput={(e) => setHide(true)}
                  />
                  <span className="uwaw-custom-radio__icon" />
                  <span className="uwaw-custom-radio__label">
                    {translate('widget.manageHideMove.radio_icons.hide')}
                  </span>
                </label>
              </li>
            )}
          </ul>

          {isHideAvailable && hide && (
            <HideWidget
              onCancel={() => {
                setHide(false);
              }}
            />
          )}
        </div>
      </ExpandPanel>
    </div>
  );
};
