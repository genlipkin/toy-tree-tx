import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 8" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={1.75}
      d="m1.625 4.625 2.5 2.5 6.25-6.25"
    />
  </svg>
);

export const TickIcon: FunctionalComponent<Icon> = ({
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
