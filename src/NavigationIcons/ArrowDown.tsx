import React from 'react';

import { IIconProps } from '../types';

const ArrowDown: React.FC<IIconProps> = ({
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
      d="M13.0617 4.91846V3.91846H11.0617V4.91846V18.5042L5.76878 13.2114L5.06167 12.5042L3.64746 13.9185L4.35457 14.6256L11.3546 21.6256C11.7451 22.0161 12.3783 22.0161 12.7688 21.6256L19.7688 14.6256L20.4759 13.9185L19.0617 12.5042L18.3546 13.2114L13.0617 18.5042V4.91846Z"
      fill={color}
    />
  </svg>
);

ArrowDown.displayName = 'ArrowDown';
export default ArrowDown;
