import React from 'react';

import { IIconProps } from '../types';

const TerminalSmall: React.FC<IIconProps> = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.875 3.14773V10H5.13636V3.14773H6.875ZM2.75 3.54545V2H9.25V3.54545H2.75Z"
      fill="#222222"
    />
  </svg>
);

TerminalSmall.displayName = 'TerminalSmall';
export default TerminalSmall;
