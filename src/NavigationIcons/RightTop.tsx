import React from 'react';

import { IIconProps } from '../types';

const RightTop: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.06164 4.91846H8.06164V6.91846H9.06164H16.7105L4.98037 18.4928L4.26855 19.1952L5.67329 20.6188L6.3851 19.9165L18.0616 8.39493V15.9185V16.9185H20.0616V15.9185V5.91846C20.0616 5.36617 19.6139 4.91846 19.0616 4.91846H9.06164Z"
      fill={color}
    />
  </svg>
);

RightTop.displayName = 'RightTop';
export default RightTop;
