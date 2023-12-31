import React from 'react';

import { IIconProps } from '../types';

const Facebook: React.FC<IIconProps> = ({ width = '41', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 235" clipPath="url(#clip0_2149_382)">
      <g id="Group 71">
        <path
          id="Vector"
          d="M40.8295 20C40.8295 8.95431 31.8752 0 20.8295 0C9.78378 0 0.829468 8.95431 0.829468 20C0.829468 29.9826 8.14318 38.2567 17.7045 39.7571V25.7813H12.6264V20H17.7045V15.5938C17.7045 10.5813 20.6904 7.81252 25.2588 7.81252C27.447 7.81252 29.7358 8.20314 29.7358 8.20314V13.125H27.2138C24.7293 13.125 23.9545 14.6667 23.9545 16.2484V20H29.5014L28.6147 25.7813H23.9545V39.7571C33.5158 38.2567 40.8295 29.9826 40.8295 20Z"
          fill="#111111"
        />
        <path
          id="Vector_2"
          d="M28.6146 25.7813L29.5014 20H23.9545V16.2483C23.9545 14.6667 24.7293 13.125 27.2138 13.125H29.7357V8.20312C29.7357 8.20312 27.447 7.8125 25.2588 7.8125C20.6903 7.8125 17.7045 10.5812 17.7045 15.5938V20H12.6263V25.7813H17.7045V39.7571C18.7383 39.9191 19.7831 40.0003 20.8295 40C21.8926 40 22.9362 39.9168 23.9545 39.7571V25.7813H28.6146Z"
          fill="white"
        />
      </g>
    </g>
    <defs>
      <clipPath id="clip0_2149_382">
        <rect width={width} height={height} fill="white" transform="translate(0.829468)" />
      </clipPath>
    </defs>
  </svg>
);

Facebook.displayName = 'Facebook';
export default Facebook;
