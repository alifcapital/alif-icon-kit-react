import React from 'react';

import { IIconProps } from '../types';

const TerminalLarge: React.FC<IIconProps> = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M42 20C42 31.9135 28.9656 42.3787 25.0803 45.2335C24.4296 45.7115 23.5703 45.7115 22.9197 45.2335C19.0344 42.3787 6 31.9135 6 20C6 15.2261 7.89642 10.6477 11.2721 7.27208C14.6477 3.89642 19.2261 2 24 2C28.7739 2 33.3523 3.89642 36.7279 7.27208C40.1036 10.6477 42 15.2261 42 20Z"
      fill="#00AF66"
    />
    <path
      d="M25.75 16.2955V30H22.2727V16.2955H25.75ZM17.5 17.0909V14H30.5V17.0909H17.5Z"
      fill="white"
    />
  </svg>
);

TerminalLarge.displayName = 'TerminalLarge';
export default TerminalLarge;
