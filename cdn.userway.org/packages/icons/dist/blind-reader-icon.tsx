import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 13" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width={1.5}
      d="M1 7.3823532h3.6V5.5211767c0-.5964675.48353247-1.08 1.08-1.08.5964675 0 1.08.4835325 1.08 1.08v5.4169853c0 .60268073.4885693 1.09125 1.09125 1.09125.6026807 0 1.09125-.48856927 1.09125-1.09125V2.5687502c0-.5902543.4784957-1.06875 1.06875-1.06875s1.06875.4784957 1.06875 1.06875v6.85125c0 .5964676.4835325 1.08 1.08 1.08.5964675 0 1.08-.4835324 1.08-1.08V5.5211767c0-.5964675.4835325-1.08 1.08-1.08.5964675 0 1.08.4835325 1.08 1.08v1.8611765H19"
    />
  </svg>
);

export const BlindReaderIcon: FunctionalComponent<Icon> = ({
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
