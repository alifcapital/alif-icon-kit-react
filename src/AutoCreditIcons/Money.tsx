import React from 'react';

import { IIconProps } from '../types';

const Money: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M91.5 61.513C91.5 62.6899 90.489 63.6113 89.3156 63.5211C61.1474 61.3561 32.2965 67.0696 13.1226 63.9915C12.1764 63.8396 11.5 63.0129 11.5 62.0545V24.7143C11.5 23.5411 12.504 22.621 13.675 22.6937C35.2052 24.0314 68.5579 18.8001 89.8731 22.2474C90.8222 22.4009 91.5 23.2283 91.5 24.1897V61.513Z"
      fill="#00AF66"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M84.5 71.5384C84.5 72.7152 83.489 73.6367 82.3156 73.5465C54.1474 71.3815 25.2965 77.0949 6.12257 74.0169C5.17637 73.865 4.5 73.0382 4.5 72.0799V34.7397C4.5 33.5665 5.50399 32.6463 6.67496 32.7191C28.2052 34.0567 61.5579 28.8254 82.8731 32.2727C83.8222 32.4262 84.5 33.2536 84.5 34.215V71.5384Z"
      fill="#ECF0F3"
    />
    <circle
      cx="3.25"
      cy="3.25"
      r="3.25"
      transform="matrix(-1 0 0 1 24.791 49.9165)"
      fill="#48587D"
    />
    <circle cx="43.791" cy="53.1665" r="13" fill="#00AF66" />
    <circle
      cx="3.25"
      cy="3.25"
      r="3.25"
      transform="matrix(-1 0 0 1 69.291 49.9165)"
      fill="#48587D"
    />
  </svg>
);

Money.displayName = 'Money';
export default Money;
