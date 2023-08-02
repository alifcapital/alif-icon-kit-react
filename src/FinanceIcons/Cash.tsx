import React from 'react';

import { IIconProps } from '../types';

const Cash: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M3.5498 17.2612V6.91593C6.40025 6.08131 8.99902 6.68591 11.8166 7.34141L11.9583 7.37438C14.5784 7.98353 17.4105 8.61936 20.4494 7.66279V18.0081C17.5989 18.8427 15.0001 18.2381 12.1826 17.5826L12.0408 17.5497C9.4208 16.9405 6.58868 16.3047 3.5498 17.2612ZM21.0162 5.29203C18.133 6.67756 15.4755 6.13876 12.4113 5.42634L12.118 5.35798C9.18614 4.67383 5.8849 3.90349 2.20512 5.25464C1.81146 5.39919 1.5498 5.774 1.5498 6.19336V18.7307C1.5498 19.0745 1.7264 19.3941 2.01742 19.5772C2.30844 19.7602 2.67307 19.7809 2.98294 19.632C5.86617 18.2465 8.52368 18.7853 11.5879 19.4977L11.8812 19.566C14.813 20.2502 18.1143 21.0205 21.794 19.6694C22.1877 19.5248 22.4494 19.15 22.4494 18.7307V6.19336C22.4494 5.84957 22.2728 5.52989 21.9817 5.34686C21.6907 5.16383 21.3261 5.14312 21.0162 5.29203ZM10.8993 12.4622C10.8993 11.8545 11.392 11.3618 11.9998 11.3618C12.6075 11.3618 13.1002 11.8545 13.1002 12.4622C13.1002 13.07 12.6075 13.5627 11.9998 13.5627C11.392 13.5627 10.8993 13.07 10.8993 12.4622ZM11.9998 9.36177C10.2874 9.36177 8.89932 10.7499 8.89932 12.4622C8.89932 14.1745 10.2874 15.5627 11.9998 15.5627C13.7121 15.5627 15.1002 14.1745 15.1002 12.4622C15.1002 10.7499 13.7121 9.36177 11.9998 9.36177ZM19.3345 16.9403L18.351 17.1212C17.9211 17.2003 16.9669 17.2566 16.6416 17.2566H15.6416V15.2566H16.6416C16.9022 15.2566 17.7237 15.203 17.9893 15.1542L18.9728 14.9733L19.3345 16.9403ZM6.99173 7.28782L7.99057 7.33603L7.89414 9.33371L6.89531 9.28549C6.62564 9.27248 5.8043 9.32888 5.546 9.36361L4.55492 9.49686L4.28842 7.51469L5.2795 7.38144C5.60192 7.33809 6.55505 7.26674 6.99173 7.28782Z"
      fill={color}
    />
  </svg>
);

Cash.displayName = 'Cash';
export default Cash;
