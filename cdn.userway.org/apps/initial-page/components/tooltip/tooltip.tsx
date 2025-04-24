import { h, FunctionalComponent } from 'preact';
import { InfoIcon } from '@uw/icons';
import {
  Tooltip as CommonTooltip,
  TooltipProps as CommonTooltipProps,
} from '@uw/common-components';
import { useDynamicSize } from '../oversized-widget/use-dynamic-size';

export type TooltipProps = Omit<CommonTooltipProps, 'icon'>;

export const Tooltip: FunctionalComponent<TooltipProps> = (props) => {
  const size = useDynamicSize();

  const icon = (
    <InfoIcon svgAttrs={{ 'aria-hidden': 'true' }} width={size(2, 2)} height={size(8, 10)} />
  );

  return <CommonTooltip icon={icon} {...props} />;
};
