import React from 'react';

import { IIconProps } from '../types';

const Zp: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18.327 6.80713L21.499 9.25194C21.499 13.6671 21.499 15.2004 21.499 19.6156C21.499 20.652 20.644 21.4999 19.5991 21.4999H4.3999C3.35496 21.4999 2.5 20.652 2.5 19.6156V9.25194L5.72037 6.87711"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M21.499 9.25195L11.9995 15.847L2.5 9.25195"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.4541 11.4021V3.25003C6.4541 2.8358 6.7899 2.5 7.20414 2.5H16.7951C17.2094 2.5 17.5452 2.8358 17.5452 3.25003V11.6937"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M14.3711 6.09217V6.0332" stroke={color} strokeWidth="2" strokeLinecap="square" />
    <circle cx="12.0001" cy="12.002" r="2.45515" stroke={color} strokeWidth="2" />
  </svg>
);

Zp.displayName = 'Zp';
export default Zp;
