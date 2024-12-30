import * as React from "react";

const SvgIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" className="w-full h-full">
    {/* Remove the fill of the background path to make it transparent */}
    <path fill="none" d="M0 0h1000v600H0z"></path>
    <path
      fill="#FF8B3D"
      d="M400 1200A700 700 0 0 1 800 40v560Z"
      opacity="0.4"
    ></path>
    <path
      fill="none"
      stroke="#FF8B3D"
      strokeWidth="4"
      d="M100 600A700 700 0 0 1 800-50"
      opacity="0.4"
    ></path>
    <path
      fill="none"
      stroke="#FF8B3D"
      strokeWidth="4"
      d="M150 600A700 700 0 0 1 800 0"
      opacity="0.4"
    ></path>
    <path fill="none" d="M200 600A700 700 0 0 1 800 50" opacity="0.4"></path>
  </svg>
);

export default SvgIcon;
