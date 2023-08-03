import React from 'react';

import { IIconProps } from '../types';

const Link: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5443 11.3752C12.7252 10.5565 11.6144 10.0965 10.4563 10.0965C9.29815 10.0965 8.18741 10.5565 7.3683 11.3752L4.2793 14.4632C3.46018 15.2824 3 16.3933 3 17.5517C3 18.7102 3.46018 19.8211 4.2793 20.6402C5.09842 21.4594 6.20939 21.9195 7.3678 21.9195C8.52621 21.9195 9.63718 21.4594 10.4563 20.6402L12.0003 19.0962M10.4563 14.4632C11.2754 15.282 12.3861 15.742 13.5443 15.742C14.7024 15.742 15.8132 15.282 16.6323 14.4632L19.7213 11.3752C20.5404 10.5561 21.0006 9.44516 21.0006 8.28674C21.0006 7.12833 20.5404 6.01736 19.7213 5.19824C18.9022 4.37912 17.7912 3.91895 16.6328 3.91895C15.4744 3.91895 14.3634 4.37912 13.5443 5.19824L12.0003 6.74224"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

Link.displayName = 'Link';
export default Link;