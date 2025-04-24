import { useContext, useEffect, useState } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { sendPostMessage } from '../../helpers/post-message.helper';
import { isMobile } from '../../helpers/detect-user-agent';

// values according to the old data-grid positioning
enum Position {
  Pos2 = 2,
  Pos3 = 3,
  Pos6 = 6,
  Left = 7,
  Center = 5,
  Right = 1,
}

export const usePosition = (onSaveCallback: () => void = () => {}) => {
  const { setUserSpecificPosition, userSpecificPosition, position, tunings } =
    useContext(ApplicationContext);
  const [currentPosition, setCurrentPosition] = useState<Position>(null);

  const setPosition = (position: number) =>
    setCurrentPosition(position >= Position.Center ? Position.Left : Position.Right);

  useEffect(() => {
    const positioning = userSpecificPosition || position || +tunings?.widget_position;

    setPosition(positioning);
  }, [userSpecificPosition, position, tunings]);

  const setDefaultPosition = () => {
    const defaultPosition =
      position || (isMobile() ? +tunings?.widget_position_mobile : +tunings?.widget_position);

    if (!defaultPosition) {
      return;
    }

    setPosition(defaultPosition);
    setUserSpecificPosition(null);

    sendPostMessage({
      action: 'setWidgetPosition',
      position: defaultPosition,
      isSetDefault: true,
      byUser: true,
    });
  };

  const savePosition = (position: Position) => {
    const iconPosition = +tunings.widget_position;

    switch (position) {
      case 1:
        switch (iconPosition) {
          case 2:
            position = 2;
            break;
          case 3:
          case 4:
          case 5:
            position = 3;
            break;
          case 6:
            position = 2;
            break;
          case 7:
          case 8:
            position = 1;
            break;
          default:
            console.log('Default position case');
        }
        break;
      case 7:
        switch (iconPosition) {
          case 2:
            position = 6;
            break;
          case 3:
          case 4:
          case 5:
            position = 5;
            break;
          case 6:
            position = 6;
            break;
          case 7:
          case 8:
            position = 7;
            break;
          default:
            console.log('Default position case');
        }
        break;
      default:
        console.log('Default position case');
    }

    setCurrentPosition(position);
    setUserSpecificPosition(position);

    onSaveCallback();

    sendPostMessage({
      action: 'setWidgetPosition',
      position,
      byUser: true,
      byMoveHideSection: true,
    });
  };

  return {
    currentPosition,
    savePosition,
    setDefaultPosition,
  };
};
