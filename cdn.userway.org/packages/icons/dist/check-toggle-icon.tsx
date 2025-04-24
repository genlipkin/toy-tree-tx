import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 9" {...props}>
    <path
      fill="currentColor"
      d="M9.61611652.61611652c.48815538-.48815536 1.27961158-.48815536 1.76776698 0 .4881553.48815537.4881553 1.27961159 0 1.76776696l-6.00000002 6c-.48815537.48815536-1.27961159.48815536-1.76776696 0l-3-3c-.48815536-.48815537-.48815536-1.27961159 0-1.76776696.48815537-.48815536 1.27961159-.48815536 1.76776696 0L4.5 5.733 9.61611652.61611652Z"
    />
  </svg>
);

export const CheckToggleIcon: FunctionalComponent<Icon> = ({
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
