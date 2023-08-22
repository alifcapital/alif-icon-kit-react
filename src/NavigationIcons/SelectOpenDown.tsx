import React from 'react';

import { IIconProps } from '../types';

const SelectOpenDown: React.FC<IIconProps> = ({
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
      d="M6.06152 9.91846L12.0615 15.9185L18.0615 9.91846"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

SelectOpenDown.displayName = 'SelectOpenDown';
export default SelectOpenDown;
