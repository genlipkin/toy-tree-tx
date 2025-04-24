import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 8" {...props}>
    <path
      fill="currentColor"
      fill-rule="evenodd"
      d="M.5 1.124643v5.750714c0 .414214.33579.75.75.75.13593 0 .26931-.036943.38587-.10688L6.42813 4.64312c.35519-.213111.47036-.673807.25725-1.028992-.06334-.105562-.15168-.19391-.25725-.257248L1.63587.481523C1.28069.268412.81999.383586.60688.738771.53694.855333.5.98871.5 1.124643Z"
    />
  </svg>
);

export const PlaySmallIcon: FunctionalComponent<Icon> = ({
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
