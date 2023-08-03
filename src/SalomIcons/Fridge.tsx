import React from 'react';

import { IIconProps } from '../types';

const Fridge: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="59.5586" y="75.1758" width="6.35318" height="14.8241" rx="2" fill="#48587D" />
    <rect
      width="6.35318"
      height="14.8241"
      rx="2"
      transform="matrix(1 0 0 -1 30 89.9998)"
      fill="#48587D"
    />
    <path
      d="M22.5342 39.6152H73.4667V79.2676C73.4667 82.7733 70.6248 85.6152 67.1191 85.6152H28.8818C25.3761 85.6152 22.5342 82.7733 22.5342 79.2676V39.6152Z"
      fill="#00AF66"
    />
    <path
      d="M22.5342 39.6152H73.4667V12.3474C73.4667 8.8417 70.6248 5.99978 67.1191 5.99978H28.8818C25.3761 5.99978 22.5342 8.84171 22.5342 12.3474V39.6152Z"
      fill="#ECF0F3"
    />
    <rect x="30" y="19.7981" width="4.0746" height="10.1865" rx="0.985807" fill="#48587D" />
    <rect x="30" y="48.3206" width="4.0746" height="18.7988" rx="0.985807" fill="#ECF0F3" />
  </svg>
);

Fridge.displayName = 'Fridge';
export default Fridge;
