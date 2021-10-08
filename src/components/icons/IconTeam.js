import React from 'react';

import themes from '@styles/themes';

const theme = themes('white');

const IconTeam = () => {
  return (
    <svg
      width="22"
      height="18"
      viewBox="0 0 22 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.1729 7.93189C17.6378 7.93189 18.8263 6.63298 18.8263 5.03064C18.8263 3.42831 17.6378 2.12939 16.1729 2.12939"
        stroke={theme.grey.secondary.medium}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3926 11.0847C17.8301 11.1177 18.265 11.1856 18.6933 11.291C19.2884 11.4184 20.0041 11.6851 20.2589 12.2691C20.4215 12.6431 20.4215 13.0785 20.2589 13.4534C20.0049 14.0373 19.2884 14.3031 18.6933 14.437"
        stroke={theme.grey.secondary.medium}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.837 7.93189C4.37201 7.93189 3.18359 6.63298 3.18359 5.03064C3.18359 3.42831 4.37201 2.12939 5.837 2.12939"
        stroke={theme.grey.secondary.medium}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.61693 11.0847C4.17944 11.1177 3.74447 11.1856 3.3162 11.291C2.72115 11.4184 2.00542 11.6851 1.75148 12.2691C1.58805 12.6431 1.58805 13.0785 1.75148 13.4534C2.00458 14.0373 2.72115 14.3031 3.3162 14.437"
        stroke={theme.grey.secondary.medium}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0002 11.7096C13.9687 11.7096 16.5048 12.2009 16.5048 14.1672C16.5048 16.1325 13.9855 16.6422 11.0002 16.6422C8.03084 16.6422 5.49561 16.1508 5.49561 14.1846C5.49561 12.2183 8.01492 11.7096 11.0002 11.7096Z"
        stroke={theme.grey.secondary.dark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0007 8.90492C9.0429 8.90492 7.47314 7.188 7.47314 5.04575C7.47314 2.90442 9.0429 1.1875 11.0007 1.1875C12.9585 1.1875 14.5282 2.90442 14.5282 5.04575C14.5282 7.188 12.9585 8.90492 11.0007 8.90492Z"
        stroke={theme.grey.secondary.dark}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default IconTeam;
