import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={15}
    fill="none"
    {...props}
  >
    <path
      stroke="#868686"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 13 14 1l12 12"
    />
  </svg>
);
export default SvgComponent;
