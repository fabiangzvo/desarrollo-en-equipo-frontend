import React, { useContext } from 'react';

import { ThemeContext } from '@emotion/core';

const IconStar = ({ selected }) => {
  const theme = useContext(ThemeContext);

  const primary = selected ? theme.yellow.medium : theme.white;
  const secondary = selected ? theme.yellow.dark : '#B8BCC6';

  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill={primary}
      stroke={secondary}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.14377 1.34851L10.9091 5.23876C10.9967 5.4351 11.1668 5.57126 11.3644 5.60372L15.315 6.22993C15.4749 6.25289 15.6197 6.34551 15.7174 6.48643C15.9013 6.74847 15.8737 7.12214 15.653 7.34855L12.791 10.3886C12.6463 10.5366 12.5811 10.7567 12.6188 10.9688L13.3086 15.2541C13.3563 15.6104 13.1356 15.9413 12.812 15.9999C12.6774 16.0228 12.5399 15.9991 12.419 15.9326L8.8955 13.9131C8.71889 13.8078 8.50609 13.8078 8.3302 13.9131L4.78354 15.9468C4.4875 16.1099 4.12849 15.9872 3.9678 15.6721C3.90628 15.5447 3.88384 15.3974 3.90556 15.2541L4.59535 10.9688C4.62864 10.7567 4.56422 10.539 4.42308 10.3886L1.5387 7.34776C1.30346 7.09126 1.30274 6.67485 1.53725 6.41676C1.53797 6.41676 1.53797 6.41597 1.5387 6.41518C1.63496 6.31939 1.75439 6.25447 1.88323 6.22993L5.83378 5.60372C6.02994 5.56889 6.20003 5.43272 6.28906 5.23876L8.05443 1.34851C8.12464 1.19018 8.25058 1.06905 8.40331 1.01364C8.55603 0.957429 8.72323 0.970096 8.86799 1.05005C8.9867 1.11497 9.08297 1.21947 9.14377 1.34851Z"
        stroke={theme.grey.secondary.dark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconStar;
