import React from 'react';

import { IIconProps } from '../types';

const RightArrow: React.FC<IIconProps> = ({
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
      d="M13.7686 5.21126L13.0615 4.50415L11.6473 5.91836L12.3544 6.62547L17.6473 11.9184L4.06152 11.9184H3.06152V13.9184H4.06152L17.6473 13.9184L12.3544 19.2113L11.6473 19.9184L13.0615 21.3326L13.7686 20.6255L20.7686 13.6255C21.1592 13.2349 21.1592 12.6018 20.7686 12.2113L13.7686 5.21126Z"
      fill={color}
    />
  </svg>
);

RightArrow.displayName = 'RightArrow';
export default RightArrow;
