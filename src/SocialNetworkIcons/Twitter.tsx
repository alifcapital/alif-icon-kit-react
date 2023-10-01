import React from 'react';

import { IIconProps } from '../types';

const Twitter: React.FC<IIconProps> = () => (
  <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.829468" width="40" height="40" rx="20" fill="#111111" />
    <path
      d="M27.2051 10.25H30.5131L23.2861 18.51L31.7881 29.75H25.1301L19.9161 22.933L13.9501 29.75H10.6401L18.3701 20.915L10.2151 10.25H17.0401L21.7531 16.481L27.2031 10.25H27.2051ZM26.0441 27.77H27.8771L16.0451 12.126H14.0781L26.0441 27.77Z"
      fill="white"
    />
  </svg>
);

Twitter.displayName = 'Twitter';
export default Twitter;
