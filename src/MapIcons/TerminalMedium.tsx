import React from 'react';

import { IIconProps } from '../types';

const TerminalMedium: React.FC<IIconProps> = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 10C21 15.9567 14.4828 21.1893 12.5401 22.6167C12.2148 22.8558 11.7852 22.8558 11.4599 22.6167C9.51722 21.1893 3 15.9567 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
      fill="#00AF66"
    />
    <path
      d="M12.875 8.14773V15H11.1364V8.14773H12.875ZM8.75 8.54545V7H15.25V8.54545H8.75Z"
      fill="white"
    />
  </svg>
);

TerminalMedium.displayName = 'TerminalMedium';
export default TerminalMedium;
