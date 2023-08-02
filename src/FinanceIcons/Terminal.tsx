import React from 'react';

import { IIconProps } from '../types';

const Terminal: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.78078 2.07959C7.86304 2.07959 7.06308 2.70418 6.84049 3.59452L5.55972 8.71762C5.52005 8.87627 5.5 9.03917 5.5 9.2027V10.5796V20.0796H5H4V22.0796H5L19 22.0796H20V20.0796H19H18.5V10.5796V9.2027C18.5 9.03917 18.4799 8.87627 18.4403 8.71762L17.1595 3.59452C16.9369 2.70418 16.137 2.07959 15.2192 2.07959H8.78078ZM16.5 20.0796V11.5796H7.5V20.0796L16.5 20.0796ZM16.5 9.57959V9.2027L15.2192 4.07959L8.78078 4.07959L7.5 9.2027V9.57959H16.5ZM16 15.0796H15H13H12V13.0796H13H15H16V15.0796Z"
      fill={color}
    />
  </svg>
);

Terminal.displayName = 'Terminal';
export default Terminal;
