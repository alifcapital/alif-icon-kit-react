import React from 'react';

import { IIconProps } from '../types';

const SelectHideTop: React.FC<IIconProps> = ({
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
      d="M6.06152 15.9185L12.0615 9.91846L18.0615 15.9185"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

SelectHideTop.displayName = 'SelectHideTop';
export default SelectHideTop;
