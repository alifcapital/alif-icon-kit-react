import React from 'react';

import { IIconProps } from '../types';

const Move: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M3.06152 8.91943H2.06152V10.9194H3.06152H21.0615H22.0615V8.91943H21.0615H3.06152ZM3.06152 14.9194H2.06152V16.9194H3.06152H21.0615H22.0615V14.9194H21.0615H3.06152Z"
      fill={color}
    />
  </svg>
);

Move.displayName = 'Move';
export default Move;
