import React from 'react';

import { IIconProps } from '../types';

const Check: React.FC<IIconProps> = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z"
      fill="#00AF66"
    />
    <path
      d="M15.9375 9.79639L11.125 14.6089L8.9375 12.4214"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

Check.displayName = 'Check';
export default Check;
