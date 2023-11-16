import React from 'react';

import { IIconProps } from '../types';

const Cancel: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
  >
    <circle cx="9.99988" cy="10.0003" r="8.02917" fill={color} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.6397 7.4263C13.9326 7.1334 13.9326 6.65853 13.6397 6.36564C13.3468 6.07274 12.872 6.07274 12.5791 6.36564L10.0029 8.94176L7.42681 6.36564C7.13392 6.07274 6.65905 6.07274 6.36615 6.36564C6.07326 6.65853 6.07326 7.1334 6.36615 7.4263L8.94228 10.0024L6.36615 12.5785C6.07326 12.8714 6.07326 13.3463 6.36615 13.6392C6.65905 13.9321 7.13392 13.9321 7.42681 13.6392L10.0029 11.0631L12.5791 13.6392C12.872 13.9321 13.3468 13.9321 13.6397 13.6392C13.9326 13.3463 13.9326 12.8714 13.6397 12.5785L11.0636 10.0024L13.6397 7.4263Z"
      fill="white"
    />
  </svg>
);

Cancel.displayName = 'Cancel';
export default Cancel;
