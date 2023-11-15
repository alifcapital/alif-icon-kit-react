import React from 'react';

import { IIconProps } from '../types';

const InfoContained: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <circle cx="8" cy="8" r="8" fill={color} />
    <path d="M8 11.8L8 7" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M8 6L8 4.2" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

InfoContained.displayName = 'InfoContained';
export default InfoContained;
