import React from 'react';

import { IIconProps } from '../types';

const CardSalom: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.1 18.8462H4.02306C3.21922 18.8462 2.56152 18.1538 2.56152 17.3077V6.53846C2.56152 5.69231 3.21922 5 4.02306 5H20.1C20.9038 5 21.5615 5.69231 21.5615 6.53846V17.3077C21.5615 18.1538 20.9038 18.8462 20.1 18.8462Z"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path d="M13.5986 11.9229H18.7525" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
    <path
      d="M11.8911 9.81846C11.3649 9.29231 10.6634 9 9.84493 9C8.20802 9 6.92188 10.2861 6.92188 11.9231C6.92188 13.56 8.20802 14.8461 9.84493 14.8461C10.6634 14.8461 11.3649 14.4953 11.8911 13.9692"
      stroke={color}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
  </svg>
);

CardSalom.displayName = 'CardSalom';
export default CardSalom;
