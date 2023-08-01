import React from 'react';

import { IIconProps } from '../types';

const TrendingUp: React.FC<IIconProps> = ({
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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.0617 5.91846H18.0617H24.0617C24.614 5.91846 25.0617 6.36617 25.0617 6.91846V12.9185V13.9185H23.0617V12.9185V9.33267L15.9759 16.4185C15.1948 17.1995 13.9285 17.1995 13.1475 16.4185L9.56167 12.8327L2.76878 19.6256L2.06167 20.3327L0.647461 18.9185L1.35457 18.2114L8.14746 11.4185C8.92851 10.6374 10.1948 10.6374 10.9759 11.4185L14.5617 15.0042L21.6475 7.91846H18.0617H17.0617V5.91846Z"
      fill={color}
    />
  </svg>
);

TrendingUp.displayName = 'TrendingUp';
export default TrendingUp;
