import React from 'react';

import { IIconProps } from '../types';

const LinkedIn: React.FC<IIconProps> = ({ width = '40', height = '40' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 41 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="Frame 233">
      <rect x="0.16272" width="40" height="40" rx="8" fill="#111111" />
      <path
        id="Vector"
        d="M31.4307 31.25H26.7639V23.9417C26.7639 22.1989 26.7328 19.9555 24.3368 19.9555C21.9061 19.9555 21.5342 21.8542 21.5342 23.8148V31.2494H16.8676V16.2206H21.3475V18.2744H21.4104C22.3225 16.7148 24.0249 15.7798 25.8306 15.8469C30.5605 15.8469 31.4326 18.9579 31.4326 23.0054L31.4307 31.25ZM11.6019 14.1662C10.1163 14.1662 8.89319 12.9438 8.89319 11.4582C8.89319 9.97251 10.1157 8.75 11.6014 8.75C13.0869 8.75 14.3093 9.97223 14.3096 11.4576C14.3096 12.943 13.0873 14.1661 11.6019 14.1662ZM13.9353 31.25H9.26369V16.2206H13.9353V31.25Z"
        fill="white"
      />
    </g>
  </svg>
);

LinkedIn.displayName = 'LinkedIn';
export default LinkedIn;
