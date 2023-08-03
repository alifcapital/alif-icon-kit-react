import React from 'react';

import { IIconProps } from '../types';

const PhonesAndAccessories: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="24.9561"
      y="9.5"
      width="46.0886"
      height="77.9993"
      rx="5.11564"
      fill="#00AF66"
      stroke="#00AF66"
      strokeWidth="4"
    />
    <path
      d="M22.9561 71.7788H73.0447V82.3832C73.0447 86.3131 69.8589 89.4989 65.929 89.4989H30.0717C26.1418 89.4989 22.9561 86.3131 22.9561 82.3832V71.7788Z"
      fill="#00AF66"
    />
    <circle cx="48.4229" cy="80.3857" r="4" fill="#ECF0F3" />
    <rect x="26" y="10.6721" width="44" height="61.1067" rx="4.74376" fill="#ECF0F3" />
    <rect x="43.4473" y="15.3491" width="9.10702" height="2.37188" rx="1.18594" fill="#48587D" />
  </svg>
);

PhonesAndAccessories.displayName = 'PhonesAndAccessories';
export default PhonesAndAccessories;
