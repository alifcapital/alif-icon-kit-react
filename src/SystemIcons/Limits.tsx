import React from 'react';

import { IIconProps } from '../types';

const Limits: React.FC<IIconProps> = ({ width = '24', height = '24', color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <rect
      x="2"
      y="3"
      width="20"
      height="18"
      rx="5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 17L16 15"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 17L12 7"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 17L8 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Limits.displayName = 'Limits';
export default Limits;
