import React from 'react';

import { IIconProps } from '../types';

const Clock: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M3.06152 12.9194C3.06152 7.94887 7.09096 3.91943 12.0615 3.91943C17.0321 3.91943 21.0615 7.94887 21.0615 12.9194C21.0615 17.89 17.0321 21.9194 12.0615 21.9194C7.09096 21.9194 3.06152 17.89 3.06152 12.9194ZM12.0615 1.91943C5.98639 1.91943 1.06152 6.8443 1.06152 12.9194C1.06152 18.9946 5.98639 23.9194 12.0615 23.9194C18.1367 23.9194 23.0615 18.9946 23.0615 12.9194C23.0615 6.8443 18.1367 1.91943 12.0615 1.91943ZM12.5615 6.91943V5.91943H10.5615V6.91943V12.9194C10.5615 13.2982 10.7755 13.6445 11.1143 13.8139L15.1143 15.8139L16.0087 16.2611L16.9032 14.4722L16.0087 14.025L12.5615 12.3014V6.91943Z"
      fill={color}
    />
  </svg>
);

Clock.displayName = 'Clock';
export default Clock;
