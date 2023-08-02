import React from 'react';

import { IIconProps } from '../types';

const MapPin: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0639 0.919434C6.94599 0.919434 2.81201 5.10644 2.81201 10.2529C2.81201 14.0192 5.17225 18.5356 9.54111 23.7419C10.718 25.1444 12.8046 25.3214 14.1984 24.1333C14.3385 24.0139 14.4683 23.8829 14.5867 23.7419C18.9555 18.5356 21.3158 14.0192 21.3158 10.2529C21.3158 5.10644 17.1818 0.919434 12.0639 0.919434ZM13.0307 22.7634C12.3993 23.3016 11.4558 23.2234 10.92 22.5848C6.59745 17.4338 4.61201 13.3433 4.61201 10.2529C4.61201 6.08402 7.95656 2.71943 12.0639 2.71943C16.1712 2.71943 19.5158 6.08402 19.5158 10.2529C19.5158 13.3433 17.5303 17.4338 13.2078 22.5849C13.1537 22.6493 13.0945 22.7091 13.0307 22.7634ZM14.3116 9.91953C14.3116 11.1622 13.3043 12.1695 12.0616 12.1695C10.819 12.1695 9.81162 11.1622 9.81162 9.91953C9.81162 8.67689 10.819 7.66953 12.0616 7.66953C13.3043 7.66953 14.3116 8.67689 14.3116 9.91953ZM16.3116 9.91953C16.3116 12.2667 14.4088 14.1695 12.0616 14.1695C9.71441 14.1695 7.81162 12.2667 7.81162 9.91953C7.81162 7.57232 9.71441 5.66953 12.0616 5.66953C14.4088 5.66953 16.3116 7.57232 16.3116 9.91953Z"
      fill={color}
    />
  </svg>
);

MapPin.displayName = 'MapPin';
export default MapPin;
