import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width={2}
      d="m2.30436241 2.30436238 9.39127515 9.39127515m-9.39127518 6e-8 9.39127515-9.39127515"
    />
  </svg>
);

export const CloseIcon: FunctionalComponent<Icon> = ({
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
