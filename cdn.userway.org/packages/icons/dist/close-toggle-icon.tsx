import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 11" {...props}>
    <path
      fill="currentColor"
      d="M1.11611652 1.11611652c.48815537-.48815536 1.27961159-.48815536 1.76776696 0L5.5 3.733l2.61611652-2.61688348c.48815537-.48815536 1.27961159-.48815536 1.76776696 0 .48815536.48815537.48815536 1.27961159 0 1.76776696L7.267 5.5l2.61688348 2.61611652c.45561167.45561168.48598578 1.1754321.09112233 1.66627161l-.09112233.10149535c-.48815537.48815536-1.27961159.48815536-1.76776696 0L5.5 7.267 2.88388348 9.88388348c-.48815537.48815536-1.2796116.48815536-1.76776696 0-.48815536-.48815537-.48815536-1.27961159 0-1.76776696L3.733 5.5 1.11611652 2.88388348c-.45561167-.45561168-.48598578-1.1754321-.09112233-1.6662716Z"
    />
  </svg>
);

export const CloseToggleIcon: FunctionalComponent<Icon> = ({
  className,
  svgAttrs = {
    width: "100%",
    height: "100%",
  },
  key,
  jsx,
  children,
  ref,
  ...styles
}) => (
  <span className={className} style={{ ...defaultStyle, ...styles }}>
    <SvgIcon {...svgAttrs} />
  </span>
);
