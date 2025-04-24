import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2 9" {...props}>
    <g fill="none" fill-rule="evenodd" transform="translate(.13 .63)">
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width={1.75}
        d="M.87 3.37v4"
      />
      <circle cx={0.875} cy={0.875} r={1} fill="currentColor" />
    </g>
  </svg>
);

export const InfoIcon: FunctionalComponent<Icon> = ({
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
