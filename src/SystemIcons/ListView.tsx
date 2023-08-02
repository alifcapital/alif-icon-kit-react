import React from 'react';

import { IIconProps } from '../types';

const ListView: React.FC<IIconProps> = ({
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
      d="M9.01512 12.9194H21.0151M3.10742 12.9194H4.10742M9.01512 6.91943H21.0151M3.10742 6.91943H4.10742M9.01512 18.9194H21.0151M3.10742 18.9194H4.10742"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

ListView.displayName = 'ListView';
export default ListView;
