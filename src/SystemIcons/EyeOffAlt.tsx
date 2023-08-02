import React from 'react';

import { IIconProps } from '../types';

const EyeOffAlt: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 26 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.06152 8.91943C2.06152 8.91943 5.91152 13.8425 13.0615 13.8425C20.2115 13.8425 24.0615 8.91943 24.0615 8.91943M4.26152 10.944L2.06152 13.8425M24.0615 13.8425L21.8659 10.9477M9.66692 13.4487L8.66152 16.9194M16.4308 13.4585L17.4615 16.9194"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

EyeOffAlt.displayName = 'EyeOffAlt';
export default EyeOffAlt;
