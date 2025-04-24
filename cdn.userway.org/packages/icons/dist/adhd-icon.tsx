import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      transform="translate(1 1)"
    >
      <circle
        cx={7}
        cy={7}
        r={7}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={1.5}
      />
      <circle
        cx={7}
        cy={7}
        r={3.5}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={1.5}
      />
      <circle cx={7} cy={7} r={1} fill="currentColor" />
    </g>
  </svg>
);

export const AdhdIcon: FunctionalComponent<Icon> = ({
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
