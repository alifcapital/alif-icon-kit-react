import React from 'react';

import { IIconProps } from '../types';

const DepositReplenishment: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="14.6382" width="78" height="28" rx="3.25" fill="#ECF0F3" />
    <rect x="16" y="21.6382" width="64" height="14" rx="3.25" fill="#48587D" />
    <path
      d="M28.4072 81.3623C26.6123 81.3623 25.1572 79.9072 25.1572 78.1123L25.1572 21.637H70.8429V78.1123C70.8429 79.9072 69.3879 81.3623 67.5929 81.3623H28.4072Z"
      fill="#00AF66"
    />
    <circle
      cx="3.25"
      cy="3.25"
      r="3.25"
      transform="matrix(0 1 1 0 44.4062 62.0483)"
      fill="#ECF0F3"
    />
    <circle
      cx="47.6562"
      cy="44.1733"
      r="13"
      transform="rotate(-90 47.6562 44.1733)"
      fill="#ECF0F3"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M44.7272 21.6384H50.5853C50.791 22.0649 50.9062 22.5431 50.9062 23.0483C50.9062 24.8433 49.4512 26.2983 47.6562 26.2983C45.8613 26.2983 44.4062 24.8433 44.4062 23.0483C44.4062 22.5431 44.5215 22.0649 44.7272 21.6384Z"
      fill="#ECF0F3"
    />
  </svg>
);

DepositReplenishment.displayName = 'DepositReplenishment';
export default DepositReplenishment;
