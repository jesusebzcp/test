import * as React from "react";
import { SVGProps } from "react";

export const ArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 6.5a1 1 0 0 1-.71-.29l-4-4A1.004 1.004 0 1 1 2.71.79L6 4.1 9.3.92a1 1 0 1 1 1.38 1.44l-4 3.86A1 1 0 0 1 6 6.5Z"
      fill="#A0AEC0"
    />
  </svg>
);
