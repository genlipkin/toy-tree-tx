import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 17" {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M154 16H21.242641c-.79565 0-1.558712-.3160705-2.121321-.8786797l-14-13.99999996c-1.171573-1.17157287-3.071067-1.17157287-4.24264 0C.316071 1.68392948 0 2.44699122 0 3.24264069V48c0 6.627417 5.372583 12 12 12h142c6.627417 0 12-5.372583 12-12V28c0-6.627417-5.372583-12-12-12Z"
    />
  </svg>
);

export const TooltipTailLeftIcon: FunctionalComponent<Icon> = ({
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
