import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width={2}
      d="M6.67908563 12.3581713c3.13647239 0 5.67908567-2.54261328 5.67908567-5.67908567S9.81555802 1 6.67908563 1 1 3.54261324 1 6.67908563s2.54261324 5.67908567 5.67908563 5.67908567ZM15 15l-4.13033661-4.13033661"
    />
  </svg>
);

export const SearchIcon: FunctionalComponent<Icon> = ({
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
