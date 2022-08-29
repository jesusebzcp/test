import * as React from "react";
import { SVGProps } from "react";

export const ArrowUpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={11}
    height={7}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10 6.5a1 1 0 0 1-.71-.29L6 2.9 2.7 6.08a1 1 0 1 1-1.41-1.42l4-3.86a1 1 0 0 1 1.4 0l4 4a1.001 1.001 0 0 1 0 1.42 1 1 0 0 1-.69.28Z"
      fill="#242D2E"
    />
  </svg>
);
