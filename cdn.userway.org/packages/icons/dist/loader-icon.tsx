import { h, JSX, FunctionalComponent } from "preact";
import { Icon } from "@uw/icons/types";
const defaultStyle = {
  width: "24px",
  height: "24px",
  display: "flex",
};

const SvgIcon = (props: JSX.SVGAttributes<any>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 100 100"
    {...props}
  >
    <rect width={8} height={20} x={46} y={10} fill="currentColor" rx={4} ry={4}>
      <animate
        attributeName="opacity"
        begin="-0.875s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(45 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.75s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(90 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.625s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(135 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(180 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.375s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(225 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.25s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(270 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="-0.125s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
    <rect
      width={8}
      height={20}
      x={46}
      y={10}
      fill="currentColor"
      rx={4}
      ry={4}
      transform="rotate(315 50 50)"
    >
      <animate
        attributeName="opacity"
        begin="0s"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        values="1;0"
      />
    </rect>
  </svg>
);

export const LoaderIcon: FunctionalComponent<Icon> = ({
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
