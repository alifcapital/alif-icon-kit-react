import React from 'react';

import { IIconProps } from '../types';

const KeyboardArrowLeft: React.FC<IIconProps> = ({
  width = '24',
  height = '24',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 6L8 12L14 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

KeyboardArrowLeft.displayName = 'KeyboardArrowLeft';
export default KeyboardArrowLeft;
