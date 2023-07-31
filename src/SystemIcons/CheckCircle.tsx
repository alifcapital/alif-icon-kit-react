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
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 7C14 10.866 10.866 14 7 14C3.13401 14 0 10.866 0 7C0 3.13401 3.13401 0 7 0C10.866 0 14 3.13401 14 7Z"
      fill={color}
    />
    <path
      d="M9.62467 5.53125L6.41634 8.73958L4.95801 7.28125"
      stroke="white"
      strokeWidth="1.33333"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

CheckCircle.displayName = 'CheckCircle';
export default CheckCircle;
