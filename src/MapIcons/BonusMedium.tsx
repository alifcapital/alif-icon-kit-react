import React from 'react';

import { IIconProps } from '../types';

const BonusMedium: React.FC<IIconProps> = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M21 10C21 15.9567 14.4828 21.1893 12.5401 22.6167C12.2148 22.8558 11.7852 22.8558 11.4599 22.6167C9.51722 21.1893 3 15.9567 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
      fill="#00AF66"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.89462 6.94995C9.75673 6.94995 9.62306 6.99744 9.51608 7.08444L7.89449 8.40306C7.75477 8.51668 7.67347 8.68704 7.67303 8.86713L7.66992 10.1514C7.66956 10.3022 7.72604 10.4477 7.82811 10.5588L11.714 14.7879C11.8306 14.9149 11.9963 14.9855 12.1686 14.9818C12.341 14.9781 12.5035 14.9005 12.6146 14.7686L16.1789 10.5395C16.2698 10.4317 16.3198 10.2953 16.3202 10.1543L16.3233 8.87003C16.3236 8.7172 16.2657 8.56999 16.1612 8.45844L14.9263 7.13981C14.8128 7.01869 14.6543 6.94995 14.4883 6.94995H9.89462ZM8.87234 9.15457L10.1078 8.14995H14.2282L15.1227 9.10505L15.1221 9.3667H8.87183L8.87234 9.15457ZM9.46503 10.5667L12.1363 13.474L14.5867 10.5667H9.46503Z"
      fill="white"
    />
  </svg>
);

BonusMedium.displayName = 'BonusMedium';
export default BonusMedium;
