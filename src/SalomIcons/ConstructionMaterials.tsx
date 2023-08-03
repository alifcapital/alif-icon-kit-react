import React from 'react';

import { IIconProps } from '../types';

const ConstructionMaterials: React.FC<IIconProps> = () => (
  <svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M78.1639 29.4719H85V57.1859C70.6875 57.1859 59.6631 57.1859 45.3506 57.1859V65.7817"
      stroke="#ECF0F3"
      strokeWidth="4"
    />
    <rect x="11" y="14" width="68.6075" height="26.158" rx="4.9998" fill="#00AF66" />
    <rect x="40.3037" y="65.563" width="10" height="20" rx="2" fill="#48587D" />
  </svg>
);

ConstructionMaterials.displayName = 'ConstructionMaterials';
export default ConstructionMaterials;
