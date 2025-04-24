import { useContext, useEffect, useState } from 'preact/hooks';
import { ApplicationContext } from 'contexts/use-application-setup';
import { hexToRgbValues } from '../helpers/hex-to-rgb.helper';
import { detectWhiteColor } from '../helpers/detect-white-color.helper';

export const useWidgetCustomColors = (element: HTMLElement) => {
  const { widgetColors } = useContext(ApplicationContext);
  const [colorClass, setColorClass] = useState<string>('');
  const [isGradientClass, setIsGradientClass] = useState<string>('');
  const [isWhiteClass, setIsWhiteClass] = useState<string>('');

  useEffect(() => {
    if (!widgetColors?.mainBfColor || !element) {
      setColorClass('');
      return;
    }

    const getMainColor = () => {
      const DEFAULT_COLOR = '#0042EC';

      if (!widgetColors.gradient) {
        return widgetColors.mainBfColor || DEFAULT_COLOR;
      }

      const gradientStartColor = widgetColors.gradient?.split(',')[1].trim();

      return gradientStartColor || DEFAULT_COLOR;
    };

    const mainColor = getMainColor();
    const isWhite = detectWhiteColor(mainColor);
    const [r, g, b] = hexToRgbValues(mainColor);

    document.documentElement.style.setProperty('--mainColorRgbValues', `${r},${g},${b}`);

    element.style.background = `${widgetColors.gradient || widgetColors.mainBfColor}`;

    setColorClass(widgetColors.isLightColour ? 'uw-dark-theme' : 'uw-light-theme');
    setIsGradientClass(widgetColors.gradient ? 'gradient-head' : '');
    setIsWhiteClass(isWhite ? 'is-white' : '');
  }, [widgetColors, element]);

  return [`${colorClass} ${isGradientClass} ${isWhiteClass}`];
};
