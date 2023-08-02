import React from 'react';

import { IIconProps } from '../types';

const CurrencyLira: React.FC<IIconProps> = ({
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
      d="M11.9998 3.07959C9.51428 3.07959 7.26564 4.08582 5.63582 5.71563C4.6959 6.65556 3.96337 7.8013 3.51164 9.0796H1.41406C1.93235 7.24765 2.91322 5.6098 4.22161 4.30142C6.21117 2.31185 8.96256 1.07959 11.9998 1.07959C15.037 1.07959 17.7884 2.31185 19.778 4.30142C19.8531 4.37652 19.9271 4.45272 20 4.52997V3.07959V2.07959L22 2.07959V3.07959V7.07959C22 7.63187 21.5523 8.07959 21 8.07959H17H16V6.07959H17H18.7081C18.5967 5.95512 18.4819 5.83375 18.3637 5.71563C16.7339 4.08582 14.4853 3.07959 11.9998 3.07959ZM20.4879 15.0796C20.0362 16.3579 19.3037 17.5036 18.3637 18.4436C16.7339 20.0734 14.4853 21.0796 11.9998 21.0796C9.51428 21.0796 7.26564 20.0734 5.63582 18.4436C5.5177 18.3254 5.40286 18.2041 5.29144 18.0796H7H8V16.0796H7H2.99998C2.44769 16.0796 1.99998 16.5273 1.99998 17.0796L1.99998 21.0796L1.99998 22.0796H3.99998V21.0796V19.6297C4.07276 19.7068 4.14665 19.7828 4.22161 19.8578C6.21117 21.8473 8.96256 23.0796 11.9998 23.0796C15.037 23.0796 17.7884 21.8473 19.778 19.8578C21.0863 18.5494 22.0672 16.9115 22.5855 15.0796H20.4879ZM15.8803 10.2117C16.38 10.1454 16.7497 10.3939 16.8692 10.8765C17.012 11.4572 17.0382 12.0595 16.9462 12.65C16.8035 13.5843 16.4127 14.4829 15.7845 15.3206C14.6946 16.7753 13.3123 17.8979 11.6768 18.6569C11.3294 18.8182 10.9682 18.9492 10.5972 19.0482L10.4799 19.0796H10.2117L10.1637 19.0569C10.1341 19.0431 10.104 19.0292 10.074 19.0154C10.0035 18.9833 9.93112 18.9503 9.85898 18.9117C9.56792 18.7557 9.41349 18.4889 9.41349 18.1401V16.3679V16.1019V14.9401V14.2865L9.33599 14.3557L9.3175 14.3721L9.25891 14.4241C9.01896 14.6372 8.77251 14.8559 8.52702 15.0717C8.19205 15.366 7.71649 15.3712 7.3962 15.084C7.31106 15.0091 7.24291 14.9176 7.19615 14.8153C7.14939 14.713 7.12507 14.6022 7.12476 14.4901C7.12391 14.2594 7.22216 14.0427 7.40143 13.88C7.59975 13.6998 7.80288 13.5202 8.0005 13.3463L8.00897 13.3387C8.09084 13.2666 8.17267 13.1943 8.25444 13.1219L8.49215 12.9096C8.79254 12.6435 9.10266 12.3685 9.41123 12.0936C9.41236 11.8413 9.41236 11.5864 9.41236 11.3345L9.13005 11.5863L9.12236 11.5931C8.88309 11.806 8.6359 12.026 8.38967 12.2411C8.125 12.4728 7.80133 12.5216 7.47808 12.3794C7.16569 12.2421 6.98304 11.9414 7.00124 11.5947C7.01268 11.3783 7.1129 11.1806 7.29104 11.0235C7.46793 10.8673 7.64701 10.7083 7.82202 10.5528C7.84602 10.5315 7.86995 10.5103 7.89378 10.4891L7.91764 10.4679L8.16834 10.2451L8.40435 10.0355C8.73466 9.74211 9.07598 9.43923 9.41321 9.14146V7.05998V5.99296C9.41307 5.49105 9.69129 5.26894 9.92462 5.17102C10.2978 5.01446 10.6716 5.0601 10.9771 5.29923C11.1662 5.44749 11.2711 5.66795 11.2724 5.92007C11.2749 6.40299 11.2749 6.89351 11.2749 7.36786V7.3684V7.48914L11.7216 7.09262L11.8046 7.0189L12.7606 6.17013C12.9872 5.96917 13.2915 5.89795 13.5747 5.97955C13.7096 6.01859 13.8319 6.09118 13.9297 6.19025C14.0275 6.28933 14.0975 6.41152 14.1328 6.54493C14.2184 6.85626 14.1265 7.15195 13.8724 7.37766C13.6344 7.58955 13.3919 7.80461 13.1574 8.01207L13.1313 8.03516L12.8112 8.31882L12.4537 8.63596C12.4059 8.67841 12.3578 8.72105 12.3095 8.76383C11.9684 9.06637 11.6191 9.37612 11.2739 9.68098C11.2752 9.93334 11.2752 10.182 11.2752 10.439V10.4396L11.3901 10.3377C11.8674 9.91472 12.3609 9.47726 12.8449 9.04548L12.845 9.04539C12.9171 8.98113 13.136 8.78602 13.4605 8.78602H13.4674C13.8032 8.78906 14.1084 8.99264 14.2275 9.29262C14.3551 9.61432 14.2898 9.93173 14.0498 10.1631C13.8763 10.33 13.694 10.4899 13.5175 10.6444L13.4968 10.6625C13.4357 10.7161 13.3754 10.7689 13.3154 10.8223L12.7619 11.3135L12.7465 11.3274L12.7152 11.3551C12.2425 11.7747 11.7549 12.2074 11.2752 12.6346C11.2741 14.0311 11.2741 15.4445 11.2741 16.8157V16.8191C12.5355 16.1535 13.6161 15.2019 14.4259 14.0438C14.7613 13.5653 14.9847 13.0635 15.0893 12.5518C15.1739 12.1476 15.1664 11.7302 15.0676 11.3292C15.0035 11.0704 15.0454 10.8249 15.1887 10.6191C15.3408 10.4013 15.5993 10.249 15.8803 10.2117Z"
      fill={color}
    />
  </svg>
);

CurrencyLira.displayName = 'CurrencyLira';
export default CurrencyLira;
