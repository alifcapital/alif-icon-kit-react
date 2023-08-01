import React from 'react';

import { IIconProps } from '../types';

const ArrowUp: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M4.35457 11.2114L3.64746 11.9185L5.06167 13.3327L5.76878 12.6256L11.0617 7.33267L11.0617 20.9185V21.9185H13.0617V20.9185L13.0617 7.33267L18.3546 12.6256L19.0617 13.3327L20.4759 11.9185L19.7688 11.2113L12.7688 4.21135C12.3783 3.82083 11.7451 3.82083 11.3546 4.21135L4.35457 11.2114Z"
      fill={color}
    />
  </svg>
);

ArrowUp.displayName = 'ArrowUp';
export default ArrowUp;
