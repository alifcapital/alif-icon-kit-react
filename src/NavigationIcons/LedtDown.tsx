import React from 'react';

import { IIconProps } from '../types';

const LedtDown: React.FC<IIconProps> = ({
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
      d="M15.2684 20.6189H16.2684V18.6189H15.2684H7.61962L19.3497 7.04453L20.0615 6.34216L18.6568 4.91853L17.945 5.6209L6.26844 17.1424V9.6189V8.6189H4.26844V9.6189V19.6189C4.26844 20.1712 4.71615 20.6189 5.26844 20.6189H15.2684Z"
      fill={color}
    />
  </svg>
);

LedtDown.displayName = 'LedtDown';
export default LedtDown;
