import React from 'react';

import { IIconProps } from '../types';

const LeftArrow: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.7686 6.62547L12.4757 5.91836L11.0615 4.50415L10.3544 5.21126L3.35442 12.2113C2.96389 12.6018 2.96389 13.2349 3.35442 13.6255L10.3544 20.6255L11.0615 21.3326L12.4757 19.9184L11.7686 19.2113L6.47574 13.9184H20.0615H21.0615V11.9184H20.0615H6.47574L11.7686 6.62547Z"
      fill={color}
    />
  </svg>
);

LeftArrow.displayName = 'LeftArrow';
export default LeftArrow;
