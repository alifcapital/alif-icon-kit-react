import React from 'react';

import { IIconProps } from '../types';

const ChevronRight: React.FC<IIconProps> = ({
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
      d="M10.0615 6.91846L16.0615 12.9185L10.0615 18.9185"
      fill={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

ChevronRight.displayName = 'ChevronRight';
export default ChevronRight;
