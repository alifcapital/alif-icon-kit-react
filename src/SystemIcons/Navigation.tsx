import React from 'react';

import { IIconProps } from '../types';

const Navigation: React.FC<IIconProps> = ({
  width = '25',
  height = '25',
  color = 'currentColor',
}) => (
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
      d="M19.3945 5.58617L5.23381 12.2938L7.70367 12.9113C9.85338 13.4487 11.5319 15.1272 12.0693 17.2769L12.6868 19.7468L19.3945 5.58617ZM20.0566 3.05951C21.2454 2.49638 22.4843 3.7352 21.9211 4.92406L13.7765 22.1181C13.2138 23.3062 11.4719 23.1337 11.1531 21.8584L10.129 17.762C9.77074 16.3289 8.65174 15.2099 7.2186 14.8516L3.12225 13.8275C1.84693 13.5087 1.67446 11.7668 2.86248 11.2041L20.0566 3.05951Z"
      fill={color}
    />
  </svg>
);

Navigation.displayName = 'Navigation';
export default Navigation;
