import React from 'react';

import { IIconProps } from '../types';

const Refresh: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M12.7438 1.71298L12.0136 1.02979L10.6472 2.49025L11.3774 3.17345L13.229 4.90575C11.2095 4.66062 9.15695 5.0568 7.37736 6.04455C5.45684 7.11053 3.9717 8.80062 3.18342 10.8282C2.39495 12.8562 2.35496 15.0906 3.07065 17.1447C3.78617 19.1983 5.21038 20.9385 7.09213 22.0696C8.97341 23.2004 11.1966 23.6535 13.3797 23.3537C15.563 23.0539 17.5751 22.0191 19.0678 20.4219C20.5609 18.8243 21.4402 16.764 21.5487 14.5951C21.5957 13.6574 21.6059 12.901 21.4461 12.1025C21.2864 11.3039 20.9697 10.5237 20.4559 9.49631L20.0087 8.60188L18.2199 9.49631L18.6671 10.3907C19.1534 11.3633 19.3773 11.9564 19.485 12.4948C19.5927 13.0333 19.5971 13.5777 19.5512 14.4951C19.4666 16.1865 18.7808 17.7999 17.6066 19.0563C16.4319 20.3132 14.8416 21.1342 13.1077 21.3723C11.3736 21.6104 9.61033 21.2497 8.12249 20.3554C6.63511 19.4614 5.51853 18.0917 4.95929 16.4867C4.4002 14.882 4.43129 13.1379 5.0475 11.5529C5.66389 9.96746 6.82907 8.6363 8.34797 7.79324C9.84669 6.96138 11.5945 6.65795 13.2967 6.93502L11.3774 8.73073L10.6472 9.41393L12.0136 10.8744L12.7438 10.1912L16.4942 6.68232C16.6963 6.49324 16.811 6.22885 16.811 5.95209C16.811 5.67533 16.6963 5.41094 16.4942 5.22186L12.7438 1.71298Z"
      fill={color}
    />
  </svg>
);

Refresh.displayName = 'Refresh';
export default Refresh;
