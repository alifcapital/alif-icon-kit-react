import React from 'react';

import { IIconProps } from '../types';

const Time: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="48" cy="48" r="40" fill="#ECF0F3" />
    <circle cx="48" cy="48" r="36" stroke="#00AF66" strokeWidth="8" />
    <rect x="45" y="24.6082" width="6" height="24" fill="#00AF66" />
    <circle cx="48" cy="48" r="5" fill="#48587D" />
    <rect
      x="46.7246"
      y="50.3569"
      width="4"
      height="24"
      transform="rotate(-45 46.7246 50.3569)"
      fill="#48587D"
    />
  </svg>
);

Time.displayName = 'Time';
export default Time;
