import { h, FunctionalComponent } from 'preact';
import { Tooltip, TooltipProps } from './tooltip';

interface ShortcutTooltipProps {
  primaryKey: string;
  secondaryKey: string;
}

export const ShortcutTooltip: FunctionalComponent<TooltipProps & ShortcutTooltipProps> = (
  props,
) => {
  const { primaryKey, secondaryKey, ...restProps } = props;

  return (
    <Tooltip {...restProps}>
      <span className="uwaw-main-tooltip__keys">
        <span className="uwaw-main-tooltip__key">{primaryKey}</span>
        <span className="uwaw-main-tooltip__plus">+</span>
        <span className="uwaw-main-tooltip__key">{secondaryKey}</span>
      </span>
    </Tooltip>
  );
};
