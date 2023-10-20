import React from 'react';

import { IIconProps } from '../types';

const Subscription: React.FC<IIconProps> = ({
  width = '24',
  height = '24',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
  >
    <path d="M12 2.5V4V5.5L14 4L12 2.5Z" fill={color} />
    <path
      d="M5.07026 16C4.38958 14.8233 4 13.4571 4 12C4 7.58172 7.58172 4 12 4V2.5M12 2.5V5.5L14 4L12 2.5Z"
      stroke={color}
      strokeWidth="2"
    />
    <path d="M12 21.5V20V18.5L10 20L12 21.5Z" fill={color} />
    <path
      d="M18.9297 8C19.6104 9.17669 20 10.5429 20 12C20 16.4183 16.4183 20 12 20V21.5M12 21.5V18.5L10 20L12 21.5Z"
      stroke={color}
      strokeWidth="2"
    />
  </svg>
);

Subscription.displayName = 'Subscription';
export default Subscription;
