import React from 'react';

import { IIconProps } from '../types';

const Calendar: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19.0615 4H5.06152C3.95695 4 3.06152 4.89543 3.06152 6V20C3.06152 21.1046 3.95695 22 5.06152 22H19.0615C20.1661 22 21.0615 21.1046 21.0615 20V6C21.0615 4.89543 20.1661 4 19.0615 4Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0615 2V6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M8.06152 2V6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M3.06152 10H21.0615"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Calendar.displayName = 'Calendar';
export default Calendar;
