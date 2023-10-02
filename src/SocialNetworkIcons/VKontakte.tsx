import React from 'react';

import { IIconProps } from '../types';

const VKontakte: React.FC<IIconProps> = ({ width = '41', height = '40' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 41 40"
    fill="none"
  >
    <rect x="0.496094" width={width} height={height} rx="8" fill="#111111" />
    <path
      d="M21.6125 27.7998C13.071 27.7998 8.19909 21.9441 7.99609 12.2002H12.2747C12.4152 19.352 15.5694 22.3813 18.0678 23.0059V12.2002H22.0967V18.3682C24.5639 18.1028 27.1558 15.292 28.0302 12.2002H32.059C31.3876 16.0103 28.5768 18.8211 26.5781 19.9766C28.5768 20.9135 31.7781 23.3651 32.9961 27.7998H28.5612C27.6087 24.8329 25.2354 22.5375 22.0967 22.2252V27.7998H21.6125Z"
      fill="white"
    />
  </svg>
);

VKontakte.displayName = 'VKontakte';
export default VKontakte;
