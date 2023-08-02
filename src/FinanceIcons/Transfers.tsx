import React from 'react';

import { IIconProps } from '../types';

const Transfers: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 1.16553L17.2071 1.87263L20.9142 5.57974H21V5.66553L21.2071 5.87263C21.5976 6.26316 21.5976 6.89632 21.2071 7.28685L21 7.49396V7.57974H20.9142L17.2071 11.2868L16.5 11.994L15.0858 10.5797L15.7929 9.87263L18.0858 7.57974H3.5H2.5V5.57974H3.5H18.0858L15.7929 3.28685L15.0858 2.57974L16.5 1.16553ZM5.91422 18.5797L20.5 18.5797H21.5V16.5797H20.5L5.91421 16.5797L8.20711 14.2868L8.91421 13.5797L7.5 12.1655L6.79289 12.8726L3.08578 16.5797H3V16.6655L2.79289 16.8726C2.40237 17.2631 2.40237 17.8963 2.79289 18.2868L3 18.4939V18.5797H3.08579L6.79289 22.2868L7.5 22.9939L8.91421 21.5797L8.20711 20.8726L5.91422 18.5797Z"
      fill={color}
    />
  </svg>
);

Transfers.displayName = 'Transfers';
export default Transfers;
