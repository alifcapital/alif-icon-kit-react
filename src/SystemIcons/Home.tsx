import React from 'react';

import { IIconProps } from '../types';

const Home: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M4.12876 11.0149C3.44579 11.6887 3.06152 12.6066 3.06152 13.5643V20.9464C3.06152 21.4697 3.27224 21.9715 3.64731 22.3415C4.02238 22.7116 4.53109 22.9194 5.06152 22.9194H8.36152C8.91381 22.9194 9.36152 22.4717 9.36152 21.9194V16.6416C9.36152 15.651 10.1674 14.8479 11.1615 14.8479H12.9615C13.9556 14.8479 14.7615 15.651 14.7615 16.6416V21.9194C14.7615 22.4717 15.2092 22.9194 15.7615 22.9194H19.0615C19.592 22.9194 20.1007 22.7116 20.4757 22.3415C20.8508 21.9715 21.0615 21.4697 21.0615 20.9464V13.5643C21.0615 12.6066 20.6773 11.6887 19.9943 11.0149L13.3279 4.43843C12.6265 3.74643 11.4966 3.74644 10.7951 4.43843L4.12876 11.0149Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

Home.displayName = 'Home';
export default Home;
