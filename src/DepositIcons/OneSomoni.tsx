import React from 'react';

import { IIconProps } from '../types';

const OneSomoni: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="52" cy="48" r="40" fill="#48587D" />
    <circle cx="48" cy="48" r="40" fill="#ECF0F3" />
    <circle cx="48" cy="48" r="36" stroke="#00AF66" strokeWidth="8" />
    <path
      d="M53 31.4761V65.3646H46.2039V39.4187L39 44.2805V37.06L46.7476 31.4761H53Z"
      fill="#00AF66"
    />
  </svg>
);

OneSomoni.displayName = 'OneSomoni';
export default OneSomoni;
