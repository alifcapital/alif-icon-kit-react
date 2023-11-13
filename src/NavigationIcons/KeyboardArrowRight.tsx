import React from 'react';

import { IIconProps } from '../types';

const KeyboardArrowRight: React.FC<IIconProps> = ({
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
      d="M10 6L16 12L10 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

KeyboardArrowRight.displayName = 'KeyboardArrowRight';
export default KeyboardArrowRight;
