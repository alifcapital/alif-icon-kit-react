import React from 'react';

import { IIconProps } from '../types';

const CheckCircle: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="8.75" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.6967 6.34467C14.9896 6.63756 14.9896 7.11244 14.6967 7.40533L8.9675 13.1345C8.67461 13.4274 8.19974 13.4274 7.90684 13.1345L5.30268 10.5303C5.00978 10.2374 5.00978 9.76256 5.30268 9.46967C5.59557 9.17678 6.07044 9.17678 6.36334 9.46967L8.43717 11.5435L13.636 6.34467C13.9289 6.05178 14.4038 6.05178 14.6967 6.34467Z"
      fill="white"
    />
  </svg>
);

CheckCircle.displayName = 'CheckCircle';
export default CheckCircle;
