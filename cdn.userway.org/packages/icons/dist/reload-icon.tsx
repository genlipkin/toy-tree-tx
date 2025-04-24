import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 16" {...props}>
    <g
      fill="none"
      fill-rule="evenodd"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width={1.84}
    >
      <path d="M16.20106 8c0 .9667-.189683 1.8872-.5324673 2.7251-.3427843.8372-.8386698 1.5911-1.4517524 2.2246-.6130825.6335-1.3426846 1.1459-2.152902 1.5001-.8108948.3542-1.70172746.5502-2.6372711.5502-.93554365 0-1.8263763-.196-2.63727112-.5502-.81021738-.3542-1.53981948-.8666-2.15290203-1.5001M2.6522744 8c0-.9667.189683-1.8872.53246728-2.7251.34278427-.8372.83866982-1.5911 1.45175237-2.2246.61308255-.6335 1.34268465-1.1459 2.15290203-1.5001C7.6002909 1.196 8.49112355 1 9.4266672 1c.93554364 0 1.8263763.196 2.6372711.5502.8102174.3542 1.5398195.8666 2.152902 1.5001" />
      <path
        stroke-linejoin="round"
        d="m4.92576062 6.96092-2.48958935 1.484L1 5.87242m13.0125924 2.93832 2.3886509-1.652L18 9.62694"
      />
    </g>
  </svg>
);

export const ReloadIcon: FunctionalComponent<Icon> = ({
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
