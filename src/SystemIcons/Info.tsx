import React from 'react';

import { IIconProps } from '../types';

const Info: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M12.0615 3.91943C7.09096 3.91943 3.06152 7.94887 3.06152 12.9194C3.06152 17.89 7.09096 21.9194 12.0615 21.9194C17.0321 21.9194 21.0615 17.89 21.0615 12.9194C21.0615 7.94887 17.0321 3.91943 12.0615 3.91943ZM1.06152 12.9194C1.06152 6.8443 5.98639 1.91943 12.0615 1.91943C18.1367 1.91943 23.0615 6.8443 23.0615 12.9194C23.0615 18.9946 18.1367 23.9194 12.0615 23.9194C5.98639 23.9194 1.06152 18.9946 1.06152 12.9194ZM13.0615 11.9194V12.9194V17.9194V18.9194H11.0615V17.9194V12.9194V11.9194H13.0615ZM12.0615 10.1694C12.7519 10.1694 13.3115 9.60979 13.3115 8.91943C13.3115 8.22908 12.7519 7.66943 12.0615 7.66943C11.3712 7.66943 10.8115 8.22908 10.8115 8.91943C10.8115 9.60979 11.3712 10.1694 12.0615 10.1694Z"
      fill={color}
    />
  </svg>
);

Info.displayName = 'Info';
export default Info;
