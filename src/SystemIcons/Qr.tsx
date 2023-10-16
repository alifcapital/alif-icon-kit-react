import React from 'react';

import { IIconProps } from '../types';

const Qr: React.FC<IIconProps> = ({ width = '24', height = '24', color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
  >
    <rect
      x="21.9969"
      y="10.2009"
      width="7.70149"
      height="7.70092"
      rx="2"
      transform="rotate(-180 21.9969 10.2009)"
      stroke={color}
      strokeWidth="2"
    />
    <rect
      x="10.7015"
      y="10.2009"
      width="7.70149"
      height="7.70092"
      rx="2"
      transform="rotate(-180 10.7015 10.2009)"
      stroke={color}
      strokeWidth="2"
    />
    <rect
      x="10.7015"
      y="21.4956"
      width="7.70149"
      height="7.70092"
      rx="2"
      transform="rotate(-180 10.7015 21.4956)"
      stroke={color}
      strokeWidth="2"
    />
    <path
      d="M21.8046 14.2897V19.876C21.8046 20.4266 21.8046 20.7019 21.6991 20.9129C21.6023 21.1067 21.4453 21.2637 21.2516 21.3605C21.0405 21.466 20.7652 21.466 20.2146 21.466H14.6893"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.7223 13.7771H14.6893V15.8275H16.7223V13.7771Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20.2797 16.8527H17.2303V19.9282H20.2797V16.8527Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Qr.displayName = 'Qr';
export default Qr;
