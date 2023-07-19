import React from 'react';

import { IIconProps } from '../types';

const Search: React.FC<IIconProps> = ({ width = '25', height = '25', color = 'currentColor' }) => (
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
      d="M4.06152 11.4194C4.06152 7.82958 6.97167 4.91943 10.5615 4.91943C14.1514 4.91943 17.0615 7.82958 17.0615 11.4194C17.0615 15.0093 14.1514 17.9194 10.5615 17.9194C6.97167 17.9194 4.06152 15.0093 4.06152 11.4194ZM10.5615 2.91943C5.8671 2.91943 2.06152 6.72501 2.06152 11.4194C2.06152 16.1139 5.8671 19.9194 10.5615 19.9194C12.5485 19.9194 14.3763 19.2376 15.8236 18.0952L20.3548 22.6265L21.0619 23.3336L22.4761 21.9194L21.769 21.2122L17.2378 16.681C18.3799 15.2337 19.0615 13.4062 19.0615 11.4194C19.0615 6.72501 15.2559 2.91943 10.5615 2.91943Z"
      fill={color}
    />
  </svg>
);

Search.displayName = 'Search';
export default Search;
