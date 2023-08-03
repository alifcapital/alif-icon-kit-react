import React from 'react';

import { IIconProps } from '../types';

const Close: React.FC<IIconProps> = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5C17.799 1.5 22.5 6.20101 22.5 12Z"
      fill="#222222"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.2953 10.1196L16.0024 9.4125L14.5882 7.99829L13.8811 8.7054L12.0007 10.5858L10.1203 8.7054L9.41324 7.99829L7.99902 9.4125L8.70613 10.1196L10.5865 12L8.70613 13.8803L7.99902 14.5874L9.41324 16.0017L10.1203 15.2946L12.0007 13.4142L13.8811 15.2946L14.5882 16.0017L16.0024 14.5874L15.2953 13.8803L13.4149 12L15.2953 10.1196Z"
      fill="white"
    />
  </svg>
);

Close.displayName = 'Close';
export default Close;
